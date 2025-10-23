import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import NavBottom from "./NavBottom";
import QAIModel from "../modals/QAIModel";
import SubsModel from "../modals/SubsModel";
import STCModel from "../modals/STCModel";
import OrderModalScreen from "../modals/OrderModal";
import type { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Bottom Tabs */}
        <Stack.Screen
          name="Tabs"
          component={NavBottom}
          options={{ headerShown: false }}
        />
        {/* Modals */}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
