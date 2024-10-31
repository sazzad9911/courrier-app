import { Tabs } from 'expo-router';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: { backgroundColor: '#224B26' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="dashboard" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="addparcel"
        options={{
          title: 'Add Parcel',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="bag-add" color={color} size={24} />
          ),
         
        }}

        
      />
      <Tabs.Screen
        name="consignments"
        options={{
          title: 'Consignments',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="bars" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="pickup"
        options={{
          title: 'Pick Up',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="car-pickup" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="pricing"
        options={{
          title: 'Pricing',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="calculator" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
    
  );
}
