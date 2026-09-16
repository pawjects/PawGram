package com.pawgram.patcher

import java.io.File

/**
 * Scans through decompiled Smali directories to perform a global string replacement 
 * of the original package name with the new clone package name. This ensures all 
 * hardcoded package constraints inside the bytecode are correctly mapped.
 */
object PackageStringReplacerLogic {
    private const val NEW_PACKAGE_NAME = "paw.instagram.android"
    private const val TARGET_STRING = "\"com.instagram.android\""
    private const val REPLACEMENT_STRING = "\"\$NEW_PACKAGE_NAME\""

    fun applyPatch(decompiledApkDir: File) {
        require(decompiledApkDir.exists() && decompiledApkDir.isDirectory) {
            "Invalid decompiled APK directory structure."
        }

        var changedLineCount = 0
        var modifiedFilesCount = 0

        val smaliDirs = decompiledApkDir.listFiles { file ->
            file.isDirectory && file.name.startsWith("smali")
        } ?: emptyArray()

        for (dir in smaliDirs) {
            dir.walkTopDown()
                .filter { it.isFile && it.name.endsWith(".smali") }
                .forEach { smaliFile ->
                    val lines = smaliFile.readLines().toMutableList()
                    var fileModified = false

                    for (index in lines.indices) {
                        val line = lines[index]
                        if (line.contains(TARGET_STRING)) {
                            lines[index] = line.replace(TARGET_STRING, REPLACEMENT_STRING)
                            changedLineCount++
                            fileModified = true
                        }
                    }

                    if (fileModified) {
                        smaliFile.writeText(lines.joinToString("\n"))
                        modifiedFilesCount++
                    }
                }
        }

        println("Successfully updated package strings.")
        println("Total files modified: \$modifiedFilesCount")
        println("Total constraints updated: \$changedLineCount")
    }
}
