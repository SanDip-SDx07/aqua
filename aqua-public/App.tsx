import React from "react";
import NavBottom from "./navigations/NavBottom";
import { StatusBar } from "react-native";
import { theme } from "./constants/styles";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={theme["light"]?.colors?.primary}
      />
      <NavBottom />
    </>
  );
}
