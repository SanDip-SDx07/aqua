// import { getDefaultConfig } from "expo/metro-config";
// import path from "path";
// // Project root
// const projectRoot = __dirname;
// // Path to monorepo packages folder
// const packagesPath = path.resolve(projectRoot, "../packages");
// const config = getDefaultConfig(projectRoot);
// // Add additional node_modules paths so Metro can resolve symlinked packages
// config.resolver.nodeModulesPaths = [
//   path.resolve(projectRoot, "node_modules"),
//   path.resolve(projectRoot, "../node_modules"), // root node_modules of monorepo
// ];
// // Tell Metro to watch local packages
// config.watchFolders = [packagesPath];
// // Optional: support importing TypeScript directly from packages/src
// config.resolver.sourceExts.push("ts", "tsx", "mts", "cts");
// // Optional: reset mainFields so Metro prefers "react-native" or "main"
// config.resolver.mainFields = ["react-native", "browser", "main"];
// export default config;

/**
 *
 *
 *
 * Previous simple config without monorepo support commonjs
 */
// const { getDefaultConfig } = require("expo/metro-config");
// const config = getDefaultConfig(__dirname);
// config.resolver.nodeModulesPaths = [
//   __dirname + "/node_modules",
//   __dirname + "/../node_modules", // if utils is one folder up
// ];
// config.watchFolders = [__dirname + "/../packages"]; // adjust path to your packages
// module.exports = config;

/**
 *
 *
 *
 */
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const projectRoot = __dirname;
const packagesPath = path.resolve(projectRoot, "../../packages");

const config = getDefaultConfig(projectRoot);

// Make Metro aware of monorepo packages
config.watchFolders = [packagesPath];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(projectRoot, "../../node_modules"),
];

// Add TS support
config.resolver.sourceExts.push("ts", "tsx");

// Make sure Metro prefers react-native field if exists
config.resolver.mainFields = ["react-native", "browser", "main"];

module.exports = config;
