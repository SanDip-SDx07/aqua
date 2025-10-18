import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import SubsCard from "./views/SubsCard";
import SubsFormCard from "./views/SubsFormCard";

export default function App() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            <SubsCard/>
            <SubsFormCard/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f8fb",
    },
    contentContainer: {
        padding: 16,
        alignItems: "center", // layout children horizontal center
        justifyContent: "flex-start", // layout children vertically from top
    },
});
