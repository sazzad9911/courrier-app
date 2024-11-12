import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { useAuth } from "@/providers/AuthContext";
import * as ImagePicker from "expo-image-picker";
import { useAlert } from "@/providers/AlertContext";
import { useLoader } from "@/providers/LoaderContext";
import uploadPicture from "@/constants/uploadPicture";

export default function Profile() {
  const navigation = useNavigation();
  const { user, token, login, logout } = useAuth();
  const { showAlert } = useAlert();
  const { showLoader, hideLoader } = useLoader();

  // State to store the selected profile image URI
  const [profileImageUri, setProfileImageUri] = useState(
    user?.image ? { uri: user.image } : require("../assets/images/user.png")
  );

  // Function to handle image picking and updating the profile picture
  const handleImagePick = async () => {
    // Request permission to access the media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "You need to grant permission to change the profile picture."
      );
      return;
    }

    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Square aspect ratio
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
  useEffect(() => {
    setProfileImageUri(
      user?.image ? { uri: user.image } : require("../assets/images/user.png")
    );
  }, [user]);

  return (
    <View style={styles.container}>
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
        <Text style={styles.title}>Profile</Text>
      </View>

      {/* Profile Image below the background */}
      <View style={styles.profileImageContainer}>
        <Image
          source={profileImageUri} // Dynamically change image source
          style={styles.profileImage}
        />
        <TouchableOpacity
          style={styles.cameraIconContainer}
          onPress={handleImagePick}
        >
          <Ionicons name="camera" size={12} color="white" />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 18,
          color: "white",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        {user?.name}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "gray",
          alignSelf: "center",
          marginTop: 4,
        }}
      >
        {user?.businessName}
      </Text>

      {/* User stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={{ fontSize: 14, color: "white" }}>259</Text>
          <Text style={{ fontSize: 14, color: "gray", marginLeft: 4 }}>
            Delivery
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text style={{ fontSize: 14, color: "white" }}>259</Text>
          <Text style={{ fontSize: 14, color: "gray", marginLeft: 4 }}>
            Pending
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text style={{ fontSize: 14, color: "white" }}>259</Text>
          <Text style={{ fontSize: 14, color: "gray", marginLeft: 4 }}>
            Cancelled
          </Text>
        </View>
      </View>

      <Text
        style={{
          color: "white",
          fontSize: 15,
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        My Address
      </Text>
      <Text style={{ color: "gray", fontSize: 13, alignSelf: "center" }}>
        {user?.address}
      </Text>

      {/* Action buttons */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          onPress={() => {
            logout();
            router.replace("/login");
          }}
          style={styles.logoutButton}
        >
          <Text>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push({ pathname: "/editprofile" })}
          style={styles.editProfileButton}
        >
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => router.push({ pathname: "/updatepass" })}
        style={styles.updatePasswordButton}
      >
        <Text>Update Password</Text>
      </TouchableOpacity>

      <Text
        style={{
          color: "white",
          fontSize: 12,
          alignSelf: "center",
          marginTop: 30,
        }}
      >
        Follow Us
      </Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity>
          <FontAwesome name="instagram" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="twitter" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="linkedin" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#091242" },
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
  title: { fontSize: 18, fontWeight: "bold", marginLeft: 10, color: "black" },
  profileImageContainer: { marginTop: 160, alignItems: "center" },
  //cameraIconContainer: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#E8C001', borderRadius: 15, padding: 3 },
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
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#0F4E95",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    paddingVertical: 10,
    borderColor: "gray",
    borderRadius: 10,
  },
  statItem: { flexDirection: "row" },
  actionButtonsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
    gap: 10,
  },
  logoutButton: {
    height: 45,
    width: "45%",
    backgroundColor: "#FA6F6F",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  editProfileButton: {
    height: 45,
    width: "45%",
    backgroundColor: "#44C178",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  updatePasswordButton: {
    height: 45,
    width: "80%",
    backgroundColor: "#FFB82B",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "35%",
    alignSelf: "center",
    marginTop: 10,
  },
});
