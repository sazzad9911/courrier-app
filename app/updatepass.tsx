import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { useAuth } from "@/providers/AuthContext";
import { useLoader } from "@/providers/LoaderContext";
import { useAlert } from "@/providers/AlertContext";
import { postApi } from "@/constants/API";

export default function updatepass() {
  const navigation = useNavigation();
  const [opass, setOpass] = useState("");
  const [npass, setNpass] = useState("");
  const [cpass, setCpass] = useState("");
  const { user, token, login } = useAuth();
  const { hideLoader, showLoader } = useLoader();
  const { showAlert } = useAlert();

  const handleUpdate = async () => {
    try {
      showLoader();
      const res = await postApi(
        "/apis/user/reset-password",
        token || undefined,
        {
          oldPassword: opass,
          newPassword: npass,
          retypePassword: cpass,
        }
      );
      showAlert("success", "Password updated");
      router.back()
    } catch (error: any) {
      console.log(error.response.data)
      showAlert("error", error.response.data.error);
    } finally {
      hideLoader();
    }
  };
  return (
    <ScrollView style={styles.container}>
      {/* Background image */}
      <Image
        source={require("../assets/images/proback.png")}
        style={styles.backgroundImage}
      />

      {/* Header with back arrow and title over the background image */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Update Password</Text>
      </View>

      {/* Profile Image below the background */}
      <View style={styles.profileImageContainer}>
        <Image
          source={
            user?.image
              ? { uri: user.image }
              : require("../assets/images/user.png")
          }
          style={styles.profileImage}
        />
        {/* <View style={styles.cameraIconContainer}>
          <Ionicons name="camera" size={12} color="white" />
        </View> */}
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <TextInput
          placeholder="Old Password"
          value={opass}
          onChangeText={setOpass}
          style={styles.input}
        />
        <TextInput
          placeholder="New Password"
          value={npass}
          onChangeText={setNpass}
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm New Password"
          value={cpass}
          onChangeText={setCpass}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleUpdate} style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091242",
  },
  backgroundImage: {
    width: "100%",
    height: 200, // Adjust based on the background image height
    position: "absolute",
    top: 0,
    left: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 30,
    left: 15,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "black",
  },
  profileImageContainer: {
    marginTop: 160, // Adjust this to control the spacing from the background image
    alignItems: "center",
    marginBottom:20
  },
  cameraIconContainer: {
    //position: 'absolute',
    bottom: 30,
    right: -30,
    backgroundColor: "#E8C001", // Icon background color
    borderRadius: 15,
    padding: 3,
    borderWidth: 1,
    borderColor: "white", // Border to make it look separate from profile image
  },
  profileImage: {
    width: 73,
    height: 73,
    borderRadius: 40, // Adjusted to make it a perfect circle
    borderWidth: 3,
    borderColor: "#0F4E95",
  },
  input: {
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    color: "#000",
  },
  noteInput: {
    height: 80, // Set the desired height for the Note input
  },
  updateButton: {
    backgroundColor: "#FFB82B",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  updateButtonText: {
    color: "#000000",
    //fontWeight: 'bold',
  },
});
