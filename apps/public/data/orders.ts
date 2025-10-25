import type { Order } from "../types";

export const orders: Order[] = [
  {
    id: "#ORD-2941",
    tag: "Premium",
    status: "Delivered",
    orderDate: "22 Oct 2025, 9:30 AM",
    location: "221, MG Road, Kolkata",
    quantity: 3,
    containers: [
      { id: "CN-10012", type: "Order", status: "Delivered" },
      { id: "CN-10009", type: "Pickup", status: "In Transit" },
      { id: "CN-10015", type: "Order", status: "Delivered" },
    ],
    delivery: {
      id: "DLV-412",
      partner: { id: "DP-104", name: "Rahul Sharma" },
      deliveredAt: "22 Oct 2025, 10:45 AM",
    },
    feedback: 4,
  },
  {
    id: "#ORD-2942",
    tag: "Regular",
    status: "In Progress",
    orderDate: "23 Oct 2025, 2:15 PM",
    location: "56, Park Street, Kolkata",
    quantity: 2,
    containers: [
      { id: "CN-10020", type: "Order", status: "In Progress" },
      { id: "CN-10021", type: "Pickup", status: "Pending" },
    ],
    delivery: {
      id: "DLV-413",
      partner: { id: "DP-105", name: "Anita Singh" },
    },
    feedback: undefined,
  },
  {
    id: "#ORD-2943",
    tag: "Premium",
    status: "Pending",
    orderDate: "24 Oct 2025, 11:00 AM",
    location: "78, Camac Street, Kolkata",
    quantity: 1,
    containers: [{ id: "CN-10025", type: "Order", status: "Pending" }],
    delivery: undefined,
    feedback: undefined,
  },
];
