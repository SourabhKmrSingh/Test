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
import tw from "tailwind-react-native-classnames";

const PlanAddInviteS3 = () => {
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
            paddingHorizontal: 20,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingTop: 75,
            marginTop: 25,
            height: "50%",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              lineHeight: 26,
              textAlign: "justify",
            }}
          >
            Want to do it alone or with somebody? (Generally, it has been seen
            that support always help. Take the help of your spouse / friend /
            family member or relative.)
          </Text>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.orange,
              height: 45,
              marginTop: 50,
              borderRadius: 7,
              marginHorizontal: 22,
            }}
          >
            <Text style={tw`text-white  font-bold  text-lg`}>Invite</Text>
          </TouchableOpacity>
        </View>

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

export default PlanAddInviteS3;
