import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { CircleCheck } from "lucide-react-native";

// ---------- Smaller UI Components ----------
export const SubscriptionCardHeader = ({
  title,
  subtitle,
  desc,
}: {
  title?: string;
  subtitle?: string;
  desc?: string;
}) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
    <Text style={styles.headerSubtitle}>{subtitle}</Text>
    {desc && <Text style={styles.headerDesc}>{desc}</Text>}
  </View>
);

export const BenefitsList = ({ items }: { items?: string[] }) => (
  <View style={styles.benefitsContainer}>
    {items &&
      items.map((item, idx) => (
        <View key={idx} style={styles.benefitItem}>
          <CircleCheck size={20} />
          <Text>{item}</Text>
        </View>
      ))}
  </View>
);

export const BillingToggle = ({
  billingType,
  setBillingType,
}: {
  billingType: "monthly" | "yearly";
  setBillingType: (key: "monthly" | "yearly") => void;
}) => (
  <View style={styles.billingContainer}>
    <TouchableOpacity
      style={[
        styles.billingButton,
        billingType === "monthly" && { backgroundColor: "#007AFF" },
      ]}
      onPress={() => setBillingType("monthly")}
    >
      <Text
        style={[
          styles.billingText,
          billingType === "monthly" && { color: "#fff" },
        ]}
      >
        Monthly
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.billingButton,
        billingType === "yearly" && { backgroundColor: "#007AFF" },
      ]}
      onPress={() => setBillingType("yearly")}
    >
      <Text
        style={[
          styles.billingText,
          billingType === "yearly" && { color: "#fff" },
        ]}
      >
        Yearly
      </Text>
    </TouchableOpacity>
  </View>
);

export const Counter = ({
  counter,
  setCounter,
  color,
  maxCounter = 30,
}: {
  counter: number;
  setCounter: (key: number | any) => void;
  color?: string;
  maxCounter?: number;
}) => (
  <View style={styles.counterContainer}>
    <TouchableOpacity
      style={[styles.counterButton, color && { backgroundColor: color }]}
      onPress={() => setCounter((prev: number) => (prev > 1 ? prev - 1 : 1))}
    >
      <Text style={styles.counterSymbol}>−</Text>
    </TouchableOpacity>
    <TextInput
      value={String(counter)}
      editable={false}
      style={styles.counterInput}
    />
    <TouchableOpacity
      style={[styles.counterButton, color && { backgroundColor: color }]}
      onPress={() =>
        setCounter((prev: number) =>
          prev < maxCounter ? prev + 1 : maxCounter
        )
      }
    >
      <Text style={styles.counterSymbol}>+</Text>
    </TouchableOpacity>
  </View>
);

export const NotesList = ({
  title,
  notes,
}: {
  title?: string;
  notes?: string[];
}) => (
  <View style={styles.notesContainer}>
    <Text style={styles.notesTitle}>{title}</Text>
    {notes &&
      notes.map((note, idx) => (
        <View key={idx} style={styles.notesItem}>
          <Text>• {note}</Text>
        </View>
      ))}
  </View>
);

export const SubscribeButton = ({ label }: { label?: string }) => (
  <TouchableOpacity style={styles.subscribeButton}>
    <Text style={styles.subscribeButtonText}>{label}</Text>
  </TouchableOpacity>
);

export function Water20LLabel(): React.ReactElement {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>20 L</Text>
    </View>
  );
}

// ---------- Main UI Cards ----------
export const SubsBaseCard = ({
  subsType,
  numberOfPremiumAccount,
  pricePerMonth,
  priceAYear,
  processingFee,
}: {
  subsType: "Individual" | "Standard" | "Family" | "Enterprise";
  numberOfPremiumAccount: number;
  pricePerMonth: number;
  priceAYear: number;
  processingFee: number;
}) => {
  const [billingType, setBillingType] = React.useState<"monthly" | "yearly">(
    "monthly"
  );
  return (
    <View style={styles.cardContainer}>
      <Water20LLabel />

      <SubscriptionCardHeader title="Premium" subtitle={subsType} />

      <Text style={styles.pricingText}>
        ₹{pricePerMonth}/month (₹{priceAYear}/year)
      </Text>
      <Text style={styles.processingText}>
        + ₹{processingFee} processing fee
      </Text>

      <BenefitsList
        items={[
          `${numberOfPremiumAccount} Premium Account`,
          `${numberOfPremiumAccount} Container Access`,
          "20% OFF on every refill",
          "No Container Deposits / Rent",
          "Basic Priority Support",
        ]}
      />

      <BillingToggle
        billingType={billingType}
        setBillingType={setBillingType}
      />
      <SubscribeButton label="Subscribe" />

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>
          ₹
          {billingType === "monthly"
            ? numberOfPremiumAccount * pricePerMonth + processingFee
            : numberOfPremiumAccount * priceAYear + processingFee}
        </Text>
      </View>

      <Text style={styles.deliveryNote}>
        All jars are property of AquaCare+ vendors and securly barcoded for
        tracking.
      </Text>

      <NotesList
        title="If a customer damages a jar:"
        notes={[
          "Replacement charge: ₹200 per jar",
          "Continuation option: pay ₹200 to continue",
          "Cancellation option: pay ₹80 maintenance deduction",
        ]}
      />

      <Text style={styles.deliveryNote}>
        Delivery charges may apply based on distance or route optimization.
      </Text>
    </View>
  );
};

export const CustomBaseCard = ({
  pricePerMonth = 10,
  priceAYear = 100,
  processingFee = 20,
}: {
  pricePerMonth?: number;
  priceAYear?: number;
  processingFee?: number;
}) => {
  const [billingType, setBillingType] = React.useState<"monthly" | "yearly">(
    "monthly"
  );
  const [counter, setCounter] = React.useState<number>(1 as number);

  return (
    <View style={styles.cardContainer}>
      <Water20LLabel />

      <SubscriptionCardHeader
        title="Premium+"
        subtitle="Custom Plan"
        desc="Flexible pricing — based on your usage"
      />

      <BenefitsList
        items={[
          "Set number of premium accounts (1–10+)",
          "Flexible container count (1–20+)",
          "Pay only for used refills",
          "Up to 30% off on volume-based plans",
          "Add-on: Smart Jar Tracking & Analytics",
        ]}
      />

      <Text style={styles.pricingText}>
        ₹{counter * 10}/ month (based on your plan)
      </Text>
      <Text style={styles.processingText}>
        + ₹{processingFee} standard processing fee
      </Text>

      <Counter counter={counter} setCounter={setCounter} />
      <BillingToggle
        billingType={billingType}
        setBillingType={setBillingType}
      />

      <SubscribeButton label="Customize & Subscribe" />

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>
          ₹
          {billingType === "monthly"
            ? counter * pricePerMonth + processingFee
            : counter * priceAYear + processingFee}
        </Text>
      </View>

      <Text style={styles.deliveryNote}>
        All jars are property of AquaCare+ vendors and securly barcoded for
        tracking.
      </Text>

      <NotesList
        title="If a customer damages a jar:"
        notes={[
          "Replacement charge: ₹200 per jar",
          "Continuation option: pay ₹200 to continue",
          "Cancellation option: pay ₹80 maintenance deduction",
        ]}
      />

      <Text style={styles.deliveryNote}>
        Delivery charges may vary based on distance or route optimization.
      </Text>
    </View>
  );
};

// ---------- Styles ----------
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f4f9ff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
    padding: 20,
  },
  headerContainer: { marginBottom: 10 },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#007aff" },
  headerSubtitle: { fontSize: 22, fontWeight: "900" },
  headerDesc: { fontSize: 16, color: "#444", marginTop: 4 },
  pricingText: { marginTop: 4, fontSize: 16 },
  processingText: {
    fontSize: 13,
    color: "#555",
    lineHeight: 18,
    marginBottom: 10,
  },
  benefitsContainer: { marginVertical: 10 },
  benefitItem: { marginTop: 3, flexDirection: "row", gap: 4 },
  billingContainer: {
    flexDirection: "row",
    backgroundColor: "#d8e6fc",
    borderRadius: 25,
    overflow: "hidden",
    marginVertical: 10,
  },
  billingButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  billingText: { fontSize: 14, fontWeight: "500", color: "#007AFF" },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  counterButton: {
    width: 45,
    height: 45,
    backgroundColor: "#e6f0ff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  counterSymbol: { fontSize: 22, color: "#007AFF", fontWeight: "700" },
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
  notesContainer: { marginTop: 2 },
  notesTitle: { marginTop: 4, fontSize: 12, fontWeight: "700" },
  notesItem: {
    fontSize: 15,
    marginTop: 4,
  },
  subscribeButton: {
    backgroundColor: "#007aff",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  subscribeButtonText: { color: "#fff", fontWeight: "600" },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  totalLabel: { fontSize: 16, color: "#333", fontWeight: "600" },
  totalValue: { fontSize: 20, fontWeight: "800", color: "#007AFF" },
  deliveryNote: { marginTop: 8, fontSize: 12 },
  labelContainer: {
    position: "absolute",
    top: 15,
    right: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  labelText: {
    color: "#007AFF",
    fontWeight: "700",
    fontSize: 20,
  },
});
