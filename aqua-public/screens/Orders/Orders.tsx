import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

import {
  StatusChip,
  ContainerItem,
  DeliverySection,
  FeedbackSection,
} from "./OrderParts";
import OrderContextProvider from "./OrderContext";
import type { Order } from "./OrderTypes";
import { Calendar, CircleCheck, MapPin } from "lucide-react-native";
import WaterJarIcon from "../../assets/WaterJarIcon";

export const orders: Order[] = [
  {
    id: "#ORD-2941",
    tag: "Premium",
    status: "Delivered",
    orderDate: "22 Oct 2025, 9:30 AM",
    location: "221, MG Road, Kolkata",
    quantity: 3,
    containers: [
      { id: "CN-10012", type: "Order", status: "Delivered" },
      { id: "CN-10009", type: "Pickup", status: "In Transit" },
      { id: "CN-10015", type: "Order", status: "Delivered" },
    ],
    delivery: {
      id: "DLV-412",
      partner: { id: "DP-104", name: "Rahul Sharma" },
      deliveredAt: "22 Oct 2025, 10:45 AM",
    },
    feedback: 4,
  },
  {
    id: "#ORD-2942",
    tag: "Regular",
    status: "In Progress",
    orderDate: "23 Oct 2025, 2:15 PM",
    location: "56, Park Street, Kolkata",
    quantity: 2,
    containers: [
      { id: "CN-10020", type: "Order", status: "In Progress" },
      { id: "CN-10021", type: "Pickup", status: "Pending" },
    ],
    delivery: {
      id: "DLV-413",
      partner: { id: "DP-105", name: "Anita Singh" },
    },
    feedback: undefined,
  },
  {
    id: "#ORD-2943",
    tag: "Premium",
    status: "Pending",
    orderDate: "24 Oct 2025, 11:00 AM",
    location: "78, Camac Street, Kolkata",
    quantity: 1,
    containers: [{ id: "CN-10025", type: "Order", status: "Pending" }],
    delivery: undefined,
    feedback: undefined,
  },
];

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
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {orders && orders.map((order) => <Order key={order.id} order={order} />)}
    </ScrollView>
  );
}

export function Order({ order }: { order: Order }) {
  if (!order) return null;

  return (
    <OrderContextProvider>
      <View style={styles.card}>
        {/* Header */}
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

        {/* Containers List */}
        {/* <FlatList
          data={order.containers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ContainerItem container={item} />}
          scrollEnabled={false} // important: expands instead of scrolling
          nestedScrollEnabled={true} // optional for nested behavior
          style={{ marginVertical: 8 }}
        /> */}
        {order.containers?.map((container) => (
          <ContainerItem key={container.id} container={container} />
        ))}

        {/* Delivery Section */}
        {order.delivery && <DeliverySection delivery={order.delivery} />}

        {/* Feedback / Report Section */}
        {order.feedback && <FeedbackSection rating={order.feedback} />}

        {/* Action Buttons */}
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.feedbackText}>Order Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </OrderContextProvider>
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
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
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
  buttonText: { color: "#cf1c1cff", fontSize: 13, fontWeight: "600" },
  feedbackText: { color: "#fff", fontSize: 12 },
});
