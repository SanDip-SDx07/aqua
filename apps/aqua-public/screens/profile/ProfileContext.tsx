import React from "react";
import { Alert } from "react-native";
import type { UserInfo } from "../../types";

const ProfileContext = React.createContext<
  | { state: InitialProfileState; dispatch: React.Dispatch<ProfileAction> }
  | undefined
>(undefined);

export default function ProfileContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(reducer, initialProfileState);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfileState() {
  const context = React.useContext(ProfileContext);
  if (!context)
    throw new Error("useProfileState must be called inside ProfileContext");
  return context;
}

export interface InitialProfileState {
  isEditUserName: boolean;
  isEditMobile: boolean;
  isEditAddress: boolean;
}
const initialProfileState = {
  isEditUserName: false,
  isEditMobile: false,
  isEditAddress: false,
};

export type ProfileAction =
  | { type: "EDIT_USER"; payload?: boolean }
  | { type: "EDIT_MOBILE"; payload?: boolean }
  | { type: "EDIT_ADDRESS"; payload?: boolean }
  | { type: "LOGOUT" }
  | { type: "DELETE_ACCOUNT" };

const reducer = (
  state: InitialProfileState,
  action: ProfileAction
): InitialProfileState => {
  switch (action.type) {
    case "EDIT_USER":
      return { ...state, isEditUserName: action?.payload as boolean };
    case "EDIT_MOBILE":
      return { ...state, isEditMobile: action?.payload as boolean };
    case "EDIT_ADDRESS":
      return { ...state, isEditAddress: action?.payload as boolean };
    case "LOGOUT":
      Alert.alert("Logout", "You have been logged out.");
      return state;
    case "DELETE_ACCOUNT":
      Alert.alert("Delete Account", "Account deleted permanently.");
      return state;
    default:
      return state;
  }
};
