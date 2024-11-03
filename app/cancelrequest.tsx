import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'; // Import dropdown picker

export default function cancelrequest() {
    const [parcel, setParcel] = useState('');
    const [note, setNote] = useState('');

    const [parcels, setParcels] = useState([
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'large', value: 'large' },
        { label: 'large', value: 'large' },
        { label: 'large', value: 'large' },
        // Add more districts as needed
        // Add more districts as needed
      ]);
      const [open, setOpen] = useState(false);
  return (
    <ScrollView style={styles.bodyContainer}>
      <Text style={{fontSize:20,color:'white',alignSelf:'center',marginTop:20,}}>Cancellation</Text>
      <Text style={styles.textStyle}>Parcel can cancel within pending time of any parcel. Enjoy </Text>
      <Text style={styles.textStyle}>the service and cooperate with our team. </Text>
      {/* Parcel Dropdown */}
      <View style={{ zIndex: 4, position: 'relative', marginTop:10, }}>
            <DropDownPicker
              open={open}
              value={parcel}
              items={parcels}
              setOpen={setOpen}
              setValue={setParcel}
              setItems={setParcels}
              placeholder="Select Parcel"
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
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  
    bodyContainer: {
      backgroundColor: '#091242',
      flex:1,
      padding:7,
    },
    textStyle: {
        fontSize:12,
        alignSelf:'center',
        color:'white',
    },
    dropdown: {
        backgroundColor: '#E0E0E0',
        borderRadius: 8,
        marginBottom: 12,
      },
      input: {
        backgroundColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 20,
        //marginTop:10,
        color: '#000',
      },
      noteInput: {
        height: 80, // Set the desired height for the Note input
      },
      submitButton: {
        backgroundColor: '#FFB82B',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom:10,
        marginTop:20,
      },
      submitButtonText: {
        color: '#000000',
        fontWeight: 'bold',
      },
  });
  