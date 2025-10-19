import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";

import { Home, ClipboardList, Wallet, Bell, User } from "lucide-react-native";

import HomeScreen from "../screens/Home";
import OrdersScreen from "../screens/Orders";
import WalletScreen from "../screens/Wallets";
import NotificationScreen from "../screens/Notification";
import ProfileScreen from "../screens/Profile";

import { theme } from "../constants/styles";

const BottomTabs = createBottomTabNavigator();
const curTheme = "light";

export default function NavBottom() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackground: HeaderBackground,
          headerTintColor: "#fff",
        }}
      >
        <BottomTabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
          }}
        />
        <BottomTabs.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            title: "Orders",
            tabBarLabel: "Orders",
            tabBarIcon: ({ color, size }) => (
              <ClipboardList size={size} color={color} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Wallets"
          component={WalletScreen}
          options={{
            title: "Wallet",
            tabBarLabel: "Wallet",
            tabBarIcon: ({ color, size }) => (
              <Wallet size={size} color={color} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: "Notification",
            tabBarLabel: "Notification",
            tabBarIcon: ({ color, size }) => <Bell size={size} color={color} />,
          }}
        />
        <BottomTabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

const HeaderBackground = () => {
  return (
    <LinearGradient
      colors={theme[curTheme].colors.headerGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }} // horizontal gradient
      style={{ flex: 1 }}
    />
  );
};
