import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

interface SubscriptionModelCardProps {
  subsType: "Individual" | "Standard" | "Family" | "Enterprise";
  numberOfPremiumAccount: number;
  pricePerMonth: number;
  priceAYear: number;
  processingFee: number;
  color?: string;
}

export function SubscriptionModelCard({
  subsType,
  numberOfPremiumAccount,
  pricePerMonth,
  priceAYear,
  processingFee,
  color = "#2196f3",
}: SubscriptionModelCardProps) {
  return (
    <View
      style={{
        backgroundColor: "#f4f9ff",
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginVertical: 10,
        padding: 20,
      }}
    >
      {/* Header */}
      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", color }}>Premium</Text>
        <Text style={{ fontSize: 22, fontWeight: "900" }}>{subsType}</Text>
        <Text style={{ marginTop: 4, fontSize: 16 }}>
          ₹{pricePerMonth}/month ({priceAYear}/year)
        </Text>
        <Text style={{ fontSize: 13, color: "#555" }}>
          + ₹{processingFee} processing fee
        </Text>
      </View>

      {/* Benefits */}
      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: "600" }}>
          {numberOfPremiumAccount} Premium Account
        </Text>

        <Text style={{ marginTop: 4 }}>
          {numberOfPremiumAccount} Container Access
        </Text>
        <Text style={{ marginTop: 4 }}>20% OFF on every refill</Text>
        <Text style={{ marginTop: 4 }}>No Container Deposits / Rent</Text>
        <Text style={{ marginTop: 4 }}>Basic Priority Support</Text>
      </View>

      {/* Subscribe Button */}
      <TouchableOpacity
        style={{
          backgroundColor: color,
          borderRadius: 10,
          paddingVertical: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>Subscribe</Text>
      </TouchableOpacity>

      {/* Terms & Info */}
      <View style={{ marginTop: 14 }}>
        <Text style={{ fontSize: 12, color: "#444", lineHeight: 18 }}>
          All jars are property of AquaCare+ vendors and are barcoded for
          tracking.
        </Text>

        <Text style={{ marginTop: 8, fontSize: 12, fontWeight: "700" }}>
          If a customer damages a jar:
        </Text>
        {[
          "Replacement charge: ₹200 per jar",
          "Continuation option: pay ₹200 to continue",
          "Cancellation option: pay ₹80 maintenance deduction",
        ].map((item, idx) => (
          <Text key={idx} style={{ fontSize: 12 }}>
            • {item}
          </Text>
        ))}

        <Text style={{ marginTop: 8, fontSize: 12 }}>
          Delivery charges may apply based on distance or route optimization.
        </Text>
      </View>
    </View>
  );
}

export function CustomSubscriptionCard() {
  return (
    <View
      style={{
        backgroundColor: "#f4f9ff",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#cfe8ff",
        padding: 20,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      {/* Header */}
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#007aff" }}>
          Premium+
        </Text>
        <Text style={{ fontSize: 22, fontWeight: "900" }}>Custom Plan</Text>
        <Text style={{ fontSize: 16, color: "#444", marginTop: 4 }}>
          Flexible pricing — based on your usage
        </Text>
      </View>

      {/* Dynamic Options Info */}
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: "600", marginBottom: 6 }}>
          Includes everything you need:
        </Text>
        {[
          "Set number of premium accounts (1–10+)",
          "Choose delivery frequency (Daily / Weekly / On-demand)",
          "Flexible container count (1–20+)",
          "Pay only for used refills",
          "Up to 30% off on volume-based plans",
          "Add-on: Smart Jar Tracking & Analytics",
        ].map((item, idx) => (
          <Text key={idx} style={{ marginTop: 3 }}>
            • {item}
          </Text>
        ))}
      </View>

      {/* Price Range */}
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", color: "#007aff" }}>
          ₹10 / month (based on your plan)
        </Text>
        <Text style={{ fontSize: 13, color: "#555" }}>
          + ₹20 standard processing fee
        </Text>
      </View>

      <CustomSubscription />

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>₹{"totalAmount"}</Text>
      </View>

      {/* CTA */}
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          borderRadius: 10,
          paddingVertical: 10,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>
          Customize & Subscribe
        </Text>
      </TouchableOpacity>

      {/* Notes */}
      <View style={{ marginTop: 14 }}>
        <Text style={{ fontSize: 12, color: "#444", lineHeight: 18 }}>
          All jars remain property of AquaCare+ vendors and are barcoded for
          tracking.
        </Text>

        <Text style={{ marginTop: 8, fontSize: 12, fontWeight: "700" }}>
          If a customer damages a jar:
        </Text>
        {[
          "Replacement charge: ₹200 per jar",
          "Continuation option: pay ₹200 to continue",
          "Cancellation option: pay ₹80 maintenance deduction",
        ].map((item, idx) => (
          <Text key={idx} style={{ fontSize: 12 }}>
            • {item}
          </Text>
        ))}

        <Text style={{ marginTop: 8, fontSize: 12 }}>
          Delivery charges may vary based on distance or route optimization.
        </Text>
      </View>
    </View>
  );
}

export function CustomSubscription() {
  const [count, setCount] = React.useState(1);
  const [billingCycle, setBillingCycle] = React.useState<"Monthly" | "Yearly">(
    "Monthly"
  );

  const basePrice = 99;
  const totalAmount =
    billingCycle === "Monthly" ? count * basePrice : count * basePrice * 10; // yearly = 10x months discount

  const handleIncrease = () => setCount((prev) => prev + 1);
  const handleDecrease = () => setCount((prev) => Math.max(1, prev - 1));

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.counterButton} onPress={handleDecrease}>
          <Text style={styles.counterSymbol}>−</Text>
        </TouchableOpacity>

        <TextInput
          value={String(count)}
          editable={false}
          style={styles.counterInput}
        />

        <TouchableOpacity style={styles.counterButton} onPress={handleIncrease}>
          <Text style={styles.counterSymbol}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.billingContainer}>
        {["Monthly", "Yearly"].map((cycle) => (
          <TouchableOpacity
            key={cycle}
            style={[
              styles.billingButton,
              billingCycle === cycle && styles.billingButtonActive,
            ]}
            onPress={() => setBillingCycle(cycle as "Monthly" | "Yearly")}
          >
            <Text
              style={[
                styles.billingText,
                billingCycle === cycle && styles.billingTextActive,
              ]}
            >
              {cycle}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  // Counter
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  counterButton: {
    width: 45,
    height: 45,
    backgroundColor: "#e6f0ff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  counterSymbol: {
    fontSize: 22,
    color: "#007AFF",
    fontWeight: "700",
  },

  counterInput: {
    width: 70,
    height: 45,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#cce0ff",
    borderRadius: 8,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: "#fff",
  },

  // Billing Toggle
  billingContainer: {
    flexDirection: "row",
    backgroundColor: "#d8e6fc",
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 20,
  },

  billingButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },

  billingButtonActive: {
    backgroundColor: "#007AFF",
  },

  billingText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#007AFF",
  },

  billingTextActive: {
    color: "#fff",
    fontWeight: "700",
  },

  // Total Display
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
  },

  totalLabel: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },

  totalValue: {
    fontSize: 20,
    fontWeight: "800",
    color: "#007AFF",
  },
});
