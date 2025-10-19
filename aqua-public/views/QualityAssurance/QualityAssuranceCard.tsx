import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Info } from "lucide-react-native";
import QualityAssuranceInfo from "./QualityAssuranceInfo";
import { LinearGradient } from "expo-linear-gradient";

export default function QualityAssuranceCard(): React.ReactElement {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <LinearGradient
      colors={["#f0f8ff", "#cfe7fdff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Icon Badge */}
      <View style={styles.infoContainer}>
        <View style={styles.iconBadge}>
          <MaterialIcons name="verified" size={28} color="#0077cc" />
        </View>

        {/* Title */}
        <Text style={styles.headerText}>
          💧 AquaCare+ Product Quality & Assurance
        </Text>
      </View>

      {/* Learn More Button */}
      <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.infoBtn}
          onPress={() => setModalVisible(true)}
        >
          <Info size={20} color="#000" />
          <Text style={styles.infoText}>Learn More</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <QualityAssuranceInfo />
      </Modal>
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
    marginBottom: 10,
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
