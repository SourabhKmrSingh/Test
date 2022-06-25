import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Checkbox } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import COLORS from "../../../../../constants/color";
import Explorefooter from "../../../../../components/Explore/ExploreFooter";
import Icon from "react-native-vector-icons/Entypo";
import VerticalSlider from "rn-vertical-slider";
import Micsvg from "../../../../Svgs/MicSvg";
const data = ["ff", "fg", "hy", "asa", "Asada", "asa"];

const Screen3 = () => {
  const [checked, setChecked] = useState(false);
  const { width, height } = Dimensions.get("screen");
  // const [value, setValue] = useState(0);

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: COLORS.appBackground,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        },
      ]}
    >
      <ScrollView>
        <LinearGradient colors={["#37AADD", "#1F64CC"]}>
          <View
            style={{
              paddingTop: StatusBar.currentHeight,
              width: width,
              height: height,

              // paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    marginTop: 20,
                  }}
                >
                  Session 4
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: "700",
                    marginTop: 5,
                  }}
                >
                  Identification of Risk
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: "700",
                    marginTop: 5,
                  }}
                >
                  situations
                </Text>
              </View>

              <Icon name="cross" size={50} color="white" />
            </View>

            {/* Blue Box  */}
            <View
              style={{
                width: "100%",
                backgroundColor: "#102646",
                //   alignItems: "flex-start",
                paddingTop: 10,
                paddingBottom: 20,
                marginTop: 20,
                borderRadius: 15,
                paddingHorizontal: 15,
                height: height,
              }}
            >
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
                <View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: "#8EB1E5",
                      paddingBottom: 12,
                      fontSize: 12,
                    }}
                  >
                    <Text
                      style={{
                        color: "#254069",
                        fontSize: 16,
                        fontStyle: "italic",
                      }}
                    >
                      Thoughts which comes to mind while having craving
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    alignItems: "center",
                    paddingVertical: 10,
                  }}
                >
                  <Micsvg />
                </TouchableOpacity>
              </View>

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
                <View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: "#8EB1E5",
                      paddingBottom: 12,
                      fontSize: 12,
                    }}
                  >
                    <Text
                      style={{
                        color: "#254069",
                        fontSize: 16,
                        fontStyle: "italic",
                      }}
                    >
                      Thoughts which comes to mind while having craving
                    </Text>
                  </View>
                </View>
                {/* <TextInput  onChangeText={()=>{}}  /> */}
                <TouchableOpacity
                  style={{
                    width: "100%",
                    alignItems: "center",
                    paddingVertical: 10,
                  }}
                >
                  <Micsvg />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* <Text>Estimate time for all these items in the checklist</Text> */}
        </LinearGradient>
      </ScrollView>
      <Explorefooter />
    </SafeAreaView>
  );
};

export default Screen3;
