import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import type { Notification, RootStackParamList } from "../../types";
import { sampleNotifications } from "../../data/notifications";
import type { StackScreenProps } from "@react-navigation/stack";

export default function NotificationModelScreen({
  route,
}: StackScreenProps<RootStackParamList, "Notification">) {
  const { notificationId } = route.params;
  const notifications: Notification[] = sampleNotifications;
  const notification = notifications.find(
    (notification) => notification?.id === notificationId
  );
  return <NotificationModal notification={notification} />;
}

// ================= Full Notification =================
export function NotificationModal({
  notification,
}: {
  notification?: Notification | undefined;
}) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  if (!notification) return null;
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#f6f8fb", //marginTop: 25
      }}
      contentContainerStyle={{
        paddingHorizontal: 16,
        alignItems: "center", // layout children horizontal center
        justifyContent: "flex-start", // layout children vertically from the top
      }}
    >
      <View style={[styles.fullContainer, { padding: isTablet ? 20 : 16 }]}>
        <Text style={[styles.fullTitle, { fontSize: isTablet ? 22 : 18 }]}>
          {notification.title}
        </Text>
        <Text style={[styles.fullMessage, { fontSize: isTablet ? 18 : 14 }]}>
          {notification.message}
        </Text>
        <Text style={[styles.fullDate, { fontSize: isTablet ? 16 : 12 }]}>
          {notification.date}
        </Text>
      </View>
    </ScrollView>
  );
}

// ================= Styles =================
const styles = StyleSheet.create({
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
