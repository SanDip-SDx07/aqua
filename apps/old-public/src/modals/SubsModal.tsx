import { ScrollView } from "react-native";
import {
  SubsBaseCard,
  CustomBaseCard,
} from "../views/subscription/SubscriptionCards";

export function IndividualSubscription() {
  return (
    <SubsBaseCard
      subsType="Individual"
      numberOfPremiumAccount={1}
      pricePerMonth={10}
      priceAYear={100}
      processingFee={20}
    />
  );
}
export function StandardSubscription() {
  return (
    <SubsBaseCard
      subsType="Standard"
      numberOfPremiumAccount={2}
      pricePerMonth={10}
      priceAYear={100}
      processingFee={20}
    />
  );
}
export function FamilySubscription() {
  return (
    <SubsBaseCard
      subsType="Family"
      numberOfPremiumAccount={3}
      pricePerMonth={10}
      priceAYear={100}
      processingFee={20}
    />
  );
}
export function EnterpriseSubscription() {
  return (
    <SubsBaseCard
      subsType="Enterprise"
      numberOfPremiumAccount={6}
      pricePerMonth={10}
      priceAYear={100}
      processingFee={20}
    />
  );
}

// export CustomSubscriptionCard

export default function SubsModel() {
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
      <CustomBaseCard />
    </ScrollView>
  );
}
