import React from "react";
import { StatusBar } from "expo-status-bar";
import NavStack from "./navigations/NavStack";

export default function App() {
  return (
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <NavStack />
    </>
  );
}
