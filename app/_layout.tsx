import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import Header from "../components/header"; // Adjust the path according to your project structure
import Headerparcel from "../components/headerparcel";
import Headerprint from "../components/headerprint";
import Headereditdetails from "../components/headereditdetails";
import Headercancel from "@/components/headercancel";
import Headerfraud from "@/components/headerfraud";
import Headerreturn from "@/components/headerreturn";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";
import { LoaderProvider } from "@/providers/LoaderContext";
import { AlertProvider } from "@/providers/AlertContext";
import { AuthProvider } from "@/providers/AuthContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AlertProvider>
        <LoaderProvider>
          <AuthProvider>
            <StatusBar style={"light"}></StatusBar>
            <Stack>
              <Stack.Screen
                name="login"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="signup"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="otp"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="forgetpassword"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="forgetpasswordotp"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="newpassword"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="profile"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="editprofile"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="(tabs)"
                options={{ header: () => <Header /> }}
              />
              <Stack.Screen name="+not-found" />
              <Stack.Screen
                name="parceldetails"
                options={{ header: () => <Headerparcel /> }}
              />
              <Stack.Screen
                name="print"
                options={{ header: () => <Headerprint /> }}
              />
              <Stack.Screen
                name="editdetails"
                options={{ header: () => <Headereditdetails /> }}
              />
              <Stack.Screen
                name="cancelrequest"
                options={{ header: () => <Headercancel /> }}
              />
              <Stack.Screen
                name="fraudcheck"
                options={{ header: () => <Headerfraud /> }}
              />
              <Stack.Screen
                name="returnlist"
                options={{ header: () => <Headerreturn /> }}
              />
            </Stack>
          </AuthProvider>
        </LoaderProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}
