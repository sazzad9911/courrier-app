import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, TextInput, Text, TouchableOpacity, ScrollView,} from 'react-native';
import Checkbox from 'expo-checkbox';
import DropDownPicker from 'react-native-dropdown-picker'; // Import dropdown picker

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function editdetails() {
  const [isChecked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Regular'); // State to track selected option
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('Home Delivery'); // State for delivery method
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAmount, setDeliveryAmount] = useState('');
  const [name, setName] = useState('');
  const [invoice, setInvoice] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState(null);
  const [thana, setThana] = useState('');
  const [weight, setWeight] = useState('');
  const [note, setNote] = useState('');
  const [districts, setDistricts] = useState([
    { label: 'Dhaka', value: 'dhaka' },
    { label: 'Chittagong', value: 'chittagong' },
    { label: 'Sylhet', value: 'sylhet' },
    { label: 'Khulna', value: 'khulna' },
    // Add more districts as needed
  ]);
  const [thanas, setThanas] = useState([
    { label: 'Gulshan', value: 'gulshan' },
    { label: 'Badda', value: 'badda' },
    { label: 'Hatirjheel', value: 'hatirjheel' },
    { label: 'Banani', value: 'banani' },
    // Add more districts as needed
  ]);
  const [open, setOpen] = useState(false); // For dropdown control
  const [open2, setOpen2] = useState(false);
  return (
    <ScrollView style={{flex:1}}>
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
          {/* District Dropdown */}
          <DropDownPicker
            open={open}
            value={district}
            items={districts}
            setOpen={setOpen}
            setValue={setDistrict}
            setItems={setDistricts}
            placeholder="District"
            style={styles.dropdown} // Optional custom styles
            textStyle={{ color: '#000' }} // Set dropdown text color
            dropDownContainerStyle={{ backgroundColor: '#E0E0E0' }}
          />
          {/* Thana Dropdown */}
          <DropDownPicker
            open={open2}
            value={thana}
            items={thanas}
            setOpen={setOpen2}
            setValue={setThana}
            setItems={setThanas}
            placeholder="Thana"
            style={styles.dropdown} // Optional custom styles
            textStyle={{ color: '#000' }} // Set dropdown text color
            dropDownContainerStyle={{ backgroundColor: '#E0E0E0' }}
            zIndex={4}
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
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>

        </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

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
  updateButton: {
    backgroundColor: '#FF9900',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom:10,
  },
  updateButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 12,
  },
});
