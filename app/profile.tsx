import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function profile() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.title}>Profile</Text>
      </View>
      <Image
            source={require('../assets/images/proback.png')}
            style={styles.profileImage}
          />
          
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#001f3f',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
      },
    profileImage: {
        height: 199,
        //borderRadius: 35 / 2,
        //marginRight: 10,
      },
  });