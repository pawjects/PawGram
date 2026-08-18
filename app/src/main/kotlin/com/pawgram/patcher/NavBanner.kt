package com.pawgram.patcher

import java.io.File

object CustomNavBannerLogic {

    fun applyPatch(decompiledApkDir: File, customNavLogoFile: File) {
        // Step 1: Validate that the custom nav banner file exists locally
        if (!customNavLogoFile.exists()) {
            throw Exception("Custom PawGram nav banner file does not exist.")
        }
        
        // Step 2: Access the decompiled resources directory
        val resDir = File(decompiledApkDir, "res")
        if (!resDir.exists()) {
            throw Exception("Resource directory 'res' not found in the decompiled APK.")
        }

        // Step 3: Find all instances of the nav logo across all density folders
        val targetLogoFiles = resDir.walkTopDown().filter { it.isFile && it.name == "nav_logo.png" }.toList()
        
        if (targetLogoFiles.isEmpty()) {
            throw Exception("Target image nav_logo.png not found in the res folder.")
        }

        // Step 4: Loop through and overwrite every instance found
        for (targetLogo in targetLogoFiles) {
            customNavLogoFile.copyTo(targetLogo, overwrite = true)
            println("Successfully replaced ${targetLogo.absolutePath} with the custom PawGram nav banner.")
        }
    }
}
