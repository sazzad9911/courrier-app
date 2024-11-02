import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function print() {
  return (
    <ScrollView style={{flex:1,backgroundColor: '#091242'}}>
      <ThemedView style={styles.bodyContainer}>
        <Image
              source={require('../assets/images/image 7.png')}
              style={styles.profileImage}
            />
        <Text style={{color:'gray',fontSize:14,alignSelf:'center'}}>Banglamart Ecommerce</Text>
        <Text style={{ color: 'gray', fontSize: 14,marginVertical:4,alignSelf:'center' }}>
                Parcel Code: {' '}
                <Text style={{ color: 'white',fontWeight:'bold' }}>1674932</Text>
              </Text>
        <Image
              source={require('../assets/images/code.png')}
              style={styles.codeImage}
            />
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Image
                source={require('../assets/images/qrcode.png')}
                //style={styles.profileImage}
              />
          <View style={{marginLeft:12}}>
            <Text style={{color:'gray', fontSize:12}}>D. Type: Home D</Text>
            <Text style={{color:'gray', fontSize:12,marginVertical:5}}>Weight: 1.5 kg</Text>
            <Text style={{color:'gray', fontSize:12}}>Invoice: N/A</Text>
          </View>
        </View>
        <View style={{borderWidth:1.5,borderColor:'gray',width:'60%',height:80,alignSelf:'center',marginTop:20,marginBottom:15}}>
          <View style={{padding:5,}}>
            <Text style={{ color: 'gray', fontSize: 13}}>
                    Name: {' '}
                    <Text style={{ color: 'white',fontWeight:'bold' }}>Sarjis Alam</Text>
                  </Text>
            <Text style={{ color: 'gray', fontSize: 13,marginVertical:4}}>
                  Phone: {' '}
                  <Text style={{ color: 'white',fontWeight:'bold' }}>019832434734</Text>
                </Text>
            <Text style={{ color: 'gray', fontSize: 13}}>
                  Address: {' '}
                  <Text style={{ color: 'white',fontWeight:'bold' }}>Saver, Dhaka</Text>
                </Text>
          </View>
        </View>
        <View style={{borderWidth:1.5,borderColor:'gray',width:'60%',height:30,alignSelf:'center',padding:5,marginBottom:30,}}>
          <Text style={{ color: 'gray', fontSize: 13, alignSelf:'center'}}>
                    COD: {' '}
                    <Text style={{ color: 'white',fontWeight:'bold' }}>2500 BDT</Text>
                  </Text>
        </View>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
          <Image
                  source={require('../assets/images/logogb.png')}
                  //style={styles.profileImage}
                />
          <Text style={{color:'white',fontSize:20,marginLeft:10}}>Green Bangla</Text>
        </View>
        <Text style={{fontSize:12,color:'gray',alignSelf:'center',marginVertical:4}}>www.greenbangla.courier</Text>
        <Text style={{fontSize:12,color:'gray',alignSelf:'center'}}>19 July 2025 at 12:40 pm</Text>
        <TouchableOpacity style={{borderWidth:1,height:30, width:'23%',backgroundColor:'#F6B426',alignSelf:'center',justifyContent:'center',paddingHorizontal:10,borderRadius:7,marginTop:50}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <AntDesign name="printer" size={18} color="black" />
            <Text style={{fontSize:14,color:'black',marginLeft:7}}>Print</Text>
          </View>
        </TouchableOpacity>
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
    width: 73,
    height: 73,
    borderRadius:80,
    //marginRight: 10,
    marginTop:20,
    marginBottom:10,
    alignItems:'center',
    alignSelf:'center',
  },
  codeImage: {
    marginTop:10,
    marginBottom:20,
    alignItems:'center',
    alignSelf:'center',
  },
});