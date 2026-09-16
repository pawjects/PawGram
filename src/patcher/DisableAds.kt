package com.pawgram.patcher

import java.io.File

/**
 * Injects Smali bytecode to disable ads.
 * Locates the ad pod signature and method declaration, and injects a 
 * constant return value (`const/4 v0, 0x1; return v0`) to force the 
 * ad validation logic to bypass rendering.
 */
object DisableAdsLogic {
    private const val AD_SIGNATURE = "Is ad pod"
    private const val METHOD_DECLARATION = ".method"
    
    fun applyPatch(smaliFile: File) {
        val lines = smaliFile.readLines().toMutableList()
        
        val targetLineIndex = lines.indexOfFirst { it.contains(AD_SIGNATURE) }
        require(targetLineIndex != -1) {
            "Ad signature string not found in file."
        }
        
        var methodStartLine = -1
        for (j in targetLineIndex downTo 0) {
            if (lines[j].contains(METHOD_DECLARATION)) {
                methodStartLine = j
                break
            }
        }
        
        require(methodStartLine != -1) {
            "Could not find the start of the ad method declaration."
        }
        
        // Inject Smali bytecode right after the method registers declaration
        lines.add(methodStartLine + 2, "    const/4 v0, 0x1")
        lines.add(methodStartLine + 3, "    return v0")
        
        smaliFile.writeText(lines.joinToString("\n"))
        println("Successfully disabled ads in: \${smaliFile.name}")
    }
}
