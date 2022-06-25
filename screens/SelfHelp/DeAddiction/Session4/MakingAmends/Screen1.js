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
const Screen1 = () => {
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
      <TouchableOpacity
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
                width: "25%",
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
            tw`justify-center items-center mt-36`,
            {
              paddingHorizontal: 20,
            },
          ]}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 26,
              fontStyle: "italic",
              textAlign: "center",
              fontWeight: "700",
              lineHeight: 40,
            }}
          >
            The spouse should provide at least one verbal praise for abstinence
          </Text>
        </View>
      </TouchableOpacity>

      {/* Footer */}
      <Explorefooter />
    </SafeAreaView>
  );
};

export default Screen1;
