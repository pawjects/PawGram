package com.pawgram.patcher.patches

import com.pawgram.patcher.api.Patch
import com.pawgram.patcher.api.models.ClassDef
import com.pawgram.patcher.api.models.MethodDef
import com.pawgram.patcher.api.utils.Logger

/**
 * ============================================================================
 * PATCH: Unlock Plus Benefits
 * ============================================================================
 * 
 * TRANSPARENCY & TRUST STATEMENT FOR PAWGRAM USERS:
 * We believe in 100% transparent and lightweight modifications. This patch 
 * does NOT inject any external tracking, malicious payloads, or bloated 
 * third-party classes. 
 * 
 * HOW IT WORKS:
 * 1. Scans the app's DEX files for the class handling premium benefit checks.
 *    (Identified safely by the unique string "SUBSBenefitDataProvider").
 * 2. Locates the specific method responsible for verifying these benefits.
 * 3. Injects two lines of standard Android bytecode (Smali) at the very top 
 *    of this method to hardcode the return value to `true` (1).
 * 
 * By modifying the original code inline, PawGram leaves a minimal footprint, 
 * ensuring the app remains secure, ad-free, and highly performant.
 * ============================================================================
 */
class UnlockPlusBenefitsPatch : Patch() {

    override val name = "Unlock Plus Benefits"
    override val description = "Unlocks premium subscription features natively by bypassing server checks."

    override fun execute(classes: MutableList<ClassDef>) {
        Logger.info("[$name] Hunting for the benefit verification class...")

        // STEP 1: Find the target class safely despite obfuscation.
        // We search for the unique logger string rather than relying on a hardcoded 
        // class name (like LX/6hu), which changes every single app update.
        val targetClass = classes.find { dexClass ->
            dexClass.hasConstString("SUBSBenefitDataProvider")
        }

        if (targetClass == null) {
            Logger.error("[$name] Target class not found. The app might have updated its obfuscation.")
            return
        }
        
        Logger.success("[$name] Found target class: ${targetClass.className}")

        // STEP 2: Find the specific method handling the boolean check.
        // We look for a method that takes a single String parameter (the benefit name) 
        // and returns a Boolean (Z in bytecode). We also check for a known string inside 
        // to guarantee it's the exact method we want.
        val targetMethod = targetClass.methods.find { method ->
            method.parameterTypes.size == 1 &&
            method.parameterTypes[0] == "Ljava/lang/String;" &&
            method.returnType == "Z" &&
            method.hasConstString("network_sync_failed")
        }

        if (targetMethod == null) {
            Logger.error("[$name] Benefit verification method not found in ${targetClass.className}.")
            return
        }

        Logger.success("[$name] Found target method: ${targetMethod.methodName}")

        // STEP 3: Inject the hardcoded bypass.
        // We inject standard Smali to force the method to return true immediately,
        // short-circuiting the massive switch statement and skipping network verification.
        val bypassSmali = """
            # --- PAWGRAM INJECTION START ---
            # Force register v0 to 1 (true) and return immediately
            const/4 v0, 0x1
            return v0
            # --- PAWGRAM INJECTION END ---
        """.trimIndent()

        try {
            // injectAtTop() safely places our bytecode immediately after the .registers directive
            targetMethod.injectAtTop(bypassSmali)
            Logger.success("[$name] Successfully patched!")
        } catch (e: Exception) {
            Logger.error("[$name] Injection failed: ${e.message}")
        }
    }
}
