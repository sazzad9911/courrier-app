import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { useAuth } from "@/providers/AuthContext";
import { postApi } from "@/constants/API";
import { useLoader } from "@/providers/LoaderContext";
import { useAlert } from "@/providers/AlertContext";

export default function EditProfile() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bname, setBname] = useState("");
  const [address, setAddress] = useState("");
  const { user, token, login } = useAuth();
  const { hideLoader, showLoader } = useLoader();
  const { showAlert } = useAlert();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhone(user.phone);
      setBname(user.businessName);
      setEmail(user.email);
      setAddress(user.address);
    }
  }, [user]);

  const handleUpdate = async () => {
    try {
      showLoader();
      const res = await postApi(
        "/apis/user/update-user-info",
        token || undefined,
        {
          name: name,
          phone: phone,
          email: email,
          businessName: bname,
          address: address,
        }
      );
      login(res.data.updateInfo, token || "");
    } catch (error: any) {
      showAlert("error", error.response.data.error);
    } finally {
      hideLoader();
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
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
          <Text style={styles.title}>Edit Profile</Text>
        </View>

        {/* Profile Image below the background */}
        <TouchableOpacity style={styles.profileImageContainer}>
          <Image
            source={
              user?.image
                ? { uri: user.image }
                : require("../assets/images/user.png")
            }
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIconContainer}>
            <Ionicons name="camera" size={12} color="white" />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 10 }}>
          <TextInput
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Business Name"
            value={bname}
            onChangeText={setBname}
            style={styles.input}
          />
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            style={[styles.input, styles.noteInput]} // Apply additional style for note input
            multiline={true} // Allow multiline input
          />
          <TouchableOpacity onPress={handleUpdate}
            style={[
              styles.updateButton,
              email && phone && name && bname && address
                ? styles.updateButtonAct
                : null,
            ]}
          >
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  updateButtonAct: {
    backgroundColor: "#FFB82B",
  },
  updateButton: {
    backgroundColor: "gray",
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
