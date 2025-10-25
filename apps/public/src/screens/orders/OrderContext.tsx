import React from "react";

const OrderContext = React.createContext<
  | { state: InitialOrdersState; dispatch: React.Dispatch<OrdersAction> }
  | undefined
>(undefined);

export default function OrderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(reducer, initialOrdersState);
  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrderState() {
  const context = React.useContext(OrderContext);
  if (!context)
    throw new Error("useOrderContext hook must be call inside OrderContext");
  return context;
}

interface InitialOrdersState {}
const initialOrdersState: InitialOrdersState = {};

type OrdersAction = {};

function reducer(
  state: InitialOrdersState,
  action: OrdersAction
): InitialOrdersState {
  return state;
}
