import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  // FlatList,
  ScrollView,
} from "react-native";
import {
  StatusChip,
  ContainerItem,
  DeliverySection,
  FeedbackSection,
} from "../screens/orders/OrderParts";
import OrderContextProvider from "../screens/orders/OrderContext";
import type { Order, RootStackParamList } from "../types";
import { Calendar, CircleCheck, MapPin } from "lucide-react-native";
import type { StackScreenProps } from "@react-navigation/stack";
import { orders } from "../data/orders";

export default function OrderModalScreen({
  route,
}: StackScreenProps<RootStackParamList, "Order">) {
  const { orderId } = route.params;
  const order = orders.find((order) => order.id === orderId);
  return <OrderModal order={order} />;
}

export function OrderModal({ order }: { order?: Order | undefined }) {
  if (!order) return null;

  return (
    <OrderContextProvider>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
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
              <Text style={styles.reorderText}>Order Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </OrderContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8fb",
  },
  contentContainer: {
    paddingHorizontal: 16,
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
  cancelText: { color: "#cf1c1cff", fontSize: 13, fontWeight: "600" },
  reorderText: { color: "#fff", fontSize: 13, fontWeight: "600" },
});
