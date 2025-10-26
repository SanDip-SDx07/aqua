import { add } from "date-fns";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

// Types for roles
type Role = "admin" | "user" | "vendor" | "member" | "rider";

// Props
interface EntryProps {
  role: Role;
  imageBgUrl?: string;
  imageUrl?: string;
}

export default function Entry({ role, imageBgUrl, imageUrl }: EntryProps) {
  const [formState, setFormState] = useState({ username: "", mobile: "" });

  async function handleSubmit() {
    try {
      const address = await getCurrentLocation();
      console.log(address);
      const payload = {
        ...formState,
        role,
        address,
      };

      console.log("Submitting:", payload);
      // ✅ TODO: send to backend (via fetch/axios)
    } catch (error) {
      console.error("Location fetch failed:", error);
    }
  }

  function handleChange(field: string, value: string) {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageBgUrl }} style={styles.background}>
        <View style={styles.overlay}>
          <Image source={{ uri: imageUrl }} style={styles.logo} />

          <Text style={styles.title}>{role.toUpperCase()} ENTRY</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            value={formState.username}
            onChangeText={(t) => handleChange("username", t)}
          />

          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            value={formState.mobile}
            onChangeText={(t) => handleChange("mobile", t)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

// 🧭 Fetch current location (placeholder for now)
async function getCurrentLocation() {
  const address: {
    country?: string;
    state?: string;
    city?: string;
    area?: string;
    street?: string;
    pincode?: string;
    nearbyLandmark?: string;
  } = {};

  try {
    // ⚙️ Example using Expo Location (if using Expo)
    // const { status } = await Location.requestForegroundPermissionsAsync();
    // if (status !== "granted") throw new Error("Permission denied");
    // const loc = await Location.getCurrentPositionAsync({});
    // Reverse geocode to get readable address...
    // const [place] = await Location.reverseGeocodeAsync(loc.coords);
    // Object.assign(address, place);

    address.city = "Kolkata"; // Placeholder
  } catch (error) {
    console.error("Location Error:", error);
  }

  return address;
}

// 🎨 Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
