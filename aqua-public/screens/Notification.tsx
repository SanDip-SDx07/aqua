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
        navigation.push("notification", { notificationId: notification?.id })
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

// ================= Full Notification =================
// export function NotificationScreen({
//   notification,
// }) => {
//   const { width } = useWindowDimensions();
//   const isTablet = width >= 768;

//   return (
//     <View style={[styles.fullContainer, { padding: isTablet ? 20 : 16 }]}>
//       <Text style={[styles.fullTitle, { fontSize: isTablet ? 22 : 18 }]}>
//         {notification.title}
//       </Text>
//       <Text style={[styles.fullMessage, { fontSize: isTablet ? 18 : 14 }]}>
//         {notification.message}
//       </Text>
//       <Text style={[styles.fullDate, { fontSize: isTablet ? 16 : 12 }]}>
//         {notification.date}
//       </Text>
//     </View>
//   );
// };

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
  fullContainer: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginVertical: 8,
    padding: 16,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4, // Android
  },
  fullTitle: {
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 8,
  },
  fullMessage: {
    color: "#444",
    marginBottom: 10,
    lineHeight: 20,
  },
  fullDate: {
    fontSize: 12,
    color: "#999",
    textAlign: "right",
  },
});
