import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Droplet, Info } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Tabs: undefined;
  AquaCareModal: undefined;
  PremiumModal: undefined;
  TermsModal: undefined;
};

export default function SubsDisplayCard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Tabs">>();

  return (
    <LinearGradient
      colors={["#f0f8ff", "#cfe7fd"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.iconContainer}>
        <Droplet size={40} color="#0077cc" />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>AquaCare+ Exclusive Service</Text>

        <View style={styles.bottomRow}>
          <TouchableOpacity
            style={styles.subscribeBtn}
            onPress={() => navigation.push("PremiumModal")}
          >
            <Text style={styles.subscribeText}>Explore Premium</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => navigation.push("TermsModal")}
          >
            <Info size={18} color="#0077cc" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    padding: 16,
    backgroundColor: "#f0f8ff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e6f3ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginBottom: 10,
  },
  bottomRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  subscribeBtn: {
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
  subscribeText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
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
  infoText: {
    fontSize: 14,
    color: "#0077cc",
    fontWeight: "500",
    marginLeft: 4,
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
