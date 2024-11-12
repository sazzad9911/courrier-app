import {
  Image,
  StyleSheet,
  Platform,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AntDesign from "@expo/vector-icons/AntDesign";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Directions } from "react-native-gesture-handler";
import { router } from "expo-router";
import { getApi, postApi } from "@/constants/API";
import { useAlert } from "@/providers/AlertContext";
import { useAuth } from "@/providers/AuthContext";
import { useLoader } from "@/providers/LoaderContext";

export default function Pricing() {
  const [category, setCategory] = useState(null);
  const [service, setService] = useState(null);
  const [areaList, setAreaList] = useState<{ label: string; value: string }[]>(
    []
  );
  const [weight, setWeight] = useState<string>("");
  const [pickUpType, setPickUpType] = useState(null);
  const [fromArea, setFromArea] = useState(null);
  const [toArea, setToArea] = useState(null);
  const [price, setPrice] = useState(0);
  const { token } = useAuth();
  const { showAlert } = useAlert();
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const res = (await getApi("/apis/district")) as { data: string[] };
        let arr: { label: string; value: string }[] = [];
        res.data.forEach((d) => {
          arr.push({ label: d, value: d.toLowerCase() });
        });
        setAreaList(arr);
      } catch (error) {
        setAreaList([]);
      }
    };

    fetchAreas();
  }, []);
  const calculatePrice = async () => {
    try {
      showLoader();
      const res = await postApi("/apis/user/pricing", token || "", {
        from: fromArea,
        to: toArea,
        category: category,
        serviceType: service,
        weight: weight,
        pickUp: pickUpType,
      });
      setPrice(res.data);
    } catch (error: any) {
      showAlert("error", error.response.data.error);
    } finally {
      hideLoader();
    }
  };

  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={{ flex: 1, backgroundColor: "#091242" }}
    >
      <ThemedView style={styles.bodyContainer}>
        <Text
          style={{
            fontSize: 22,
            color: "white",
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 3,
          }}
        >
          Pricing
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            alignSelf: "center",
            marginBottom: 20,
          }}
        >
          You can easily calculate your delivery charge here
        </Text>
        <View style={styles.row}>
          <View style={styles.card1}>
            <Picker
              selectedValue={fromArea}
              onValueChange={(itemValue, itemIndex) => setFromArea(itemValue)}
              mode="dropdown"
            >
              <Picker.Item color="#091242" label={"From"} value={null} />
              {areaList.map((doc, i) => (
                <Picker.Item key={i} label={doc.label} value={doc.value} />
              ))}
            </Picker>
          </View>
          <View style={styles.card1}>
            <Picker
              selectedValue={toArea}
              onValueChange={(itemValue, itemIndex) => setToArea(itemValue)}
              mode="dropdown"
            >
              <Picker.Item color="#091242" label={"To"} value={null} />
              {areaList.map((doc, i) => (
                <Picker.Item key={i} label={doc.label} value={doc.value} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card1}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
              mode="dropdown"
            >
              <Picker.Item color="#091242" label={"Category"} value={null} />
              <Picker.Item label={"Regular"} value={"Regular"} />
              <Picker.Item label={"Express"} value={"Express"} />
              <Picker.Item label={"Pick & Drop"} value={"Pick & Drop"} />
            </Picker>
          </View>
          <View style={styles.card1}>
            <Picker
              selectedValue={service}
              onValueChange={(itemValue, itemIndex) => setService(itemValue)}
              mode="dropdown"
            >
              <Picker.Item
                color="#091242"
                label={"Service Type"}
                value={null}
              />
              <Picker.Item label={"Home Delivery"} value={"Home Delivery"} />
              <Picker.Item label={"Point Delivery"} value={"Point Delivery"} />
            </Picker>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card2}>
            <TextInput keyboardType={"number-pad"}
              value={weight}
              onChangeText={setWeight}
              placeholder="Weight"
              style={styles.input}
            />
          </View>
          <View style={styles.card1}>
            <Picker
              selectedValue={pickUpType}
              onValueChange={(itemValue, itemIndex) => setPickUpType(itemValue)}
              mode="dropdown"
            >
              <Picker.Item color="#091242" label={"PickUp Type"} value={null} />
              <Picker.Item label={"Home"} value={"Home"} />
              <Picker.Item label={"Hub"} value={"Hub"} />
            </Picker>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#D9D9D9",
            width: 90,
            height: 90,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginVertical: 20,
          }}
        >
          <Text style={{ fontSize: 14, color: "#000" }}>
            {price.toFixed(2)} TK
          </Text>
        </View>

        <TouchableOpacity
          disabled={
            !fromArea ||
            !toArea ||
            !category ||
            !service ||
            !weight ||
            !pickUpType
          }
          onPress={calculatePrice}
          //onPress={() => router.push({ pathname: "/updatepass" })}
          style={[
            styles.updatePasswordButton,
            !fromArea ||
            !toArea ||
            !category ||
            !service ||
            !weight ||
            !pickUpType
              ? null
              : styles.updatePasswordButtonAct,
          ]}
        >
          <Text>Calculate</Text>
        </TouchableOpacity>

        <View style={{ paddingHorizontal: 10, marginTop: 5 }}>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <AntDesign name="checkcircle" size={18} color="lightgreen" />
            <Text style={{ color: "white", marginLeft: 7, fontSize: 13 }}>
              ১% ক্যাশ অন ডেলিভারি এবং রিস্ক ম্যানেজমেন্ট চার্জ প্রযোজ্য
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <AntDesign name="checkcircle" size={18} color="lightgreen" />
            <Text style={{ color: "white", marginLeft: 7, fontSize: 13 }}>
              পার্সেল সাইজের কারণে ডেলিভারি মাশুল পরিবর্তিত হতে পারে
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <AntDesign name="checkcircle" size={18} color="lightgreen" />
            <Text style={{ color: "white", marginLeft: 7, fontSize: 13 }}>
              উক্ত চার্জসমূহ ভ্যাট ও ট্যাক্স ব্যাতিত
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <AntDesign name="checkcircle" size={18} color="lightgreen" />
            <Text style={{ color: "white", marginLeft: 7, fontSize: 13 }}>
              অনাকাঙ্ক্ষিত কারণবশত ডেলিভারি সময়ের পরিবর্তন হতে পারে
            </Text>
          </View>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: "#091242",
    height: "100%",
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  card2: {
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    zIndex: 1,
    flex: 1,
  },
  card1: {
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    zIndex: 1,
    flex: 1,
  },

  input: {
    flex: 1,
    color: "#000",
    fontSize: 14,
    paddingHorizontal: 10,
  },
  dropdown: {
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    //marginBottom: 12,
  },
  updatePasswordButton: {
    height: 45,
    width: "100%",
    backgroundColor: "gray",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 25,
  },
  updatePasswordButtonAct: {
    backgroundColor: "#FFB82B",
  },
});
