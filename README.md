<p align="center">
  <img src="https://raw.githubusercontent.com/pawjects/PawGram/refs/heads/main/assets/branding/new_logo.png" alt="PawGram Logo" width="120">
</p>

<h1 align="center"><a href="https://pawgram-meow.vercel.app/">PawGram</a></h1>

<p align="center">
  <a href="https://github.com/pawjects/PawGram/stargazers"><img src="https://img.shields.io/github/stars/pawjects/PawGram?style=flat-square&color=8AB4F8" alt="GitHub stars"></a>
  <a href="https://github.com/pawjects/PawGram/network/members"><img src="https://img.shields.io/github/forks/pawjects/PawGram?style=flat-square&color=8AB4F8" alt="GitHub forks"></a>
  <a href="https://github.com/pawjects/PawGram/issues"><img src="https://img.shields.io/github/issues/pawjects/PawGram?style=flat-square&color=8AB4F8" alt="GitHub issues"></a>
  <a href="https://github.com/pawjects/PawGram/blob/main/LICENSE"><img src="https://img.shields.io/github/license/pawjects/PawGram?style=flat-square&color=8AB4F8" alt="GitHub license"></a>
  <a href="https://github.com/pawjects/PawGram"><img src="https://img.shields.io/github/repo-size/pawjects/PawGram?style=flat-square&color=8AB4F8" alt="Repository size"></a>
  <a href="https://github.com/pawjects/PawGram/commits/main"><img src="https://img.shields.io/github/last-commit/pawjects/PawGram?style=flat-square&color=8AB4F8" alt="Last commit"></a>
</p>

**Logic and Modification Repository for the PawGram Project**

This repository houses the core modification logic, smali injection scripts, and in-app updater UI used to construct **PawGram** — a modified Instagram client designed for both legacy 32-bit and modern 64-bit Android devices. 

> **Note:** This repository is intended for maintainers and contributors. It contains the **patching logic** and configuration files, not a buildable Android application project or pre-compiled APKs.

---

## 🎯 Repository Architecture

The repository is structured to separate the presentation layer, the application patching scripts, and the dynamic configuration files used by the active app clients:

- **`src/patcher/`**: Contains the core Kotlin logic responsible for modifying the decompiled APK. Includes smali bytecode injection (`DisableAds.kt`), XML manifest manipulation (`CloneGeneral.kt`), string constraint replacements, and resource overwrites.
- **`src/updater-dialog/`**: Contains the in-app programmatic UI code (`PawDevs.kt`) that handles the stock-styled OTA update prompt and community welcome dialog.
- **`updater/`**: Houses the versioned JSON configuration files (`v*.json`) used by the in-app updater to check for new releases dynamically.
- **`docs/`**: Includes technical guides for applying the patches via MT Manager (`mt-patch-guide.md`) and configuration guides (`config-apply-guide.md`).
- **`assets/`**: Contains the custom fonts, branding vectors, and replacement launcher icons injected during the patch process.
- **`website/`**: The static HTML, CSS, and JS presentation site for the project.

---

## ✨ Patch Features Explained

The logic contained in this repository performs several major modifications to the base APK:

- **Ads Disablement**: Injects static boolean returns into the ad verification pods, forcing them to bypass rendering.
- **Clone App Generation**: Rewrites all provider authorities, `AndroidManifest.xml` package constraints, and hardcoded smali package strings to allow co-installation alongside the original app.
- **Developer Options Unlocked**: Hooks into the obfuscated user session check to force a `true` return, unlocking internal developer panels.
- **iOS Emojis Injection**: Overwrites the internal Meta UI fonts with iOS-styled emoji TTFs directly in the resource folder.

---

## 📥 Getting Pre-Patched Builds

Official PawGram builds (the resulting APKs after this logic is applied) are distributed exclusively through our Telegram Community.

👉 **[Join the Official PawGram Telegram](https://t.me/pawgramapp)**

---

## 🛠 Contributing & Building

If you are a maintainer looking to build or contribute to the patch logic, review the guides in the `docs/` folder:

- See `docs/mt-patch-guide.md` for instructions on applying these modifications manually via MT Manager.
- See `docs/config-apply-guide.md` for injecting advanced MetaConfig flags.

---

## ⚖️ Disclaimer

PawGram is an independent, community-driven Android project. It is strictly not affiliated with, endorsed by, sponsored by, or connected to Instagram or Meta Platforms, Inc. "Instagram" is a registered trademark of Meta Platforms, Inc. This repository only hosts educational patching logic.

---

<p align="center">
  <i>Crafted and maintained by the <b>PAWJECTS team</b>.</i>
</p>
