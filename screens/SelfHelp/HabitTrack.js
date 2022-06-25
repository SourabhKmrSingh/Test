import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Headerbox from "../../components/Todo/HeaderBox";
import COLORS from "../../constants/color";
import Explorefooter from "../../components/Explore/ExploreFooter";
import Habittargetcard from "../../components/Selfhelp/Cards/HabitTargetCard";
import { Searchbar } from "react-native-paper";

const HabitTrack = () => {
  const demoData = [
    "Hello",
    "dfg",
    "gd",
    "Hello",
    "dfg",
    "gd",
    "Hello",
    "dfg",
    "gd",
    "Hello",
    "dfg",
    "gd",
  ];
  return (
    <View
      style={{
        height: Dimensions.get("screen").height,
      }}
    >
      <View style={styles.mainBox}>
        <Headerbox title="Let the thoughts" subtitle="flow :)" />

        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Searchbar
            placeholderTextColor="#00000057"
            style={{
              borderRadius: 10,
              elevation: 1,
              backgroundColor: "#F4F9FA",
            }}
            placeholder="Search"
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainContent}
        >
          <View style={tw`flex-row justify-between my-3 mt-5`}>
            <Text style={styles.heading}>Overview</Text>
            <Text
              style={{
                fontWeight: "700",
              }}
            >
              Active (3)
            </Text>
          </View>
          <View></View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.addIcon}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 25,
          }}
        >
          +
        </Text>
      </TouchableOpacity>
      <Explorefooter />
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLORS.appBackground,
    height: "100%",
    paddingHorizontal: 15,
  },
  mainContent: {
    borderTopWidth: 1,
    borderColor: COLORS.borderColor,
    marginBottom: 60,
  },
  addIcon: {
    position: "absolute",
    bottom: 65,
    right: 20,
    backgroundColor: "#4B8CEE",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#0E58C7",
    fontSize: 17,
    fontWeight: "700",
  },
});

export default HabitTrack;
