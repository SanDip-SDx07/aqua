import React from "react";
import { StatusBar } from "expo-status-bar";
import NavStack from "./src/navigations/NavStack";

export default function App() {
  return (
    <>
      <StatusBar style="auto" translucent backgroundColor="#7cbbfdff" />
      <NavStack />
    </>
  );
}
