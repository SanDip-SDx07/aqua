import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function SubsFormCard() {
    const jarPrice = 200; // security deposit per jar
    const [jarCount, setJarCount] = useState("1");

    const total = Number(jarCount || 0) * jarPrice;

    const handleSubscribe = () => {
        console.log(`Subscribed for ${jarCount} jar(s) with ₹${total} deposit.`);
        // Trigger payment or navigation
    };

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Subscribe for Water Jars</Text>
            <Text style={styles.subtitle}>Choose number of jars to hold</Text>

            <View style={styles.inputRow}>
                <Text style={styles.label}>Jars</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={jarCount}
                    onChangeText={setJarCount}
                    placeholder="Enter count"
                />
            </View>

            <View style={styles.totalBox}>
                <Text style={styles.totalLabel}>Security Deposit</Text>
                <Text style={styles.totalValue}>₹{total}</Text>
                <Text style={styles.note}>Refundable upon returning all
                    jars</Text>
            </View>

            <View style={styles.divider}/>

            <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>Terms & Flexibility</Text>
                <Text style={styles.infoText}>• 100% refundable deposit after
                    jar return.</Text>
                <Text style={styles.infoText}>• Each 20L jar refill costs
                    ₹40–₹50 (pay per order).</Text>
                <Text style={styles.infoText}>• Hold jars as long as you wish —
                    no daily rent.</Text>
                <Text style={styles.infoText}>• Damaged jars may deduct cost as
                    per brand policy.</Text>
                <Text style={styles.infoText}>• Flexible to pause or cancel
                    anytime via app.</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubscribe}>
                <Text style={styles.buttonText}>Proceed to Subscribe</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        margin: 16,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 3,
    },
    title: {fontSize: 20, fontWeight: "700", color: "#1a1a1a"},
    subtitle: {fontSize: 14, color: "#666", marginBottom: 20},
    inputRow: {flexDirection: "row", alignItems: "center", marginBottom: 12},
    label: {flex: 1, fontSize: 16, color: "#333"},
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 8,
        textAlign: "center",
        fontSize: 16,
    },
    totalBox: {
        backgroundColor: "#f0f7ff",
        borderRadius: 10,
        padding: 12,
        alignItems: "center",
        marginBottom: 20,
    },
    totalLabel: {fontSize: 14, color: "#555"},
    totalValue: {fontSize: 22, fontWeight: "700", color: "#007bff"},
    note: {fontSize: 12, color: "#666"},
    divider: {height: 1, backgroundColor: "#eaeaea", marginVertical: 14},
    infoBox: {marginBottom: 16},
    infoTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginBottom: 6
    },
    infoText: {fontSize: 13, color: "#555", lineHeight: 20},
    button: {
        backgroundColor: "#007bff",
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {color: "#fff", fontWeight: "600", fontSize: 16},
});
