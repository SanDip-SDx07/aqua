import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SubscribedCard({
  // subscriptionName = "20L Water Jar",
  amount = 800,
  totalJars = 4,
  startDate = "18 Oct 2025",
  lastDelivery = "17 Oct 2025",
  onBook = () => console.log("Book clicked"),
  onUpgrade = () => console.log("Upgrade clicked"),
  onCancel = () => console.log("Cancel clicked"),
}) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.subscriptionName}>Active Subscription</Text>
        <Text style={styles.amount}>₹{amount}</Text>
        <Text style={styles.jars}>{totalJars} jars</Text>
      </View>

      {/* Subscription info */}
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>Subscription Date: {startDate}</Text>
        <Text style={styles.infoText}>Last Delivery: {lastDelivery}</Text>
      </View>

      {/* Quick Book Button */}
      <TouchableOpacity style={styles.bookButton} onPress={onBook}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>

      {/* Action Buttons */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.upgradeButton} onPress={onUpgrade}>
          <Text style={styles.upgradeButtonText}>Upgrade</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    marginBottom: 12,
  },
  subscriptionName: { fontSize: 16, fontWeight: "600", color: "#333" },
  amount: { fontSize: 20, fontWeight: "700", color: "#007bff", marginTop: 4 },
  jars: { fontSize: 14, color: "#555", marginTop: 2 },

  infoRow: {
    marginBottom: 16,
  },
  infoText: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
  },

  bookButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  bookButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    marginRight: 8,
    alignItems: "center",
  },
  cancelButtonText: { color: "#fff", fontWeight: "600" },
  upgradeButton: {
    backgroundColor: "#ffc107",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    marginLeft: 8,
    alignItems: "center",
  },
  upgradeButtonText: { color: "#333", fontWeight: "600" },
});
