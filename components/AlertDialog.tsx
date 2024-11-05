// AlertDialog.tsx
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

interface AlertDialogProps {
  visible: boolean;
  type: "success" | "error" | "warning";
  message: string;
  onClose: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  visible,
  type,
  message,
  onClose,
}) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // Auto-close after 3 seconds
      return () => clearTimeout(timer); // Cleanup the timer on unmount or when `visible` changes
    }
  }, [visible, onClose]);

  const getAlertStyle = () => {
    switch (type) {
      case "success":
        return styles.success;
      case "error":
        return styles.error;
      case "warning":
        return styles.warning;
      default:
        return styles.default;
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.container, getAlertStyle()]}>
          <AntDesign
            onPress={onClose}
            style={{
              position: "absolute",
              right: -4,
              top: -6,
            }}
            name="closecircle"
            size={28}
            color="red"
          />
          {type === "success" ? (
            <AntDesign name="checkcircle" size={24} color="green" />
          ) : type === "error" ? (
            <MaterialIcons name="error" size={24} color="red" />
          ) : (
            <Entypo name="warning" size={24} color="black" />
          )}
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  container: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    marginTop: 2,
  },
  success: {
    backgroundColor: "#d4edda",
    borderColor: "#c3e6cb",
  },
  error: {
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
  },
  warning: {
    backgroundColor: "#fff3cd",
    borderColor: "#ffeeba",
  },
  default: {
    backgroundColor: "#f1f1f1",
    borderColor: "#ccc",
  },
});

export default AlertDialog;
