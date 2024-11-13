import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { useRouter } from "expo-router";

export default function ConsignmentCard({
  trackingId,
  name,
  date,
  cod,
  charge,
  status,
}: {
  trackingId: string;
  name: string;
  date: string;
  cod: number;
  charge: number;
  status: string;
}) {
  const route = useRouter();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        route.push({ pathname: "/parceldetails", params: { trackingId } })
      }
    >
      <ThemedView
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <Text style={{ color: "gray" }}>Tracking Code: {trackingId}</Text>
        <Text>{cod} BDT</Text>
      </ThemedView>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 5,
        }}
      >
        <Text>{name}</Text>
        <Text>+ {charge} BDT</Text>
      </ThemedView>
      <ThemedView
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <Text style={{ color: "gray" }}>{date}</Text>
        <Text
          style={{
            color:
              status === "pending"
                ? "#C08308"
                : status === "delivered"
                ? "#0071ED"
                : status === "cancelled"
                ? "#DF3C3E"
                : "#3EB94A",
          }}
        >
          {status.toUpperCase()}
        </Text>
      </ThemedView>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 10,
    height: 80,
    marginTop: 10,
  },
});
