import React from "react";

interface InitialSubsState {
  isSubscribe: boolean;
  isSubscribed: boolean;
}

const initialSubsState: InitialSubsState = {
  isSubscribe: false,
  isSubscribed: false,
};

type SubsAction = {
  type: "SUBSCRIBE";
};

const SubscriptionContext = React.createContext<
  { state: InitialSubsState; dispatch: React.Dispatch<SubsAction> } | undefined
>(undefined);

export default function SubscriptionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(reducer, initialSubsState);
  return (
    <SubscriptionContext.Provider value={{ state, dispatch }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubsState() {
  const context = React.useContext(SubscriptionContext);
  if (!context)
    throw new Error(
      "useSubsState function must be called inside the SubscriptionContext"
    );
  return context;
}

function reducer(
  state: InitialSubsState,
  action: SubsAction
): InitialSubsState {
  if (!action.type) return state;
  console.log(state, action);
  switch (action?.type) {
    case "SUBSCRIBE": {
      return { ...state, isSubscribe: !state.isSubscribe };
    }
  }
}
