import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./(stacks)/MainStack";

export default function NavStack() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
