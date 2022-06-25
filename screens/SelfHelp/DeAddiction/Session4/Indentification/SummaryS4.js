import React from "react";
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
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import ThumbsUP from "react-native-vector-icons/Entypo";
import ThumbsDOWN from "react-native-vector-icons/Entypo";
import AntIcon from "react-native-vector-icons/AntDesign";

import Timecostanalysiscard from "../../../../../components/Selfhelp/Cards/TimeCostAnalysisCard";
import CardBlueBgSvg from "../../../../Svgs/CardBlueBgSvg";
import TurtleSvg from "../../../../Svgs/TurtleSvg";
import Sessionquesfooter from "../../../../../components/Selfhelp/SessionQuesFooter";
const data = ["ff", "fg", "hy"];
const SummaryS4 = () => {
  const { width, height } = Dimensions.get("screen");
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
      <ImageBackground
        source={require("../../../../../assets/images/MountainBg.jpg")}
        style={{
          width,
          height,
          paddingTop: StatusBar.currentHeight,
          backgroundColor: "red",
        }}
      >
        <ScrollView>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFFFFF",
                width: 58,
                height: 58,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="file-text-o" size={30} color="#1E64CC" />
            </View>
            <Text
              style={{
                color: "#1E64CC",
                fontSize: 24,
                fontWeight: "700",
                width: 250,
              }}
            >
              Your Urge Summary
            </Text>
          </View>

          {/* Card  */}
          <View
            style={{
              paddingHorizontal: 15,
              zIndex: 999,
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                backgroundColor: "white",
                padding: 15,
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  height: "100%",
                  weight: "100%",
                }}
              >
                <CardBlueBgSvg />
              </View>
              <Text
                style={{
                  color: "#1E64CC",
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Substance - Liquor
              </Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  marginTop: 15,
                  borderColor: "#BFD2ED",
                  paddingBottom: 18,
                }}
              >
                <Text
                  style={{
                    color: "#254069",
                    fontSize: 26,
                    fontWeight: "700",
                  }}
                >
                  5 hrs
                </Text>
                <Text
                  style={{
                    color: "#254069",
                    fontSize: 12,
                  }}
                >
                  Total Money spent
                </Text>
              </View>

              {/* Money Spent Box */}
              <View
                style={{
                  borderBottomWidth: 1,
                  marginTop: 15,
                  borderColor: "#BFD2ED",
                  paddingBottom: 18,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 29,
                      fontWeight: "700",
                    }}
                  >
                    1:00pm
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#254069",
                      marginTop: 5,
                    }}
                  >
                    Arrival Time
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 29,
                      color: "#254069",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 29,
                        color: "#254069",
                        fontWeight: "700",
                      }}
                    >
                      1:30pm
                    </Text>{" "}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#254069",
                      marginTop: 8,
                    }}
                  >
                    Disappearance Time
                  </Text>
                </View>
              </View>

              {/*Days Spent Box  */}
            </View>
          </View>

          {/* Content */}
          <View
            style={{
              backgroundColor: "#F0F4F6",
              paddingTop: 160,
              borderRadius: 20,
              marginTop: -120,
              height: "100%",
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                color: "#254069",
                fontSize: 24,
                fontWeight: "700",
                marginTop: 50,
              }}
            >
              Summary Overview
            </Text>
            <View
              style={{
                paddingBottom: 100,
              }}
            >
              {data.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: "100%",
                      paddingHorizontal: 18,
                      paddingVertical: 18,
                      backgroundColor: "white",
                      borderRadius: 15,
                      marginVertical: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: "#254069",
                        fontsSize: 16,
                        fontWeight: "700",
                      }}
                    >
                      Occupational problems
                    </Text>
                    <Text
                      style={{
                        textAlign: "left",
                        fontsSize: 14,
                        color: "#254069",
                        marginTop: 5,
                      }}
                    >
                      Telling someone about the violent thought (like accidently
                      harming someone)….
                    </Text>

                    <View
                      style={{
                        marginTop: 15,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          borderWidth: 1.5,
                          borderColor: "#DBECFF",
                          width: 50,
                          height: 50,
                          borderRadius: 25,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <AntIcon name="caretright" color="#0E58C7" size={22} />
                      </View>
                      <View
                        style={{
                          width: 250,
                          backgroundColor: "#DCE9F5",
                          height: 5,
                        }}
                      >
                        <View
                          style={{
                            width: "50%",
                            height: "100%",
                            backgroundColor: "#1E64CC",
                          }}
                        ></View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
        {/* Footer */}
      </ImageBackground>

      {/* MountainBg */}
      <View
        style={{
          width: "100%",
          backgroundColor: "#102646",
          justifyContent: "flex-end",
          position: "absolute",
          bottom: 0,
          paddingHorizontal: 15,
          paddingVertical: 15,
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default SummaryS4;
