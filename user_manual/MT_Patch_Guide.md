# MT Manager Modification Guidelines

PawGram is strictly modified by hand using MT Manager to ensure peak stability and prevent automated patching errors. For contributors looking to verify our work or suggest structural changes, please adhere to the following workflow.

## 1. String & Package Replacements
When verifying the clone architecture (`com.pawgram.android`), ensure you are executing global XML string replacements within the `resources.arsc` and `AndroidManifest.xml`. Do not leave residual `com.instagram.android` paths in provider authorities, as this will conflict with the official installation.

## 2. Resource Swapping
*   **Fonts:** The iOS Emojis are injected by replacing the exact byte footprint of `IGBetaUIv9_Regular.ttf` inside the `/assets/fonts/` directory.
*   **Iconography:** We strictly use Material Symbols. When modifying XML drawables, strip out complex SVGs and replace them with standard Material Symbols pathways to keep the APK lightweight.

## 3. Bytecode Injection
If proposing new feature unlocks (like bypassing outdated popups or disabling ads), provide the Smali class paths and the exact register modifications required. All logic should be mocked up as Kotlin dummy files in `dev/patches/` for public review before implementation.