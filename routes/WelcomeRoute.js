import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Auth/Login";
import Otplogin from "../screens/Auth/OtpLogin";
import SignUP from "../screens/Auth/signUp";
import ResetLink from "../screens/Auth/ResetLink";
import Step1 from "../screens/Welcome/Step1";
import Step2 from "../screens/Welcome/Step2";
import Step3 from "../screens/Welcome/Step3";
import Step4 from "../screens/Welcome/Step4";

const Stack = createNativeStackNavigator();
const WelcomeRoute = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="step1"
      >
        <Stack.Screen name="step1" component={welcome} />
        <Stack.Screen name="step2" component={Step2} />
        <Stack.Screen name="step3" component={Step3} />
        <Stack.Screen name="step4" component={Step4}/>
      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default WelcomeRoute;
