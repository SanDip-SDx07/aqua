import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import SubsCard from "../views/SubsCard";
import SubsFormCard from "../views/SubsFormCard";
import ActivationCard from "../views/ActivationCard";

export default function Home() {
    return <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
    >
        <SubsCard/>
        <SubsFormCard/>
        <ActivationCard
            amount={800}
            totalJars={4}
            startDate="18 Oct 2025"
            lastDelivery="17 Oct 2025"
            onBook={() => console.log("Book now")}
            onUpgrade={() => console.log("Upgrade")}
            onCancel={() => console.log("Cancel")}
        />
    </ScrollView>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f8fb",
    },
    contentContainer: {
        padding: 16,
        alignItems: "center", // layout children horizontal center
        justifyContent: "flex-start", // layout children vertically from the top
    },
});