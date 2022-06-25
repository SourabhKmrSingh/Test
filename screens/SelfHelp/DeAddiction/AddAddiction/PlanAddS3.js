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

const PlanAddS3 = () => {
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
            The change “I” want to make
          </Text>

          <Text
            style={{
              color: "#8EB1E5",
              fontSize: 14,
              marginTop: 30,
            }}
          >
            Exercises
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              marginTop: 8,
            }}
          >
            I want to gradually stop my habit
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              marginTop: 5,
            }}
          >
            I want to stop hurting my care givers
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              marginTop: 5,
            }}
          >
            I want to take responsibility
          </Text>

          {/* Text Input  */}
          <View
            style={{
              backgroundColor: "#EDF4FD",
              width: "100%",
              minHeight: 150,
              borderRadius: 10,
              marginTop: 45,
              paddingHorizontal: 15,
              paddingVertical: 8,
              justifyContent: "space-between",
            }}
          >
            <TextInput multiline={true} placeholder="Write about a problem" />
            <TouchableOpacity
              style={{
                width: "100%",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Micsvg />
            </TouchableOpacity>
          </View>
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

export default PlanAddS3;
