import React from "react";

interface InitialHomeState {
  isSubscribe: boolean;
  isSubscribed: boolean;
}

const InitialHomeState: InitialHomeState = {
  isSubscribe: false,
  isSubscribed: false,
};

type HomeAction = {
  type: "SUBSCRIBE";
};

const HomeContext = React.createContext<
  { state: InitialHomeState; dispatch: React.Dispatch<HomeAction> } | undefined
>(undefined);

export default function HomeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(reducer, InitialHomeState);
  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeState() {
  const context = React.useContext(HomeContext);
  if (!context)
    throw new Error("useHomeState hook must be called inside the HomeContext");
  return context;
}

function reducer(
  state: InitialHomeState,
  action: HomeAction
): InitialHomeState {
  if (!action.type) return state;
  console.log(state, action);
  switch (action?.type) {
    case "SUBSCRIBE": {
      return { ...state, isSubscribe: !state.isSubscribe };
    }
  }
}
