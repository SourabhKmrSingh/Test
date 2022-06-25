import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../../constants/color";
import tw from "tailwind-react-native-classnames";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import AppointementSLider from "../../components/MyHelth/AppointementSLider";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Switch } from "react-native-paper";
import Doctor from "../../components/MyHelth/Doctor";
import Client from "../../components/MyHelth/Client";
import Feedback from "../../components/MyHelth/Feedback";
import FilledStars from "../Svgs/FilledStars";
import BlankStars from "../Svgs/BlankStars";
import Explorefooter from "../../components/Explore/ExploreFooter";

const Tab = createMaterialTopTabNavigator();
const SingleDoctor = () => {
  const { width, height } = Dimensions.get("screen");
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [text, onChangeText] = useState("");
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
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            height: height,
            paddingBottom: 77,
          }}
        >
          <View>
            <LinearGradient
              colors={["#37AADD", "#1F64CC"]}
              style={{
                width: width,
                height: 156,
                paddingTop: 90,
                paddingHorizontal: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: "700",
                }}
              >
                Book Appointment
              </Text>
            </LinearGradient>
            <View style={tw`px-4 mt-12`}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={require("../../assets/doctor.png")}
                  style={[{ width: 115, height: 115, resizeMode: "contain" }]}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: -40,
                  }}
                >
                  <Text
                    style={{
                      color: "#2E5B9F",
                      fontSize: 14,
                      fontWeight: "700",
                    }}
                  >
                    Dr. Martin Pilier
                  </Text>
                  <Text
                    style={{
                      color: "#1C1C1C",
                      opacity: 0.4,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  >
                    Dentist
                  </Text>

                  <Text style={{ color: "#1C1C1C", opacity: 0.4 }}>
                    1st Main road Square Hal
                  </Text>
                  <Text
                    style={{
                      color: "#1C1C1C",
                      opacity: 0.4,
                      wordWrap: "break-words",
                    }}
                  >
                    M.G road, Bengaluru - 3 km
                  </Text>
                  <View
                    style={[
                      {
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                      },
                    ]}
                  >
                    <FilledStars />
                    <FilledStars />
                    <BlankStars />
                    <BlankStars />
                    <BlankStars />
                    <Text
                      style={{
                        color: "#1C1C1C",
                        opacity: 0.4,
                        fontSize: 14,
                        marginLeft: 10,
                      }}
                    >
                      (25)
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                  }}
                ></View>
              </View>

              <View
                style={{
                  marginTop: 25,
                }}
              >
                <AppointementSLider />
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 50,
                  marginBottom: 30,
                }}
              >
                <Text style={{ fontSize: 18 }}>Virtual Consulting</Text>
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color="#20BF2C"
                />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Message"
                />
                <TextInput
                  style={styles.input2}
                  onChangeText={onChangeText}
                  value={text}
                  multiline={true}
                  placeholder="Reason of the Visit"
                  numberOfLines={10}
                  textAlignVertical="top"
                />
              </View>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#f89140",
                  height: 45,
                  width: "100%",
                  marginTop: 30,
                  borderRadius: 7,
                }}
              >
                <Text style={[tw`text-white     text-lg`]}>Search</Text>
              </TouchableOpacity>

              <View>
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
                    name="Doctor"
                    options={{
                      title: "Doctor",
                      tabBarLabelStyle: { textTransform: "none" },
                    }}
                    component={Doctor}
                  />
                  <Tab.Screen
                    name="Client"
                    options={{
                      title: "Client",
                      tabBarLabelStyle: { textTransform: "none" },
                    }}
                    component={Client}
                  />
                  <Tab.Screen
                    name="Feedback"
                    options={{
                      title: "Feedback",
                      tabBarLabelStyle: { textTransform: "none" },
                    }}
                    component={Feedback}
                  />
                </Tab.Navigator>
                {/* <SingleDoctorTabs/> */}
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginTop: 80,
          }}
        >
          <Explorefooter />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 45,
    marginTop: 12,
    marginBottom: 18,
    backgroundColor: "#F4F9FA",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  input2: {
    borderRadius: 10,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: "#F4F9FA",
  },
});

export default SingleDoctor;
