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
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
  </ScrollView>
);

const PendingScene = () => (
  <ScrollView style={styles.scene}>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
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
    </TouchableOpacity>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
    height: 80,
    marginTop:10,

  },
});
