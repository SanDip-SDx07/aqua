import React from "react";
import Subscription from "../views/Subscription/Subscription";
import { ScrollView, StyleSheet } from "react-native";
import QualityAssuranceCard from "../views/QualityAssurance/QualityAssuranceCard";
import { NormalBookingCard } from "../views/bookingCards/NormalBookingCard";

export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <QualityAssuranceCard />
      <Subscription />
      <NormalBookingCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8fb",
    marginTop: 35,
  },
  contentContainer: {
    padding: 16,
    alignItems: "center", // layout children horizontal center
    justifyContent: "flex-start", // layout children vertically from the top
  },
});
