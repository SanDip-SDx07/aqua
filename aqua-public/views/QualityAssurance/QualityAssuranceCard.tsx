import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Info } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Tabs: undefined;
  AquaCareModal: undefined;
  PremiumModal: undefined;
  TermsModal: undefined;
};

export default function QualityAssuranceCard(): React.ReactElement {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Tabs">>();

  return (
    <LinearGradient
      colors={["#f0f8ff", "#cfe7fdff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.infoContainer}>
        <View style={styles.iconBadge}>
          <MaterialIcons name="verified" size={28} color="#0077cc" />
        </View>

        <Text style={styles.headerText}>
          💧 AquaCare+ Product Quality & Assurance
        </Text>
      </View>

      <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.infoBtn}
          onPress={() => navigation.push("AquaCareModal")}
        >
          <Info size={20} color="#000" />
          <Text style={styles.infoText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 2,
    overflow: "hidden",
    marginBottom: 15,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 8,
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e6f3ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  bottomRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  infoBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
    marginLeft: 4, // replace gap
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
