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

<p align="center">
  <b>A customized Instagram Alpha client for Android with native iOS emojis, ad-free viewing, and unlocked developer options.</b>
</p>

---

## 📌 Overview

**PawGram** is a modified Instagram client for Android maintained by the **PAWJECTS** team, built upon the official Instagram Alpha release channel. It delivers practical quality-of-life improvements and customization options: feed and story ads are removed, default emoji assets are replaced with native iOS emojis, an isolated package name allows running alongside official Instagram, and Meta's internal Developer Options and MetaConfig flags are unlocked directly from the interface.

---

## 🎯 What Sets PawGram Apart

- **Instagram Alpha Base:** Built on the official Alpha stream, providing early access to underlying features and internal test flags.
- **Independent Clone App:** Uses a separate package name (`paw.instagram.android`), allowing you to install and run PawGram alongside the standard Instagram app without replacing it.
- **Native iOS Emojis:** Replaces the default emoji font resource so iOS-style emojis render across posts, direct messages, comments, and stories without requiring system font changes or root access.
- **Distraction-Free Browsing:** Removes sponsored posts, suggested ad pods, and interrupting story ads.
- **Unlocked Internal Controls:** Access Meta's hidden Developer Options and MetaConfig flags to inspect and toggle internal experiments.
- **No Expiration Prompts:** Bypasses the standard Alpha build expiration prompt so older builds remain usable.

---

## ✨ Features

### 🛡️ Clean Feed & Experience
- **Ad Removal:** Sponsored feed posts and story advertisements are suppressed natively.
- **Bypassed Expiration:** Disables the "Alpha build has expired" blocking dialog.
- **Dual Installation:** Runs independently alongside the official Instagram app with separate application storage and accounts.

### 🎨 Visual & UI Options
- **Native iOS Emojis:** Bundles Apple-style emoji glyphs directly in the application's font assets for consistent rendering in chats, captions, and story text.
- **Refined Branding:** Clean top bar header and minimalist interface accents.

### 🛠️ Developer Options & Flag Overrides
- **Internal Developer Menu:** Long-press the **Home** icon in the bottom navigation bar to open the internal Developer Options menu.
- **MetaConfig Flags:** Search and toggle experimental UI layouts, direct message features, and client-side flags.
- **Config File Import:** Easily import pre-configured flag sets (`mc_overrides.json`) directly into the app's configuration folder.

---

## 📸 Previews

<p align="center">
  <img src="https://raw.githubusercontent.com/pawjects/PawGram/refs/heads/main/assets/branding/preview1.png" alt="PawGram Preview 1" width="45%">
  &nbsp; &nbsp;
  <img src="https://raw.githubusercontent.com/pawjects/PawGram/refs/heads/main/assets/branding/preview2.png" alt="PawGram Preview 2" width="45%">
</p>

---

## 📥 Download & Installation

Official builds are distributed through the PawGram website and community channels:

- 🌐 **Website:** [pawgram-meow.vercel.app/#download](https://pawgram-meow.vercel.app/#download)
- 📢 **Telegram Channel:** [@pawgramapp](https://t.me/pawgramapp)
- 📦 **GitHub Releases:** [Releases](https://github.com/pawjects/PawGram/releases)

### Setup Instructions

1. Download the `.apk` package matching your device's architecture (ARM64 or ARMv7).
2. If prompted, enable **Install unknown apps** for your browser or file manager in Android Settings.
3. Install the APK and sign in with your account credentials.
4. *(Optional)* To run alongside your existing Instagram account, leave the official app installed—PawGram uses an independent package name.

---

## 📱 Supported Architectures

PawGram is built for standard Android hardware running Android 7.0 (Nougat) or newer:

| Architecture | Description | Target Devices |
| :--- | :--- | :--- |
| **ARM64-v8a** | 64-bit build | Most modern Android smartphones and tablets |
| **ARMv7a** | 32-bit build | Legacy and entry-level 32-bit hardware |

---

## ⚙️ Applying Custom MetaConfig Presets

To apply a pre-made configuration file:

1. Obtain your target configuration file and ensure it is named `mc_overrides.json`.
2. Open a file manager with access to app storage and navigate to:
   ```text
   Android/data/paw.instagram.android/files/mobileconfig/
   ```
3. If an existing `mc_overrides.json` file is present, delete or back it up, then paste your new file into this directory.
4. Go to **Android Settings → Apps → PawGram** and tap **Force Stop**.
5. Relaunch PawGram to load the new flag overrides into memory.

For additional details, see the [Config Apply Guide](docs/config-apply-guide.md).

---

## 💬 Community & Support

- **Telegram Community:** [t.me/pawgramapp](https://t.me/pawgramapp) — General discussion, build announcements, and user support.
- **Issue Tracker:** [GitHub Issues](https://github.com/pawjects/PawGram/issues) — Report reproducible bugs, providing your device model, Android version, and PawGram build version.
- **Documentation & Wiki:** Visit the [PawGram Web Wiki](https://pawgram-meow.vercel.app/#wiki) for setup guides and feature overviews.

---

## 🤝 Contributing

Contributions to documentation, configuration presets, and issue triage are welcomed.

- Please check existing issues and discussions before opening new reports.
- For guidelines on submitting patches, Smali review files, and style rules, see [CONTRIBUTING.md](.github/CONTRIBUTING.md).
- Detailed technical documentation is available in the [`docs/`](docs/) directory.

---

## 📑 Credits & Acknowledgements

- **PAWJECTS Team:** Project development, resource modifications, and ongoing maintenance.
- **Instafel Team:** Foundational reverse-engineering references, patcher methodology, and structural analysis (see [Credits & Attribution](docs/credits.md)).
- **Community Contributors & Testers:** Bug reports, device testing, and MetaConfig discoveries.

---

## ⚖️ Disclaimer

PawGram is an independent, community-driven project and is not affiliated with, authorized, maintained, or endorsed by Instagram or Meta Platforms, Inc. "Instagram" is a registered trademark of Meta Platforms, Inc. Use of this modified client is at your own discretion in accordance with applicable terms.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
