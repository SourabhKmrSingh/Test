import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Step2Svg from "./Step2Svg";
const Step2 = () => {
  return (
    <View style={[tw`w-full h-full` , {alignItems:"center" , justifyContent:"center"} ]} >
      <Step2Svg/>
    </View>
  );
};


export default Step2;
