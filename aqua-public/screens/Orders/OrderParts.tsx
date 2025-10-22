// ModernOrderComponents.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import type { Container, DeliveryInfo, OrderStatus } from "./OrderTypes";
import { Star, Calendar, MapPin, CircleCheck } from "lucide-react-native";

// -------- StatusChip --------
const statusColors: Record<OrderStatus, { text: string; bg: string }> = {
  Delivered: { text: "#2E7D32", bg: "#E8F5E9" },
  "In Progress": { text: "#FFB300", bg: "#FFF8E1" },
  Pending: { text: "#616161", bg: "#F5F5F5" },
  Cancelled: { text: "#D32F2F", bg: "#FFEBEE" },
  "In Transit": { text: "#1976D2", bg: "#E3F2FD" },
};

export function StatusChip({ status }: { status: OrderStatus }) {
  const color = statusColors[status];
  return (
    <View style={[styles.chip, { backgroundColor: color.bg }]}>
      <Text style={[styles.chipText, { color: color.text }]}>{status}</Text>
    </View>
  );
}

// -------- ContainerItem --------
export function ContainerItem({ container }: { container: Container }) {
  return (
    <View style={styles.containerCard}>
      <View style={styles.containerRow}>
        <Text style={styles.containerType}>{container.type}</Text>
        <Text style={styles.containerId}>{container.id}</Text>
      </View>
      <View style={[styles.containerRow, { marginTop: 6 }]}>
        <StatusChip status={container.status} />
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// -------- DeliverySection --------
export function DeliverySection({ delivery }: { delivery?: DeliveryInfo }) {
  if (!delivery) return null;
  return (
    <View style={styles.containerCard}>
      <Text style={styles.containerText}>Delivery ID: {delivery.id}</Text>
      <Text style={styles.containerText}>
        Partner: {delivery.partner.name} ({delivery.partner.id})
      </Text>
      {delivery.deliveredAt && (
        <Text style={styles.containerText}>
          Delivered: {delivery.deliveredAt}
        </Text>
      )}
      <TouchableOpacity style={styles.trackButton}>
        <Text style={styles.trackButtonText}>Track on Map</Text>
      </TouchableOpacity>
    </View>
  );
}

// -------- FeedbackSection --------
export function FeedbackSection({ rating }: { rating?: number }) {
  return (
    <View style={styles.feedbackContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.feedbackText}>Feedback: </Text>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={20}
            color={rating && index < rating ? "#FFD700" : "#E0E0E0"}
          />
        ))}
      </View>
      <View style={styles.feedbackActions}>
        <TouchableOpacity style={styles.feedbackButton}>
          <Text style={{ color: "#fff" }}>Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// -------- Styles --------
const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  chipText: { fontSize: 12, fontWeight: "600" },

  containerCard: {
    flexDirection: "column",
    width: "100%",
    marginVertical: 6,
    padding: 12,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerType: { fontSize: 14, fontWeight: "600", color: "#333" },
  containerId: { fontSize: 13, color: "#616161" },

  viewButton: {
    backgroundColor: "#1976D2",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  viewButtonText: { color: "#fff", fontSize: 12, fontWeight: "600" },

  trackButton: {
    marginTop: 8,
    backgroundColor: "#0288D1",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  trackButtonText: { color: "#fff", fontSize: 13, fontWeight: "600" },

  containerText: { fontSize: 14, color: "#424242", marginVertical: 2 },

  feedbackContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  feedbackText: { fontSize: 14, fontWeight: "500", color: "#333" },
  reportButton: {
    backgroundColor: "#D32F2F",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
  },
  reportButtonText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  feedbackActions: { flexDirection: "row", marginTop: 8 },
  feedbackButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 4,
    marginRight: 6,
    backgroundColor: "#f55959ff",
  },
});
