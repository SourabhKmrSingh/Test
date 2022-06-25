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
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/Entypo";
import { Picker } from "@react-native-picker/picker";
import COLORS from "../../../../constants/color";
import Micsvg from "../../../Svgs/MicSvg";

const PlanAdd3S3 = () => {
  return (
    <SafeAreaView>
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
              Session 3
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "700",
                marginTop: 3,
              }}
            >
              Create a plan
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
            paddingTop: 75,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              lineHeight: 25,
            }}
          >
            The steps I plan to make in changing are:
          </Text>

          <Text
            style={{
              color: "#8EB1E5",
              fontSize: 14,
              marginTop: 30,
            }}
          >
            Examples
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              marginTop: 8,
            }}
          >
            how much do you want to cut your addictive substance?
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              marginTop: 5,
            }}
          >
            Define by quantity and time for internet addiction
          </Text>

          {/* Text Input  */}
          <View
            style={{
              backgroundColor: "#EDF4FD",
              width: "100%",
              minHeight: 150,
              borderRadius: 10,
              marginTop: 45,
              paddingHorizontal: 20,
              paddingVertical: 15,
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderColor: "#2E5B9F",
                paddingBottom: 5,
              }}
              placeholder="Liquor"
            />
            <View
              style={{
                width: "100%",
                backgroundColor: "#EDF4FD",

                paddingVertical: 15,
                paddingBottom: 25,
                borderRadius: 8,
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
                  placeholder="500"
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
                />
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
                >
                  <Picker.Item label="A day" value="ATLEAST" />
                  <Picker.Item label="At Most" value="ATMOST" />
                  <Picker.Item label="None" value="NONE" />
                </Picker>
              </View>
            </View>
          </View>

          {/* Add Button */}
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 55,
                height: 55,
                borderRadius: 35,
                borderWidth: 1.5,
                borderColor: "white",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 48,
                  marginTop: -8,
                }}
              >
                +
              </Text>
            </View>
          </View>
        </View>

        <View></View>

        {/* For BackColor */}
        <View
          style={{
            width: "100%",
            backgroundColor: "#102646",
            height: "100%",
          }}
        ></View>

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

            <TouchableOpacity>
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PlanAdd3S3;
