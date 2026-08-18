package com.pawgram.patcher

import java.io.File

object DisableAdsLogic {

    fun applyPatch(smaliFile: File) {
        // Read file contents into a mutable list of strings
        val lines = smaliFile.readLines().toMutableList()
        
        // Step 1: Locate the specific signature string that identifies the ad logic
        val targetLineIndex = lines.indexOfFirst { it.contains("Is ad pod") }
        
        if (targetLineIndex == -1) {
            throw Exception("Ad signature string not found in file.")
        }
        
        // Step 2: Read backward from the signature to find the method declaration
        var methodStartLine = -1
        for (j in targetLineIndex downTo 0) {
            if (lines[j].contains(".method")) {
                methodStartLine = j
                break
            }
        }
        
        if (methodStartLine == -1) {
            throw Exception("Could not find the start of the ad method declaration.")
        }
        
        // Step 3: Inject Smali bytecode right after the method registers declaration
        lines.add(methodStartLine + 2, "    const/4 v0, 0x1")
        lines.add(methodStartLine + 3, "    return v0")
        
        // Write the modified content back to the file
        smaliFile.writeText(lines.joinToString("\n"))
        println("Successfully disabled ads in: ${smaliFile.name}")
    }
}
