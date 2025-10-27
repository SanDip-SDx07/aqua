import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

import { Home, ClipboardList, Wallet, Bell, User } from "lucide-react-native";

import HomeScreen from "../../screens/home/Home";
import OrdersScreen from "../../screens/orders/Orders";
import WalletScreen from "../../screens/wallet/Wallets";
import NotificationScreen from "../../screens/Notification";
import ProfileScreen from "../../screens/profile/Profile";

const BottomTabs = createBottomTabNavigator();

export default function TabNavBottom() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <BottomTabs.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <BottomTabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
          }}
        />
        <BottomTabs.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            tabBarLabel: "Orders",
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <ClipboardList size={size} color={color} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Wallets"
          component={WalletScreen}
          options={{
            tabBarLabel: "Wallet",
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <Wallet size={size} color={color} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: "Notification",
            headerShown: true,
            tabBarIcon: ({ color, size }) => <Bell size={size} color={color} />,
          }}
        />
        <BottomTabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: true,
            tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          }}
        />
      </BottomTabs.Navigator>
    </SafeAreaView>
  );
}
