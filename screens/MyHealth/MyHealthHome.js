import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import COLORS from "../../constants/color";
import Headerbox from "../../components/Todo/HeaderBox";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import TopTabNavigator from "./TopTabNavigator";
import tw from "tailwind-react-native-classnames";
import DoneRemind from "../../components/Todo/Reminders/DoneRemind";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import FilterSlider from "../../components/MyHelth/FilterSlider";
import HabbitTracking from "../../components/MyHelth/HabbitTracking";
import MoodTracking from "../../components/MyHelth/MoodTracking";
import DeAddiction from "../../components/MyHelth/DeAddiction";
import Erp from "../../components/MyHelth/Erp";
import { useRecoilState } from "recoil";
import { value } from "../../utils/reoil-atoms";

import Moodtracking from "../../components/MyHelth/src/Moodtracking";
const MyHealthHome = () => {
  const Navigator = useNavigation();
  const percentage = 50;

  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView
      style={[
        tw`px-4`,
        {
          backgroundColor: COLORS.appBackground,
          height: height - 99,
          paddingBottom: 90,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: height - 77,
          paddingBottom: 80,
        }}
      >
        <View
          style={{
            marginTop: 25,
          }}
        >
          <Text
            style={[
              tw` font-bold`,
              {
                color: "#1E64CC",
                fontSize: 14,
              },
            ]}
          >
            Suggestion based on the Assessments
          </Text>

          <View style={[tw`items-center justify-center `]}>
            <TouchableOpacity
              style={{
                backgroundColor: "#F0F6FA",
                height: 80,
                marginTop: 15,
                marginBottom: 29,
                borderRadius: 12,
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 15,
                paddingVertical: 15,
              }}
            >
              <View
                style={[
                  tw``,
                  {
                    backgroundColor: "#f2ece7",
                    borderRadius: 50,
                    height: 49,
                    width: 49,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Icon name="star" size={20} color="#FF9241" />
              </View>

              <View
                style={{
                  height: "100%",
                  justifyContent: "space-between",
                  marginLeft: 15,
                }}
              >
                <Text
                  style={[
                    tw`  font-bold `,
                    {
                      fontSize: 18,
                      color: "#1E64CC",
                    },
                  ]}
                >
                  04 Tips to cure Mental health
                </Text>
                <Text
                  style={[
                    tw` `,
                    {
                      fontSize: 12,
                      color: "#1E64CC",
                    },
                  ]}
                >
                  Zendoc will suggest tools / psychiatrist
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text
            style={[
              tw` font-bold`,
              {
                color: "#1E64CC",
                fontSize: 18,
              },
            ]}
          >
            Pill Tracking
          </Text>
        </View>
        <TouchableOpacity
          style={tw`items-center justify-center`}
          onPress={() =>
            Navigator.navigate("myhealth", {
              screen: "pilltrack",
            })
          }
        >
          <View style={styles.detailsBox}>
            <View
              style={{
                marginTop: -80,
                marginRight: 20,
                backgroundColor: "#fff",
                height: 40,
                width: 40,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="star" size={20} color="#FF9241" />
            </View>
            <View style={styles.contentBox}>
              <Text style={[tw`font-bold`, styles.contentText]}>08 Pills</Text>
              <Text
                style={[
                  {
                    color: "#1E64CC",
                    fontSize: 12,
                  },
                ]}
              >
                Prescribed on 03/04/2022
              </Text>
              <View style={{ marginTop: 25, marginLeft: -40 }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#1E64CC",
                    opacity: 0.5,
                    marginBottom: 14,
                  }}
                >
                  Prescribed By
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#1E64CC",
                      fontWeight: "700",
                    }}
                  >
                    Dr . Gaurav{" "}
                  </Text>
                  <Text style={{ fontSize: 14, color: "#1E64CC" }}>
                    +1 more
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.iconBox}>
              <AnimatedCircularProgress
                size={80}
                width={5}
                fill={50}
                rotation={-180}
                tintColor="#78D944"
                backgroundColor="#d6d6d6"
              >
                {(fill) => (
                  <Text
                    style={{
                      color: "#1E64CC",
                      fontWeight: "600",
                      fontSize: 23,
                    }}
                  >
                    50%
                  </Text>
                )}
              </AnimatedCircularProgress>
              <Text style={{ color: "#8EB1E5", marginTop: 10 }}>
                Click to view
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "#d6d6d6",
            borderBottomWidth: 1,
            marginTop: 30,
            marginBottom: 30,
          }}
        ></View>
        <FilterSlider />
        <HabbitTracking />
        <Moodtracking />
        <DeAddiction />
        <View style={{ marginBottom: 50 }}>
          <Erp />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contentText: {
    color: "#2E5B9F",
    // fontWeight: "700",
    // marginBottom: 18,
    fontSize: 24,
  },
  detailsBox: {
    backgroundColor: "#F0F6FA",
    width: "100%",
    minHeight: 120,
    marginHorizontal: 10,
    borderRadius: 12,
    // marginLeft: 20,
    marginTop: 8,
    paddingHorizontal: 18,
    paddingVertical: 18,
    shadowColor: "#455B6314",
    shadowOpacity: 1,
    shadowRadius: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contentBox: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
  },
  iconBox: {
    width: 100,
    height: 120,
    borderRadius: 100,
    padding: 8,
    marginTop: -8,
  },
});
export default MyHealthHome;
