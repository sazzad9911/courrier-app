import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

export default function EditProfile() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [bname, setBname] = useState('');
    const [address, setAddress] = useState('');

    // State for storing the profile image URI
    const [profileImageUri, setProfileImageUri] = useState(require('../assets/images/user.png'));

    // Function to handle image selection from device
    const handleImagePick = async () => {
        // Request permission to access the media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'You need to grant permission to change the profile picture.');
            return;
        }

        // Launch image picker
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1], // Square aspect ratio
            quality: 1,
        });

        // Update the profile image if an image is selected
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setProfileImageUri({ uri: result.assets[0].uri });
        }
    };

    return (
        <View style={styles.container}>
            {/* Background image */}
            <Image
                source={require('../assets/images/proback.png')}
                style={styles.backgroundImage}
            />

            {/* Header with back arrow and title */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Edit Profile</Text>
            </View>

            {/* Profile Image Section */}
            <View style={styles.profileImageContainer}>
                <Image
                    source={profileImageUri} // Display selected or default profile image
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.cameraIconContainer} onPress={handleImagePick}>
                    <Ionicons name="camera" size={12} color="white" />
                </TouchableOpacity>
            </View>

            {/* Input Fields */}
            <View style={{ paddingHorizontal: 10 }}>
                <TextInput
                    placeholder="Your Name"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Phone Number"
                    value={phone}
                    onChangeText={setPhone}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Business Name"
                    value={bname}
                    onChangeText={setBname}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Address"
                    value={address}
                    onChangeText={setAddress}
                    style={[styles.input, styles.noteInput]}
                    multiline={true}
                />
                <TouchableOpacity style={styles.updateButton}>
                    <Text style={styles.updateButtonText}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#091242',
    },
    backgroundImage: {
        width: '100%',
        height: 200,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 30,
        left: 15,
        zIndex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black',
    },
    profileImageContainer: {
        marginTop: 160,
        alignItems: 'center',
    },
    cameraIconContainer: {
        bottom: 30,
        right: -30,
        backgroundColor: '#E8C001',
        borderRadius: 15,
        padding: 3,
        borderWidth: 1,
        borderColor: 'white',
    },
    profileImage: {
        width: 73,
        height: 73,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#0F4E95',
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
        height: 80,
    },
    updateButton: {
        backgroundColor: '#FFB82B',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 30,
    },
    updateButtonText: {
        color: '#000000',
    },
});
