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

export default function SubscriptionModelCard({
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
          All jars remain property of AquaCare+ vendors and are barcoded for
          tracking and hygiene. Deep cleaning is done twice per week. Damaged
          jars are replaced immediately.
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
