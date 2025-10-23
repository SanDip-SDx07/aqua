import { Modal, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const QuickPopup = ({
  children,
  modalVisible,
  setModalVisible,
}: {
  children: React.ReactNode;
  modalVisible: boolean;
  setModalVisible: (key: boolean) => void;
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true} // Crucial for the background to be visible
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)} // Handle Android back button
    >
      <View style={styles.centeredView}>
        <View style={styles.popupModal}>
          <SafeAreaView>{children}</SafeAreaView>
        </View>
      </View>
    </Modal>
  );
};

// ---------- Styles ----------
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark, translucent overlay
  },

  // 2. STYLE FOR THE ACTUAL POPUP BOX (your `styles.popupModal`)
  popupModal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "90%", // Control the size of the popup box
    maxHeight: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
});
