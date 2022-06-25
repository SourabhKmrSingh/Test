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
import COLORS from "../../../../../constants/color";
import Sessionquesfooter from "../../../../../components/Selfhelp/SessionQuesFooter";

const S3CAP1 = () => {
  return (
    <SafeAreaView
      style={[
        {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        },
      ]}
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
              Cost analysis
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
          {/* Time Period Box */}

          <View
            style={{
              marginBottom: 50,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                lineHeight: 25,
              }}
            >
              Enter Time Period from when you started to use the substance
            </Text>
            {/* From Input Box */}
            <View
              style={{
                backgroundColor: "#EDF4FD",
                paddingHorizontal: 18,
                paddingVertical: 10,
                borderRadius: 8,
                marginTop: 20,
                height: 55,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2E5B9F",
                  fontSize: 16,
                  width: 80,
                }}
              >
                From
              </Text>
              <TextInput
                style={{
                  color: "#2E5B9F",
                  borderLeftWidth: 1,
                  borderColor: COLORS.borderColor,
                  paddingLeft: 20,
                }}
                placeholder="2012"
              />
            </View>
            {/* To Input Box */}
            <View
              style={{
                backgroundColor: "#EDF4FD",
                paddingHorizontal: 18,
                paddingVertical: 10,
                borderRadius: 8,
                marginTop: 18,
                height: 55,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2E5B9F",
                  fontSize: 16,
                  width: 80,
                }}
              >
                To
              </Text>
              <TextInput
                style={{
                  color: "#2E5B9F",
                  borderLeftWidth: 1,
                  borderColor: COLORS.borderColor,
                  paddingLeft: 20,
                }}
                placeholder="Still Continuing"
              />
            </View>
          </View>

          {/* Time Period Box */}

          <View>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                lineHeight: 25,
                width: 300,
              }}
            >
              Enter Time and money spent on the substance
            </Text>
            {/* From Input Box */}
            <View
              style={{
                backgroundColor: "#EDF4FD",
                paddingHorizontal: 18,
                paddingVertical: 10,
                borderRadius: 8,
                marginTop: 20,
                height: 55,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2E5B9F",
                  fontSize: 16,
                  width: 99,
                }}
              >
                Time spent
              </Text>
              <TextInput
                style={{
                  color: "#2E5B9F",
                  borderLeftWidth: 1,
                  borderColor: COLORS.borderColor,
                  paddingLeft: 20,
                }}
                placeholder="2012"
              />
            </View>

            {/* To Input Box */}
            <View
              style={{
                backgroundColor: "#EDF4FD",
                paddingHorizontal: 18,
                paddingVertical: 10,
                borderRadius: 8,
                marginTop: 18,
                height: 55,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2E5B9F",
                  fontSize: 16,
                  width: 99,
                }}
              >
                Money spent
              </Text>
              <TextInput
                style={{
                  color: "#2E5B9F",
                  borderLeftWidth: 1,
                  borderColor: COLORS.borderColor,
                  paddingLeft: 20,
                }}
                placeholder="Still Continuing"
              />
            </View>
          </View>
        </View>
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
      <Sessionquesfooter prevRoute="session3p1" nextRoute="session3cap2" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default S3CAP1;
