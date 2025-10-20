import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface SubscriptionModelCardProps {
  subsType: "Individual" | "Standard" | "Family" | "Enterprise";
  numberOfPremiumAccount: number;
  pricePerMonth: number;
  processingFee: number;
  features: string[];
  color?: string;
}

export function SubscriptionModelCard({
  subsType,
  numberOfPremiumAccount,
  pricePerMonth,
  processingFee,
  features,
  color = "#2196f3",
}: SubscriptionModelCardProps) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
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
          ₹{pricePerMonth}/month
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
        {features.map((item, idx) => (
          <Text key={idx} style={{ marginTop: 4 }}>
            • {item}
          </Text>
        ))}
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
        marginVertical: 12,
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
          ₹10 – ₹1000 / month (based on your plan)
        </Text>
        <Text style={{ fontSize: 13, color: "#555" }}>
          + ₹20 standard processing fee
        </Text>
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
          tracking and hygiene. Deep cleaning is performed twice a week. Damaged
          jars are replaced instantly.
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
