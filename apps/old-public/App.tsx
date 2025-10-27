import React from "react";
import { StatusBar } from "expo-status-bar";
import NavStack from "./src/navigations/(stacks)/MainStack";
import Entry from "./src/views/auth/Entry";

export default function App() {
  return (
    <>
      <StatusBar style="auto" translucent backgroundColor="transparent" />
      <NavStack />
    </>
  );
}
