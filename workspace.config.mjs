#!/usr/bin/env node
import { exec } from "child_process";

// === 🧱 Define your monorepo workspaces here ===
const WORKSPACES = [
  "apps",
  "apps/public",
  "apps/admin",
  "backend",
  "packages",
  "packages/shared",
  "packages/utils",
];

// === 🧠 Parse arguments ===
// If user passes folders, open only those; otherwise open all
const args = process.argv.slice(2);
const targets = args.length > 0 ? args : WORKSPACES;

// === 🚀 Open folders ===
for (const folder of targets) {
  console.log(`🟢 Opening ${folder} in VS Code...`);
  exec(`code "${folder}"`, (err) => {
    if (err) console.error(`❌ Failed to open ${folder}:`, err.message);
  });
}

/* # Alternative Bash Script
for dir in apps/* backend packages/*; do
  [ -f "$dir/package.json" ] && code "$dir"
done
*/

/* # Alternative Complete Bash Script for iOS/Linux/MacOS
#!/bin/bash
# === Open all monorepo folders in VS Code ===

# Define folders (adjust as per your structure)
folders=(
  "apps/public"
  "backend"
  "packages/shared"
  "packages/utils"
)

echo "Opening monorepo workspaces..."
for dir in "${folders[@]}"; do
  if [ -f "$dir/package.json" ]; then
    echo "Opening VS Code for $dir..."
    code "$dir"
  else
    echo "Skipping $dir (no package.json found)"
  fi
done
echo "Done!"

# Save this script as open-workspaces.sh, then run:
chmod +x open-workspaces.sh
./open-workspaces.sh
*/

/* # Alternative Complete Batch Script for Windows
@echo off
REM === Open all monorepo folders in VS Code ===

REM List your monorepo folders here
set folders=apps\public backend packages\shared packages\utils

echo Opening monorepo workspaces...
for %%f in (%folders%) do (
    if exist "%%f\package.json" (
        echo Opening VS Code for %%f ...
        start code "%%f"
    ) else (
        echo Skipping %%f (no package.json found)
    )
)
echo Done!
*/
