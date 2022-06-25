import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Alert,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import COLORS from "../../constants/color";
import { LinearGradient } from "expo-linear-gradient";

const HabbitTracking = () => {
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView>
      <View
        style={[
          tw`h-full justify-center items-center `,
          { width: width, height: height },
        ]}
      >
        <LinearGradient
          colors={["#37AADD", "#1F64CC"]}
          style={tw`w-full h-full flex`}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 24,
              padding: 20,
              marginTop: 40,
              fontWeight: "700",
              marginLeft: 10,
            }}
          >
            Create New Habit
          </Text>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default HabbitTracking;
