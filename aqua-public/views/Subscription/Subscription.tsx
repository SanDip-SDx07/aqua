import SubscriptionContextProvider, {
  useSubsState,
} from "./SubscriptionContext";

import SubsCard from "./SubsDisplayCard";
import SubscribedCard from "./SubscribedCard";
import SubsFormCard from "./SubsFormCard";

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
  return <SubsCard />;
}
