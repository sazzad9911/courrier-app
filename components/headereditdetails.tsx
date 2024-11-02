import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';


export default function header() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection:'row',}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:16,marginLeft:10}}>Edit Parcel Details</Text>
      </View>
      <View style={{flexDirection:'row',}}>
        <TouchableOpacity>
            <FontAwesome name="headphones" size={24} color="#F6B426" />
        </TouchableOpacity>
        <TouchableOpacity 
            style={{marginHorizontal:15}}
            onPress={() => router.push({ pathname: "/print" })}
        >
            <MaterialIcons name="print" size={24} color="#F6B426" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push({ pathname: "/editdetails" })}>
            <FontAwesome name="pencil-square-o" size={24} color="#F6B426" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: '#004d00', // Green background
        paddingHorizontal: 10,
        //paddingVertical: 15,
        paddingTop: 25,
        paddingBottom: 5,
        height:70,
      },
});