import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Explorefooter from "../../components/Explore/ExploreFooter";
import Missed from "../../components/MyHelth/Appointments/Missed";
import Upcomingappointment from "../../components/MyHelth/Appointments/UpcomingAppointment";
import Allsessions from "../../components/MyHelth/MedicalRecord/AllSessions";
import Labreport from "../../components/MyHelth/MedicalRecord/LabReport";
import Medicalrecords from "../../components/MyHelth/MedicalRecord/MedicalRecords";
import Headerbox from "../../components/Todo/HeaderBox";
import COLORS from "../../constants/color";

const Tab = createMaterialTopTabNavigator();

const MedicalRecords = () => {
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView
      style={{
        width,
        height: height,
        paddingBottom: 77,
      }}
    >
      <View
        style={{
          paddingHorizontal: 15,
          backgroundColor: COLORS.appBackground,
        }}
      >
        <Headerbox title="Medical records" subtitle="" />
        <View>
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
                backgroundColor: "red",
              },
              tabBarItemStyle: {
                fontWeight: "700",
                fontSize: 29,
              },
              tabBarIndicatorStyle: {
                color: "red",
              },
            }}
          >
            <Tab.Screen
              name="AllSessions"
              options={{
                title: "All Sessions",
                tabBarLabelStyle: { textTransform: "none" },
              }}
              component={Allsessions}
            />
            <Tab.Screen
              name="MedicalRecords"
              options={{
                title: "Medical Records",
                tabBarLabelStyle: { textTransform: "none" },
              }}
              component={Medicalrecords}
            />
            <Tab.Screen
              name="LabReport"
              options={{
                title: "Lab Report",
                tabBarLabelStyle: { textTransform: "none" },
              }}
              component={Labreport}
            />
          </Tab.Navigator>
        </View>
      </View>
      <Explorefooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default MedicalRecords;
