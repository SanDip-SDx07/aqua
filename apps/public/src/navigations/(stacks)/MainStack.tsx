import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../types";
import ModalStack from "./ModalStack";
import AuthStack from "./AuthStack";
import TabNavBottom from "../(tabs)/TabNavBottom";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {true ? (
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
  );
}
