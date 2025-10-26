import React from "react";
import { StatusBar } from "expo-status-bar";
import NavStack from "./src/navigations/NavStack";
import Entry from "./src/views/auth/Entry";

export default function App() {
  return (
    <>
      <StatusBar style="auto" translucent backgroundColor="transparent" />
      {/* <Entry
        role="user"
        imageBgUrl={require("./assets/banner-2.png")}
        // imageUrl="https://example.com/logo.png"
      /> */}
      <NavStack loginOptions={{ authScreen: true, id: "" }} />
    </>
  );
}
