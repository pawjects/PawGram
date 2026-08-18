# 💡 Guide to Apply Config File in PawGram

Welcome to the devflags configuration setup guide for PawGram. Follow the detailed steps below to properly install and apply your custom configuration file to the app.

## 📋 Step-by-Step Instructions

### 1. Download the Config File
First, download your desired config file and save it locally to your device. Make sure to remember which folder it was saved to (this is usually your default *Downloads* folder).

### 2. Install the Required File Manager
To access the specific application data folders required for this setup, you will need a capable file manager. Head over to the **Vault** and install the **Files App**.

### 3. Locate and Copy the File
Open the newly installed Files App. Navigate to the folder where you saved your downloaded config file in Step 1. Select the file and **copy** it to your clipboard.

### 4. Navigate to the PawGram Directory
Next, tap on the hamburger menu (the three horizontal lines) within the Files App to access your storage directories. You need to navigate to PawGram's internal configuration folder by following this exact path:
> `PawGram` → `data` → `files` → `mobileconfig`

Once you are inside the `mobileconfig` folder, **paste** the copied configuration file.

### 5. Rename the File
For PawGram to successfully read and apply your new settings, the configuration file must have a very specific name. 
* Rename the file you just pasted to: `mc_overrides.json`

> ⚠️ **Important:** If there is already an older file named `mc_overrides.json` in this folder, you must **delete the old file first** before renaming your new one. This ensures there are no duplicate files or conflicts.

### 6. Apply Changes and Restart
PawGram needs a completely fresh start to load the new config data into its memory.
* Go to PawGram app info settings and **Force Stop** PawGram. 
* **Reopen** the application.

Your custom config file is now successfully applied and ready to use!
