package com.pawgram.patcher

import java.io.File

/**
 * Overwrites the original custom UI font with an iOS-styled emoji TTF font
 * within the decompiled resource directory, forcing the application to 
 * render iOS emojis natively.
 */
object IosEmojisPatchLogic {
    private const val TARGET_FONT_FILE_NAME = "IGUIBetav9_Regular.ttf"

    fun applyPatch(decompiledApkDir: File, customEmojiFontFile: File) {
        require(customEmojiFontFile.exists() && customEmojiFontFile.isFile) {
            "Custom iOS Emojis TTF file does not exist."
        }
        
        val resDir = File(decompiledApkDir, "res")
        require(resDir.exists() && resDir.isDirectory) {
            "Resource directory 'res' not found in the decompiled APK."
        }

        val targetFontFile = resDir.walkTopDown().find { 
            it.isFile && it.name == TARGET_FONT_FILE_NAME 
        }
        
        requireNotNull(targetFontFile) {
            "Target font file \$TARGET_FONT_FILE_NAME not found inside the res folder."
        }

        customEmojiFontFile.copyTo(targetFontFile, overwrite = true)
        println("Successfully replaced \${targetFontFile.name} with the custom iOS Emojis font.")
    }
}
