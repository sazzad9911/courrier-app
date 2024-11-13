import React, { useEffect, useState } from "react";
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
import Checkbox from "expo-checkbox";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Picker } from "@react-native-picker/picker";
import { getApi, postApi } from "@/constants/API";
import { useAlert } from "@/providers/AlertContext";
import { useAuth } from "@/providers/AuthContext";
import { useLoader } from "@/providers/LoaderContext";

interface HubType {
  id: string;
  name: string;
  address: string;
  phone: string;
}

export default function AddParcel() {
  const { token, user } = useAuth();
  const [isChecked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Regular"); // category
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] =
    useState("Home Delivery"); // service type
  const [pickUpType, setPickUpType] = useState("Home"); //pick up type
  const [areaList, setAreaList] = useState<{ label: string; value: string }[]>(
    []
  );
  const [merchantDistrict, setMerchantDistrict] = useState();
  const [merchantThana, setMerchantThana] = useState();
  const [merchantAddress, setMerchantAddress] = useState(
    user ? user.address : ""
  );
  const [merchantPhone, setMerchantPhone] = useState(user ? user.phone : "");
  const [selectedHub, setSelectedHub] = useState();
  const { showAlert } = useAlert();

  const { showLoader, hideLoader } = useLoader();
  const [merchantThanaList, setMerchantThanaList] = useState([]);
  const [hubList, setHubList] = useState<HubType[]>([]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryAmount, setDeliveryAmount] = useState("");
  const [name, setName] = useState("");
  const [invoice, setInvoice] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState(null);
  const [thana, setThana] = useState("");
  const [weight, setWeight] = useState("");
  const [note, setNote] = useState("");
  const [thanaList, setThanaList] = useState([]);
  const [deliveryCost, setDeliveryCost] = useState(0);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        showLoader();
        const res = (await getApi("/apis/district")) as { data: string[] };
        let arr: { label: string; value: string }[] = [];
        res.data.forEach((d) => {
          arr.push({ label: d, value: d.toLowerCase() });
        });
        const result = await getApi("/apis/user/all-hub", token || "");
        setHubList(result.data);
        setAreaList(arr);
      } catch (error) {
        setAreaList([]);
      } finally {
        hideLoader();
      }
    };

    fetchAreas();
  }, []);
  const fetchThana = async (district: string) => {
    try {
      showLoader();
      console.log(district);
      const res = await getApi("/apis/district", token || "", {
        district: district,
      });
      return res.data as [];
    } catch (error) {
      return [];
    } finally {
      hideLoader();
    }
  };
  useEffect(() => {
    const findDeliveryCost = async () => {
      const res = await postApi("/apis/user/pricing", token || "", {
        from: merchantDistrict,
        to: district,
        category: selectedOption,
        serviceType: selectedDeliveryMethod,
        weight: weight,
        pickUp: pickUpType,
      });
      setDeliveryCost(res.data);
    };
    if (
      merchantDistrict &&
      district &&
      selectedOption &&
      selectedDeliveryMethod &&
      weight &&
      pickUpType
    ) {
      findDeliveryCost();
    }
  }, [
    merchantDistrict,
    district,
    selectedOption,
    selectedDeliveryMethod,
    weight,
    pickUpType,
  ]);
  const submit = async () => {
    try {
      showLoader();
      const res = await postApi("/apis/user/add-parcel", token || "", {
        category: selectedOption,
        serviceType: selectedDeliveryMethod,
        pickUpFrom: pickUpType,
        phoneNumber: phoneNumber,
        amount: deliveryAmount,
        name: name,
        invoiceNumber: invoice,
        address: address,
        weight: weight,
        district: district,
        thana: thana,
        note: note,
        charge: deliveryCost,
        hubId: selectedHub,
        merchantNumber: merchantPhone,
        merchantAddress: merchantAddress,
        merchantDistrict: merchantDistrict,
        merchantThana: merchantThana,
      });
      showAlert("success", "success");
    } catch (error: any) {
      showAlert("error", error.response.data.error);
    } finally {
      hideLoader();
    }
  };
  return (
    <ScrollView style={styles.bodyContainer}>
      <ThemedView style={{flex:1}}>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            alignSelf: "center",
            marginVertical: 10,
          }}
        >
          Add Parcel
        </Text>
        <Text style={{ fontSize: 12, color: "white", alignSelf: "center" }}>
          Enjoy the convenience of parcel pickup right from your{" "}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "white",
            alignSelf: "center",
            marginVertical: 3,
          }}
        >
          doorstep! Schedule your pickup, and we’ll handle the rest
        </Text>
        <Text style={{ color: "white", fontSize: 12, alignSelf: "center" }}>
          for a hassle-free experience. Pick Up time{" "}
          <Text style={{ color: "#F6B426" }}>9am to 12pm</Text>
        </Text>
        {/* Selection Category */}

        <View style={styles.optionsContainer}>
          {["Regular", "Express", "Pick & Drop"].map((doc, i) => (
            <TouchableOpacity key={i}
              style={[
                styles.optionButton,
                selectedOption === doc && styles.selected,
              ]}
              onPress={() => setSelectedOption(doc)}
            >
              <Text style={styles.optionText}>{doc}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Radio Options */}
        <View style={styles.radioContainer}>
          {["Home Delivery", "Point Delivery"].map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.radioOption}
              onPress={() => setSelectedDeliveryMethod(option)} // Update state on press
            >
              <View
                style={[
                  styles.radioCircle,
                  selectedDeliveryMethod === option && styles.radioSelected,
                ]}
              />
              <Text style={styles.radioText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Radio Options */}
        <Text
          style={{
            color: "#fff",
            marginTop: 15,
            marginBottom: 10,
            fontWeight: "600",
          }}
        >
          Pick Up From
        </Text>
        <View style={[styles.radioContainer, { marginBottom: 15 }]}>
          {["Home", "Hub"].map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.radioOption}
              onPress={() => setPickUpType(option)} // Update state on press
            >
              <View
                style={[
                  styles.radioCircle,
                  pickUpType === option && styles.radioSelected,
                ]}
              />
              <Text style={styles.radioText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {pickUpType === "Home" ? (
          <>
            <TextInput
              placeholder="Your Phone Number"
              value={merchantPhone}
              onChangeText={setMerchantPhone}
              style={styles.input}
            />
            <TextInput
              placeholder="Your Address"
              value={merchantAddress}
              onChangeText={setMerchantAddress}
              style={styles.input}
            />
            {/* District Dropdown */}
            <View style={styles.dropdown}>
              <Picker
                style={{ marginTop: -3.5 }}
                selectedValue={merchantDistrict}
                onValueChange={async (itemValue, itemIndex) => {
                  setMerchantDistrict(itemValue);
                  setMerchantThanaList([]);
                  const list = itemValue ? await fetchThana(itemValue) : [];
                  setMerchantThanaList(list);
                }}
                mode="dropdown"
              >
                <Picker.Item
                  color="#091242"
                  label={"Your District"}
                  value={null}
                />
                {areaList.map((doc, i) => (
                  <Picker.Item key={i} label={doc.label} value={doc.label} />
                ))}
              </Picker>
            </View>
            <View style={styles.dropdown}>
              <Picker
                style={{ marginTop: -3.5 }}
                selectedValue={merchantThana}
                onValueChange={(itemValue, itemIndex) =>
                  setMerchantThana(itemValue)
                }
                mode="dropdown"
              >
                <Picker.Item
                  color="#091242"
                  label={"Your Thana"}
                  value={null}
                />
                {merchantThanaList.map((doc, i) => (
                  <Picker.Item key={i} label={doc} value={doc} />
                ))}
              </Picker>
            </View>
          </>
        ) : (
          <View style={styles.dropdown}>
            <Picker
              style={{ marginTop: -3.5 }}
              selectedValue={selectedHub}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedHub(itemValue)
              }
              mode="dropdown"
            >
              <Picker.Item color="#091242" label={"Set Hub"} value={null} />
              {hubList.map((doc, i) => (
                <Picker.Item key={i} label={doc.name} value={doc.id} />
              ))}
            </Picker>
          </View>
        )}

        <Text
          style={{
            color: "white",
            fontSize: 14,
            marginBottom: 12,
            marginLeft: 5,
          }}
        >
          Parcel & Customer Info
        </Text>

        {/* Form Fields */}
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.input}
          keyboardType={"phone-pad"}
        />
        <TextInput
          placeholder="Cash on Delivery amount"
          value={deliveryAmount}
          onChangeText={setDeliveryAmount}
          style={styles.input}
          keyboardType={"number-pad"}
        />
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Invoice"
          value={invoice}
          onChangeText={setInvoice}
          style={styles.input}
        />
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          style={styles.input}
        />
        {/* District Dropdown */}
        <View style={styles.dropdown}>
          <Picker
            style={{ marginTop: -3.5 }}
            selectedValue={district}
            onValueChange={async (itemValue, itemIndex) => {
              setDistrict(itemValue);
              setThanaList([]);
              const list = itemValue ? await fetchThana(itemValue) : [];
              setThanaList(list);
            }}
            mode="dropdown"
          >
            <Picker.Item color="#091242" label={"Your District"} value={null} />
            {areaList.map((doc, i) => (
              <Picker.Item key={i} label={doc.label} value={doc.label} />
            ))}
          </Picker>
        </View>
        <View style={styles.dropdown}>
          <Picker
            style={{ marginTop: -3.5 }}
            selectedValue={thana}
            onValueChange={(itemValue, itemIndex) => setThana(itemValue)}
            mode="dropdown"
          >
            <Picker.Item color="#091242" label={"Your Thana"} value={null} />
            {thanaList.map((doc, i) => (
              <Picker.Item key={i} label={doc} value={doc} />
            ))}
          </Picker>
        </View>
        <TextInput
          placeholder="Weight"
          value={weight}
          onChangeText={setWeight}
          style={styles.input}
          keyboardType={"number-pad"}
        />
        <TextInput
          placeholder="Note"
          value={note}
          onChangeText={setNote}
          style={[styles.input, styles.noteInput]} // Apply additional style for note input
          multiline={true} // Allow multiline input
        />

        {/* Checkbox */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#FF9900" : undefined}
          />
          <Text style={styles.checkboxText}>
            Delivery charge {deliveryCost} TK. Want to confirm?
          </Text>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          disabled={!isChecked}
          onPress={submit}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: "#091242",
    height: "100%",
    padding: 5,
    paddingHorizontal: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    //justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 25,
    gap: 10,
  },
  optionButton: {
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  selected: {
    backgroundColor: "#FF9900",
  },
  optionText: {
    color: "#1E2246",
  },
  radioContainer: {
    flexDirection: "row",
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 5,
  },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FF9900",
    marginRight: 8,
  },
  radioSelected: {
    backgroundColor: "#FF9900",
  },
  radioText: {
    color: "#FFFFFF",
  },
  input: {
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 45,
    marginBottom: 12,
    color: "#000",
  },
  dropdown: {
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    height: 45,
    marginBottom: 12,
    color: "#000",
  },
  noteInput: {
    height: 80, // Set the desired height for the Note input
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkboxText: {
    marginLeft: 8,
    marginVertical: 10,
    color: "#FFFFFF",
  },
  submitButton: {
    backgroundColor: "#FF9900",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  submitButtonText: {
    color: "#000000",
    fontWeight: "bold",
  },
});
