import React, { useState } from "react";
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
} from "react-native";
import { Checkbox } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import COLORS from "../../../../../constants/color";
import Explorefooter from "../../../../../components/Explore/ExploreFooter";
import Icon from "react-native-vector-icons/Entypo";
const data = [
  "ff",
  "fg",
  "hy",
  "asa",
  "Asada",
  "asad",
  "Adsfg",
  "Adslf",
  "adfaf",
  "Adaf",
];
const Screen1 = () => {
  const [checked, setChecked] = useState(false);
  const { width, height } = Dimensions.get("screen");
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
          <View
            style={{
              width: "100%",
              backgroundColor: "#102646",
              //   alignItems: "flex-start",
              paddingTop: 10,
              paddingBottom: 20,
              marginTop: 50,
              borderRadius: 15,
              paddingHorizontal: 15,
              height: height,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "700",
                letterSpacing: 1,
                lineHeight: 30,
                marginTop: 30,
              }}
            >
              So, the first step in this exercise is to identify certain trigger
              points which makes crave for the substance or situations which may
              tip the balance towards the substance that you were taking.
            </Text>
            <Text
              style={{
                color: "#8EB1E5",
                fontSize: 16,
                fontWeight: "700",
                marginTop: 50,
                marginBottom: 20,
              }}
            >
              Possible examples
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* selection field */}

              {data.map((item, index) => {
                return (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      //   justifyContent: "space-evenly",
                      marginTop: 30,
                    }}
                  >
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      uncheckedColor="#fff"
                      color="#fff"
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />

                    <View style={{ marginLeft: 30 }}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 16,
                          fontWeight: "700",
                        }}
                      >
                        Adult Entertainment Sites
                      </Text>
                      <Text
                        style={{
                          color: "#8EB1E5",
                          fontSize: 14,
                          marginTop: 10,
                        }}
                      >
                        Select mood
                      </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>

        {/* <Text>Estimate time for all these items in the checklist</Text> */}
      </LinearGradient>

      <Explorefooter />
    </SafeAreaView>
  );
};

export default Screen1;
