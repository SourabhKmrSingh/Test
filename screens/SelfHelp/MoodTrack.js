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
import Habitcard from "../../components/Selfhelp/Cards/HabitCard";
import Headerbox from "../../components/Todo/HeaderBox";
import COLORS from "../../constants/color";
import Svg, { G, Circle, Path } from "react-native-svg";
import Explorefooter from "../../components/Explore/ExploreFooter";
import Habittargetcard from "../../components/Selfhelp/Cards/HabitTargetCard";
import MoodTrackCard from "../../components/Selfhelp/Cards/MoodTrackCard";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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

const MoodTrack = () => {
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
            <Text style={styles.heading}>Mood Tracking</Text>
            <TouchableOpacity>
              <Icon name="calendar-month-outline" size={25} color="#1E64CC" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingHorizontal: 3,
            }}
          >
            {demoData.map((item, index) => {
              return <MoodTrackCard key={index} />;
            })}
          </View>
        </ScrollView>
      </View>

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
  heading: {
    color: "#0E58C7",
    fontSize: 17,
    fontWeight: "700",
  },
  addIcon: {
    position: "absolute",
    bottom: 65,
    right: 20,
    elevation: 10,
  },
  addIcon: {
    backgroundColor: "#4B8CEE",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 65,
    right: 20,
    elevation: 10,
  },
});

export default MoodTrack;
