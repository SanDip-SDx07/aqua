import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function SubsCard() {
    const handleSubscribe = () => {
        console.log("Subscribe clicked");
        // navigate to plan details OR trigger the subscription flow
    };

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>Water Jar Subscription</Text>
                <Text style={styles.subTitle}>20L Jar • ₹200 Deposit</Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.price}>₹40 / Refill</Text>
                <Text style={styles.desc}>
                    Enjoy hassle-free doorstep delivery every day or on
                    demand.{"\n"}
                    Modify or pause anytime.
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubscribe}>
                <Text style={styles.buttonText}>Subscribe Now</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 16,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
    },
    header: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#222",
    },
    subTitle: {
        fontSize: 14,
        color: "#666",
    },
    details: {
        marginVertical: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0088ff",
        marginBottom: 6,
    },
    desc: {
        fontSize: 13,
        color: "#555",
        lineHeight: 18,
    },
    button: {
        backgroundColor: "#007bff",
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 15,
    },
});
