import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Droplet, Info } from "lucide-react-native";

export default function SubsDisplayCard() {
  return (
    <LinearGradient
      colors={["#f0f8ff", "#cfe7fdff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.topRow}>
        <View style={styles.iconContainer}>
          <Droplet size={50} color="#097bfdff" />
        </View>
        <Text style={styles.priceBadge}>
          AquaCare+ Exclusive Service Subscription
        </Text>
      </View>

      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.subscribeBtn} onPress={() => {}}>
          <Text style={styles.subscribeText}>Explore Premium</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoBtn} onPress={() => {}}>
          <Info size={24} color="#000" />
          <Text style={styles.infoText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: "100%",
  },
  textGroup: { flex: 1, flexDirection: "row", gap: 8 },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
    marginRight: 12,
    alignItems: "stretch",
  },
  featuresContainer: {
    flex: 1,
    gap: 7,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  feature: {
    fontSize: 14,
    marginBottom: 4,
    color: "#000",
  },
  priceBadge: {
    width: "100%",
    flex: 1,
    fontWeight: "700",
    fontSize: 16,
    color: "#000",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  subscribeBtn: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  subscribeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  infoBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    color: "#000",
    marginLeft: 4,
    fontWeight: "500",
  },
});

{
  /* <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        {activeModel === "LearnMore" ? (
          <SubscriptionTerms />
        ) : activeModel === "ExplorePremium" ? (
          <SubscriptionVarents />
        ) : null}
      </Modal> */
}
