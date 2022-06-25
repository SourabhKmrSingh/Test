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
import UpAppoint from "../../components/MyHelth/Appointments/UpAppoint";
import Upcomingappointment from "../../components/MyHelth/Appointments/UpcomingAppointment";
import Headerbox from "../../components/Todo/HeaderBox";
import COLORS from "../../constants/color";

const Tab = createMaterialTopTabNavigator();

const Allappointments = () => {
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: COLORS.appBackground,
          height: height,
          display: "flex",
          flexDirection: "column",
          flex: 1,

          justifyContent: "space-between",
          // marginBottom:-90
        },
      ]}
    >
      <View
        style={{
          paddingHorizontal: 15,
          backgroundColor: COLORS.appBackground,
        }}
      >
        <Headerbox title="Appointments" subtitle="" />
        <View
          style={{
            paddingTop: 10,
          }}
        >
          <Tab.Navigator
            style={{ width: width, height: height - 10 }}
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
              name="UpcomingAppoint"
              options={{
                title: "Upcoming",
                tabBarLabelStyle: { textTransform: "none" },
              }}
              component={Upcomingappointment}
            />
            <Tab.Screen
              name="MissedAppoint"
              options={{
                title: "Missed",
                tabBarLabelStyle: { textTransform: "none" },
              }}
              component={Missed}
            />
            <Tab.Screen
              name="PastAppoint"
              options={{
                title: "Past",
                tabBarLabelStyle: { textTransform: "none" },
              }}
              component={UpAppoint}
            />
          </Tab.Navigator>
        </View>
      </View>
      <Explorefooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Allappointments;
