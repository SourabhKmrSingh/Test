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
} from "react-native";
import { Checkbox } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import COLORS from "../../../../../constants/color";
import Explorefooter from "../../../../../components/Explore/ExploreFooter";
import Icon from "react-native-vector-icons/Entypo";
import VerticalSlider from "rn-vertical-slider";
const data = ["ff", "fg", "hy", "asa", "Asada", "asa"];

// import Slider from '@react-native-community/slider';
// import { Slider } from 'react-native-elements';
const Screen2 = () => {
  const [checked, setChecked] = useState(false);
  const { width, height } = Dimensions.get("screen");
  const [value, setValue] = useState(0);
  const [set3Val, setSet3Val] = useState(10);

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
      <ScrollView
        style={{
          height: height,
        }}
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

            {/* Range Slider starts */}

            <View>
              <View style={[tw`justify-center items-center mt-10`]}>
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "700" }}
                >
                  Urge Time - arrival & Rating
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      padding: 5,
                      paddingHorizontal: 20,
                      borderRadius: 20,
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginRight: 10,
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ color: "#2E5B9F" }}>Day</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#102646",
                      padding: 5,
                      paddingHorizontal: 20,
                      borderRadius: 20,
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginRight: 10,
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ color: "#fff" }}>Hour</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      padding: 5,
                      paddingHorizontal: 20,
                      borderRadius: 20,
                      alignItems: "center",
                      justifyContent: "space-between",
                      // marginRight: 10,
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ color: "#2E5B9F" }}>Mins</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 40,
                    marginTop: 50,
                  }}
                >
                  <View style={{ marginRight: 50 }}>
                    <VerticalSlider
                      value={value}
                      disabled={false}
                      min={0}
                      max={10}
                      //                      onChange={(value) => {
                      // console.log("CHANGE", value);
                      //                      }}
                      onChange={(value) => setValue(value)}
                      onComplete={(value) => setValue(value)}
                      width={10}
                      height={300}
                      step={1}
                      borderRadius={5}
                      minimumTrackTintColor={"#102646"}
                      maximumTrackTintColor={"#2E5B9F"}
                      showBallIndicator
                      ballIndicatorPosition={-10}
                      ballIndicatorWidth={30}
                      ballIndicatorColor={"#1E64CC"}
                      ballIndicatorTextColor={"white"}
                    />
                  </View>
                  <View style={{ marginRight: 50 }}>
                    <VerticalSlider
                      value={value}
                      disabled={false}
                      min={0}
                      max={10}
                      width={10}
                      height={300}
                      step={1}
                      borderRadius={5}
                      minimumTrackTintColor={"#102646"}
                      maximumTrackTintColor={"#2E5B9F"}
                      showBallIndicator
                      ballIndicatorPosition={-10}
                      ballIndicatorWidth={30}
                      ballIndicatorColor={"#1E64CC"}
                      ballIndicatorTextColor={"white"}
                    />
                  </View>
                  <View style={{ marginRight: 50 }}>
                    <VerticalSlider
                      value={value}
                      disabled={false}
                      min={0}
                      max={10}
                      width={10}
                      height={300}
                      step={1}
                      borderRadius={5}
                      minimumTrackTintColor={"#102646"}
                      maximumTrackTintColor={"#2E5B9F"}
                      showBallIndicator
                      ballIndicatorPosition={-10}
                      ballIndicatorWidth={30}
                      ballIndicatorColor={"#1E64CC"}
                      ballIndicatorTextColor={"white"}
                    />
                  </View>
                  <View style={{ marginRight: 50 }}>
                    <VerticalSlider
                      value={set3Val}
                      disabled={false}
                      min={0}
                      max={10}
                      onChange={(value) => {
                        console.log(value, " Ye hai value");
                        setSet3Val(value);
                        console.log(set3Val, " Set hai  set");
                      }}
                      width={10}
                      height={300}
                      step={1}
                      borderRadius={5}
                      minimumTrackTintColor={"#102646"}
                      maximumTrackTintColor={"#2E5B9F"}
                      showBallIndicator
                      ballIndicatorPosition={-10}
                      ballIndicatorWidth={30}
                      ballIndicatorColor={"#1E64CC"}
                      ballIndicatorTextColor={"white"}
                    />
                    <Text> Ye hai Value {set3Val}</Text>
                  </View>
                  <View style={{ marginRight: 50 }}>
                    <VerticalSlider
                      value={value}
                      disabled={false}
                      min={0}
                      max={10}
                      width={10}
                      height={300}
                      step={1}
                      borderRadius={5}
                      minimumTrackTintColor={"#102646"}
                      maximumTrackTintColor={"#2E5B9F"}
                      showBallIndicator
                      ballIndicatorPosition={-10}
                      ballIndicatorWidth={30}
                      ballIndicatorColor={"#1E64CC"}
                      ballIndicatorTextColor={"white"}
                    />
                  </View>
                  <View style={{ marginRight: 50 }}>
                    <VerticalSlider
                      value={value}
                      disabled={false}
                      min={0}
                      max={10}
                      width={10}
                      height={300}
                      step={1}
                      borderRadius={5}
                      minimumTrackTintColor={"#102646"}
                      maximumTrackTintColor={"#2E5B9F"}
                      showBallIndicator
                      ballIndicatorPosition={-10}
                      ballIndicatorWidth={30}
                      ballIndicatorColor={"#1E64CC"}
                      ballIndicatorTextColor={"white"}
                    />
                  </View>

                  {/* <Slider
  style={{width: 200, height: 50 ,transform: [{ rotate: '270deg' }] , marginTop:80}}
  minimumValue={0}
                              maximumValue={10}
                              step={1}
                              vertical={true}
  minimumTrackTintColor="#102646"
                              maximumTrackTintColor="#2E5B9F"
                              thumbTintColor="#fff"
/> */}
                </View>

                <View
                  style={{
                    borderBottomColor: "#fff",
                    borderBottomWidth: 2,
                    width: 370,
                    marginTop: 5,
                  }}
                ></View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingHorizontal: 10,
                  }}
                >
                  {data.map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#fff",
                          padding: 5,
                          paddingHorizontal: 7,
                          borderRadius: 5,
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginRight: 10,
                          marginTop: 10,
                        }}
                      >
                        <Text style={{ color: "#2E5B9F" }}>12-1pm</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>

            {/* Range Slider ends */}

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
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
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
                  Time of arrival
                </Text>
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
                  12pm
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
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
                  Rating 1-10
                </Text>
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
                  9/10
                </Text>
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

export default Screen2;
