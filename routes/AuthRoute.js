import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Auth/Login";
import Otplogin from "../screens/Auth/OtpLogin";
import SignUP from "../screens/Auth/signUp";
import ResetLink from "../screens/Auth/ResetLink";
import Otpinputscreen from "../screens/Auth/OtpInputScreen";
import singUPNEW from "../screens/Auth/singUPNew";

const Stack = createNativeStackNavigator();
const Authroute = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="login"
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="otplogin" component={Otplogin} />
        <Stack.Screen name="otpverify" component={Otpinputscreen} />


        

        <Stack.Screen name="resetlink" component={ResetLink}/>

        <Stack.Screen name="signupNEW" component={SignUP} />

      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Authroute;
