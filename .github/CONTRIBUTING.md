# Contributing to PawGram

Thank you for helping us make PawGram better! To maintain strict code quality, clean UI consistency, and optimal runtime performance, please read through these rules before submitting a Pull Request.

## Code & UI Style Guidelines

- **Aesthetic Alignment:** All layouts must respect the minimalist iOS-style spacing modifications.
- **Theming Constraints:** Never hardcode colors. Dark templates must enforce pure black backgrounds (`#000000`) for complete AMOLED rendering.
- **Iconography:** Do not introduce customized standalone SVG structures or generic emojis. Always use the project-wide **Material Symbols** font library to keep the application footprint compact and clean.
- **Architecture:** UI logic must remain separate from byte injection logic. Keep intercept routines clean within `dev.pawjects.pawgram.core`.

## Development Process

1. Fork the repo and create your branch from `dev`.
2. Ensure your changes compile cleanly locally using `./gradlew assembleDebug`.
3. Keep commit messages clear, descriptive, and atomic (e.g., `feat(ui): swap profile icons to Material Symbols`).
4. Open a Pull Request targeting the `dev` branch of the main repo.
