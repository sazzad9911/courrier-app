// Loader.tsx
import React from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Modal,
  Dimensions,
} from "react-native";

interface LoaderProps {
  visible: boolean;
}

const { width, height } = Dimensions.get("window");
const Loader: React.FC<LoaderProps> = ({ visible }) => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)", // semi-transparent background
  },
});

export default Loader;
