import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types";

import QAIModel from "../modals/QAIModal";
import SubsModel from "../modals/SubsModal";
import STCModel from "../modals/STCModal";
import OrderModalScreen from "../modals/OrderModal";
import TransactionHistory from "../modals/WHModal";
import NotificationModelScreen from "../modals/NotifyModal";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function ModalStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, presentation: "modal" }}
    >
      {/* Model */}
      <Stack.Screen name="AquaCare+" component={QAIModel} />
      <Stack.Screen name="Subscription" component={SubsModel} />
      <Stack.Screen name="Subscription Terms" component={STCModel} />
      <Stack.Screen name="Order" component={OrderModalScreen} />
      <Stack.Screen name="Wallet History" component={TransactionHistory} />
      <Stack.Screen name="Notification" component={NotificationModelScreen} />
    </Stack.Navigator>
  );
}
