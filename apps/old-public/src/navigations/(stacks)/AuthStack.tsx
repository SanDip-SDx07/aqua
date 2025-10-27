import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthEntry from "../../views/auth/Entry";
import type { RootStackParamList } from "../../../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthEntry}
        initialParams={{
          role: "user",
          imageBgUrl: require("../../../assets/banner-2.png"),
        }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
