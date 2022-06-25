import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import React from "react";
import MyHealthHome from "./MyHealthHome";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Appointmentrecords from "./AppointmentRecords";
import Headerbox from "../../components/Todo/HeaderBox";
import { useRecoilState } from "recoil";
import { value } from "../../utils/reoil-atoms";
import COLORS from "../../constants/color";
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const { weight, height } = Dimensions.get("screen");

  return (
    <SafeAreaView
      style={{
        weight,
        height,
        backgroundColor: COLORS.appBackground,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          paddingHorizontal: 12,
        }}
      >
        <Headerbox title="Invest in your" subtitle="Mental health : )" />
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#0E58C7",
          tabBarInactiveTintColor: "#808495",
          tabBarStyle: {
            backgroundColor: COLORS.appBackground,
          },
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 29,
          },
          tabBarItemStyle: {
            fontWeight: "700",
            fontSize: 29,
          },
        }}
      >
        <Tab.Screen
          name="MyHealthHome"
          options={{
            title: "MyHealthHome",
            tabBarLabelStyle: { textTransform: "none" },
          }}
          component={MyHealthHome}
        />
        <Tab.Screen
          name="Appointment/records"
          options={{
            title: "Appointment/records",
            tabBarLabelStyle: { textTransform: "none" },
          }}
          component={Appointmentrecords}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TopTabNavigator;
