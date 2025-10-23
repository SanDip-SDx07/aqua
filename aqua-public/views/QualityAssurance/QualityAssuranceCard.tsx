import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Info } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Tabs: undefined;
  ["AquaCare+"]: undefined;
  ["Subscription"]: undefined;
  ["Subscription Terms"]: undefined;
};

export default function QualityAssuranceCard(): React.ReactElement {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Tabs">>();

  return (
    <LinearGradient
      colors={["#f0f8ff", "#cfe7fd"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.iconBadge}>
        <MaterialIcons name="verified" size={30} color="#0077cc" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.headerText}>AquaCare+ 100% Quality Product</Text>
        <TouchableOpacity
          style={styles.infoBtn}
          onPress={() => navigation.push("AquaCare+")}
        >
          <Info size={18} color="#0077cc" />
          <Text style={styles.infoText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    padding: 14,
    backgroundColor: "#f0f8ff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 10,
  },
  iconBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e6f3ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginBottom: 6,
  },
  infoBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
    color: "#0077cc",
    fontWeight: "500",
    marginLeft: 4,
  },
});

{
  /* <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <QualityAssuranceInfo />
      </Modal> */
}
