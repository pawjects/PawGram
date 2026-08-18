package com.pawgram.patcher

import java.io.File

object IosEmojisPatchLogic {

    fun applyPatch(decompiledApkDir: File, customEmojiFontFile: File) {
        // Step 1: Validate that the custom font file exists locally
        if (!customEmojiFontFile.exists()) {
            throw Exception("Custom iOS Emojis TTF file does not exist.")
        }
        
        // Step 2: Access the decompiled resources directory
        val resDir = File(decompiledApkDir, "res")
        if (!resDir.exists()) {
            throw Exception("Resource directory 'res' not found in the decompiled APK.")
        }

        // Step 3: Recursively search the directory for the target font file
        val targetFontFile = resDir.walkTopDown().find { it.isFile && it.name == "IGUIBetav9_Regular.ttf" }
        
        if (targetFontFile == null) {
            throw Exception("Target font file IGUIBetav9_Regular.ttf not found inside the res folder.")
        }

        // Step 4: Overwrite the target file with the custom font
        customEmojiFontFile.copyTo(targetFontFile, overwrite = true)
        
        println("Successfully replaced ${targetFontFile.name} with the custom iOS Emojis font.")
    }
}
