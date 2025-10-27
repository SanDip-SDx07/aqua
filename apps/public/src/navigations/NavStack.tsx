import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import type { RootStackParamList } from "../../types";
import ModalStack from "./ModalStack";
import AuthStack from "./AuthStack";
import TabNavBottom from "./TabNavBottom";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavStack({
  loginOptions,
}: {
  loginOptions: { authScreen: boolean; id: string };
}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {loginOptions.authScreen ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Group>
            {/* Main */}
            <Stack.Screen name="Tabs" component={TabNavBottom} />

            {/* ModalStack */}
            <Stack.Screen name="ModalStack" component={ModalStack} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
