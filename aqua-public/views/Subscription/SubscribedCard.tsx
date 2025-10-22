import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { formatDistanceStrict } from "date-fns";
import { Droplet, CircleCheck, Percent } from "lucide-react-native"; // example icon package
import {
  SubscriptionCardHeader,
  Water20LLabel,
} from "../Subscription/SubscriptionCards";

// ✅ Props interface
interface SubscribedCardProps {
  activePlan?: "Individual" | "Standard" | "Family" | "Enterprise" | "Custom";
  activationDate?: Date;
  expiryDate?: Date;
  numberOfSubscription?: number;
  hygieneRate?: number;
  lastDelivery?: string;
  marketPrice?: number;
  regularPrice?: number;
  yourPrice?: number;
  totalOrders?: number;
  totalSavings?: number;
  onBook?: () => void;
  onUpgrade?: () => void;
  onCancel?: () => void;
}

const SubscribedCard: React.FC<SubscribedCardProps> = ({
  activePlan = "Individual",
  activationDate = new Date("2025-10-18"),
  expiryDate = new Date("2026-10-18"),
  numberOfSubscription = 1,
  hygieneRate = 9.5,
  lastDelivery = "17 Oct 2025",
  marketPrice = 200,
  regularPrice = 50,
  yourPrice = 40,
  totalOrders = 12,
  totalSavings = 350,
  onBook = () => console.log("Book clicked"),
  onUpgrade = () => console.log("Upgrade clicked"),
  onCancel = () => console.log("Cancel clicked"),
}) => {
  // ✅ Calculate days left safely
  const daysLeft = formatDistanceStrict(expiryDate, activationDate, {
    unit: "day",
  });

  return (
    <LinearGradient
      colors={["#f0f8ff", "#cfe7fd", "#cfe7fd"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.cardContainer}
    >
      {/* Water Label */}
      <Water20LLabel />

      {/* Header */}
      <View style={styles.header}>
        <SubscriptionCardHeader title="Premium" subtitle={activePlan} />
        <Text style={styles.activeStatus}>Active • {daysLeft}</Text>
      </View>

      {/* Perks / Features */}
      <View style={styles.perksRow}>
        <View style={styles.perkContainer}>
          <Droplet size={20} color="#007bff" />
          <Text style={styles.perk}>Hygiene {hygieneRate}</Text>
        </View>
        <View style={styles.perkContainer}>
          <CircleCheck size={20} color="#28a745" />
          <Text style={styles.perk}>
            {numberOfSubscription} Container Access
          </Text>
        </View>
        <View style={styles.perkContainer}>
          <Percent size={20} color="#ffc107" />
          <Text style={styles.perk}>20% off refill</Text>
        </View>
      </View>

      {/* Price Section */}
      <View style={styles.priceSection}>
        <Text style={styles.marketPrice}>Market Price: ₹{marketPrice}</Text>
        <Text style={styles.regularPrice}>Regular Price: ₹{regularPrice}</Text>
        <Text style={styles.yourPrice}>Your Price: ₹{yourPrice}</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsRow}>
        <Text style={[styles.stat, styles.textLeft]}>
          📅 Total Orders: {totalOrders}
        </Text>
        <Text style={[styles.stat, styles.textRight]}>
          💰 Total Savings: ₹{totalSavings}
        </Text>
      </View>

      {/* Action Buttons */}
      <TouchableOpacity style={styles.bookButton} onPress={onBook}>
        <Text style={styles.bookButtonText}>Order</Text>
      </TouchableOpacity>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.upgradeButton} onPress={onUpgrade}>
          <Text style={styles.upgradeButtonText}>Upgrade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Delivery History */}
      <View style={styles.deliveryInfo}>
        <Text>Last Delivery: {lastDelivery}</Text>
      </View>
    </LinearGradient>
  );
};

export default SubscribedCard;

// ✅ Styles
const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    position: "relative",
    backgroundColor: "#f4f9ff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
    padding: 20,
  },
  header: {
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  activeStatus: {
    fontSize: 12,
    color: "#28a745",
    fontWeight: "600",
  },

  perksRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  perkContainer: {
    alignItems: "center",
    flex: 1,
  },
  perk: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
    textAlign: "center",
  },

  priceSection: {
    marginBottom: 16,
  },
  marketPrice: {
    fontSize: 13,
    color: "#999",
    textDecorationLine: "line-through",
    marginBottom: 2,
  },
  regularPrice: {
    fontSize: 13,
    color: "#555",
    marginBottom: 2,
  },
  yourPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#28a745",
  },

  statsRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  stat: {
    fontSize: 13,
    color: "#555",
    flex: 1,
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },
  bookButton: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  upgradeButton: {
    flex: 1,
    backgroundColor: "#ffc107",
    paddingVertical: 12,
    borderRadius: 12,
    marginRight: 8,
    alignItems: "center",
  },
  upgradeButtonText: {
    color: "#333",
    fontWeight: "600",
  },
  cancelButton: {
    flex: 1,
    borderColor: "#dc3545",
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 12,
    marginLeft: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#dc3545",
    fontWeight: "600",
  },

  deliveryInfo: {
    marginTop: 8,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});
