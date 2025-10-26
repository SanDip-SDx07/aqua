import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import type { RootStackParamList } from "../../types";

import NavBottom from "./NavBottom";
import QAIModel from "../modals/QAIModal";
import SubsModel from "../modals/SubsModal";
import STCModel from "../modals/STCModal";
import OrderModalScreen from "../modals/OrderModal";
import TransactionHistory from "../modals/WHModal";
import NotificationModelScreen from "../modals/NotifyModal";
import AuthEntry from "../views/auth/Entry";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavStack({
  loginOptions,
}: {
  loginOptions: { authScreen: boolean; id: string };
}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loginOptions.authScreen ? (
          <Stack.Screen
            name="Auth"
            component={AuthEntry}
            initialParams={{
              role: "user",
              imageBgUrl: require("../../assets/banner-2.png"),
            }}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Group>
            {/* Main */}
            <Stack.Screen
              name="Tabs"
              component={NavBottom}
              options={{ headerShown: false }}
            />

            {/* Model */}
            <Stack.Screen
              name="AquaCare+"
              component={QAIModel}
              options={{ headerShown: true, presentation: "modal" }}
            />
            <Stack.Screen
              name="Subscription"
              component={SubsModel}
              options={{ headerShown: true, presentation: "modal" }}
            />
            <Stack.Screen
              name="Subscription Terms"
              component={STCModel}
              options={{ headerShown: true, presentation: "modal" }}
            />
            <Stack.Screen
              name="Order"
              component={OrderModalScreen}
              options={{ headerShown: true, presentation: "modal" }}
            />
            <Stack.Screen
              name="Wallet History"
              component={TransactionHistory}
              options={{ headerShown: true, presentation: "modal" }}
            />
            <Stack.Screen
              name="Notification"
              component={NotificationModelScreen}
              options={{ headerShown: true, presentation: "modal" }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
