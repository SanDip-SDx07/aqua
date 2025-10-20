import { SubscriptionModelCard } from "./SubscriptionModelCard";

export function IndividualSubscription() {
  return (
    <SubscriptionModelCard
      subsType="Individual"
      numberOfPremiumAccount={1}
      pricePerMonth={10}
      processingFee={20}
      color="#007BFF"
      features={[
        "1 Container Access",
        "10% OFF on every refill",
        "No Container Deposits / Rent",
        "Basic Priority Support",
      ]}
    />
  );
}
export function StandardSubscription() {
  return (
    <SubscriptionModelCard
      subsType="Standard"
      numberOfPremiumAccount={2}
      pricePerMonth={10}
      processingFee={20}
      color="#007BFF"
      features={[
        "1 Container Access",
        "10% OFF on every refill",
        "No Container Deposits / Rent",
        "Basic Priority Support",
      ]}
    />
  );
}
export function FamilySubscription() {
  return (
    <SubscriptionModelCard
      subsType="Family"
      numberOfPremiumAccount={3}
      pricePerMonth={10}
      processingFee={20}
      color="#007BFF"
      features={[
        "1 Container Access",
        "10% OFF on every refill",
        "No Container Deposits / Rent",
        "Basic Priority Support",
      ]}
    />
  );
}
export function EnterpriseSubscription() {
  return (
    <SubscriptionModelCard
      subsType="Enterprise"
      numberOfPremiumAccount={6}
      pricePerMonth={10}
      processingFee={20}
      color="#007BFF"
      features={[
        "1 Container Access",
        "10% OFF on every refill",
        "No Container Deposits / Rent",
        "Basic Priority Support",
      ]}
    />
  );
}
