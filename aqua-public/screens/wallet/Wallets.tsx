import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { CircleMinus, CirclePlus, Wallet } from "lucide-react-native";

export function WalletSummaryCard({
  balance,
  subscription,
  lastUpdated,
  onRecharge,
  onWithdraw,
}: {
  balance: number;
  subscription: number;
  lastUpdated: string;
  onRecharge: () => void;
  onWithdraw: () => void;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Wallet size={24} />
        <Text style={styles.balance}>₹{balance.toFixed(2)}</Text>
      </View>
      <Text style={styles.subscription}>Subscription: ₹{subscription}</Text>
      <Text style={styles.lastUpdated}>Last updated: {lastUpdated}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.rechargeBtn} onPress={onRecharge}>
          <Text style={styles.btnText}>Recharge</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.withdrawBtn} onPress={onWithdraw}>
          <Text style={styles.btnText}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function TransactionItem({
  type,
  description,
  amount,
  balance,
  date,
}: {
  type: "credit" | "debit";
  description: string;
  amount: number;
  balance: number;
  date: string;
}) {
  const activeColor = type === "credit" ? styles.credit : styles.debit;
  return (
    <View style={styles.row}>
      {type === "credit" ? (
        <CirclePlus size={25} color={"green"} />
      ) : type === "debit" ? (
        <CircleMinus size={25} color={"red"} />
      ) : null}
      <View style={styles.info}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View>
        <Text style={[styles.amount, activeColor]}>₹{amount.toFixed(2)}</Text>
        <Text style={styles.balanceText}>₹{balance.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const sampleTransactions = [
  {
    type: "credit",
    description: "Recharge",
    amount: 500,
    balance: 700,
    date: "23 Oct 2025, 13:20",
  },
  {
    type: "debit",
    description: "Subscription Renewal",
    amount: 120,
    balance: 480,
    date: "22 Oct 2025, 09:15",
  },
  // Add up to 10 sample transactions
];

export default function WalletScreen() {
  const handleRecharge = () => {
    console.log("Recharge pressed");
  };

  const handleWithdraw = () => {
    console.log("Withdraw pressed");
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#f6f8fb", marginTop: 25 }}
      contentContainerStyle={{
        padding: 16,
        alignItems: "center", // layout children horizontal center
        justifyContent: "flex-start", // layout children vertically from the top
      }}
    >
      <WalletSummaryCard
        balance={1020}
        subscription={120}
        lastUpdated="23 Oct 2025, 12:00"
        onRecharge={handleRecharge}
        onWithdraw={handleWithdraw}
      />
      <View style={styles.transactions}>
        {sampleTransactions.slice(0, 10).map((tx, index) => (
          <TransactionItem
            key={index}
            type={tx.type as "credit" | "debit"}
            description={tx.description}
            amount={tx.amount}
            balance={tx.balance}
            date={tx.date}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  transactions: { marginTop: 16, width: "100%" },

  card: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  balance: { fontSize: 24, fontWeight: "bold" },
  subscription: { fontSize: 14, color: "#666", marginBottom: 4 },
  lastUpdated: { fontSize: 12, color: "#999", marginBottom: 12 },
  buttons: { flexDirection: "row", gap: 16 },
  rechargeBtn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  withdrawBtn: {
    backgroundColor: "#FFC107",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  btnText: { color: "#fff", fontWeight: "600" },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  symbol: { fontSize: 18, fontWeight: "bold" },
  credit: { color: "green" },
  debit: { color: "red" },
  info: { flex: 1, marginHorizontal: 8 },
  description: { fontSize: 14, color: "#333" },
  date: { fontSize: 12, color: "#999" },
  amount: { fontSize: 16, fontWeight: "600" },
  balanceText: { fontSize: 10, color: "#8f8f8fff", fontWeight: "600" },
});
