// theme.ts
export const theme = {
    light: {
        colors: {
            primary: "#00AEEF", // Aquatic / Water brand color
            secondary: "#0077A3", // Slightly darker accent
            background: "#FFFFFF", // Main app background
            headerGradient: ["#00AEEF", "#66D9FF"] as [string, string],
            surface: "#F7F9FA", // Cards, modals, etc.
            text: "#111111", // Main text
            muted: "#666666", // Secondary / muted text
            overlay: "rgba(0, 0, 0, 0.5)", // For modal backgrounds or overlays
            border: "#E0E0E0", // Divider lines
        },
    },

    dark: {
        colors: {
            primary: "#00AEEF", // Same brand color
            secondary: "#66D9FF", // Accent for dark backgrounds
            background: "#121212", // Dark main background
            headerGradient: ["#0077A3", "#00AEEF"] as [string, string],
            surface: "#1E1E1E", // Cards, modals, etc.
            text: "#FFFFFF", // Main text
            muted: "#AAAAAA", // Secondary / muted text
            overlay: "rgba(0, 0, 0, 0.7)", // Darker overlay
            border: "#333333", // Divider lines
        },
    },
};
