import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, TextInput, Text, TouchableOpacity, ScrollView,} from 'react-native';
import Checkbox from 'expo-checkbox';
import DropDownPicker from 'react-native-dropdown-picker'; // Import dropdown picker
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons, MaterialIcons ,FontAwesome} from '@expo/vector-icons';


export default function PickUp() {
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
  const [parcel, setParcel] = useState('');
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
  const [parcels, setParcels] = useState([
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
    // Add more districts as needed
  ]);
  const [open, setOpen] = useState(false); // For dropdown control
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <ScrollView style={{flex:1, backgroundColor: '#091242'}} contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedView style={styles.bodyContainer}>
          <View>
            <Text style={{ fontSize: 22, color: 'white', alignSelf: 'center', marginVertical: 10 }}>Pick Up</Text>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 12 }}>Enjoy the convenience of parcel pickup right from your</Text>
              <Text style={{ color: 'white', fontSize: 12 }}>doorstep! Schedule your pickup, and we’ll handle the rest</Text>
              <Text style={{ color: 'white', fontSize: 12 }}>
                for a hassle-free experience. Pick Up time{' '}
                <Text style={{ color: '#F6B426' }}>9am to 12pm</Text>
              </Text>
            </View>
          </View>
            {/* Selection Options */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[styles.optionButton, selectedOption === 'Regular' && styles.selected]}
              onPress={() => setSelectedOption('Regular')}
            >
              <View style={styles.iconBackground}>
                <FontAwesome name="car" size={20} color="white" />
              </View>
              <Text style={styles.optionText}>Regular</Text>
              <Text style={{fontSize:11}}>24H</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionButton, selectedOption === 'Express' && styles.selected]}
              onPress={() => setSelectedOption('Express')}
            >
              <View style={styles.iconBackground}>
              <MaterialCommunityIcons name="lightning-bolt-outline" size={20} color="white" />
              </View>
              <Text style={styles.optionText}>Express</Text>
              <Text style={{fontSize:11}}>24H</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionButton, selectedOption === 'Pick & Drop' && styles.selected]}
              onPress={() => setSelectedOption('Pick & Drop')}
            >
              <View style={styles.iconBackground}>
              <FontAwesome5 name="map-marker-alt" size={20} color="white" />
              </View>
              <Text style={styles.optionText}>Pick & Drop</Text>
              <Text style={{fontSize:11}}>24H</Text>
            </TouchableOpacity>
          </View>

          {/* Form Fields */}
          <TextInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.input}
          />
          {/* Parcel Dropdown */}
          <View style={{ zIndex: 3, position: 'relative' }}>
            <DropDownPicker
              open={open3}
              value={parcel}
              items={parcels}
              setOpen={setOpen3}
              setValue={setParcel}
              setItems={setParcels}
              placeholder="Select Parcel"
              style={styles.dropdown}
              textStyle={{ color: '#000' }}
              dropDownContainerStyle={{ backgroundColor: '#E0E0E0' }}
            />
          </View>
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            style={styles.input}
          />
          {/* District Dropdown */}
          <View style={{ zIndex: 2, position: 'relative' }}>
            <DropDownPicker
              open={open}
              value={district}
              items={districts}
              setOpen={setOpen}
              setValue={setDistrict}
              setItems={setDistricts}
              placeholder="Select District"
              style={styles.dropdown}
              textStyle={{ color: '#000' }}
              dropDownContainerStyle={{ backgroundColor: '#E0E0E0' }}
            />
          </View>
          {/* Thana Dropdown */}
          <View style={{ zIndex: 1, position: 'relative' }}>
            <DropDownPicker
              open={open2}
              value={thana}
              items={thanas}
              setOpen={setOpen2}
              setValue={setThana}
              setItems={setThanas}
              placeholder="Select Thana"
              style={styles.dropdown}
              textStyle={{ color: '#000' }}
              dropDownContainerStyle={{ backgroundColor: '#E0E0E0' }}
            />
          </View>
          <TextInput
            placeholder="Note"
            value={note}
            onChangeText={setNote}
            style={[styles.input, styles.noteInput]} // Apply additional style for note input
            multiline={true} // Allow multiline input
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
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
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#FF9900',
  },
  iconBackground: {
    width: 30,         // Adjust the size for the circle
    height: 30,
    borderRadius: 15,  // Half of width and height for a perfect circle
    backgroundColor: '#091242', // Background color for the icon circle
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,    // Space between the icon and the text
  },
  optionText: {
    color: '#1E2246',
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
  submitButton: {
    backgroundColor: '#FF9900',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom:10,
    marginTop:10,
  },
  submitButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 12,
  },
});
