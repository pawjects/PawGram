package com.pawgram.patcher

import java.io.File

/**
 * Replaces instances of the original navigation banner logo with a custom 
 * PawGram branding logo across all density folders inside the decompiled resources.
 */
object CustomNavBannerLogic {
    private const val TARGET_LOGO_NAME = "nav_logo.png"

    fun applyPatch(decompiledApkDir: File, customNavLogoFile: File) {
        require(customNavLogoFile.exists() && customNavLogoFile.isFile) {
            "Custom PawGram nav banner file does not exist."
        }
        
        val resDir = File(decompiledApkDir, "res")
        require(resDir.exists() && resDir.isDirectory) {
            "Resource directory 'res' not found in the decompiled APK."
        }

        val targetLogoFiles = resDir.walkTopDown().filter { 
            it.isFile && it.name == TARGET_LOGO_NAME 
        }.toList()
        
        require(targetLogoFiles.isNotEmpty()) {
            "Target image \$TARGET_LOGO_NAME not found in the res folder."
        }

        for (targetLogo in targetLogoFiles) {
            customNavLogoFile.copyTo(targetLogo, overwrite = true)
            println("Successfully replaced \${targetLogo.absolutePath} with the custom PawGram nav banner.")
        }
    }
}
