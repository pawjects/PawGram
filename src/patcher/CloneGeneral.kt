package com.pawgram.patcher

import org.w3c.dom.Document
import org.w3c.dom.Element
import java.io.File
import javax.xml.parsers.DocumentBuilderFactory
import javax.xml.transform.OutputKeys
import javax.xml.transform.TransformerFactory
import javax.xml.transform.dom.DOMSource
import javax.xml.transform.stream.StreamResult

/**
 * Handles the core logic for cloning the target application package.
 * Modifies the decompiled `AndroidManifest.xml`, replaces launcher icons,
 * rewrites the package name, updates content provider authorities, 
 * and filters out or renames application permissions.
 */
object CloneGeneralLogic {
    private const val NEW_PACKAGE_NAME = "paw.instagram.android"
    private const val NEW_APP_NAME = "PawGram"

    fun applyPatch(
        decompiledApkDir: File,
        customLauncherBackground: File,
        customLauncherForeground: File,
        blacklistedPermissions: List<String>
    ) {
        require(decompiledApkDir.exists() && decompiledApkDir.isDirectory) {
            "Invalid decompiled APK directory."
        }

        val resDir = File(decompiledApkDir, "res")
        val manifestFile = File(decompiledApkDir, "AndroidManifest.xml")
        
        require(manifestFile.exists()) {
            "AndroidManifest.xml not found in the decompiled APK."
        }

        val docFactory = DocumentBuilderFactory.newInstance()
        val manifestDoc = docFactory.newDocumentBuilder().parse(manifestFile)
        val manifestTag = manifestDoc.documentElement

        replaceAppIcons(resDir, customLauncherBackground, customLauncherForeground)
        changeApplicationPackage(manifestTag)
        replaceAppName(manifestDoc, resDir, docFactory)
        val providerDatas = updateManifestProviders(manifestDoc)
        updateSmaliProviders(decompiledApkDir, providerDatas)
        updatePermissions(manifestDoc, blacklistedPermissions)

        saveXmlDocument(manifestDoc, manifestFile)
        println("AndroidManifest.xml changes successfully saved.")
    }

    private fun replaceAppIcons(resDir: File, customLauncherBackground: File, customLauncherForeground: File) {
        val mipmapDirs = resDir.listFiles { file -> file.isDirectory && file.name.startsWith("mipmap") }
        mipmapDirs?.forEach { mipmapDir ->
            val bgFile = File(mipmapDir, "ig_launcher_background.png")
            val fgFile = File(mipmapDir, "ig_launcher_foreground.png")

            if (bgFile.exists() && customLauncherBackground.exists()) {
                customLauncherBackground.copyTo(bgFile, overwrite = true)
            }
            if (fgFile.exists() && customLauncherForeground.exists()) {
                customLauncherForeground.copyTo(fgFile, overwrite = true)
            }
        }
        println("Successfully replaced launcher icons across mipmap directories.")
    }

    private fun changeApplicationPackage(manifestTag: Element) {
        manifestTag.setAttribute("package", NEW_PACKAGE_NAME)
        println("Package attribute changed to $NEW_PACKAGE_NAME")
    }

    private fun replaceAppName(manifestDoc: Document, resDir: File, docFactory: DocumentBuilderFactory) {
        val appTags = manifestDoc.getElementsByTagName("application")
        if (appTags.length == 0) return

        val appTag = appTags.item(0) as Element
        val appLabelResourceName = appTag.getAttribute("android:label").removePrefix("@string/")

        val stringsFile = File(resDir, "values/strings.xml")
        if (!stringsFile.exists()) return

        val stringsDoc = docFactory.newDocumentBuilder().parse(stringsFile)
        val stringsList = stringsDoc.getElementsByTagName("string")

        for (i in 0 until stringsList.length) {
            val strElement = stringsList.item(i) as Element
            if (strElement.getAttribute("name") == appLabelResourceName) {
                strElement.textContent = NEW_APP_NAME
                break
            }
        }
        
        saveXmlDocument(stringsDoc, stringsFile)
        println("App name successfully changed to $NEW_APP_NAME in strings.xml")
    }

    private fun updateManifestProviders(manifestDoc: Document): List<Pair<String, String>> {
        val providerDatas = mutableListOf<Pair<String, String>>()
        val providers = manifestDoc.getElementsByTagName("provider")

        for (i in 0 until providers.length) {
            val provider = providers.item(i) as Element
            val oldAuthority = provider.getAttribute("android:authorities")

            if (oldAuthority.isNotEmpty()) {
                val newAuthority = if (oldAuthority.contains("com.instagram.android")) {
                    oldAuthority.replace("com.instagram.android", NEW_PACKAGE_NAME)
                } else {
                    "patcher_renamed_$oldAuthority"
                }
                provider.setAttribute("android:authorities", newAuthority)
                providerDatas.add(oldAuthority to newAuthority)
            }
        }
        return providerDatas
    }

    private fun updateSmaliProviders(decompiledApkDir: File, providerDatas: List<Pair<String, String>>) {
        var smaliProviderUpdates = 0
        val smaliDirs = decompiledApkDir.listFiles { file -> 
            file.isDirectory && file.name.startsWith("smali") 
        } ?: emptyArray()

        for (dir in smaliDirs) {
            dir.walkTopDown().filter { it.isFile && it.name.endsWith(".smali") }.forEach { smaliFile ->
                var content = smaliFile.readText()
                var modified = false

                for ((oldAuth, newAuth) in providerDatas) {
                    if (content.contains(oldAuth)) {
                        content = content.replace(oldAuth, newAuth)
                        modified = true
                        smaliProviderUpdates++
                    }
                }

                if (modified) {
                    smaliFile.writeText(content)
                }
            }
        }
        println("All providers updated. Modified $smaliProviderUpdates provider strings in smali files.")
    }

    private fun updatePermissions(manifestDoc: Document, blacklistedPermissions: List<String>) {
        val permissions = mutableListOf<Element>()
        val usesPerms = manifestDoc.getElementsByTagName("uses-permission")
        val declPerms = manifestDoc.getElementsByTagName("permission")

        for (i in 0 until usesPerms.length) permissions.add(usesPerms.item(i) as Element)
        for (i in 0 until declPerms.length) permissions.add(declPerms.item(i) as Element)

        val elementsToRemove = mutableListOf<Element>()

        for (perm in permissions) {
            val name = perm.getAttribute("android:name")

            if (blacklistedPermissions.any { name.startsWith(it) }) {
                elementsToRemove.add(perm)
            } else if (name.contains("com.instagram.android")) {
                perm.setAttribute("android:name", name.replace("com.instagram.android", NEW_PACKAGE_NAME))
            }
        }

        for (el in elementsToRemove) {
            el.parentNode.removeChild(el)
        }
        println("Permissions successfully updated and filtered.")
    }

    private fun saveXmlDocument(doc: Document, file: File) {
        val transformer = TransformerFactory.newInstance().newTransformer()
        transformer.setOutputProperty(OutputKeys.INDENT, "yes")
        transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "no")
        transformer.transform(DOMSource(doc), StreamResult(file))
    }
}
