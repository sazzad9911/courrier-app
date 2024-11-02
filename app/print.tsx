import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'

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
  qrImage: {
    marginTop:10,
    marginBottom:20,
    alignItems:'center',
    alignSelf:'center',
  },
});