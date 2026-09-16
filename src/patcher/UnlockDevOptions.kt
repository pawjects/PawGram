package com.pawgram.patcher

import java.io.File

/**
 * Locates and patches the obfuscated session check logic to force-unlock 
 * internal developer options within the app. It dynamically extracts the 
 * obfuscated target class from the BaseFragmentActivity entry point.
 */
object UnlockDeveloperOptionsLogic {
    private const val ENTRY_POINT_PATH = "smali/com/pawgram/base/activity/BaseFragmentActivity.smali"
    private const val SESSION_CHECK_SIGNATURE = "Lcom/pawgram/common/session/UserSession;"

    fun applyPatch(decompiledApkDir: File) {
        val entryPointFile = File(decompiledApkDir, ENTRY_POINT_PATH)
        require(entryPointFile.exists()) {
            "Entry point file BaseFragmentActivity.smali not found."
        }
        
        val entryLines = entryPointFile.readLines()
        val obfuscatedClassName = extractObfuscatedClassName(entryLines)
        
        requireNotNull(obfuscatedClassName) {
            "Could not locate the obfuscated session check class definition."
        }
        
        val targetSmaliFile = File(decompiledApkDir, "smali/X/\$obfuscatedClassName.smali")
        require(targetSmaliFile.exists()) {
            "Target class file X/\$obfuscatedClassName.smali does not exist."
        }
        
        injectDeveloperUnlockLogic(targetSmaliFile, obfuscatedClassName)
    }

    private fun extractObfuscatedClassName(lines: List<String>): String? {
        for (line in lines) {
            val trimmed = line.trim()
            if (trimmed.contains("invoke-static") && 
                trimmed.contains(SESSION_CHECK_SIGNATURE) && 
                trimmed.contains(")Z")) {
                
                // Extract the obfuscated class name (e.g., from "LX/A2b;->A00" extract "A2b")
                val parts = trimmed.split("LX/")
                if (parts.size > 1) {
                    return parts[1].substringBefore(";")
                }
            }
        }
        return null
    }

    private fun injectDeveloperUnlockLogic(targetSmaliFile: File, className: String) {
        val targetLines = targetSmaliFile.readLines().toMutableList()
        
        val moveResultLineIndex = targetLines.indexOfFirst { 
            it.contains("move-result") && it.contains("v0") 
        }
        
        require(moveResultLineIndex != -1) {
            "Could not locate move-result instruction inside the target method."
        }
        
        // Inject an instruction to overwrite register v0 to true (0x1)
        targetLines.add(moveResultLineIndex + 1, "    const v0, 0x1")
        
        targetSmaliFile.writeText(targetLines.joinToString("\n"))
        println("Successfully unlocked developer options in target class: \$className")
    }
}
