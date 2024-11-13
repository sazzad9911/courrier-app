// app/consignments.tsx
import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import EmptyBox from "@/components/EmptyBox";
import { getApi } from "@/constants/API";
import { useAlert } from "@/providers/AlertContext";
import { useLoader } from "@/providers/LoaderContext";
import { useAuth } from "@/providers/AuthContext";
import ConsignmentCard from "@/components/ConsignmentCard";

const screenWidth = Dimensions.get("window").width;
type DeliveryOrder = {
  id: string;
  userId: string;
  category: string; // e.g., "Regular"
  serviceType: string; // e.g., "Point Delivery"
  pickUpFrom: string; // e.g., "Home"
  phoneNumber: string;
  amount: number;
  name: string;
  invoiceNumber: string;
  address: string;
  weight: number;
  district: string;
  thana: string;
  note?: string; // Optional, e.g., "urgent"
  date: string; // Use `Date` if you want to handle this as a Date object instead
  status: string;
  trackingId: string;
  merchantNumber: string;
  merchantAddress: string;
  merchantDistrict: string;
  merchantThana: string;
  hubId: string | null;
  charge: number;
  riderId: string | null;
};

// Define the different scenes for each tab
const AllScene = () => {
  const route = useRouter();
  const [data, setData] = useState<DeliveryOrder[]>([]);
  const [take, setTake] = useState(15);
  const { showAlert } = useAlert();
  const { showLoader, hideLoader, isLoading } = useLoader();
  const { token, user } = useAuth();
  const isFocused = useIsFocused();
  const [refresh, setRefresh] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      showLoader();
      const res = await getApi("/apis/user/add-parcel", token || "", {
        take: take,
        skip: "0",
      });
      setData(res.data.result);
    } catch (error: any) {
      showAlert("error", error.response.data.error);
    } finally {
      hideLoader();
      setRefresh(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [take]);

  const onRefresh = useCallback(() => {
    fetchData();
  }, []);

  
  if (isLoading) return <View style={styles.scene} />;

  if (data.length === 0) {
    return <EmptyBox />;
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
      onScrollEndDrag={() => setTake((d) => d + 10)}
      style={styles.scene}
    >
      {data.map((doc, i) => (
        <ConsignmentCard
          key={i}
          charge={doc.charge}
          cod={doc.amount}
          date={new Date(doc.date).toDateString()}
          name={doc.name}
          status={doc.status}
          trackingId={doc.trackingId}
        />
      ))}
    </ScrollView>
  );
};

const PendingScene = () => {
  const route = useRouter();
  return (
    <ScrollView style={styles.scene}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => route.push({ pathname: "/parceldetails" })}
      >
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ color: "gray" }}>Tracking Code: 1674932</Text>
          <Text>2500 BDT</Text>
        </ThemedView>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text>MD Safiul Alam</Text>
          <Text>+ 70 BDT</Text>
        </ThemedView>
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ color: "gray" }}>19 Nov 2024</Text>
          <Text style={{ color: "#C08308" }}>Pending</Text>
        </ThemedView>
      </TouchableOpacity>
    </ScrollView>
  );
};

const DeliveredScene = () => {
  const route = useRouter();
  return (
    <ScrollView style={styles.scene}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => route.push({ pathname: "/parceldetails" })}
      >
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ color: "gray" }}>Tracking Code: 1674932</Text>
          <Text>2500 BDT</Text>
        </ThemedView>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text>MD Safiul Alam</Text>
          <Text>+ 70 BDT</Text>
        </ThemedView>
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ color: "gray" }}>19 Nov 2024</Text>
          <Text style={{ color: "#C08308" }}>Pending</Text>
        </ThemedView>
      </TouchableOpacity>
    </ScrollView>
  );
};

const CancelledScene = () => {
  const route = useRouter();
  return (
    <ScrollView style={styles.scene}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => route.push({ pathname: "/parceldetails" })}
      >
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ color: "gray" }}>Tracking Code: 1674932</Text>
          <Text>2500 BDT</Text>
        </ThemedView>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text>MD Safiul Alam</Text>
          <Text>+ 70 BDT</Text>
        </ThemedView>
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ color: "gray" }}>19 Nov 2024</Text>
          <Text style={{ color: "#C08308" }}>Pending</Text>
        </ThemedView>
      </TouchableOpacity>
    </ScrollView>
  );
};

const InReviewScene = () => {
  const route = useRouter();
  return (
    <ScrollView style={styles.scene}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => route.push({ pathname: "/parceldetails" })}
      >
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ color: "gray" }}>Tracking Code: 1674932</Text>
          <Text>2500 BDT</Text>
        </ThemedView>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text>MD Safiul Alam</Text>
          <Text>+ 70 BDT</Text>
        </ThemedView>
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ color: "gray" }}>19 Nov 2024</Text>
          <Text style={{ color: "#C08308" }}>Pending</Text>
        </ThemedView>
      </TouchableOpacity>
    </ScrollView>
  );
};

const PickAndDropScene = () => {
  const route = useRouter();
  return (
    <ScrollView style={styles.scene}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => route.push({ pathname: "/parceldetails" })}
      >
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ color: "gray" }}>Tracking Code: 1674932</Text>
          <Text>2500 BDT</Text>
        </ThemedView>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text>MD Safiul Alam</Text>
          <Text>+ 70 BDT</Text>
        </ThemedView>
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ color: "gray" }}>19 Nov 2024</Text>
          <Text style={{ color: "#C08308" }}>Pending</Text>
        </ThemedView>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Map scene names to scenes
const initialLayout = { width: Dimensions.get("window").width };
const renderScene = SceneMap({
  all: AllScene,
  pending: PendingScene,
  inReview: InReviewScene,
  delivered: DeliveredScene,
  cancelled: CancelledScene,
  pickDrop: PickAndDropScene,
});

export default function Consignments() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "all", title: "All" },
    { key: "pending", title: "Pending" },
    { key: "inReview", title: "Processing" },
    { key: "delivered", title: "Delivered" },
    { key: "cancelled", title: "Cancelled" },
    { key: "pickDrop", title: "Pick & Drop" },
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
    backgroundColor: "#004d00",
  },
  indicator: {
    backgroundColor: "#ffffff",
  },
  label: {
    color: "#ffffff",
  },
  scene: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: "#091242",
  },
  tabLabel: {
    color: "#ffffff",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
    height: 80,
    marginTop: 10,
  },
});
