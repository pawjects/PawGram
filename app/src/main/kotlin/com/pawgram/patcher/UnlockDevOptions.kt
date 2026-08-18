package com.pawgram.patcher

import java.io.File

object UnlockDeveloperOptionsLogic {

    fun applyPatch(decompiledApkDir: File) {
        // Step 1: Locate the known entry point activity file
        val entryPointFile = File(decompiledApkDir, "smali/com/pawgram/base/activity/BaseFragmentActivity.smali")
        if (!entryPointFile.exists()) {
            throw Exception("Entry point file BaseFragmentActivity.smali not found.")
        }
        
        val entryLines = entryPointFile.readLines()
        var obfuscatedClassName: String? = null
        
        // Step 2: Scan for the static method invoking the session check
        for (line in entryLines) {
            val trimmed = line.trim()
            if (trimmed.contains("invoke-static") && 
                trimmed.contains("Lcom/pawgram/common/session/UserSession;") && 
                trimmed.contains(")Z")) {
                
                // Extract the obfuscated class name (e.g., from "LX/A2b;->A00" extract "A2b")
                val parts = trimmed.split("LX/")
                if (parts.size > 1) {
                    obfuscatedClassName = parts[1].substringBefore(";")
                    break
                }
            }
        }
        
        if (obfuscatedClassName == null) {
            throw Exception("Could not locate the obfuscated session check class definition.")
        }
        
        // Step 3: Open the corresponding target obfuscated Smali class file
        val targetSmaliFile = File(decompiledApkDir, "smali/X/$obfuscatedClassName.smali")
        if (!targetSmaliFile.exists()) {
            throw Exception("Target class file X/$obfuscatedClassName.smali does not exist.")
        }
        
        val targetLines = targetSmaliFile.readLines().toMutableList()
        
        // Step 4: Find the line capturing the boolean return value
        val moveResultLineIndex = targetLines.indexOfFirst { 
            it.contains("move-result") && it.contains("v0") 
        }
        
        if (moveResultLineIndex == -1) {
            throw Exception("Could not locate move-result instruction inside the target method.")
        }
        
        // Step 5: Inject an instruction to overwrite register v0 to true (0x1)
        targetLines.add(moveResultLineIndex + 1, "    const v0, 0x1")
        
        // Write the finalized edits back to the file
        targetSmaliFile.writeText(targetLines.joinToString("\n"))
        println("Successfully unlocked developer options in target class: $obfuscatedClassName")
    }
}
