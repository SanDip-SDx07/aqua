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
const SubscriptionCardHeader = ({
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

const BenefitsList = ({ items }: { items?: string[] }) => (
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

const BillingToggle = () => (
  <View style={styles.billingContainer}>
    <TouchableOpacity style={styles.billingButton}>
      <Text style={styles.billingText}>Monthly</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.billingButton}>
      <Text style={styles.billingText}>Yearly</Text>
    </TouchableOpacity>
  </View>
);

const Counter = () => (
  <View style={styles.counterContainer}>
    <TouchableOpacity style={styles.counterButton}>
      <Text style={styles.counterSymbol}>−</Text>
    </TouchableOpacity>
    <TextInput value="1" editable={false} style={styles.counterInput} />
    <TouchableOpacity style={styles.counterButton}>
      <Text style={styles.counterSymbol}>+</Text>
    </TouchableOpacity>
  </View>
);

const NotesList = ({ title, notes }: { title?: string; notes?: string[] }) => (
  <View style={styles.notesContainer}>
    <Text style={styles.notesTitle}>{title}</Text>
    {notes &&
      notes.map((note, idx) => (
        <View key={idx} style={styles.notesItem}>
          <CircleCheck size={10} />
          <Text>{note}</Text>
        </View>
      ))}
  </View>
);

const SubscribeButton = ({ label }: { label?: string }) => (
  <TouchableOpacity style={styles.subscribeButton}>
    <Text style={styles.subscribeButtonText}>{label}</Text>
  </TouchableOpacity>
);

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
}) => (
  <View style={styles.cardContainer}>
    <SubscriptionCardHeader title="Premium" subtitle={subsType} />

    <Text style={styles.pricingText}>
      ₹{pricePerMonth}/month (₹{priceAYear}/year)
    </Text>
    <Text style={styles.processingText}>+ ₹{processingFee} processing fee</Text>

    <BenefitsList
      items={[
        `${numberOfPremiumAccount} Premium Account`,
        `${numberOfPremiumAccount} Container Access`,
        "20% OFF on every refill",
        "No Container Deposits / Rent",
        "Basic Priority Support",
      ]}
    />

    <BillingToggle />
    <SubscribeButton label="Subscribe" />

    <View style={styles.totalContainer}>
      <Text style={styles.totalLabel}>Total</Text>
      <Text style={styles.totalValue}>₹{"totalAmount"}</Text>
    </View>

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

export const CustomBaseCard = () => (
  <View style={styles.cardContainer}>
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

    <Text style={styles.pricingText}>₹10 / month (based on your plan)</Text>
    <Text style={styles.processingText}>+ ₹20 standard processing fee</Text>

    <Counter />
    <BillingToggle />

    <View style={styles.totalContainer}>
      <Text style={styles.totalLabel}>Total</Text>
      <Text style={styles.totalValue}>₹{"totalAmount"}</Text>
    </View>

    <SubscribeButton label="Customize & Subscribe" />

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

// ---------- Styles ----------
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f4f9ff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 10,
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
  benefitItem: { marginTop: 3 },
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
  billingText: { fontSize: 14, fontWeight: "500", color: "#007AFF" },
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
  notesContainer: { marginTop: 10 },
  notesTitle: { marginTop: 8, fontSize: 12, fontWeight: "700" },
  notesItem: { fontSize: 12, marginTop: 2 },
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
});
