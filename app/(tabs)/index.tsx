import { Image, StyleSheet, Platform, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons, MaterialIcons ,FontAwesome} from '@expo/vector-icons';


export default function HomeScreen() {
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
      <ScrollView style={{flex:1}}>
      <ThemedView style={styles.bodyContainer}>
        <View style={styles.row}>
          {/* Total Parcel */}
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <FontAwesome name="archive" size={24} color="blue" />
              <Text style={styles.cardTitle}>Total Parcel</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
              <Text style={styles.countText}>0</Text>
              <Text style={styles.amountText}>0 BDT</Text>
            </View>
          </View>

          {/* Delivered */}
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="local-shipping" size={24} color="green" />
              <Text style={styles.cardTitle}>Delivered</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
              <Text style={styles.countText}>0</Text>
              <Text style={styles.amountText}>0 BDT</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          {/* Pending */}
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="access-time" size={24} color="orange" />
              <Text style={styles.cardTitle}>Pending</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
              <Text style={styles.countText}>0</Text>
              <Text style={styles.amountText}>0 BDT</Text>
            </View>
          </View>

          {/* Partially Delivered */}
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="local-shipping" size={24} color="gray" />
              <Text style={styles.cardTitle}>Partially delivered</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
              <Text style={styles.countText}>0</Text>
              <Text style={styles.amountText}>0 BDT</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          {/* Approval Status */}
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="verified-user" size={24} color="blue" />
              <Text style={styles.cardTitle}>Approval Status</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
              <Text style={styles.countText}>0</Text>
              <Text style={styles.amountText}>0 BDT</Text>
            </View>
          </View>

          {/* Cancel */}
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="cancel" size={24} color="red" />
              <Text style={styles.cardTitle}>Cancel</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
              <Text style={styles.countText}>0</Text>
              <Text style={styles.amountText}>0 BDT</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{color:'white',fontSize:16,marginVertical:10,}}>Options</Text>
        </View>
        <View style={styles.row2}>
          <View style={styles.card2}>
              <View style={styles.cardstyle}>
                <MaterialIcons name="request-page" size={24} color="green" />
                <Text style={{fontSize:15,}}>Payment Request</Text>
              </View>
          </View>
          <View style={styles.card2}>
              <View style={styles.cardstyle}>
                <FontAwesome name="headphones" size={24} color="blue" />
                <Text style={{fontSize:15,}}>Customer Support</Text>
              </View>
          </View>
        </View>
        <Text style={{fontSize:16, color:'white',marginVertical:10,}}>Informations</Text>
        <View style={styles.row3}>
          <View style={styles.card3}>
              <View style={{alignItems:'center',padding:5}}>
                <Text style={{fontSize:15,}}>Payments</Text>
              </View>
          </View>
          <View style={styles.card3}>
              <View style={{alignItems:'center',padding:5}}>
                <Text style={{fontSize:15,}}>Customer Support</Text>
              </View>
          </View>
        </View>
        <View style={styles.row3}>
          <View style={styles.card3}>
              <View style={{alignItems:'center',padding:5}}>
                <Text style={{fontSize:15,}}>Status</Text>
              </View>
          </View>
          <View style={styles.card3}>
              <View style={{alignItems:'center',padding:5}}>
                <Text style={{fontSize:15,}}>Amount Charge</Text>
              </View>
          </View>
        </View>
        <Text style={{fontSize:16, color:'white',marginVertical:10,}}>Reports</Text>
        <View style={styles.row4}>
          <View style={styles.card4}>
              <View style={{alignItems:'center',padding:5}}>
                <Text style={{fontSize:15,color:'white'}}>Pending Parcel</Text>
              </View>
          </View>
          <View style={styles.card4}>
              <View style={{alignItems:'center',padding:5}}>
                <Text style={{fontSize:15,color:'white'}}>Today's Cancelled</Text>
              </View>
          </View>
        </View>
        <View style={styles.row4}>
          <View style={styles.card4}>
              <View style={{alignItems:'center',padding:5}}>
                <Text style={{fontSize:15,color:'white'}}>Latest Return</Text>
              </View>
          </View>
          <View style={styles.card4}>
              <View style={{alignItems:'center',padding:5}}>
                <Text style={{fontSize:15,color:'white'}}>Cancellation Request</Text>
              </View>
          </View>
        </View>
        <View style={styles.row4}>
          <View style={styles.card4}>
              <View style={{alignItems:'center',padding:5}}>
                <Text style={{fontSize:15,color:'white'}}>Fraud Check</Text>
              </View>
          </View>
        </View>
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
    flex:1,
    padding:5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginVertical: 10,
    marginTop:10,
    //padding:4,
    
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
    //justifyContent: 'center',
    //alignItems: 'center',
    height: 80,
  },
  iconContainer: {
    marginBottom: 10,
    flexDirection:'row',
  },
  cardTitle: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft:15,
  },
  countText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    //marginVertical: 5,
  },
  amountText: {
    fontSize: 16,
    color: '#888',
    //textAlign: 'center',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginTop:10,
  },
  card2: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
    height: 50,
  },
  cardstyle: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:5,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:10,
  },
  card3: {
    flex: 1,
    backgroundColor: '#EFE0C0',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
    height: 50,
  },
  row4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    marginBottom:10,
  },
  card4: {
    //flex: 1,
    //backgroundColor: '#EFE0C0',
    borderRadius: 10,
    padding: 5,
    //marginHorizontal: 5,
    
    height: 50,
    width:'49%',
    borderWidth:1,
    borderColor: 'gray'
    
  },
});
