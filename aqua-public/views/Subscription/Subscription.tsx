import SubscriptionContextProvider, {
  useSubsState,
} from "./SubscriptionContext";

import SubsCard from "./SubscriptionCard";
import SubscribedCard from "./SubscribedCard";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import SubsFormCard from "./SubsFormCard";
import QualityAssuranceCard from "../QualityAssurance/QualityAssuranceCard";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../constants/styles";

export default function Subscription({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <SubscriptionContextProvider>
      <SubscriptionMain />
      {children}
    </SubscriptionContextProvider>
  );
}

function SubscriptionMain() {
  const { state: subsState } = useSubsState();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <QualityAssuranceCard />
      {subsState?.isSubscribed ? (
        <SubscribedCard />
      ) : (
        <>{subsState?.isSubscribe ? <SubsFormCard /> : <SubsCard />}</>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8fb",
    // marginTop: 20,
  },
  contentContainer: {
    padding: 16,
    alignItems: "center", // layout children horizontal center
    justifyContent: "flex-start", // layout children vertically from the top
  },
});

// const HeaderBackground = () => {
//   return (
//     <LinearGradient
//       colors={theme["light"].colors.headerGradient}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 0 }} // horizontal gradient
//       style={{ flex: 1 }}
//     />
//   );
// };

{
  /* <ScrollView>
  <SubsCard />
  <SubsFormCard />
  <ActivationCard
    amount={800}
    totalJars={4}
    startDate="18 Oct 2025"
    lastDelivery="17 Oct 2025"
    onBook={() => console.log("Book now")}
    onUpgrade={() => console.log("Upgrade")}
    onCancel={() => console.log("Cancel")}
  />
</ScrollView>; */
}
