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
} from "react-native";
import type {
  AuthEntryProps,
  Address,
  RootStackParamList,
} from "../../../types";
import type { StackScreenProps } from "@react-navigation/stack";
import isMobile from "@aqua/utils/isMobile";
import { entry } from "../../../api";
import { getCurrentLocation } from "@aqua/utils";

export default function AuthEntry({
  route,
}: StackScreenProps<RootStackParamList, "Auth">) {
  const { role, imageBgUrl } = route.params;
  return <Entry role={role} imageBgUrl={imageBgUrl} />;
}

export function Entry({ role, imageBgUrl, imageUrl }: AuthEntryProps) {
  const [formState, setFormState] = React.useState<{
    mobile: string;
    address: Address;
  }>({
    mobile: "",
    address: {},
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Request location permission on mount
    (async () => {
      const address = await getCurrentLocation();
      setFormState((prev) => ({ ...prev, address }));
    })();
  }, []);

  async function handleSubmit() {
    const isValidMobile = formState.mobile ? isMobile(formState.mobile) : false;
    if (!isValidMobile) {
      console.warn("Invalid mobile number");
      return;
    }

    try {
      setLoading(true);
      await entry(role, formState.mobile, formState?.address);
      console.log("Entry successful");
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(field: string, value: string) {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <View style={[{ flex: 1 }]}>
      <LinearGradient colors={["#f0f8ff", "#cfe7fd"]} style={{ flex: 1 }}>
        <ImageBackground
          source={imageBgUrl}
          resizeMode="cover"
          style={styles.background}
        />
        {imageUrl && <Image source={imageUrl} style={styles.logo} />}
      </LinearGradient>

      <View style={styles.entryContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Login or Signup</Text>
          {/* <TextInput
            style={styles.input}
            placeholder="Username"
            value={formState.username}
            onChangeText={(t) => handleChange("username", t)}
          /> */}
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            value={formState.mobile}
            onChangeText={(t) => handleChange("mobile", t)}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { flex: 1, marginRight: 10 }]}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>
                {loading ? "Submitting..." : "Submit"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { width: 50, height: 50 }]}
              onPress={async () => {
                const address = await getCurrentLocation();
                setFormState((prev) => ({ ...prev, address }));
              }}
            >
              <MapPin color="#fff" width={20} height={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.moreInfo}>
            <Text>By continuing, you agree to our </Text>
            <TouchableOpacity>
              <Text style={{ color: "blue" }}>Terms & Conditions </Text>
            </TouchableOpacity>
            <Text>and </Text>
            <TouchableOpacity>
              <Text style={{ color: "blue" }}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
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
    height: 460,
    marginTop: -30,
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
  inputContainer: {
    gap: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
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
  bottomContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#8a8a8aff", //007AFF
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  moreInfo: {
    flexDirection: "row",
    marginTop: 5,
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
