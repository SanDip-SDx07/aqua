/* BUILD_GUIDE.js
   Compact — Full build & release checklist for React Native / Expo projects
   Sections:
     1) Overview (formats)
     2) Prerequisites (common)
     3) Expo-managed (EAS) — APK & AAB (cloud)
     4) Quick local test (expo run)
     5) Prebuild -> Local Android (Gradle) — local APK/AAB
     6) Keystore/signing (local & EAS)
     7) Install/test on device (adb + direct)
     8) iOS notes (EAS + local)
     9) Helpful scripts, tips & security notes
*/

/* ========= 1) Overview =========
   APK  = Android Package (installable on device). Good for testing.
   AAB  = Android App Bundle (Play Store preferred). Play generates split APKs.
   EAS  = Expo Application Services (cloud builds).
   Prebuild = expo prebuild (generates native android/ios folders).
*/

/* ========= 2) Prerequisites =========
   - Node >= 18, npm >= 9
   - Git (recommended)
   - For EAS: eas-cli (npm i -g eas-cli) and Expo account
   - For local Android builds: Android Studio, Android SDK, Java JDK (11+), ANDROID_HOME env set, platform-tools in PATH (adb)
   - For local iOS builds: macOS + Xcode (not covered locally on Windows)
*/

/* ========= 3) Expo-managed (EAS) — Cloud builds =========
   Use when you DON'T want to manage native code locally. EAS builds in cloud and returns artifacts (apk/aab).
   Steps:

   1) Install EAS:
      npm install -g eas-cli
      eas --version

   2) Login:
      eas login

   3) Configure project for EAS (creates eas.json):
      cd /path/to/project
      eas build:configure
      // optionally edit the generated eas.json

   4) Example eas.json snippets:
      // Production APK (installable)
      {
        "build": {
          "production": {
            "autoIncrement": true,
            "android": { "buildType": "apk" }
          }
        }
      }
      // Production AAB (default for Play Store)
      {
        "build": {
          "production": {
            "autoIncrement": true,
            "android": { "buildType": "app-bundle" }
          }
        }
      }

   5) Start a build:
      // Uses the profile in eas.json
      eas build -p android --profile production

      // For iOS (requires Apple account)
      eas build -p ios --profile production

   6) Flow:
      - Terminal prints a build URL (expo.dev/.../builds/...)
      - Monitor the build page
      - When finished, download artifact:
         - .apk if buildType === "apk"
         - .aab if buildType === "app-bundle"

   7) Notes:
      - EAS can manage credentials for you or you can provide them.
      - For Play Store you usually upload AAB.
      - To speed up repeated internal tests, use "distribution":"internal" or "developmentClient" profiles.
*/

/* ========= 4) Quick local test (no cloud) =========
   Use when you want to run on a connected device quickly (debug build).

   - On Expo (managed) project:
     npx expo start   // dev server
     // To run on a connected Android device/emulator:
     npx expo run:android
     // For iOS (mac only):
     npx expo run:ios

   - NOTE: `expo run:android` will prebuild if needed and run a debug app (not a release APK).
*/

/* ========= 5) Prebuild -> Local Android (Gradle) =========
   Use when you need local control or want to produce a signed local APK/AAB.

   1) Generate native projects (only once or when you change native config):
      expo prebuild
      // this will create android/ and ios/ folders

   2) Open android/ in Android Studio (recommended) to install SDKs and sync Gradle.

   3) Generate or prepare keystore (if you want a signed release):
      keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias \
        -keyalg RSA -keysize 2048 -validity 10000
      // Move the keystore to android/app or a safe place (not committed to git).

   4) Add signing config to android/gradle.properties or environment variables:
      // android/gradle.properties (DO NOT COMMIT PASSWORDS)
      MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
      MYAPP_RELEASE_KEY_ALIAS=my-key-alias
      MYAPP_RELEASE_STORE_PASSWORD=storepassword
      MYAPP_RELEASE_KEY_PASSWORD=keypassword

   5) Edit android/app/build.gradle (signingConfigs):
      signingConfigs {
          release {
              storeFile file(MYAPP_RELEASE_STORE_FILE)
              storePassword MYAPP_RELEASE_STORE_PASSWORD
              keyAlias MYAPP_RELEASE_KEY_ALIAS
              keyPassword MYAPP_RELEASE_KEY_PASSWORD
          }
      }
      buildTypes {
          release {
              signingConfig signingConfigs.release
              minifyEnabled false
              proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
          }
      }

   6) Build locally (Windows / mac):
      cd android
      // mac/linux
      ./gradlew assembleRelease
      // windows (PowerShell or CMD)
      gradlew assembleRelease

      // Outputs:
      android/app/build/outputs/apk/release/app-release.apk

   7) Build local App Bundle (AAB) for Play Store:
      ./gradlew bundleRelease
      // Outputs:
      android/app/build/outputs/bundle/release/app-release.aab

   8) Debug APK (unsigned, for dev testing):
      ./gradlew assembleDebug
      // Outputs debug apk under outputs/apk/debug/

   9) Notes:
      - If you prebuild from an Expo-managed project, keep in mind you'll diverge from pure-managed workflow.
      - When building locally, ensure JDK and Android SDK versions match Gradle tool requirements.
*/

/* ========= 6) Keystore & Signing =========
   Two ways to sign:
     A) EAS-managed credentials (EAS stores your upload key / keystore)
     B) Local keystore and local signing in build.gradle

   Keystore generation (local):
     keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

   To export a signing key from Play or create upload key, follow Play Console docs.
   Keep keystore and passwords safe; losing keystore prevents Play Store updates without key rotation.

   EAS credential commands:
     eas credentials
     // follow interactive prompts to upload or let EAS manage
*/

/* ========= 7) Install / Test on device =========
   A) Direct download (EAS):
      - After EAS build completes, open the artifact URL on your phone and install the apk.

   B) Via ADB (local file):
      adb install -r path/to/app-release.apk
      // -r to replace existing app
      adb uninstall com.yourapp.package  // if need to remove first

   C) Drag & drop to Android Emulator:
      - Start emulator
      - Drag APK onto emulator window to install

   D) Verify:
      - Launch app from device
      - Use `adb logcat` to view logs
*/

/* ========= 8) iOS notes =========
   - Expo EAS: eas build -p ios --profile production -> returns .ipa or a TestFlight-ready artifact
   - To distribute to device directly you need a provisioning profile / device UDID (ad-hoc) or use TestFlight
   - Local builds require macOS + Xcode; use `xcodebuild` or open workspace in Xcode and build
   - Apple Developer account required for production builds and TestFlight
*/

/* ========= 9) Helpful scripts, CI & tips =========
   // package.json example scripts (EAS + shortcuts)
   "scripts": {
     "eas:build:apk": "eas build -p android --profile production",
     "eas:logs": "eas build:list",
     "expo:run:android": "npx expo run:android",
     "prebuild": "expo prebuild",
     "android:assembleRelease": "cd android && gradlew assembleRelease"
   }

   // Auto-download last EAS artifact (example using `eas` + jq, unix shell)
   // (requires jq and curl and that EAS CLI prints build id; this is optional/advanced)
   # fetch latest build id (pseudo)
   # curl -s "https://api.expo.dev/v2/builds?projectId=..." | jq '.[0].artifacts[0].url'  # etc.

   Security & best practices:
   - Never commit keystore or plain passwords into git.
   - Use environment variables or CI secrets for signing credentials.
   - Keep an upload key for Play Store separate from your release key if you want Play to manage signing.
   - For quick testing use APK; for store distribution prefer AAB.

*/

/* ========= Cheatsheet: Commands reference =========
   // Expo/EAS
   npm install -g eas-cli
   eas login
   eas build:configure
   // set buildType in eas.json: android.buildType = "apk" or "app-bundle"
   eas build -p android --profile production

   // Quick dev run (Expo)
   npx expo start
   npx expo run:android

   // Prebuild and local Gradle build
   expo prebuild
   cd android
   // Windows
   gradlew assembleRelease
   // mac/linux
   ./gradlew assembleRelease
   // Local AAB
   ./gradlew bundleRelease

   // Keystore
   keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

   // Install apk via adb
   adb install -r android/app/build/outputs/apk/release/app-release.apk

   // View device logs
   adb logcat *:S ReactNative:V ReactNativeJS:V

*/

/* ========= End of File =========
   Save as BUILD_GUIDE.js / BUILD_GUIDE.md and keep it in repo root.
   If you want, I can:
     - produce a downloadable file for you,
     - generate a shorter single-line script that runs the whole thing (where appropriate),
     - or create CI (GitHub Actions) workflow snippets for EAS or local Gradle builds.
*/
