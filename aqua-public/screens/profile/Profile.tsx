// ProfileScreen.tsx
import { MessageCircle, Phone } from "lucide-react-native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import type { UserInfo } from "../../types";
import ProfileContextProvider, { useProfileState } from "./ProfileContext";
import { QuickPopup } from "../../components/QuickPopup";
import CallButton from "../../components/CallButton";
import MessageButton from "../../components/MessageButton";

export default function Profile() {
  return (
    <ProfileContextProvider>
      <ProfileScreen />
    </ProfileContextProvider>
  );
}

function ProfileScreen() {
  const user: UserInfo = {
    name: "SanDip Das",
    userId: "SD12345",
    status: "Active",
    joinedDate: "12 Oct 2025",
    mobile: "+91 9876543210",
    address: "123, MG Road, Bangalore",
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <UserInfoBox user={user} />
      <MobileBox mobile={user.mobile} />
      <AddressBox address={user.address} />
      <SupportBox />
      <ReferBox inviteCode={user.userId} />
      <ActionsBox />
    </ScrollView>
  );
}

function UserInfoBox({ user }: { user: Partial<UserInfo> }) {
  const { state, dispatch } = useProfileState();
  return (
    <View style={styles.box}>
      {state?.isEditUserName ? (
        <EditInput
          placeholder="Change Name..."
          onCancel={() => dispatch({ type: "EDIT_USER", payload: false })}
        />
      ) : (
        <>
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.subText}>ID: {user.userId}</Text>
            <Text style={styles.subText}>Status: {user.status}</Text>
            <Text style={styles.subText}>Joined: {user.joinedDate}</Text>
          </View>
          <TouchableOpacity
            onPress={() => dispatch({ type: "EDIT_USER", payload: true })}
          >
            <Text style={styles.editBtn}>Edit</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

function MobileBox({ mobile }: { mobile: string }) {
  const { state, dispatch } = useProfileState();
  return (
    <View style={styles.box}>
      {state?.isEditMobile ? (
        <EditInput
          placeholder="New Mobile No..."
          onCancel={() => dispatch({ type: "EDIT_MOBILE", payload: false })}
        />
      ) : (
        <>
          <Text style={styles.subText}>{mobile}</Text>
          <TouchableOpacity
            onPress={() => dispatch({ type: "EDIT_MOBILE", payload: true })}
          >
            <Text style={styles.editBtn}>Edit</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

function AddressBox({ address }: { address: string }) {
  const { state, dispatch } = useProfileState();
  return (
    <View style={styles.box}>
      {state?.isEditAddress ? (
        <EditInput
          placeholder="New Address..."
          onCancel={() => dispatch({ type: "EDIT_ADDRESS", payload: false })}
        />
      ) : (
        <>
          <Text style={styles.subText}>{address}</Text>
          <TouchableOpacity
            onPress={() => dispatch({ type: "EDIT_ADDRESS", payload: true })}
          >
            <Text style={styles.editBtn}>Edit</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

function SupportBox() {
  return (
    <View style={styles.supportContainer}>
      <Text style={styles.supportText}>💬 Need Help? Contact Support</Text>
      <View style={styles.supportButtons}>
        <MessageButton phoneNumber="7003233709" style={styles.supportBtn}>
          <MessageCircle size={20} />
        </MessageButton>
        <CallButton phoneNumber="7003233709" style={styles.supportBtn}>
          <Phone size={20} />
        </CallButton>
      </View>
    </View>
  );
}

function ReferBox({ inviteCode }: { inviteCode?: string }) {
  return (
    <View style={styles.referBox}>
      <Text style={styles.referText}>
        Invite friends, earn upto ₹50 credit per referral.
      </Text>
      <TouchableOpacity style={styles.shareBtn}>
        <Text style={styles.shareText}>Share {inviteCode}</Text>
      </TouchableOpacity>
    </View>
  );
}

function ActionsBox() {
  const { dispatch } = useProfileState();
  return (
    <View style={styles.actionsBox}>
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => dispatch({ type: "DELETE_ACCOUNT" })}
      >
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => dispatch({ type: "LOGOUT" })}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

function EditInput({
  placeholder = "Enter value...",
  onCancel,
}: {
  placeholder?: string;
  onCancel?: (key: any) => void;
}) {
  const [value, setValue] = React.useState("");
  return (
    <View style={styles.editContainer}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(val) => setValue(val)}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.cancelBtn]}
          onPress={onCancel}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.submitBtn]}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f3f7",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
  },
  subText: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  editBtn: {
    fontSize: 14,
    color: "#007BFF",
    fontWeight: "500",
  },
  supportContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  supportText: {
    fontSize: 14,
    color: "#555",
  },
  supportButtons: {
    flexDirection: "row",
    marginTop: 10,
  },
  supportBtn: {
    padding: 12,
    marginRight: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  referBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  referText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
    textAlign: "center",
  },
  shareBtn: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  shareText: {
    color: "#fff",
    fontWeight: "500",
  },
  actionsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteBtn: {
    borderWidth: 1,
    borderColor: "#FF3B30",
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 8,
  },
  deleteText: {
    color: "#FF3B30",
    textAlign: "center",
    fontWeight: "600",
  },
  logoutBtn: {
    backgroundColor: "#007BFF",
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginLeft: 8,
  },
  logoutText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },

  editContainer: {
    width: "100%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 12,
    color: "#222",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginLeft: 8,
  },
  cancelBtn: {
    backgroundColor: "#f0f0f0",
  },
  cancelText: {
    color: "#555",
    fontWeight: "500",
  },
  submitBtn: {
    backgroundColor: "#007BFF",
  },
  submitText: {
    color: "#fff",
    fontWeight: "500",
  },
});
