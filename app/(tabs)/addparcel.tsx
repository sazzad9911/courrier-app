import { Image, StyleSheet, Platform, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons, MaterialIcons ,FontAwesome} from '@expo/vector-icons';


export default function AddParcel() {
  return (
    <ThemedView>
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
      <ThemedView style={styles.bodyContainer}>

      </ThemedView>
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
    height:"100%"
  },
});
