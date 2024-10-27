// app/consignments.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

// Define the different scenes for each tab
const AllScene = () => (
  <ScrollView style={styles.scene}>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
  </ScrollView>
);

const PendingScene = () => (
  <ScrollView style={styles.scene}>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.card}>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>Tracking Code: 1674932</Text>
        <Text>2500 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
        <Text>MD Safiul Alam</Text>
        <Text>+ 70 BDT</Text>
      </ThemedView>
      <ThemedView style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{color:'gray'}}>19 Nov 2024</Text>
        <Text style={{color:'#C08308'}}>Pending</Text>
      </ThemedView>
    </ThemedView>
  </ScrollView>
);

const DeliveredScene = () => (
  <ScrollView style={styles.scene}>
    <ThemedText>Delivered Consignments</ThemedText>
  </ScrollView>
);

const CancelledScene = () => (
  <ScrollView style={styles.scene}>
    <ThemedText>Cancelled Consignments</ThemedText>
  </ScrollView>
);

const InReviewScene = () => (
  <ScrollView style={styles.scene}>
    <ThemedText>Consignments In Review</ThemedText>
  </ScrollView>
);

const PickAndDropScene = () => (
  <ScrollView style={styles.scene}>
    <ThemedText>Pick & Drop Consignments</ThemedText>
  </ScrollView>
);

// Map scene names to scenes
const initialLayout = { width: Dimensions.get('window').width };
const renderScene = SceneMap({
  all: AllScene,
  pending: PendingScene,
  delivered: DeliveredScene,
  cancelled: CancelledScene,
  inReview: InReviewScene,
  pickDrop: PickAndDropScene,
});

export default function Consignments() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'all', title: 'All' },
    { key: 'pending', title: 'Pending' },
    { key: 'delivered', title: 'Delivered' },
    { key: 'cancelled', title: 'Cancelled' },
    { key: 'inReview', title: 'In Review' },
    { key: 'pickDrop', title: 'Pick & Drop' },
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
         scrollEnabled={true}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      labelStyle={styles.label}
     
    />
  );

  return (
    <ThemedView style={{ flex: 1 }}>
      {/* Header Section */}
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

      {/* Tab View */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004d00',
    paddingHorizontal: 10,
    paddingTop: 25,
    paddingBottom: 5,
  },
  balanceText: {
    color: '#fff',
    fontSize: 12,
    marginRight: 10,
  },
  notificationIcon: {
    marginRight: 10,
  },
  tabBar: {
    backgroundColor: '#004d00',
  },
  indicator: {
    backgroundColor: '#ffffff',
  },
  label: {
    color: '#ffffff',
  },
  scene: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#091242',
  },
  tabLabel: {
    color: '#ffffff',
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
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 35 / 2,
    marginRight: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
    height: 80,
    marginTop:10,

  },
});
