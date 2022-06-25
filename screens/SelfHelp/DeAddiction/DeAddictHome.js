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
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";

import Timecostanalysiscard from "../../../components/Selfhelp/Cards/TimeCostAnalysisCard";
import AntIcon from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import Explorefooter from "../../../components/Explore/ExploreFooter";

const data = ["ff", "fg", "hy"];

const DeAddictHome = () => {
  const Navigator = useNavigation();
  const { width, height } = Dimensions.get("screen");

  const [activeState, setActiveState] = useState("exercise");
  return (
    <SafeAreaView style={{
      display: "flex",
          flexDirection: "column",
          flex: 1,

          justifyContent: "space-between",
    }}>
      <ImageBackground
        source={require("../../../assets/images/MountainBg.jpg")}
        style={{
          width,
          height,
        }}
      >
        <LinearGradient
          colors={["#5454546F", "#2C2C2CA2"]}
          style={{
            width,
            height,
            paddingTop: StatusBar.currentHeight,
          }}
        >
          <ScrollView>
            {/* Header */}
            <View
              style={{
                paddingHorizontal: 15,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 28,
                  fontWeight: "700",
                }}
              >
                Hi Advik !
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "700",
                  marginTop: 10,
                }}
              >
                De addiction
              </Text>
            </View>

            {/* Card  */}
            <View
              style={{
                width: "100%",
                paddingHorizontal: 15,
                zIndex: 999,
                marginTop: 80,
              }}
            >
              <View
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255,255,255,0.4)",
                  marginBottom: 20,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                      fontWeight: "700",
                    }}
                  >
                    Your Journey
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    15% completed
                  </Text>
                </View>

                {/* Bar */}
                <View
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: 10,
                    marginVertical: 5,
                    paddingHorizontal: 2,
                    borderRadius: 15,
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <View
                    style={{
                      width: "30%",
                      height: "50%",
                      backgroundColor: "#FF9241",
                      borderRadius: 15,
                      position: "absolute",
                      left: 4,
                    }}
                  ></View>
                  <View
                    style={{
                      height: "90%",
                      width: 9,
                      borderWidth: 2,
                      borderColor: "#FF9241",
                      borderRadius: 15,
                    }}
                  ></View>
                  <View
                    style={{
                      height: "90%",
                      width: 9,
                      borderWidth: 2,
                      borderColor: "#FF9241",
                      borderRadius: 15,
                    }}
                  ></View>
                  <View
                    style={{
                      height: "90%",
                      width: 9,
                      borderWidth: 2,
                      borderColor: "#FF9241",
                      borderRadius: 15,
                    }}
                  ></View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                    }}
                  >
                    Session 1/4
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 12,
                    }}
                  >
                    Started on 12/03/2020
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 200,
                  borderRadius: 15,
                  overflow: "hidden",
                  padding: 10,
                }}
              >
                <ImageBackground
                  source={require("../../../assets/doctor.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </View>
            </View>

            {/* Content */}
            <View
              style={{
                backgroundColor: "#102646",
                paddingTop: 100,
                borderRadius: 45,
                marginTop: -80,
                height: "100%",
                // paddingHorizontal: 15,
              }}
            >
              {/* Start Consulting Content Box */}
              <View
                style={{
                  paddingHorizontal: 30,
                  borderBottomWidth: 0.5,
                  borderColor: "#808495",
                  paddingBottom: 30,
                }}
              >
                <Text
                  style={{
                    color: "#D2DFF2",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  About De-addiction tool
                </Text>
                <Text
                  style={{
                    color: "#8EB1E5",
                    fontSize: 14,
                    lineHeight: 25,
                    marginTop: 15,
                    textAlign: "justify",
                  }}
                >
                  Tackling Obsessive Compulsive Disorder (OCD) can be a daunting
                  task for a patient. It is like taking a big heavy rock uphill,
                  only to see it going downhill after reaching the peak.
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    Navigator.navigate("selfhelphome", {
                      screen: "deaddiction",
                      params: {
                        screen: "allsessions",
                      },
                    });
                  }}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#FF9241",
                    height: 50,
                    marginTop: 30,
                    borderRadius: 7,
                  }}
                >
                  <Text style={tw`text-white  font-bold  text-lg`}>
                    Start Consulting
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Add Addiction Profile */}
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 30,
                  borderBottomWidth: 0.5,
                  borderColor: "#808495",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    // minHeight: 200,
                    backgroundColor: "#153669",
                    padding: 17,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#8EB1E5",
                      fontSize: 18,
                      fontWeight: "700",
                      marginBottom: 15,
                    }}
                  >
                    Addiction Profile
                  </Text>
                  <Text
                    style={{
                      color: "#D2DFF2",
                      fontSize: 14,
                    }}
                  >
                    Exercise Type - Introspective Exercises
                  </Text>
                  <Text
                    style={{
                      color: "#D2DFF2",
                      fontSize: 14,
                      marginTop: 7,
                    }}
                  >
                    Why - helps for relapse prevention
                  </Text>

                  <View
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#1E64CC",
                        height: 50,
                        marginTop: 30,
                        borderRadius: 7,
                        width: "90%",
                      }}
                    >
                      <Text style={tw`text-white    `}>Add Addiction</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Exercise and Sessions Section */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity
                  style={{
                    padding: 18,
                    borderRightWidth: 0.3,
                    borderColor: "#808495",
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#8EB1E5",
                      fontSize: 18,
                      opacity: activeState == "activeState" ? 1 : 0.5,
                    }}
                  >
                    Exercise
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 18,
                    width: "50%",
                    alignItems: "center",
                    borderLeftWidth: 0.3,
                    borderColor: "#808495",
                  }}
                >
                  <Text
                    style={{
                      color: "#8EB1E5",
                      fontSize: 18,
                      opacity: activeState == "exercise" ? 1 : 0.5,
                    }}
                  >
                    Sessions
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Padding */}
              <View
                style={{
                  paddingBottom: 100,
                }}
              ></View>
            </View>
          </ScrollView>
        </LinearGradient>

        {/* Footer */}
      </ImageBackground>
      <Explorefooter />

      {/* MountainBg */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default DeAddictHome;
