import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { useAuth } from "@/providers/AuthContext";
import { useAlert } from "@/providers/AlertContext";
import { useLoader } from "@/providers/LoaderContext";
import { postApi } from "@/constants/API";
import uploadPicture from "@/constants/uploadPicture";

export default function EditProfile() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bname, setBname] = useState("");
  const [address, setAddress] = useState("");
  const { login, user, token } = useAuth();
  const { showAlert } = useAlert();
  const { showLoader, hideLoader } = useLoader();

  // State for storing the profile image URI
  const [profileImageUri, setProfileImageUri] = useState(
    user?.image ? { uri: user.image } : require("../assets/images/user.png")
  );

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setAddress(user.address);
      setBname(user.businessName);
    }
  }, [user]);

  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "You need to grant permission to change the profile picture."
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      showLoader();
      try {
        const uri = result.assets[0].uri;
        const res = await uploadPicture(
          "/apis/user/upload-picture",
          token || "",
          uri
        );
        if (!res.ok) {
          showAlert("error", "Uploading picture failed");
          throw new Error("Uploading picture failed");
        }
        const data = await res.json();
        setProfileImageUri({ uri: uri });
        login(data, token || "");
        showAlert("success", "Upload successful");
      } catch (error: any) {
        //showAlert("error", error.response.data.error);
        console.log(error);
      } finally {
        hideLoader();
      }
    }
  };
  const handleUpdate = async () => {
    try {
      const res = await postApi("/apis/user/update-user-info", token || "", {
        name: name,
        phone: phone,
        email: email,
        businessName: bname,
        address: address,
      });
      login(res.data.updateInfo, token || "");
      showAlert("success", "User updated");
      router.back()
    } catch (error: any) {
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

      {/* Header with back arrow and title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
      </View>

      {/* Profile Image Section */}
      <View style={styles.profileImageContainer}>
        <Image
          source={profileImageUri} // Display selected or default profile image
          style={styles.profileImage}
        />
        <TouchableOpacity
          style={styles.cameraIconContainer}
          onPress={handleImagePick}
        >
          <Ionicons name="camera" size={12} color="white" />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
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
          style={[styles.input, styles.noteInput]}
          multiline={true}
        />
        <TouchableOpacity
          disabled={!name || !email || !bname || !address || !phone}
          onPress={handleUpdate}
          style={[styles.updateButton,!name || !email || !bname || !address || !phone?null:styles.updateButtonAct]}
        >
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
    height: 200,
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
    marginTop: 160,
    alignItems: "center",
  },
  cameraIconContainer: {
    bottom: 30,
    right: -30,
    backgroundColor: "#E8C001",
    borderRadius: 15,
    padding: 3,
    borderWidth: 1,
    borderColor: "white",
  },
  profileImage: {
    width: 73,
    height: 73,
    borderRadius: 40,
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
    height: 80,
  },
  updateButton: {
    backgroundColor: "gray",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  updateButtonAct: {
    backgroundColor: "#FFB82B",
  },
  updateButtonText: {
    color: "#000000",
  },
});
