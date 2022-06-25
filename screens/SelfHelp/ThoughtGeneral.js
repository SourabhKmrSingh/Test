import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Habitcard from "../../components/Selfhelp/Cards/HabitCard";
import Headerbox from "../../components/Todo/HeaderBox";
import COLORS from "../../constants/color";
import Svg, { G, Circle, Path } from "react-native-svg";
import Explorefooter from "../../components/Explore/ExploreFooter";
import { Searchbar } from "react-native-paper";

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

const Thoughtgeneral = () => {
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
          <View>
            {demoData.map((item, index) => {
              return <Habitcard key={index} />;
            })}
          </View>
        </ScrollView>
        <View style={styles.addIcon}>
          <Svg xmlns="http://www.w3.org/2000/svg" width={60} height={60}>
            <G data-name="Group 3526" transform="translate(-306.97 -662.97)">
              <Circle
                cx={30}
                cy={30}
                r={30}
                fill="#1e64cc"
                data-name="Ellipse 430"
                transform="translate(306.97 662.97)"
              />
              <Path
                fill="#fff"
                d="M333.299 695.173a4.18 4.18 0 0 0-4.014 2.986.63.63 0 0 1-.6.412c-.464 0-1.886-1.143-2.286-1.419 0 3.4 1.567 6.39 5.286 6.39 3.133 0 5.286-1.808 5.286-4.964a3.578 3.578 0 0 0-.04-.377zm12.009-12.775a2.522 2.522 0 0 0-1.661.679c-8.441 7.541-9.319 7.721-9.319 9.938a3.823 3.823 0 0 0 .361 1.6l2.636 2.2a3.8 3.8 0 0 0 .925.125c2.565 0 4.052-1.878 8.72-10.591a4.249 4.249 0 0 0 .574-1.9 2.15 2.15 0 0 0-2.236-2.051z"
                data-name="Icon awesome-paint-brush"
              />
            </G>
          </Svg>
        </View>
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
});

export default Thoughtgeneral;
