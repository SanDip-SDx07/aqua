// TermsAndConditions.tsx
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

export default function STCModel() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        💧 AquaCare+ Smart Water Subscription — Terms & Conditions
      </Text>

      {/* 1. About AquaCare+ */}
      <Section title="1. About AquaCare+">
        <Text style={styles.paragraph}>
          AquaCare+ is a smart, flexible water delivery subscription designed
          for homes, offices, and organizations that value clean water, hygiene,
          and transparent service.
        </Text>
        <Text style={styles.paragraph}>
          Instead of owning jars, you simply subscribe to our service, and we
          handle everything — jar maintenance, hygiene, and priority delivery.
        </Text>
        <Text style={styles.paragraph}>
          You pay a small annual subscription fee per jar, covering the service,
          not the physical jar. This ensures every customer gets fresh,
          maintained, and quality-assured water jars — without worrying about
          deposits or replacements.
        </Text>
      </Section>

      {/* 2. Why Subscription, Not Deposit? */}
      <Section title="2. Why Subscription, Not Deposit?">
        <Text style={styles.paragraph}>
          Traditional water suppliers often charge a security deposit (₹150–₹200
          per jar) and still provide no guarantee of hygiene, service speed, or
          support. With AquaCare+, we replaced that model with a service-based
          subscription that covers everything.
        </Text>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableHeader, styles.cellLeft]}>Feature</Text>
            <Text style={styles.tableHeader}>Local Vendor</Text>
            <Text style={styles.tableHeader}>AquaCare+</Text>
          </View>

          {[
            [
              "Jar Deposit",
              "₹150–₹200 (non-refundable)",
              "₹120/year is service subscription",
            ],
            ["Refill Rate", "₹40–₹50", "20% off standard rate"],
            ["Delivery", "Limited / Delayed", "Priority scheduling"],
            [
              "Hygiene",
              "Uncertain / Not-disclosed",
              "Regular cleaning & inspection with Update",
            ],
            ["Support", "Minimal", "In-app + hub support"],
            ["Replacement", "Customer responsible", "Vendor-managed"],
          ].map(([feature, local, aqua], idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.cellLeft]}>{feature}</Text>
              <Text style={styles.tableCell}>{local}</Text>
              <Text style={styles.tableCell}>{aqua}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.paragraph}>
          With AquaCare+, you don’t “own” the jar — you own the service
          experience.
        </Text>
      </Section>

      {/* 3. Subscription Plans */}
      <Section title="3. Subscription Plans">
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableHeader, styles.cellLeft]}>Plan Type</Text>
            <Text style={styles.tableHeader}>Jars</Text>
            <Text style={styles.tableHeader}>Fee</Text>
            <Text style={styles.tableHeader}>Ideal For</Text>
          </View>
          {[
            ["Single Plan", "1", "₹120", "Individual use"],
            ["Family Plan", "2", "₹240", "Homes needing 2 jars"],
            ["Enterprise Plan", "6", "₹600", "Offices / institutions"],
            ["Custom Plan", "1–n", "₹100/jar", "Flexible any scale"],
          ].map(([type, jars, fee, ideal], idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.cellLeft]}>{type}</Text>
              <Text style={styles.tableCell}>{jars}</Text>
              <Text style={styles.tableCell}>{fee}</Text>
              <Text style={styles.tableCell}>{ideal}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.paragraph}>💡 Key Features for All Plans:</Text>
        <View style={styles.list}>
          {[
            "20% discount on every refill",
            "Priority delivery based on hub schedule",
            "Assured hygiene with 2-day cleaning cycle",
            "Full jar lifecycle tracking",
            "App-based booking, upgrades, and support",
          ].map((item, idx) => (
            <Text key={idx} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
      </Section>

      {/* 4. How It Works */}
      <Section title="4. How It Works">
        <View style={styles.list}>
          {[
            "Choose your plan — based on your needs",
            "Pay once a year — one small annual fee per jar",
            "Book anytime — use “Book” button in the app",
            "Pay for water only after delivery",
            "Track jars — each jar is barcoded and scanned",
            "Enjoy peace of mind — hygiene and replacements handled by us",
          ].map((item, idx) => (
            <Text key={idx} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
      </Section>

      {/* 5. Delivery & Scheduling */}
      <Section title="5. Delivery & Scheduling">
        <Text style={styles.paragraph}>
          Deliveries are handled by verified Delivery Partners. Delivery charges
          may apply based on distance or route optimization.
        </Text>
        <Text style={styles.paragraph}>
          Subscribers get priority service and can view live delivery status in
          the app.
        </Text>
        <Text style={styles.paragraph}>
          Failed or incorrect deliveries can be reported via the app for quick
          resolution.
        </Text>
      </Section>

      {/* 6. Jar Management & Hygiene */}
      <Section title="6. Jar Management & Hygiene">
        <Text style={styles.paragraph}>
          All jars remain property of AquaCare+ vendors and are barcoded for
          tracking and hygiene. Deep cleaning is done twice per week. Damaged
          jars are replaced immediately.
        </Text>

        <Text style={styles.paragraph}>If a customer damages a jar:</Text>
        <View style={styles.list}>
          {[
            "Replacement charge: ₹200 per jar",
            "Continuation option: pay ₹200 to continue",
            "Cancellation option: pay ₹80 maintenance deduction",
          ].map((item, idx) => (
            <Text key={idx} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
      </Section>

      {/* 7. Payments & Wallet */}
      <Section title="7. Payments & Wallet">
        <View style={styles.list}>
          {[
            "Subscription paid yearly (digital or cash)",
            "Refill payment auto-deducted after delivery",
            "Recharge wallet anytime",
            "No hidden fees — all visible in Wallet History",
          ].map((item, idx) => (
            <Text key={idx} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
      </Section>

      {/* 8. Cancellation & Renewal */}
      <Section title="8. Cancellation & Renewal">
        <View style={styles.list}>
          {[
            "Cancel anytime from app",
            "Subscription valid until end of year",
            "Renew manually after expiry",
            "Jars collected after cancellation; damage fees may apply",
          ].map((item, idx) => (
            <Text key={idx} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
      </Section>

      {/* 9. Transparency & Trust */}
      <Section title="9. Transparency & Trust">
        <Text style={styles.paragraph}>
          AquaCare+ ensures every jar, refill, and transaction is digitally
          logged. You can view hub, delivery, and cleaning data in real time.
        </Text>
      </Section>

      {/* 10. Terms Summary */}
      <Section title="10. Terms Summary">
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableHeader, styles.cellLeft]}>Category</Text>
            <Text style={styles.tableHeader}>Old Practice</Text>
            <Text style={styles.tableHeader}>AquaCare+ Approach</Text>
          </View>
          {[
            ["Deposit", "₹150–₹200 non-refundable", "₹120/year service-based"],
            ["Ownership", "Customer-owned", "Vendor-managed"],
            ["Damage Policy", "Replace at own cost", "Flat ₹200 replacement"],
            ["Flexibility", "Fixed vendors", "Switch or cancel anytime"],
            ["Refill Model", "Pay per visit", "Wallet auto-deduction"],
            ["Transparency", "Paper slips", "Full digital record"],
            ["Hygiene", "Unknown", "Regular 2-day cleaning"],
          ].map(([cat, old, newVal], idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.cellLeft]}>{cat}</Text>
              <Text style={styles.tableCell}>{old}</Text>
              <Text style={styles.tableCell}>{newVal}</Text>
            </View>
          ))}
        </View>
      </Section>

      {/* 11. Important Notes */}
      <Section title="11. Important Notes">
        <View style={styles.list}>
          {[
            "AquaCare+ is a service, not a deposit or asset purchase.",
            "Prices may vary by region, logistics, and taxes.",
            "Company may update plans with prior notice.",
            "Fraud or resale of jars leads to termination.",
          ].map((item, idx) => (
            <Text key={idx} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
      </Section>

      {/* Final Message */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          “AquaCare+ makes clean water effortless. One small subscription, full
          year of peace — no deposits, no ownership hassle, no surprises. Save
          more, stay hydrated, and let us handle the rest.”
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: "#0077cc",
  },
  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#222",
  },
  sectionContent: { marginLeft: 4 },
  paragraph: { fontSize: 14, color: "#333", lineHeight: 20, marginBottom: 8 },
  list: { marginLeft: 8 },
  listItem: { fontSize: 14, color: "#333", marginBottom: 4 },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginVertical: 8,
  },
  tableRow: { flexDirection: "row" },
  tableHeader: {
    flex: 1,
    padding: 6,
    fontWeight: "600",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ddd",
    textAlign: "center",
    fontSize: 12,
  },
  tableCell: {
    flex: 1,
    padding: 6,
    borderWidth: 1,
    borderColor: "#eee",
    textAlign: "center",
    fontSize: 12,
  },
  cellLeft: { textAlign: "left" },
  footer: {
    backgroundColor: "#f8fafc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 40,
  },
  footerText: {
    fontSize: 14,
    color: "#0077cc",
    fontStyle: "italic",
    textAlign: "center",
  },
});
