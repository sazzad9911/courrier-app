import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import { useAuth } from '@/providers/AuthContext';

export default function Profile() {
    const navigation = useNavigation();
    const {user}=useAuth()
  
    return (
        <View style={styles.container}>
            {/* Background image */}
            <Image
                source={require('../assets/images/proback.png')}
                style={styles.backgroundImage}
            />
        
            {/* Header with back arrow and title over the background image */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
            </View>

            {/* Profile Image below the background */}
            <View style={styles.profileImageContainer}>
                <Image
                    source={require('../assets/images/user.png')}
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.cameraIconContainer}>
                    <Ionicons name="camera" size={12} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:20}}>MD Sagor Ali</Text>
            <Text style={{fontSize:14,color:'gray',alignSelf:'center',marginTop:4}}>Banglamart Ecommerce Limited</Text>
            <View style={{marginVertical:10,borderWidth:1,height:45,width:'80%',alignSelf:'center',borderRadius:7,borderColor:'gray',padding:5,justifyContent:'center',}}>
               <View style={{marginHorizontal:5,flexDirection:'row',alignContent:'space-between',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',}}>
                    <Text style={{fontSize:14,color:'white'}}>259</Text>
                    <Text style={{fontSize:14,color:'gray',marginLeft:4}}>Delivery</Text>
                </View>
                <View style={{flexDirection:'row',}}>
                    <Text style={{fontSize:14,color:'white'}}>259</Text>
                    <Text style={{fontSize:14,color:'gray',marginLeft:4}}>Pending</Text>
                </View>
                <View style={{flexDirection:'row',}}>
                    <Text style={{fontSize:14,color:'white'}}>259</Text>
                    <Text style={{fontSize:14,color:'gray',marginLeft:4}}>Cancelled</Text>
                </View>
                </View> 
            </View>
            <Text style={{color:'white',fontSize:15,alignSelf:'center',marginTop:10,marginBottom:5}}>My Address</Text>
            <Text style={{color:'gray',fontSize:13,alignSelf:'center'}}>Khandakar lodge, House-65, Road-2, R.K Road, Rangpur</Text>
            <View style={{flexDirection:'row',alignSelf:'center',marginTop:20,gap:10}}>
                <TouchableOpacity style={{height:45,width:'40%',backgroundColor:'#FA6F6F',borderRadius:7,alignItems:'center',justifyContent:'center'}}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push({ pathname: "/editprofile" })} style={{height:45,width:'40%',backgroundColor:'#44C178',borderRadius:7,alignItems:'center',justifyContent:'center'}}>
                    <Text>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{height:45,width:'80%',backgroundColor:'#FFB82B',borderRadius:7,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:15}}>
                    <Text>Update Password</Text>
            </TouchableOpacity>
            <Text style={{color:'white',fontSize:12,alignSelf:'center',marginTop:30}}>Follows Us</Text>
            <View style={{flexDirection:'row',width:'35%',justifyContent:'space-between',alignSelf:'center',marginTop:10}}>
             <TouchableOpacity><FontAwesome name="instagram" size={20} color="gray" /></TouchableOpacity>
             <TouchableOpacity><FontAwesome name="facebook" size={20} color="gray" /></TouchableOpacity>
             <TouchableOpacity><FontAwesome name="twitter" size={20} color="gray" /></TouchableOpacity>
             <TouchableOpacity><FontAwesome name="linkedin" size={20} color="gray" /></TouchableOpacity>
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
        height: 200, // Adjust based on the background image height
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
        marginTop: 160, // Adjust this to control the spacing from the background image
        alignItems: 'center',
    },
    cameraIconContainer: {
        //position: 'absolute',
        bottom: 30,
        right: -30,
        backgroundColor: '#E8C001', // Icon background color
        borderRadius: 15,
        padding: 3,
        borderWidth: 1,
        borderColor: 'white', // Border to make it look separate from profile image
    },
    profileImage: {
        width: 73,
        height: 73,
        borderRadius: 40, // Adjusted to make it a perfect circle
        borderWidth: 3,
        borderColor: '#0F4E95',
    },
});
