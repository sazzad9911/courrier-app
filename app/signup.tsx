import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function SignUp() {
  const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bname, setBname] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [rpassword, setRpassword] = useState('');
    
  return (
    <ScrollView style={styles.bodyContainer}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={{fontSize:20,color:'white'}}>Become a Merchant</Text>
      <Text style={{fontSize:12,color:'gray',marginTop:10}}>"Sign in to Green Bangla and access a world of sustainable </Text>
      <Text style={{fontSize:12,color:'gray',marginVertical:3}}>solutions at your fingertips. Join us in building a greener, </Text>
      <Text style={{fontSize:12,color:'gray',marginBottom:10}}>cleaner Bangladesh!"</Text>
      <TextInput
            placeholder="Business Name"
            value={bname}
            onChangeText={setBname}
            style={styles.input}
          />
      <TextInput
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
      <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address" // Set keyboard type for email
            autoCapitalize="none"        // Prevents auto-capitalization of email
            autoComplete="email"         // Helps with autofill on some devices
            />
      <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />
      <TextInput
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            style={styles.input2}
          />

        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} // This makes the text input secure
            style={styles.input}
            />
        <TextInput
            placeholder="Re-type Password"
            value={password}
            onChangeText={setRpassword}
            secureTextEntry={true} // This makes the text input secure
            style={styles.input}
            />
      {/* Submit Button */}
      <TouchableOpacity onPress={() => router.push({ pathname: "/otp" })} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Next</Text>
      </TouchableOpacity>
      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={{color:'white',fontSize:13}}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push({ pathname: "/login" })}>
          <Text style={styles.signUpText}>Sign In</Text>
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
    marginTop:25,
    marginBottom:20
  
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
  input2: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop:12,
    color: '#000',
    height:70,
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
