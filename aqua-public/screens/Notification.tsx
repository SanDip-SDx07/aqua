import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import type { Notification, RootStackParamList } from "../types";
import { sampleNotifications } from "../data/notifications";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

export default function Notification() {
  const notifications: Notification[] = sampleNotifications;
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#f6f8fb", //marginTop: 25
      }}
      contentContainerStyle={{
        padding: 16,
        alignItems: "center", // layout children horizontal center
        justifyContent: "flex-start", // layout children vertically from the top
      }}
    >
      {notifications.map((notification, index) => (
        <ShortNotification key={index} notification={notification} />
      ))}
    </ScrollView>
  );
}

// ================= Short Notification =================
export function ShortNotification({
  notification,
}: {
  notification: Notification;
}) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Tabs">>();

  return (
    <TouchableOpacity
      style={{ width: "100%" }}
      onPress={() =>
        navigation.push("Notification", { notificationId: notification?.id })
      }
    >
      <View style={[styles.shortContainer, { padding: isTablet ? 16 : 12 }]}>
        <Text style={styles.shortTitle} numberOfLines={1}>
          {notification.title}
        </Text>
        <Text style={styles.shortMessage} numberOfLines={2}>
          {notification.message}
        </Text>
        <Text style={styles.shortDate}>{notification.date}</Text>
      </View>
    </TouchableOpacity>
  );
}

// ================= Styles =================
const styles = StyleSheet.create({
  shortContainer: {
    padding: 12,
    marginVertical: 6,
    width: "100%",
    borderBottomColor: "#838383ff",
    borderBottomWidth: 1,
  },
  shortTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: "#1d1d1d",
    marginBottom: 4,
  },
  shortMessage: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },
  shortDate: {
    fontSize: 12,
    color: "#999",
    textAlign: "right",
  },
});
