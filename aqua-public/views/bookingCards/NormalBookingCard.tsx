import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BenefitsList,
  Counter,
  NotesList,
  SubscriptionCardHeader,
  Water20LLabel,
} from "../Subscription/SubscriptionCards";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Info } from "lucide-react-native";
import DaysSlider from "../../components/DaysSlider";

export function NormalBookingCard({
  distance = 2,
  deliveryCharge = 5,
  containerRentPerDay = 5,
  refillPrice = 42,
}: {
  distance?: number;
  deliveryCharge?: number;
  containerRentPerDay?: number;
  refillPrice?: number;
}) {
  const [counter, setCounter] = React.useState<number>(1 as number);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const calcDeliveryCharge = distance > 1 ? (distance - 1) * deliveryCharge : 0;
  const totalBillingAmount = counter * refillPrice + calcDeliveryCharge;

  return (
    <View style={styles.cardContainer}>
      <Image
        source={require("../../assets/banner-2.png")}
        style={styles.imageOverlay}
        resizeMode="cover"
      />

      <LinearGradient
        colors={["#f0f8ffff", "#cfe7fd67", "#cfe7fdff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.contentContainer}
      >
        <Water20LLabel />

        <SubscriptionCardHeader
          title="Regular"
          subtitle="Flexiable Booking"
          desc="Flexible pricing — based on your usage"
        />

        <BenefitsList
          items={[
            "Flexible container count (1–20+)",
            `Container Rent ₹ ${containerRentPerDay}/day (1 day off)`,
            "0 Processing Fee",
          ]}
        />

        <Counter counter={counter} setCounter={setCounter} color="#fff" />

        <DaysSlider />

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>₹{totalBillingAmount}</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => setModalVisible(true)}
          >
            <Info size={20} color="#007aff" />
          </TouchableOpacity>
        </View>

        <QuickPopup
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        >
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
        </QuickPopup>
      </LinearGradient>
    </View>
  );
}

const QuickPopup = ({
  children,
  modalVisible,
  setModalVisible,
}: {
  children: React.ReactNode;
  modalVisible: boolean;
  setModalVisible: (key: boolean) => void;
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true} // Crucial for the background to be visible
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)} // Handle Android back button
    >
      <View style={styles.centeredView}>
        <View style={styles.popupModal}>
          <SafeAreaView>{children}</SafeAreaView>
        </View>
      </View>
    </Modal>
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
    marginVertical: 15,
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  contentContainer: {
    padding: 20,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.3,
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
    marginBottom: 10,
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
  buttonRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 8,
  },

  bookButton: {
    flex: 1,
    backgroundColor: "#007aff",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },

  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  infoButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark, translucent overlay
  },

  // 2. STYLE FOR THE ACTUAL POPUP BOX (your `styles.popupModal`)
  popupModal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "90%", // Control the size of the popup box
    maxHeight: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
});
