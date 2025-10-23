import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  // FlatList,
  ScrollView,
} from "react-native";
import { StatusChip } from "./OrderParts";
import OrderContextProvider from "./OrderContext";
import type { Order, RootStackParamList } from "../../types";
import { Calendar, CircleCheck, MapPin } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { orders } from "../../data/orders";

// export default function OrdersMain() {
//   return (
//     <FlatList
//       data={orders}
//       keyExtractor={(order) => order.id}
//       renderItem={({ item }) => <Order order={item} />}
//       contentContainerStyle={styles.contentContainer}
//       showsVerticalScrollIndicator={false}
//     />
//   );
// }

export default function OrdersMain() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#f6f8fb",
        // marginTop: 35
      }}
      contentContainerStyle={{
        padding: 16,
        alignItems: "center", // layout children horizontal center
        justifyContent: "flex-start", // layout children vertically from the top
      }}
    >
      {orders && orders.map((order) => <Order key={order.id} order={order} />)}
    </ScrollView>
  );
}

export function Order({ order }: { order?: Order }) {
  if (!order) return null;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Tabs">>();

  return (
    <OrderContextProvider>
      <View style={styles.card}>
        {/* Header */}
        <TouchableOpacity
          onPress={() => navigation.push("Order", { orderId: order?.id })}
        >
          <View style={styles.header}>
            <Text style={styles.orderId}>#{order.id}</Text>
            <StatusChip status={order.status} />
          </View>

          {/* Tag */}
          <View style={[styles.tag]}>
            <Text style={styles.tagText}>{order.tag}</Text>
          </View>

          {/* Order Info */}
          <View style={styles.info}>
            <View style={styles.infoRow}>
              <Calendar size={18} />
              <Text style={styles.infoText}>{order.orderDate}</Text>
            </View>
            <View style={styles.infoRow}>
              <MapPin size={18} />
              <Text style={styles.infoText}>{order.location}</Text>
            </View>
            <View style={styles.infoRow}>
              <CircleCheck size={18} />
              <Text style={styles.infoText}>{order.quantity} Containers</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Action Buttons */}
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.reorderText}>Order Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </OrderContextProvider>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderId: { fontSize: 12, color: "#757575", fontWeight: "500" },
  tag: {
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 6,
  },
  tagText: { color: "#007aff", fontSize: 18, fontWeight: "700" },
  info: { marginTop: 10 },
  infoRow: { flexDirection: "row", alignItems: "center", marginVertical: 2 },
  infoText: { fontSize: 13, marginLeft: 6, color: "#424242" },

  actionsRow: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 6,
    alignItems: "center",
  },
  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#F44336",
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelText: { color: "#cf1c1cff", fontSize: 13, fontWeight: "600" },
  reorderText: { color: "#fff", fontSize: 13, fontWeight: "600" },
});
