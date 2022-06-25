import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Explorefooter from "../../../../components/Explore/ExploreFooter";
import COLORS from "../../../../constants/color";
import * as Progress from "react-native-progress";
import Question1 from "../../../../components/Selfhelp/QuestionCards/Question1";
import AntIcon from "react-native-vector-icons/AntDesign";
import Smile from "../../../Svgs/Questions/smile";

import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/Entypo";
import Question2 from "../../../../components/Selfhelp/QuestionCards/Question2";
import { useNavigation } from "@react-navigation/native";
import Sessionquesfooter from "../../../../components/Selfhelp/SessionQuesFooter";

const Se2Q1 = () => {
  const { width, height } = Dimensions.get("screen");

  const Navigator = useNavigation();
  const screenHeight = Dimensions.get("screen").height;
  const windowHeight = Dimensions.get("window").height;
  const navbarHeight = screenHeight - windowHeight;
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,

        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          paddingTop: StatusBar.currentHeight,
          width: width,
          height: height,
          backgroundColor: "#37AADD",
        }}
      >
        {/* Video Section */}

        <View
          style={{
            paddingHorizontal: 15,
            // borderBottomWidth: 1.2,
            // borderColor: COLORS.borderColor,
            paddingBottom: 35,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "700",
                paddingTop: 10,
                marginBottom: 4,
              }}
            >
              Session 2
            </Text>
            <Icon name="cross" size={50} color="white" />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "700",

              marginBottom: 20,
            }}
          >
            Questionnaire - 11
          </Text>
          <View
            style={{
              width: "100%",
              height: 7,
              backgroundColor: "white",
              borderRadius: 12,
            }}
          >
            <View
              style={{
                width: "9%",
                height: 7,
                backgroundColor: "#102646",
                borderRadius: 10,
              }}
            ></View>
          </View>

          {/* <Progress.Bar width={350}progress={0.09} unfilledColor={"#fff"} color={"#102646"} borderWidth={0} /> */}
          <Text style={{ color: "#fff" }}>Question 1/11</Text>
        </View>

        <Question1 />
      </View>

      {/* Footer */}
      <Sessionquesfooter prevRoute="session2p1" nextRoute="session2q2" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sessionImage: {
    width: "100%",
    height: 190,
    paddingTop: 10,
    paddingVertical: 10,
  },
  assessmentBox: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
});

export default Se2Q1;
