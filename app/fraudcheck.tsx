import { View, Text, ScrollView, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

export default function fraudcheck() {
    const [searchText, setSearchText] = useState('');
    return (
        <ScrollView style={styles.bodyContainer}>
          <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search by number"
                value={searchText}
                onChangeText={setSearchText}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => alert(`Searching for ${searchText}`)}
            >
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>
          <Image
                source={require('../assets/images/fraud.png')}
                style={styles.profileImage}
              />
              <Text style={{fontSize:12,color:'white',alignSelf:'center'}}>Search By Number</Text>
        </ScrollView>
      )
    }
    const styles = StyleSheet.create({
      
        bodyContainer: {
          backgroundColor: '#091242',
          flex:1,
          padding:5,
        },
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#091242',
            padding: 5,
        },
        input: {
            flex: 1,
            backgroundColor: '#D3D3D3', // Light grey background for the input
            borderRadius: 8,
            paddingHorizontal: 10,
            height: 40,
            marginRight:7,
        },
        button: {
            backgroundColor: '#F6B426', // Yellowish color for the button
            borderRadius: 8, // Adds border radius to the button
            paddingVertical: 10,
            paddingHorizontal: 15,
            marginLeft: 5,
        },
        buttonText: {
            color: 'black', // Text color for the button
            fontSize: 16,
        },
        profileImage: {
            //borderRadius:80,
            marginTop:50,
            marginBottom:20,
            alignItems:'center',
            alignSelf:'center',
          },
      });