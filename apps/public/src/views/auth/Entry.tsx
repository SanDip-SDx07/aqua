import { LinearGradient } from "expo-linear-gradient";
import { MapPin } from "lucide-react-native";
import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  type ImageSourcePropType,
} from "react-native";
import { Line } from "react-native-svg";

// Types for roles
type Role = "admin" | "user" | "vendor" | "member" | "rider";

// Props
interface EntryProps {
  role: Role;
  imageBgUrl: ImageSourcePropType;
  imageUrl?: ImageSourcePropType;
}

export default function Entry({ role, imageBgUrl, imageUrl }: EntryProps) {
  const [formState, setFormState] = React.useState({
    username: "",
    mobile: "",
  });

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
    <View style={[{ flex: 1, position: "relative" }]}>
      <LinearGradient colors={["#f0f8ff", "#cfe7fd"]} style={{ flex: 1 }}>
        <ImageBackground
          source={imageBgUrl}
          resizeMode="cover"
          style={styles.background}
        />
        {imageUrl && <Image source={imageUrl} style={styles.logo} />}
      </LinearGradient>

      <View style={styles.entryContainer}>
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { flex: 1 }]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { width: 50, height: 50 }]}
            onPress={handleSubmit}
          >
            <MapPin color="#fff" width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
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

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginTop: 80,
    borderWidth: 2,
    borderColor: "#fff",
  },
  entryContainer: {
    // flex: 1,
    // position: "absolute",
    marginTop: -60,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10, // Android shadow
  },
  input: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 16,
    color: "#333",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
