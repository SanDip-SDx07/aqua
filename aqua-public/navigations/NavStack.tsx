import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import NavBottom from "./NavBottom";
import QAIModel from "../modals/QAIModel";
import SubsModel from "../modals/SubsModel";
import STCModel from "../modals/STCModel";

const Stack = createNativeStackNavigator();

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
          name="AquaCareModal"
          component={QAIModel}
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name="PremiumModal"
          component={SubsModel}
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name="TermsModal"
          component={STCModel}
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
