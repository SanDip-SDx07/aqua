import type React from "react";
import {
  Linking,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
} from "react-native";

interface Options {
  disabled?: boolean;
}

export default function MessageButton({
  phoneNumber,
  message = "",
  style,
  options = {},
  children,
}: {
  phoneNumber: string;
  message?: string;
  style?: Record<string, string | number> | Record<string, string | number>[];
  options?: Options;
  children?: React.ReactNode;
}) {
  const handleMessage = () => {
    // WhatsApp URL schema
    const url = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Error", "WhatsApp is not installed on this device");
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <TouchableOpacity
      onPress={handleMessage}
      style={[styles.button, style]}
      disabled={options.disabled}
    >
      {children ?? <Text style={styles.defaultText}>Message</Text>}
    </TouchableOpacity>
  );
}

// --- Default Styles ---
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#25D366", // WhatsApp green
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: "center",
  },
  defaultText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});
