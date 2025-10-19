import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Droplet, Info } from "lucide-react-native";
import SubscriptionTerms from "./SubscriptionTerms";

export default function SubscriptionCard() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LinearGradient
      colors={["#E0F7FA", "#B2EBF2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      {/* Top: Icon + Features */}
      <View style={styles.topRow}>
        <View style={styles.iconContainer}>
          <Droplet size={50} color="#4A90E2" />
        </View>

        <View style={styles.featuresContainer}>
          <Text style={styles.header}>Exclusive Water Subscription</Text>
          <Text style={styles.feature}>✅ No Container Deposits / Rent</Text>
          <Text style={styles.feature}>✅ No Hidden Costs</Text>
          <Text style={styles.feature}>✅ 20% OFF on every refill</Text>
          <Text style={styles.feature}>
            ✅ Priority delivery within 30 minutes
          </Text>
          <Text style={styles.feature}>✅ Hygiene tracking</Text>
          <Text style={styles.priceBadge}>Costs Less than ₹10/month</Text>
        </View>
      </View>

      {/* Bottom: Buttons */}
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.subscribeBtn}>
          <Text style={styles.subscribeText}>Explore Premium</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.infoBtn}
          onPress={() => setModalVisible(true)}
        >
          <Info size={24} color="#000" />
          <Text style={styles.infoText}>Learn More</Text>
        </TouchableOpacity>
      </View>

      {/* Modal placeholder */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <SubscriptionTerms />
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: "100%",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
    marginRight: 12,
  },
  featuresContainer: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  feature: {
    fontSize: 14,
    marginBottom: 4,
  },
  priceBadge: {
    marginTop: 8,
    fontWeight: "600",
    color: "#27AE60",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  subscribeBtn: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  subscribeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  infoBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    color: "#000",
    marginLeft: 4,
    fontWeight: "500",
  },
});
