import React from "react";
import { View, StyleSheet, ImageBackground , Dimensions, TouchableOpacity,Text } from "react-native";
import tw from "tailwind-react-native-classnames";

import Step4Image from "./Step4Image";

const Step4 = () => {
  const { width, height } = Dimensions.get("screen");
  return (
    <View  >
      <Step4Image/>
      <TouchableOpacity>
        <View style={{
          width: 100,
          height:300,
          backgroundColor: "rgba(0,0,0,0.5)",
          position:"absolute",
          top:10,
          right:10,
        }}>
          <Text>Hello</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Step4;
