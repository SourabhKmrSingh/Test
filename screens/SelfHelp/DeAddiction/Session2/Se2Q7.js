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
import Sessionquesfooter from "../../../../components/Selfhelp/SessionQuesFooter";

import Icon2 from "react-native-vector-icons/Entypo";
import Question2 from "../../../../components/Selfhelp/QuestionCards/Question2";
import { useNavigation } from "@react-navigation/native";

const Se2Q7 = () => {
  const { width, height } = Dimensions.get("screen");
  const Navigator = useNavigation();
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
                width: "63%",
                height: 7,
                backgroundColor: "#102646",
                borderRadius: 12,
              }}
            ></View>
          </View>
          <Text style={{ color: "#fff" }}>Question 7/11</Text>
        </View>

        <Question2 />

        {/* Footer */}
      </View>
      <Sessionquesfooter prevRoute="session2q6" nextRoute="session2q8" />
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

export default Se2Q7;
