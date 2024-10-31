import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView';

export default function parceldetails() {
  return (
    <ScrollView style={{flex:1}}>
      <ThemedView style={styles.bodyContainer}>
      <Text style={{color:'gray',fontSize:12}}>October 1, 2024 04:06 PM</Text>
      <Text style={{fontSize:16}}>Parcel Code: 1674932</Text>
    </ThemedView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({

    bodyContainer: {
      backgroundColor: '#091242',
      height:"100%",
      padding:5,
    },
});