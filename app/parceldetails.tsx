import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function parceldetails() {
  return (
    <ScrollView style={{flex:1,backgroundColor: '#091242'}}>
      <ThemedView style={styles.bodyContainer}>
        <Text style={{ color: 'gray', fontSize: 14,marginTop:10 }}>October 1, 2024  04:06 PM</Text>
        <Text style={{ color: 'gray', fontSize: 14,marginVertical:4 }}>
                Parcel Code: {' '}
                <Text style={{ color: 'white',fontWeight:'bold' }}>1674932</Text>
              </Text>
        <Text style={{ color: 'gray', fontSize: 14 }}>Invoice: N/A</Text>
        <TouchableOpacity style={{borderWidth:1,height:35, width:'35%',backgroundColor:'#F6B426',justifyContent:'center',paddingHorizontal:10,borderRadius:7,marginTop:15}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <AntDesign name="find" size={18} color="black" />
            <Text style={{fontSize:14}}>Track Now</Text>
          </View>
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 15,marginTop:20,textDecorationLine: 'underline' }}>Parcel Information</Text>
        <Text style={{ color: 'gray', fontSize: 14,marginVertical:4 }}>
                Weight: {' '}
                <Text style={{ color: 'white',fontWeight:'bold' }}>1 kg</Text>
              </Text>
        <Text style={{ color: 'gray', fontSize: 14, }}>
                COD: {' '}
                <Text style={{ color: 'white',fontWeight:'bold' }}>2500 BDT</Text>
                </Text>
        <Text style={{ color: 'gray', fontSize: 14,marginTop:4 }}>
                Status: {' '}
                <Text style={{ color: '#FFB82B',fontWeight:'bold' }}>PENDING</Text>
                </Text>
  
        <TouchableOpacity style={{borderWidth:1,height:35, width:'25%',backgroundColor:'#DF3C3E',justifyContent:'center',paddingHorizontal:10,borderRadius:7,marginTop:15}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <AntDesign name="delete" size={17} color="white" />
            <Text style={{fontSize:14,color:'white'}}>Delete</Text>
          </View>
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 15,marginTop:20,textDecorationLine: 'underline' }}>Receiver Information</Text>
        <Text style={{ color: 'gray', fontSize: 14,marginVertical:4 }}>
                Name: {' '}
                <Text style={{ color: 'white',fontWeight:'bold' }}>MD Sojib Hasan</Text>
              </Text>
              <Text style={{ color: 'gray', fontSize: 14,}}>
                Address : Medical Mor, Rangpur
              </Text>
              <Text style={{ color: 'gray', fontSize: 14,marginVertical:4}}>
                Police Station : Rangpur Sadar, Rangpur
              </Text>
              <Text style={{ color: 'gray', fontSize: 14,}}>
                Phone Number : 018343432242
              </Text>
              <Text style={{ color: 'gray', fontSize: 14,marginVertical:4}}>
                Entry By : Sejan
              </Text>
        <Text style={{color:'white',fontSize:16,alignSelf:'center',marginTop:20,marginBottom:10}}>Note</Text>
        <Text style={{color:'white',fontSize:11,alignSelf:'center'}}>১% ক্যাশ অন ডেলিভারি এবং রিস্ক ম্যানেজমেন্ট চার্জ প্রযোজ্য হবে। অর্থাৎ, প্রোডাক্টের </Text>
        <Text style={{color:'white',fontSize:11,alignSelf:'center',marginVertical:5}}>মূল্য + ডেলিভারি চার্জের উপর অতিরিক্ত ১% ক্যাশ অন ডেলিভারি এবং রিস্ক</Text>
        <Text style={{color:'white',fontSize:11,alignSelf:'center'}}>ম্যানেজমেন্ট ফি যোগ হবে, যা ক্রেতাকে প্রদান করতে হবে</Text>
        <Text style={{color:'white',fontSize:14,marginTop:25,marginBottom:10,textDecorationLine: 'underline'}}>Assigned To</Text>
        <View style={{flexDirection:'row',alignItems:'center',}}>
          <View>
            <Image
              source={require('../assets/images/car.png')}
              style={styles.profileImage}
            />
          </View>
          <View style={{marginHorizontal:10}}>
            <Text style={{color:'white',fontSize:13,}}>MD Rashed Ali</Text>
            <View style={{flexDirection:'row',marginTop:5}}>
             <Ionicons name="call" size={18} color="#3EB94A" />
             <Text style={{color:'gray',fontSize:12,marginLeft:10}}>01834324543</Text>
            </View>
          </View>
          <TouchableOpacity style={{height:30,width:'15%',borderWidth:1,backgroundColor:'#0071ED',borderRadius:7,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontSize:14}}>Call</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color:'white',fontSize:15,marginVertical:30,alignSelf:'center',textDecorationLine:'underline'}}>Tracking Update</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={{marginRight:10}}>
            <SimpleLineIcons name="present" size={18} color="white" />
          </View>
          <View>
            <Text style={{color:'white',fontSize:14}}>Package is received</Text>
            <Text style={{color:'gray',fontSize:13,marginTop:4}}>19 Jan 2025 at 12:00 pm</Text>
          </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:20,marginBottom:20}}>
          <View style={{marginRight:10}}>
            <SimpleLineIcons name="present" size={18} color="white" />
          </View>
          <View>
            <Text style={{color:'white',fontSize:14}}>Package is received</Text>
            <Text style={{color:'gray',fontSize:13,marginTop:4}}>19 Jan 2025 at 12:00 pm</Text>
          </View>
        </View>
      </ThemedView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: '#091242',
    height: "100%",
    paddingHorizontal: 7,
  },
  profileImage: {
    width: 28,
    height: 28,
    borderRadius: 35 / 2,
    //marginRight: 10,
  },
});