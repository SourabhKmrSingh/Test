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
import COLORS from "../../../../constants/color";
import { LinearGradient } from "expo-linear-gradient";
import AntIcon from "react-native-vector-icons/AntDesign";
import Smile from "../../../Svgs/Questions/smile";
import TurtleSvg from "../../../Svgs/TurtleSvg";
import Turtle2 from "../../../Svgs/Turtle2";
import Explorefooter from "../../../../components/Explore/ExploreFooter";

const Screen2 = () => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={["#37AADD", "#1F64CC"]}
          style={{
            paddingTop: StatusBar.currentHeight,
            width: width,
            height: height,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, marginTop: 20 }}>
            Session 3
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "700",
              marginTop: 5,
            }}
          >
            De-addiction stage
          </Text>

          <View
            style={{
              width: "100%",
              backgroundColor: "#102646",
              alignItems: "flex-start",
              paddingTop: 10,
              paddingBottom: 20,
              marginTop: 70,
              borderRadius: 15,
              paddingHorizontal: 45,
            }}
          >
            <Text style={{ color: "#EDF4FD", fontSize: 18, lineHeight: 30 }}>
              Which stage you consider is the most appropriate for your current
              substance?
            </Text>
            <TouchableOpacity
              style={[
                tw`items-center justify-center`,
                {
                  backgroundColor: "#153669",
                  width: "100%",
                  padding: 1,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  marginTop: 40,
                },
              ]}
            >
              <View style={[tw`items-center justify-center`, {}]}>
                <View
                  style={[
                    tw`items-center justify-center`,
                    {
                      padding: 10,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    Pre-Contemplation
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                tw`items-center justify-center`,
                {
                  backgroundColor: "#153669",
                  width: "100%",
                  padding: 1,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  marginTop: 20,
                },
              ]}
            >
              <View style={[tw`items-center justify-center`, {}]}>
                <View
                  style={[
                    tw`items-center justify-center`,
                    {
                      padding: 10,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    Contemplation
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                tw`items-center justify-center`,
                {
                  backgroundColor: "#153669",
                  width: "100%",
                  padding: 1,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  marginTop: 20,
                },
              ]}
            >
              <View style={[tw`items-center justify-center`, {}]}>
                <View
                  style={[
                    tw`items-center justify-center`,
                    {
                      padding: 10,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    Preparation
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                tw`items-center justify-center`,
                {
                  backgroundColor: "#153669",
                  width: "100%",
                  padding: 1,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  marginTop: 20,
                },
              ]}
            >
              <View style={[tw`items-center justify-center`, {}]}>
                <View
                  style={[
                    tw`items-center justify-center`,
                    {
                      padding: 10,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>Action</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                tw`items-center justify-center`,
                {
                  backgroundColor: "#153669",
                  width: "100%",
                  padding: 1,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  marginTop: 20,
                },
              ]}
            >
              <View style={[tw`items-center justify-center`, {}]}>
                <View
                  style={[
                    tw`items-center justify-center`,
                    {
                      padding: 10,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    Maintenance
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                tw`items-center justify-center`,
                {
                  backgroundColor: "#153669",
                  width: "100%",
                  padding: 1,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  marginTop: 20,
                },
              ]}
            >
              <View style={[tw`items-center justify-center`, {}]}>
                <View
                  style={[
                    tw`items-center justify-center`,
                    {
                      padding: 10,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>Relapse</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
      <Explorefooter />
    </SafeAreaView>
  );
};

export default Screen2;
