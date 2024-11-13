import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function EmptyBox() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/empty.png")} />
      <Text style={styles.text}>Empty Box</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091242",
    justifyContent: "center",  // Center content vertically
    alignItems: "center",      // Center content horizontally
  },
  image: {
    height: 119,
    width: 150,
    marginBottom: 20,          // Add space between image and text
  },
  text: {
    color: "white",            // Change text color to be more visible
    fontSize: 18,
  },
});
