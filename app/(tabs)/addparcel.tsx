import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, TextInput, Text, TouchableOpacity, ScrollView,} from 'react-native';
import Checkbox from 'expo-checkbox';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons, MaterialIcons ,FontAwesome} from '@expo/vector-icons';


export default function AddParcel() {
  const [isChecked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Regular'); // State to track selected option
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('Home Delivery'); // State for delivery method
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAmount, setDeliveryAmount] = useState('');
  const [name, setName] = useState('');
  const [invoice, setInvoice] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [thana, setThana] = useState('');
  const [weight, setWeight] = useState('');
  const [note, setNote] = useState('');
  return (
    <ThemedView style={{flex:1}}>
      <ThemedView style={styles.headerContainer}>
        {/* Search Bar */}
        <ThemedView style={styles.searchContainer}>
          <Ionicons name="search" size={16} color="#666" style={styles.searchIcon} />
          <TextInput
            placeholder="Search Consignments"
            placeholderTextColor="#666"
            style={styles.searchInput}
          />
        </ThemedView>
        {/* Balance Information */}
        <ThemedText style={styles.balanceText}>44.00 BDT</ThemedText>
        {/* Profile Image */}
        <TouchableOpacity onPress={() => console.log('Image Pressed')}>
          <Image
            source={require('../../assets/images/car.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        {/* Notification Icon */}
        <TouchableOpacity>
          <FontAwesome name="bell" size={22} color="gray" style={styles.notificationIcon} />
        </TouchableOpacity>
      </ThemedView>
      <ScrollView>
        <ThemedView style={styles.bodyContainer}>
            {/* Selection Options */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[styles.optionButton, selectedOption === 'Regular' && styles.selected]}
              onPress={() => setSelectedOption('Regular')}
            >
              <Text style={styles.optionText}>Regular</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionButton, selectedOption === 'Express' && styles.selected]}
              onPress={() => setSelectedOption('Express')}
            >
              <Text style={styles.optionText}>Express</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionButton, selectedOption === 'Pick & Drop' && styles.selected]}
              onPress={() => setSelectedOption('Pick & Drop')}
            >
              <Text style={styles.optionText}>Pick & Drop</Text>
            </TouchableOpacity>
          </View>

          {/* Radio Options */}
          <View style={styles.radioContainer}>
          {['Home Delivery', 'Point Delivery'].map(option => (
            <TouchableOpacity 
              key={option} 
              style={styles.radioOption} 
              onPress={() => setSelectedDeliveryMethod(option)} // Update state on press
            >
              <View style={[styles.radioCircle, selectedDeliveryMethod === option && styles.radioSelected]} />
              <Text style={styles.radioText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

          {/* Form Fields */}
          <TextInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.input}
          />
          <TextInput
            placeholder="Cash on Delivery amount"
            value={deliveryAmount}
            onChangeText={setDeliveryAmount}
            style={styles.input}
          />
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Invoice"
            value={invoice}
            onChangeText={setInvoice}
            style={styles.input}
          />
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            style={styles.input}
          />
          <TextInput
            placeholder="District"
            value={district}
            onChangeText={setDistrict}
            style={styles.input}
          />
          <TextInput
            placeholder="Thana"
            value={thana}
            onChangeText={setThana}
            style={styles.input}
          />
          <TextInput
            placeholder="Weight"
            value={weight}
            onChangeText={setWeight}
            style={styles.input}
          />
          <TextInput
            placeholder="Note"
            value={note}
            onChangeText={setNote}
            style={[styles.input, styles.noteInput]} // Apply additional style for note input
            multiline={true} // Allow multiline input
          />

          {/* Checkbox */}
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#FF9900" : undefined}
            />
            <Text style={styles.checkboxText}>Exchange</Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>

        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004d00', // Green background
    paddingHorizontal: 10,
    //paddingVertical: 15,
    paddingTop: 25,
    paddingBottom: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0', // Light gray background for the search bar
    borderRadius: 20,
    flex: 1,  // This ensures the search bar takes most of the width
    marginRight: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    color: '#000',
  },
  balanceText: {
    color: '#fff',
    fontSize: 12,
    marginRight: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 35 / 2,
    marginRight: 10,
  },
  notificationIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
  bodyContainer: {
    backgroundColor: '#091242',
    height:"100%",
    padding:5,
  },
  optionsContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginBottom: 16,
    marginTop:16
  },
  optionButton: {
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginHorizontal:5,
  },
  selected: {
    backgroundColor: '#FF9900',
  },
  optionText: {
    color: '#1E2246',
  },
  radioContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginBottom: 16,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:20,
    marginLeft:5,
  },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF9900',
    marginRight: 8,
  },
  radioSelected: {
    backgroundColor: '#FF9900',
  },
  radioText: {
    color: '#FFFFFF',
  },
  input: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    color: '#000',
  },
  noteInput: {
    height: 80, // Set the desired height for the Note input
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxText: {
    marginLeft: 8,
    marginVertical:10,
    color: '#FFFFFF',
  },
  submitButton: {
    backgroundColor: '#FF9900',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom:10,
  },
  submitButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});
