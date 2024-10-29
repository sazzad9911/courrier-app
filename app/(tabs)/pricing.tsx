import { Image, StyleSheet, Platform, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; // Import dropdown picker
import AntDesign from '@expo/vector-icons/AntDesign';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons, MaterialIcons ,FontAwesome} from '@expo/vector-icons';
import { useState } from 'react';
import { Directions } from 'react-native-gesture-handler';

export default function Pricing() {
  const [category, setCategory] = useState(null);
  const [service, setService] = useState(null);

  const [categorys, setCategorys] = useState([
    { label: 'Dhaka', value: 'dhaka' },
    { label: 'Chittagong', value: 'chittagong' },
    { label: 'Sylhet', value: 'sylhet' },
    { label: 'Khulna', value: 'khulna' },
    // Add more districts as needed
  ]);
  const [services, setServices] = useState([
    { label: 'Dhaka', value: 'dhaka' },
    { label: 'Chittagong', value: 'chittagong' },
    { label: 'Sylhet', value: 'sylhet' },
    { label: 'Khulna', value: 'khulna' },
    // Add more districts as needed
  ]);
  const [open, setOpen] = useState(false); // For dropdown control
  const [open2, setOpen2] = useState(false); // For dropdown control
  return (
    <ScrollView style={{flex:1,backgroundColor: '#091242'}}>
      <ThemedView style={styles.bodyContainer}>
        <Text style={{fontSize:22,color:'white', alignSelf:'center',marginTop:20,marginBottom:3}}>Pricing</Text>
        <Text style={{color:'white',fontSize:12,alignSelf:'center',marginBottom:20}}>You can easily calculate your delivery charge here</Text>
        <View style={styles.row}>
          {/* From Input Field */}
          <View style={styles.card}>
            <View style={styles.cardstyle}>
              <TextInput
                placeholder="From"
                placeholderTextColor="#gray"
                style={styles.input}
              />
            </View>
          </View>
          
          {/* To Input Field */}
          <View style={styles.card}>
            <View style={styles.cardstyle}>
              <TextInput
                placeholder="To"
                placeholderTextColor="gray"
                style={styles.input}
              />
            </View>
          </View>
        </View>

        <View style={styles.row}>
              <View style={{ zIndex: 2, position: 'relative',flex:1, paddingHorizontal:2 }}>
                  <DropDownPicker
                    open={open}
                    value={category}
                    items={categorys}
                    setOpen={setOpen}
                    setValue={setCategory}
                    setItems={setCategorys}
                    placeholder="Category"
                    style={styles.dropdown}
                    textStyle={{ color: '#000' }}
                    dropDownContainerStyle={{ backgroundColor: '#E0E0E0' }}
                  />
                </View>
                <View style={{ zIndex: 1, position: 'relative',flex:1,paddingHorizontal:2}}>
                  <DropDownPicker
                    open={open2}
                    value={service}
                    items={services}
                    setOpen={setOpen2}
                    setValue={setService}
                    setItems={setServices}
                    placeholder="Service Type"
                    style={styles.dropdown}
                    textStyle={{ color: '#000' }}
                    dropDownContainerStyle={{ backgroundColor: '#E0E0E0' }}
                  />
                </View>
            </View>
            <View style={styles.row}>
              <View style={styles.card2}>
                <View style={styles.cardstyle}>
                  <TextInput
                    placeholder="Weight"
                    placeholderTextColor="gray"
                    style={styles.input}
                  />
                </View>
              </View>
            </View>
            <View style={{ 
                backgroundColor: '#D9D9D9',
                width: 90,
                height: 90,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginVertical:20,
              }}>
                <Text style={{ fontSize: 14, color: '#000' }}>50 TK</Text>
            </View>
            <View style={{paddingHorizontal:10,marginTop:5}}>
              <View style={{flexDirection:'row',marginBottom:10}}>
                <AntDesign name="checkcircle" size={18} color="lightgreen" />
                <Text style={{color:'white',marginLeft:7,fontSize:13}}>১% ক্যাশ অন ডেলিভারি এবং রিস্ক ম্যানেজমেন্ট চার্জ প্রযোজ্য</Text>
              </View>
              <View style={{flexDirection:'row',marginBottom:10}}>
                <AntDesign name="checkcircle" size={18} color="lightgreen" />
                <Text style={{color:'white',marginLeft:7,fontSize:13}}>পার্সেল সাইজের কারণে ডেলিভারি মাশুল পরিবর্তিত হতে পারে</Text>
              </View>
              <View style={{flexDirection:'row',marginBottom:10}}>
                <AntDesign name="checkcircle" size={18} color="lightgreen" />
                <Text style={{color:'white',marginLeft:7,fontSize:13}}>উক্ত চার্জসমূহ ভ্যাট ও ট্যাক্স ব্যাতিত</Text>
              </View>
              <View style={{flexDirection:'row',marginBottom:10}}>
                <AntDesign name="checkcircle" size={18} color="lightgreen" />
                <Text style={{color:'white',marginLeft:7,fontSize:13}}>অনাকাঙ্ক্ষিত কারণবশত ডেলিভারি সময়ের পরিবর্তন হতে পারে</Text>
              </View>
            </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: '#091242',
    height: "100%",
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:15,

  },
  card: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 3,
    height: 45,
  },
  card2: {
    //flex: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 3,
    height: 45,
    width:'49%'
  },
  cardstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 14,
  },
  dropdown: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    //marginBottom: 12,
  },
});
