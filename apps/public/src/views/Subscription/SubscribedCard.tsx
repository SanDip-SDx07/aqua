import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { formatDistanceStrict } from "date-fns";
import {
  Droplet,
  CircleCheck,
  Percent,
  Calendar,
  PiggyBank,
} from "lucide-react-native"; // example icon package
import {
  Counter,
  SubscriptionCardHeader,
  Water20LLabel,
} from "./SubscriptionCards";

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

export default function SubscribedCard({
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
}: SubscribedCardProps) {
  // ✅ Calculate days left safely
  const daysLeft = formatDistanceStrict(expiryDate, activationDate, {
    unit: "day",
  });
  const [counter, setCounter] = React.useState<number>(1);

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
          <Droplet size={30} color="#007bff" />
          <Text style={styles.perk}>Hygiene {hygieneRate}</Text>
        </View>
        <View style={styles.perkContainer}>
          <CircleCheck size={30} color="#28a745" />
          <Text style={styles.perk}>
            {numberOfSubscription} Container Access
          </Text>
        </View>
        <View style={styles.perkContainer}>
          <Percent size={30} color="#ffc107" />
          <Text style={styles.perk}>20% off refill</Text>
        </View>
      </View>

      {/* Price Section */}
      <View style={styles.priceSection}>
        <View style={styles.priceBox}>
          <Text style={styles.priceValueStrike}>₹{marketPrice}</Text>
          <Text style={styles.priceLabel}>Market Price</Text>
        </View>

        <View style={[styles.priceBox, styles.priceBoxCenter]}>
          <Text style={styles.priceValueHighlight}>₹{yourPrice}</Text>
          <Text style={styles.priceLabel}>Your Price</Text>
        </View>

        <View style={styles.priceBox}>
          <Text style={styles.priceValue}>₹{regularPrice}</Text>
          <Text style={styles.priceLabel}>Regular Price</Text>
        </View>
      </View>

      <Counter counter={counter} setCounter={setCounter} />

      {/* Stats Section */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Calendar size={20} />
          <Text style={[styles.stat, styles.textLeft]}>
            Total Orders: {totalOrders}
          </Text>
        </View>

        <View style={styles.statBoxRight}>
          <PiggyBank size={20} />
          <Text style={[styles.stat, styles.textRight]}>
            Total Savings: ₹{totalSavings}
          </Text>
        </View>
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
}

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
    marginVertical: 10,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 16,
    width: "100%",
    paddingHorizontal: 10,
  },

  priceBox: {
    flex: 1,
    alignItems: "center",
  },

  priceBoxCenter: {
    transform: [{ scale: 1.1 }], // slight emphasis on middle
  },

  priceValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  priceValueStrike: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
  },

  priceValueHighlight: {
    fontSize: 18,
    fontWeight: "700",
    color: "#28a745",
  },

  priceLabel: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },

  statsRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  statBox: {
    flex: 1, // give each box space to lay out children
    flexDirection: "row",
    alignItems: "center", // vertically center icon + text
    paddingHorizontal: 6,
  },
  stat: {
    fontSize: 13,
    color: "#555",
    // remove flex: 1 from text; let container control width
    marginLeft: 8, // spacing between icon and text
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },
  // extra: make sure the second box aligns its content to the right
  statBoxRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // push content to the right side
    paddingHorizontal: 6,
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
