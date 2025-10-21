import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

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

export default function QAIModel() {
  return (
    <ScrollView style={styles.container}>
      {/* 1. Purity at Every Step */}
      <Section title="1. Purity at Every Step">
        <Text style={styles.paragraph}>
          Every jar you receive through AquaCare+ passes through a strict
          multi-stage purification process, handled at certified local hubs
          operating under AquaCare+ supervision and branding standards.
        </Text>
        <Text style={styles.paragraph}>
          Each hub follows a verified water treatment chain designed to preserve
          the natural taste and freshness of water while meeting national safety
          standards (ISI-compliant).
        </Text>
      </Section>

      {/* 2. Standard Purification Process */}
      <Section title="2. Standard Purification Process">
        <Text style={styles.paragraph}>
          All partner hubs must maintain the following minimum purification
          protocol:
        </Text>
        <View style={styles.list}>
          {[
            "Raw Water Testing — checks pH, TDS, microbial content",
            "Sediment Filtration — removes physical impurities and dust",
            "Activated Carbon Filtration — eliminates chlorine and odor",
            "RO (Reverse Osmosis) — removes dissolved solids and heavy metals",
            "UV Sterilization — neutralizes bacteria and viruses",
            "Ozonation / Mineral Balancing — ensures safe storage life and taste",
            "Final Micron Filtration — guarantees clarity before filling",
          ].map((item, i) => (
            <Text key={i} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
      </Section>

      {/* 3. Packaging & Hygiene Control */}
      <Section title="3. Packaging & Hygiene Control">
        <View style={styles.list}>
          {[
            "ISI-marked or ISI-standard equivalent container",
            "Cleaned, disinfected, and sanitized weekly",
            "Sealed with tamper-proof cap and barcode tag",
            "Labelled with purification type, fill date, and hub info",
          ].map((item, i) => (
            <Text key={i} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
        <Text style={styles.paragraph}>
          Jars failing visual inspection (scratched, cloudy, or cracked) are
          immediately flagged and replaced.
        </Text>
      </Section>

      {/* 4. Quality Tracking System */}
      <Section title="4. Quality Tracking System">
        <Text style={styles.paragraph}>
          Each jar carries a unique barcode or QR code with full traceability:
        </Text>
        <View style={styles.list}>
          {[
            "Vendor/Hub ID",
            "Jar ID & Batch",
            "Fill date/time",
            "Cleaning history",
          ].map((item, i) => (
            <Text key={i} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
        <Text style={styles.paragraph}>
          Customers can scan QR codes in the AquaCare+ app to verify origin,
          quality, and hygiene date.
        </Text>
      </Section>

      {/* 5. Compliance & Certification */}
      <Section title="5. Compliance & Certification">
        <View style={styles.list}>
          {[
            "Complies with BIS IS:14543 (Packaged Drinking Water)",
            "Partner hubs maintain ISI certification or under registration",
            "Monthly water test reports (TDS, pH, microbial)",
            "Worker hygiene and plant maintenance logs",
            "Periodic AquaCare+ audits for consistency and safety",
          ].map((item, i) => (
            <Text key={i} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
      </Section>

      {/* 6. Taste & Freshness Guarantee */}
      <Section title="6. Taste & Freshness Guarantee">
        <View style={styles.list}>
          {[
            "Neutral taste, odor-free, and crystal clear water",
            "TDS maintained between 50–150 mg/L",
            "Stored under clean, controlled conditions",
          ].map((item, i) => (
            <Text key={i} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
        <Text style={styles.paragraph}>
          If customers ever receive water with unusual taste or odor, they can
          report it via the app — it’ll be replaced within 24 hours and
          re-tested immediately.
        </Text>
      </Section>

      {/* 7. Our Promise */}
      <Section title="7. Our Promise">
        <Text style={styles.quote}>
          “Every AquaCare+ jar you receive is freshly filled, safely sealed, and
          purity-verified. No re-used water, no hidden mixing — just
          nature-fresh, RO + UV + Ozone purified water, delivered with care and
          full transparency.”
        </Text>
      </Section>

      {/* 8. Key Product Information */}
      <Section title="8. Key Product Information (as shown on jar label)">
        <View style={styles.table}>
          {[
            ["Brand", "AquaCare+"],
            ["Product", "Packaged Drinking Water"],
            ["Treatment", "RO + UV + Ozone"],
            ["Net Quantity", "20 Litres"],
            ["Batch No.", "AC2025-001"],
            ["Date of Filling", "DD/MM/YYYY"],
            ["Best Before", "30 Days from filling"],
            [
              "License / Certification",
              "BIS IS:14543 (under process / certified)",
            ],
            [
              "Manufactured / Filled by",
              "AquaCare+ Partner Hub (Hub ID: AQP-H002)",
            ],
            ["Customer Care", "1800-XXXX-XXXX / support@aquacare.in"],
          ].map(([label, value], i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.labelCell]}>{label}</Text>
              <Text style={styles.tableCell}>{value}</Text>
            </View>
          ))}
        </View>
      </Section>

      {/* Summary / Footer */}
      <View style={styles.footerCard}>
        <MaterialIcons
          name="water-drop"
          size={22}
          color="#0077cc"
          style={styles.footerIcon}
        />
        <Text style={styles.footerText}>
          “AquaCare+ water is purified through RO, UV, and Ozone — fresh, clean,
          and ISI-standard. Every jar is sealed, barcoded, and traceable. You
          drink it, we guarantee it.”
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff", marginTop: 35 },
  headerCard: {
    backgroundColor: "#f0f8ff",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#0077cc",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 2,
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e6f3ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0077cc",
    flex: 1,
    flexWrap: "wrap",
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
  list: { marginLeft: 8, marginTop: 4 },
  listItem: { fontSize: 14, color: "#333", marginBottom: 4 },
  table: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    marginTop: 6,
    overflow: "hidden",
  },
  tableRow: { flexDirection: "row" },
  tableCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#eee",
    padding: 6,
    fontSize: 13,
    color: "#333",
  },
  labelCell: { flex: 0.8, fontWeight: "600", backgroundColor: "#f9f9f9" },
  quote: {
    fontStyle: "italic",
    fontSize: 14,
    color: "#0077cc",
    lineHeight: 20,
    borderLeftWidth: 3,
    borderLeftColor: "#0077cc",
    paddingLeft: 10,
  },
  footerCard: {
    backgroundColor: "#f8fafc",
    borderRadius: 10,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  footerIcon: { marginRight: 8 },
  footerText: {
    flex: 1,
    fontSize: 14,
    color: "#0077cc",
    fontStyle: "italic",
    lineHeight: 20,
  },
});
