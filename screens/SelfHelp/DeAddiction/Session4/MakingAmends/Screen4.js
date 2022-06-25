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
import Explorefooter from "../../../../../components/Explore/ExploreFooter";
import COLORS from "../../../../../constants/color";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";
import Sessionquesfooter from "../../../../../components/Selfhelp/SessionQuesFooter";
import tw from "tailwind-react-native-classnames";

const Screen4 = () => {
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
          backgroundColor: "#102646",
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
          </View>
          <View style={{ width: 300 }}>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "700",

                marginBottom: 20,
              }}
            >
              Making amends with your spouse/close ones/relatives
            </Text>
          </View>
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
                width: "100%",
                height: 7,
                backgroundColor: "#1E64CC",
                borderRadius: 10,
              }}
            ></View>
          </View>

          {/* <Progress.Bar width={350}progress={0.09} unfilledColor={"#fff"} color={"#102646"} borderWidth={0} /> */}
        </View>

        {/* <Question1 /> */}
        <View
          style={[
            tw` mt-24`,
            {
              paddingHorizontal: 20,
            },
          ]}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 26,
              fontStyle: "bold",
              fontWeight: "700",
              lineHeight: 40,
            }}
          >
            Practice problem solving
          </Text>
          <View style={{ marginTop: 30 }}>
            <Text style={{ color: "#fff", fontSize: 16 }}>
              1. First recognize that there is a problem.{" "}
            </Text>
            <Text style={{ color: "#fff", fontSize: 16, marginTop: 20 }}>
              {" "}
              2. Identify it.{" "}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                marginTop: 20,
                lineHeight: 25,
              }}
            >
              {" "}
              3. Discuss or make a list of various options available for solving
              it.{" "}
            </Text>
            <Text style={{ color: "#fff", fontSize: 16, marginTop: 20 }}>
              {" "}
              4. Select the least objectionable approach{" "}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                marginTop: 20,
                lineHeight: 25,
              }}
            >
              {" "}
              5. Assess the effectiveness and do not pass out derogatory
              comments if the effectiveness is not up to the mark. And maintain
              a summary in our app’s thought journal{" "}
            </Text>
          </View>
        </View>
        <View style={[tw`justify-center items-center mt-10 `, {}]}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f89140",
              height: 45,
              width: 300,
              marginTop: 30,
              borderRadius: 7,
            }}
          >
            <Text
              style={[
                tw`text-white`,
                {
                  fontWeight: "500",
                  fontSize: 14,
                },
              ]}
            >
              Write thought journal
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <Explorefooter />
    </SafeAreaView>
  );
};

export default Screen4;
