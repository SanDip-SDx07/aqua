import { ScrollView } from "react-native";
import {
  SubscriptionModelCard,
  CustomSubscriptionCard,
} from "./SubscriptionModelCard";
import { theme } from "../../constants/styles";

export function IndividualSubscription() {
  return (
    <SubscriptionModelCard
      subsType="Individual"
      numberOfPremiumAccount={1}
      pricePerMonth={10}
      priceAYear={100}
      processingFee={20}
      color="#007BFF"
    />
  );
}
export function StandardSubscription() {
  return (
    <SubscriptionModelCard
      subsType="Standard"
      numberOfPremiumAccount={2}
      pricePerMonth={20}
      priceAYear={200}
      processingFee={20}
      color="#007BFF"
    />
  );
}
export function FamilySubscription() {
  return (
    <SubscriptionModelCard
      subsType="Family"
      numberOfPremiumAccount={3}
      pricePerMonth={30}
      priceAYear={300}
      processingFee={20}
      color="#007BFF"
    />
  );
}
export function EnterpriseSubscription() {
  return (
    <SubscriptionModelCard
      subsType="Enterprise"
      numberOfPremiumAccount={6}
      pricePerMonth={60}
      priceAYear={600}
      processingFee={20}
      color="#007BFF"
    />
  );
}

// export CustomSubscriptionCard

export default function SubscriptionVarents() {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
      }}
    >
      <IndividualSubscription />
      <StandardSubscription />
      <FamilySubscription />
      <EnterpriseSubscription />
      <CustomSubscriptionCard />
    </ScrollView>
  );
}
