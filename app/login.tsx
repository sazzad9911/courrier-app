import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { postApi } from "@/constants/API";
import { useLoader } from "@/providers/LoaderContext";
import { useAlert } from "@/providers/AlertContext";
import { useAuth } from "@/providers/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showLoader, hideLoader } = useLoader();
  const { showAlert } = useAlert();
  const { login } = useAuth();

  const handleLogin = async () => {
    showLoader();
    try {
      const loginRes = await postApi("/apis/auth/login", undefined, {
        email: email,
        password: password,
      });
      login(loginRes.data?.user, loginRes.data?.userToken);
      router.replace("/(tabs)")
      hideLoader();
      showAlert("success","Login successful")
    } catch (error: any) {
      hideLoader();
      console.log(error.response.data)
      const errorMessage =
        error?.response?.data?.error || "An unexpected error occurred";
      showAlert("error", errorMessage);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../assets/images/loginimg.png")}
            //style={styles.profileImage}
          />
        </View>
        <Text style={{ fontSize: 20, color: "white" }}>
          Sign In to Green Bangla
        </Text>
        <Text style={{ fontSize: 12, color: "gray", marginTop: 10 }}>
          "Sign in to Green Bangla and access a world of sustainable{" "}
        </Text>
        <Text style={{ fontSize: 12, color: "gray", marginVertical: 3 }}>
          solutions at your fingertips. Join us in building a greener,{" "}
        </Text>
        <Text style={{ fontSize: 12, color: "gray", marginBottom: 10 }}>
          cleaner Bangladesh!"
        </Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address" // Set keyboard type for email
          autoCapitalize="none" // Prevents auto-capitalization of email
          autoComplete="email" // Helps with autofill on some devices
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // This makes the text input secure
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => router.push({ pathname: "/forgetpassword" })}
        >
          <Text
            style={{
              color: "#F6B426",
              alignSelf: "flex-end",
              fontSize: 13,
              marginTop: 10,
            }}
          >
            Forget Password?
          </Text>
        </TouchableOpacity>
        {/* Submit Button */}
        <TouchableOpacity onPress={handleLogin} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Sign In</Text>
        </TouchableOpacity>
        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={{ color: "white", fontSize: 13 }}>
            Don’t have any account?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/signup" })}
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: "#091242", // Body background color
    flex: 1,
    padding: 7,
  },
  headerContainer: {
    backgroundColor: "#091242", // Matches body background color
    //paddingVertical: 20,
    marginTop: 40,
    marginBottom: 30,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
  textStyle: {
    fontSize: 12,
    alignSelf: "center",
    color: "white",
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: "#FFB82B",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#000000",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 12,
    color: "#000",
    height: 40,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    color: "#F6B426", // Change this color to your preferred color
    fontWeight: "bold",
  },
});
