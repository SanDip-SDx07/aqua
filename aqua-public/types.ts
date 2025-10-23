// types.ts
export type OrderStatus =
  | "Pending"
  | "In Progress"
  | "Delivered"
  | "Cancelled"
  | "In Transit";

export type ContainerType = "Order" | "Pickup";

export interface Container {
  id: string;
  type: ContainerType;
  status: OrderStatus;
}

export interface DeliveryPartner {
  id: string;
  name: string;
}

export interface DeliveryInfo {
  id: string;
  partner: DeliveryPartner;
  deliveredAt?: string;
}

export interface Order {
  id: string;
  tag: "Premium" | "Regular";
  status: OrderStatus;
  orderDate: string;
  location: string;
  quantity: number;
  containers: Container[] | undefined;
  delivery?: DeliveryInfo | undefined;
  feedback?: number | undefined; // 1-5 stars
}

export type RootStackParamList = {
  Tabs: undefined;
  ["AquaCare+"]: undefined;
  ["Subscription"]: undefined;
  ["Subscription Terms"]: undefined;
  Order: { orderId?: string };
  ["Wallet History"]: undefined;
  notification: { notificationId: string };
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  date: string; // Example: "23 Oct 2025, 13:20"
  type?: "info" | "warning" | "alert"; // optional type for styling
};

export interface Transaction {
  type: "credit" | "debit";
  description: string;
  amount: number;
  balance: number;
  date: string; // Format: "23 Oct 2025, 18:45"
}
