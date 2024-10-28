import { Image, StyleSheet, Platform, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons, MaterialIcons ,FontAwesome} from '@expo/vector-icons';


export default function PickUp() {
  return (
    <ThemedView>
      <ThemedView style={styles.bodyContainer}>

      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: '#091242',
    height:"100%"
  },
});
