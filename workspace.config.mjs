import fs from "fs";
import { exec } from "child_process";

const workspaces = [
  "apps/public",
  "backend",
  "packages/shared",
  "packages/utils",
];

// const { workspaces } = JSON.parse(fs.readFileSync("./monorepo.json", "utf8"));
for (const folder of workspaces) {
  if (fs.existsSync(`${folder}/package.json`)) {
    console.log(`Opening ${folder}...`);
    exec(`code "${folder}"`);
  }
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
