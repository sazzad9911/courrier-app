import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Header from '../components/header'; // Adjust the path according to your project structure
import Headerparcel from '../components/headerparcel';
import Headerprint from '../components/headerprint';
import Headereditdetails from '../components/headereditdetails';

import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={"light"}>

      </StatusBar>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ header:()=><Header />}} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="parceldetails" options={{ header:()=><Headerparcel />}} />
        <Stack.Screen name="print" options={{ header:()=><Headerprint />}} />
        <Stack.Screen name="editdetails" options={{ header:()=><Headereditdetails />}} />
      </Stack>
    </ThemeProvider>
  );
}
