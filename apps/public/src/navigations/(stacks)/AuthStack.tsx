import { createStackNavigator } from "@react-navigation/stack";
import AuthEntry from "../../views/auth/Entry";
import type { RootStackParamList } from "../../../types";

const Stack = createStackNavigator<RootStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthEntry}
        initialParams={{
          role: "user",
          imageBgUrl: require("../../assets/banner-2.png"),
        }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
