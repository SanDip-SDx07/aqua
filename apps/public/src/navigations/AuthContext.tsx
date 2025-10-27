import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// type AuthContextType = {
//   user: string | null;
//   loading: boolean;
// };

const AuthContext = React.createContext<
  | {
      authState: InitialAuthState;
      authDispatch: React.Dispatch<AuthActionType>;
    }
  | undefined
>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

declare interface InitialAuthState {
  user: string | null;
  loading: boolean;
}

const initialAuthState: InitialAuthState = {
  user: null,
  loading: true,
};

declare type AuthActionType =
  | { type: "LOGIN"; token: string }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; loading: boolean };

function authReducer(
  state: InitialAuthState,
  action: AuthActionType
): InitialAuthState {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.token, loading: false };
    case "LOGOUT":
      return { ...state, user: null, loading: false };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const checkUserToken = async (dispatch: React.Dispatch<AuthActionType>) => {
  const token = await AsyncStorage.getItem("user_token");
  dispatch({ type: "LOGIN", token: token ?? "" });
};

const login = async (
  dispatch: React.Dispatch<AuthActionType>,
  token: string
) => {
  await AsyncStorage.setItem("userToken", token);
  dispatch({ type: "LOGIN", token });
};

const logout = async (dispatch: React.Dispatch<AuthActionType>) => {
  await AsyncStorage.removeItem("userToken");
  dispatch({ type: "LOGOUT" });
};
