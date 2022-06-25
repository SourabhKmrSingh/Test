import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import tw from "tailwind-react-native-classnames";
import COLORS from "../../../../../constants/color";
import TurtleSvg from "../../../../Svgs/TurtleSvg";
import Spark from "../../../../Svgs/Spark";

const CompleteS4 = () => {
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView>
      <LinearGradient colors={["#37AADD", "#1F64CC"]} style={{ width, height }}>
        <View
          style={{
            backgroundColor: "#102646",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 25,
            alignItems: "center",
            paddingTop: StatusBar.currentHeight + 25,
          }}
        >
          <Spark />
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              color: "white",
              textAlign: "center",
              marginTop: 25,
            }}
          >
            Session Completed successfully
          </Text>

          <Text
            style={{
              textAlign: "center",
              width: 250,
              color: "white",
              marginTop: 15,
              lineHeight: 20,
            }}
          >
            “Success is the sum of small efforts, repeated day in and day out”
          </Text>

          <View
            style={{
              marginTop: 35,
            }}
          >
            <TurtleSvg />
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 45,
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.orange,
              height: 45,
              borderRadius: 7,
              width: 300,
              marginTop: "20%",
            }}
          >
            <Text style={tw`text-white   text-lg  `}>New Exercise</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <TouchableOpacity style={styles.loginWithOtp}>
            <Text style={tw`text-white   text-lg text-center  `}>
              Close Excercise
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginWithOtp: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    width: 300,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CompleteS4;
