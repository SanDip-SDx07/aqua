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

export default function CallButton({
  phoneNumber,
  style,
  options = {},
  children,
}: {
  phoneNumber: string;
  style?: Record<string, string | number> | Record<string, string | number>[];
  options?: Options;
  children?: React.ReactNode;
}) {
  const handleCall = () => {
    const url = `tel:${phoneNumber}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Error", "Phone call is not supported on this device");
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <TouchableOpacity
      onPress={handleCall}
      style={[styles.button, style]}
      disabled={options.disabled}
    >
      {children ?? <Text style={styles.defaultText}>Call</Text>}
    </TouchableOpacity>
  );
}

// --- Default Styles ---
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007BFF",
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
