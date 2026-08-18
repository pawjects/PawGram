package com.pawgram.patcher

import java.io.File

object PackageStringReplacerLogic {

    private const val NEW_PACKAGE_NAME = "paw.instagram.android"

    fun applyPatch(decompiledApkDir: File) {
        // Step 1: Validate the decompiled directory structure
        if (!decompiledApkDir.exists() || !decompiledApkDir.isDirectory) {
            throw Exception("Invalid decompiled APK directory structure.")
        }

        var changedLineCount = 0
        var modifiedFilesCount = 0

        // Step 2: Locate all smali directories (e.g., smali, smali_classes2, etc.)
        val smaliDirs = decompiledApkDir.listFiles { file ->
            file.isDirectory && file.name.startsWith("smali")
        } ?: emptyArray()

        // Step 3: Iterate through all .smali files in the located directories
        for (dir in smaliDirs) {
            dir.walkTopDown().forEach { file ->
                if (file.isFile && file.name.endsWith(".smali")) {
                    val lines = file.readLines().toMutableList()
                    var fileModified = false

                    // Step 4: Search for the target package string and replace it
                    lines.forEachIndexed { index, line ->
                        if (line.contains("\"com.instagram.android\"")) {
                            lines[index] = line.replace("\"com.instagram.android\"", "\"$NEW_PACKAGE_NAME\"")
                            changedLineCount++
                            fileModified = true
                        }
                    }

                    // Step 5: Save the file only if modifications were made
                    if (fileModified) {
                        file.writeText(lines.joinToString("\n"))
                        modifiedFilesCount++
                    }
                }
            }
        }

        println("Successfully updated package strings.")
        println("Total files modified: $modifiedFilesCount")
        println("Total constraints updated: $changedLineCount")
    }
}
