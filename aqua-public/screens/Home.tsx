import React from "react";
import SubsDisplayCard from "../views/Subscription/SubsDisplayCard";
import { ScrollView, StyleSheet } from "react-native";
import QualityAssuranceCard from "../views/QualityAssurance/QualityAssuranceCard";
import { NormalBookingCard } from "../views/bookingCards/NormalBookingCard";
import SubscribedCard from "../views/Subscription/SubscribedCard";
import HomeContextProvider from "./HomeContext";

export default function HomeMain({ children }: { children?: React.ReactNode }) {
  return (
    <HomeContextProvider>
      <Home />
      {children}
    </HomeContextProvider>
  );
}

export function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <QualityAssuranceCard />
      <SubsDisplayCard />
      <SubscribedCard />
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
