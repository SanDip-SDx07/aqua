import React from "react";
import AuthProvider from "./AuthContext";
import MainStack from "./(stacks)/MainStack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNa } from "@react-navigation/native";
import type { RootStackParamList } from "../../types";

const Stack = createStaticNavigation<RootStackParamList>();

export default function NavStack() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainStack" component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
