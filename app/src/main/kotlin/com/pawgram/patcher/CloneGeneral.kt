package com.pawgram.patcher

import java.io.File
import javax.xml.parsers.DocumentBuilderFactory
import javax.xml.transform.OutputKeys
import javax.xml.transform.TransformerFactory
import javax.xml.transform.dom.DOMSource
import javax.xml.transform.stream.StreamResult
import org.w3c.dom.Document
import org.w3c.dom.Element

object CloneGeneralLogic {

    private const val NEW_PACKAGE_NAME = "paw.instagram.android"
    private const val NEW_APP_NAME = "PawGram"

    fun applyPatch(
        decompiledApkDir: File,
        customLauncherBackground: File,
        customLauncherForeground: File,
        blacklistedPermissions: List<String>
    ) {
        val resDir = File(decompiledApkDir, "res")
        val manifestFile = File(decompiledApkDir, "AndroidManifest.xml")

        if (!manifestFile.exists()) {
            throw Exception("AndroidManifest.xml not found in the decompiled APK.")
        }

        // Initialize XML parser for the manifest
        val docFactory = DocumentBuilderFactory.newInstance()
        val manifestDoc = docFactory.newDocumentBuilder().parse(manifestFile)
        val manifestTag = manifestDoc.documentElement

        // ==========================================
        // 1. Replace App Icons
        // ==========================================
        resDir.listFiles { file -> file.isDirectory && file.name.startsWith("mipmap") }?.forEach { mipmapDir ->
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

        // ==========================================
        // 2. Change Application Package in Manifest
        // ==========================================
        manifestTag.setAttribute("package", NEW_PACKAGE_NAME)
        println("Package attribute changed to $NEW_PACKAGE_NAME")

        // ==========================================
        // 3. Replace App Name
        // ==========================================
        val appTags = manifestDoc.getElementsByTagName("application")
        if (appTags.length > 0) {
            val appTag = appTags.item(0) as Element
            val appLabelResourceName = appTag.getAttribute("android:label").removePrefix("@string/")
            
            val stringsFile = File(resDir, "values/strings.xml")
            if (stringsFile.exists()) {
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
        }

        // ==========================================
        // 4. Change Providers in Manifest & Smali
        // ==========================================
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

        // Apply provider changes to all Smali files
        var smaliProviderUpdates = 0
        val smaliDirs = decompiledApkDir.listFiles { file -> file.isDirectory && file.name.startsWith("smali") } ?: emptyArray()
        
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

        // ==========================================
        // 5. Update Permissions in Manifest
        // ==========================================
        val permissions = mutableListOf<Element>()
        val usesPerms = manifestDoc.getElementsByTagName("uses-permission")
        val declPerms = manifestDoc.getElementsByTagName("permission")
        
        for (i in 0 until usesPerms.length) permissions.add(usesPerms.item(i) as Element)
        for (i in 0 until declPerms.length) permissions.add(declPerms.item(i) as Element)

        val elementsToRemove = mutableListOf<Element>()

        for (perm in permissions) {
            val name = perm.getAttribute("android:name")
            
            // Mark blacklisted permissions for removal
            if (blacklistedPermissions.any { name.startsWith(it) }) {
                elementsToRemove.add(perm)
            } 
            // Update package name in remaining permissions
            else if (name.contains("com.instagram.android")) {
                perm.setAttribute("android:name", name.replace("com.instagram.android", NEW_PACKAGE_NAME))
            }
        }

        // Remove blacklisted elements from the DOM
        for (el in elementsToRemove) {
            el.parentNode.removeChild(el)
        }
        println("Permissions successfully updated and filtered.")

        // Save the final manipulated AndroidManifest.xml
        saveXmlDocument(manifestDoc, manifestFile)
        println("AndroidManifest.xml changes successfully saved.")
    }

    // ==========================================
    // Utility Function: Save XML Document
    // ==========================================
    private fun saveXmlDocument(doc: Document, file: File) {
        val transformer = TransformerFactory.newInstance().newTransformer()
        transformer.setOutputProperty(OutputKeys.INDENT, "yes")
        // Ensure XML declaration is kept
        transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "no") 
        transformer.transform(DOMSource(doc), StreamResult(file))
    }
}
