import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../types";
import ModalStack from "./ModalStack";
import AuthStack from "./AuthStack";
import TabNavBottom from "../(tabs)/TabNavBottom";
import { useAuth } from "../AuthContext";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStack() {
  // const { authState } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {false ? (
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
