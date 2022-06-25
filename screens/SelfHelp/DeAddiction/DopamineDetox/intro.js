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

const Intro = () => {
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
            Dopamine Detox
          </Text>

          <View
            style={{
              width: "100%",
              backgroundColor: "#153669",
              alignItems: "flex-start",
              paddingTop: 10,
              paddingBottom: 20,
              marginTop: 70,
              borderRadius: 15,
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                marginBottom: 60,
                marginTop: -60,
              }}
            >
              <TurtleSvg />
              {/* <Turtle2/> */}
            </View>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "700",
                letterSpacing: 1,
                lineHeight: 30,
              }}
            >
              Mainly recommended for Internet addiction but it can help other
              people as well as studies have shown that decreasing social media
              can have beneficial effect as a whole. Social media/internet/games
              constantly provides brief burst of dopamine because of it’s never
              ending content. We will show the data if possible for different
              screen time or we can ask the person in the form of a check list
              to mark up the main platforms.
            </Text>
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <TouchableOpacity>
              <View
                style={[
                  tw`items-center justify-center`,
                  {
                    backgroundColor: "#FF9241",
                    width: "100%",
                    padding: 15,
                    borderRadius: 10,
                    //   paddingHorizontal:10
                  },
                ]}
              >
                <Text style={{ color: "white", fontSize: 16 }}>
                  Get Started
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
      <Explorefooter />
    </SafeAreaView>
  );
};

export default Intro;
