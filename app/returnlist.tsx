import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

export default function returnlist() {
    return (
        <ScrollView style={styles.bodyContainer}>
            <View style={{borderWidth:1,height:85,backgroundColor:'white',padding:10,borderRadius:5,marginBottom:10,}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#646464'}}>Tracking Code: 1674932</Text>
                    <Text>2500 BDT</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:4}}>
                    <Text>MD Safiul Alam</Text>
                    <Text>+ 70 BDT</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#646464',fontSize:12}}>19 Nov 2024</Text>
                    <Text style={{fontSize:13,color:'#C08308'}}>Pending</Text>
                </View>
            </View>
            <View style={{borderWidth:1,height:85,backgroundColor:'white',padding:10,borderRadius:5,marginBottom:10,}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#646464'}}>Tracking Code: 1674932</Text>
                    <Text>2500 BDT</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:4}}>
                    <Text>MD Safiul Alam</Text>
                    <Text>+ 70 BDT</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#646464',fontSize:12}}>19 Nov 2024</Text>
                    <Text style={{fontSize:13,color:'#C08308'}}>Pending</Text>
                </View>
            </View>
        </ScrollView>
      )
    }
    const styles = StyleSheet.create({
      
        bodyContainer: {
          backgroundColor: '#091242',
          flex:1,
          padding:7,
        },
      });