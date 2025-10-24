import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Filter } from "lucide-react-native";
import { sampleTransactions, type Transaction } from "../data/transactions";
import { TransactionItem } from "../screens/wallet/Wallets";
import { QuickPopup } from "../components/QuickPopup";

export default function TransactionHistory() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "credit" | "debit">(
    "all"
  );
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  const transactions: Transaction[] = sampleTransactions.filter((tx) =>
    filterType === "all" ? true : tx.type === filterType
  );

  return (
    <View style={[styles.container, { paddingHorizontal: isTablet ? 32 : 16 }]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, { fontSize: isTablet ? 26 : 20 }]}>
          Transactions
        </Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterVisible((prev) => !prev)}
        >
          <Filter color="#1e88e5" size={24} />
        </TouchableOpacity>
      </View>

      {/* Transaction List */}
      <ScrollView
        style={{ flex: 1, backgroundColor: "#f6f8fb" }}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {transactions.map((tx, index) => (
          <TransactionItem
            key={index}
            type={tx.type}
            description={tx.description}
            amount={tx.amount}
            balance={tx.balance}
            date={tx.date}
          />
        ))}
        {transactions.length === 0 && (
          <Text style={styles.emptyText}>No transactions found</Text>
        )}
      </ScrollView>

      {/* Filter Component */}
      <QuickPopup
        modalVisible={filterVisible}
        setModalVisible={setFilterVisible}
      >
        <TransactionFilter
          filterType={filterType}
          setFilterType={setFilterType}
          applyFilter={() => setFilterVisible(false)}
        />
      </QuickPopup>
    </View>
  );
}

// ================= Filter Component =================
function TransactionFilter({
  filterType,
  setFilterType,
  applyFilter,
}: {
  filterType: "all" | "credit" | "debit";
  setFilterType: React.Dispatch<
    React.SetStateAction<"all" | "credit" | "debit">
  >;
  applyFilter: () => void;
}) {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTitle}>Filter By:</Text>

      <View style={styles.filterOptions}>
        {["all", "credit", "debit"].map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.filterOptionButton,
              filterType === type && styles.filterOptionButtonActive,
            ]}
            onPress={() => setFilterType(type as "all" | "credit" | "debit")}
          >
            <Text
              style={[
                styles.filterOptionText,
                filterType === type && styles.filterOptionTextActive,
              ]}
            >
              {type.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.applyButton} onPress={applyFilter}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
}

// ================= Styles =================
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#969696ff",
    paddingVertical: 8,
  },
  headerText: {
    fontWeight: "600",
    color: "#1d1d1d",
  },
  filterButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  emptyText: {
    marginTop: 60,
    color: "#999",
    fontSize: 16,
    textAlign: "center",
  },

  // ===== Filter =====
  filterContainer: {
    padding: 12,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  filterOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  filterOptionButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d0d4da",
    backgroundColor: "#f9f9f9",
  },
  filterOptionButtonActive: {
    backgroundColor: "#1e88e5",
    borderColor: "#1e88e5",
  },
  filterOptionText: {
    color: "#555",
    fontWeight: "500",
  },
  filterOptionTextActive: {
    color: "#fff",
  },
  applyButton: {
    backgroundColor: "#1e88e5",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

// import { ScrollView } from "react-native";
// import { TransactionItem } from "../screens/wallet/Wallets";
// import { sampleTransactions, type Transaction } from "../data/transactions";

// export default function TransactionHistory() {
//   const transactions: Transaction[] = sampleTransactions;
//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "#f6f8fb", marginTop: 25 }}
//       contentContainerStyle={{
//         padding: 16,
//         alignItems: "center", // layout children horizontal center
//         justifyContent: "flex-start", // layout children vertically from the top
//       }}>
//       {transactions.slice(0, 10).map((tx, index) => (
//         <TransactionItem
//           key={index}
//           type={tx.type as "credit" | "debit"}
//           description={tx.description}
//           amount={tx.amount}
//           balance={tx.balance}
//           date={tx.date}
//         />
//       ))}
//     </ScrollView>
//   );
// }
