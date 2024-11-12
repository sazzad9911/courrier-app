import { Redirect, Tabs, useRouter } from "expo-router";
import React, { useEffect } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text } from "react-native";
import { useAuth } from "@/providers/AuthContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#224B26",
          borderTopEndRadius: 8,
          borderTopStartRadius: 8,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarInactiveTintColor:"#fff"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="dashboard" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="addparcel"
        options={{
          title: "Add Parcel",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="bag-add" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="consignments"
        options={{
          title: "Consignments",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="bars" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="pickup"
        options={{
          title: "Fraud Check",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="account-alert" size={30} color={color} />
      
          ),
        }}
      />
      <Tabs.Screen
        name="pricing"
        options={{
          title: "Pricing",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="calculator" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
