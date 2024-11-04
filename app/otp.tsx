import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Otp() {
    const navigation = useNavigation();
    const [otp, setOtp] = useState('');
    
  return (
    <ScrollView style={styles.bodyContainer}>
        <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="white" />
        </TouchableOpacity>
      <View style={styles.headerContainer}>
      <Image
                source={require('../assets/images/loginimg.png')}
                //style={styles.profileImage}
              />
      </View>
      <Text style={{fontSize:20,color:'white'}}>Verify OTP</Text>
      <Text style={{fontSize:12,color:'gray',marginTop:10}}>"Sign in to Green Bangla and access a world of sustainable </Text>
      <Text style={{fontSize:12,color:'gray',marginVertical:3}}>solutions at your fingertips. Join us in building a greener, </Text>
      <Text style={{fontSize:12,color:'gray',marginBottom:10}}>cleaner Bangladesh!"</Text>
        <TextInput
            placeholder="Your OTP"
            value={otp}
            onChangeText={setOtp}
            secureTextEntry={true} // This makes the text input secure
            style={styles.input}
            />
      {/* Submit Button */}
      <TouchableOpacity onPress={() => router.push({ pathname: "/login" })} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Sign Up</Text>
      </TouchableOpacity>
      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={{color:'white',fontSize:13}}>Don’t have any account? </Text>
        <TouchableOpacity onPress={() => router.push({ pathname: "/signup" })}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: '#091242', // Body background color
    flex: 1,
    padding: 7,
  },
  headerContainer: {
    backgroundColor: '#091242', // Matches body background color
    //paddingVertical: 20,
    marginTop:20,
    marginBottom:30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  textStyle: {
    fontSize: 12,
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#FFB82B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop:12,
    color: '#000',
    height:40,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#F6B426', // Change this color to your preferred color
    fontWeight: 'bold',
  },
});
