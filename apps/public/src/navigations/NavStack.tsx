import React from "react";
import AuthProvider from "./AuthContext";
import MainStack from "./(stacks)/MainStack";

export default function NavStack() {
  return (
    <AuthProvider>
      <MainStack />
    </AuthProvider>
  );
}
