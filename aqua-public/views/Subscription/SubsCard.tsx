import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CircleCheck, Droplet, GlassWater, Info } from "lucide-react-native";
import SubscriptionTerms from "./SubscriptionTerms";

export default function SubscriptionCard() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LinearGradient
      colors={["#f0f8ff", "#cfe7fdff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      {/* Top: Icon + Features */}
      <View style={styles.topRow}>
        <View style={styles.iconContainer}>
          <Droplet size={50} color="#097bfdff" />
          {/* <GlassWater size={50} color="#000" /> */}
        </View>

        <View style={styles.featuresContainer}>
          <Text style={styles.header}>Exclusive Service Subscription</Text>
          <View style={styles.textGroup}>
            <CircleCheck size={20} color={"#000"} />
            <Text style={styles.feature}>No Container Deposits / Rent</Text>
          </View>
          <View style={styles.textGroup}>
            <CircleCheck size={20} color={"#000"} />
            <Text style={styles.feature}>No Hidden Costs</Text>
          </View>
          <View style={styles.textGroup}>
            <CircleCheck size={20} color={"#000"} />
            <Text style={styles.feature}>20% OFF on every refill</Text>
          </View>
          <View style={styles.textGroup}>
            <CircleCheck size={20} color={"#000"} />
            <Text style={styles.feature}>
              Priority delivery within 30 minutes
            </Text>
          </View>
          <View style={styles.textGroup}>
            <CircleCheck size={20} color={"#000"} />
            <Text style={styles.feature}>Hygiene tracking</Text>
          </View>
        </View>
      </View>

      <Text style={styles.priceBadge}>
        100-120/Jar Access (Overall Cost ₹10/month)
      </Text>

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
  textGroup: { flex: 1, flexDirection: "row", gap: 8 },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
    marginRight: 12,
    alignItems: "stretch",
  },
  featuresContainer: {
    flex: 1,
    gap: 7,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  feature: {
    fontSize: 14,
    marginBottom: 4,
    color: "#000",
  },
  priceBadge: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 8,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
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
