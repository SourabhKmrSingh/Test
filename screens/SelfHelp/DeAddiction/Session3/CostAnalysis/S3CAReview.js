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
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import Sessionquesfooter from "../../../../../components/Selfhelp/SessionQuesFooter";

import Timecostanalysiscard from "../../../../../components/Selfhelp/Cards/TimeCostAnalysisCard";
import AntIcon from "react-native-vector-icons/AntDesign";

const data = ["ff", "fg", "hy"];

const S3CAReview = () => {
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView>
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
              Your Time and cost analysis Summary
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
            <Timecostanalysiscard />
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
                      harming someone)???.
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
        <Sessionquesfooter
          prevRoute="session3cap3"
          nextRoute="session3cacomplete"
          nextText="Submit"
        />
      </ImageBackground>

      {/* MountainBg */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default S3CAReview;
