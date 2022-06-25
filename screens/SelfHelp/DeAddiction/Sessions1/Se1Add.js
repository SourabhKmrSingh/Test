import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/Entypo";
import { Picker } from "@react-native-picker/picker";
import COLORS from "../../../../constants/color";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { addAddictionInDatabase } from "../../../../actions/SelfHelp/Tools/DeAddiction";

const Se1add = () => {
  const Navigator = useNavigation();
  const [selectedValue, setSelectedValue] = React.useState({
    patientID: "",
    substanceName: "",
    consumptionTargetType: "ATLEAST",
    consumptionTargetValue: "",
    consumptionTargetUnit: "",
    consumptionTargetFrequency: "DAY",
  });

  // Create useEffect and set userDetails id in selectedValue
  React.useEffect(() => {
    SecureStore.getItemAsync("user_key").then((res) => {
      const details = JSON.parse(res);
      setSelectedValue({
        ...selectedValue,
        patientID: details[0]._id,
      });
    });
  }, []);


  const addAddiction = () => {
    console.log(selectedValue);
    addAddictionInDatabase(selectedValue).then((res) => {
      console.log(res);
      Alert.alert("Added");
    });
    return;
    Navigator.navigate("selfhelphome", {
      screen: "deaddiction",
      params: {
        screen: "session1complete",
      },
    });
  }


  return (
    <SafeAreaView
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          backgroundColor: "#37AADD",
          width: "100%",
          height: Dimensions.get("screen").height,
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              Session 1
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "700",
                marginTop: 3,
              }}
            >
              Add your addiction
            </Text>
          </View>
          <Icon name="cross" size={50} color="white" />
        </View>

        <View
          style={{
            backgroundColor: "#102646",
            paddingHorizontal: 15,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingTop: 25,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
            }}
          >
            Select or type your addictive substance
          </Text>
          <Text
            style={{
              color: "#8EB1E5",
              fontSize: 14,
              marginTop: 20,
              marginBottom: 5,
            }}
          >
            Examples
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 14,
            }}
          >
            Alcohol, Canabis, Cigarette, internet addiction
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginTop: 55,
            }}
          >
            Substance Name
          </Text>

          <TextInput
            style={{
              backgroundColor: "white",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 8,
              marginTop: 10,
            }}
            placeholder="Liquor"
            onChangeText={(text) =>{
              setSelectedValue({
                ...selectedValue,
                substanceName: text,
              });

            }}
          />

          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginTop: 20,
            }}
          >
            Consumption
          </Text>

          <View
            style={{
              width: "100%",
              backgroundColor: "white",
              paddingHorizontal: 15,
              paddingVertical: 15,
              paddingBottom: 25,
              borderRadius: 8,
              marginTop: 10,
            }}
          >
            {/* Select */}
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Picker
                selectedValue="ATLEAST"
                style={{
                  height: 50,
                  width: 140,
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  color: "#2E5B9F",
                  fontWeight: "700",
                }}
                dropdownIconColor="#2E5B9F"
                onValueChange={(itemValue, itemIndex) =>{
                  setSelectedValue({
                    ...selectedValue,
                    consumptionTargetType: itemValue,
                  });
                }}
              >
                <Picker.Item label="At least" value="ATLEAST" />
                <Picker.Item label="At Most" value="ATMOST" />
                <Picker.Item label="None" value="NONE" />
              </Picker>

              <TextInput
                style={{
                  borderBottomWidth: 1.2,
                  borderColor: "#2E5B9F",
                  width: 100,
                }}
                placeholder="Ml"
                onChangeText={(text) =>{
                  setSelectedValue({
                    ...selectedValue,
                    consumptionTargetUnit: text,
                  });
                }}

              />
            </View>

            {/* Day Select */}
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TextInput
                style={{
                  borderBottomWidth: 1.2,
                  borderColor: "#2E5B9F",
                  width: 100,
                }}
                placeholder="500"
                onChangeText={(text) =>{
                  setSelectedValue({
                    ...selectedValue,
                    consumptionTargetValue: text,
                  });
                }
                }
              />
              <Picker
                selectedValue="Day"
                style={{
                  height: 50,
                  width: 140,
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  color: "#2E5B9F",
                  fontWeight: "700",
                }}
                dropdownIconColor="#2E5B9F"

                onValueChange={(itemValue, itemIndex) =>{
                  setSelectedValue({
                    ...selectedValue,
                    consumptionTargetFrequency: itemValue,
                  });
                }
                }
              >
                <Picker.Item label="A Day" value="Day" />
                <Picker.Item label="A Month" value="Month" />
                <Picker.Item label="A Week" value="Week" />
              </Picker>
            </View>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            {" "}
            I Consume atleast 500 ml a day
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#102646",
            height: "100%",
          }}
        ></View>
      </View>
      {/* Footer */}
      <View
        style={{
          width: "100%",
          backgroundColor: "#102646",
          justifyContent: "flex-end",
          position: "absolute",
          bottom: 0,
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderTopWidth: 0.5,
          borderColor: COLORS.borderColor,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon2 name="chevron-left" size={20} color="white" />
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              Back
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={addAddiction}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Se1add;
