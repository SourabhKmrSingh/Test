import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import tw from "tailwind-react-native-classnames";
import Svg, { G, Path } from "react-native-svg";

const ProfileHeader = ({ title }) => {
  return (
    <LinearGradient
      colors={["#37AADD", "#1F64CC"]}
      style={[
        tw`w-full`,
        styles.headBox,
        {
          paddingTop: StatusBar.currentHeight,
        },
      ]}
    >
      <View>
        <Svg xmlns="http://www.w3.org/2000/svg" width={26.766} height={26.766}>
          <G fill="#fff" data-name="Group 3">
            <Path
              d="M13.383 0a13.383 13.383 0 1 0 13.383 13.383A13.4 13.4 0 0 0 13.383 0zm0 24.931a11.548 11.548 0 1 1 11.548-11.548 11.561 11.561 0 0 1-11.548 11.548z"
              data-name="Path 4"
            />
            <Path
              d="M13.634 14.144a4.153 4.153 0 1 0-4.148-4.153 4.158 4.158 0 0 0 4.148 4.153zm0-6.472a2.319 2.319 0 1 1-2.318 2.319 2.321 2.321 0 0 1 2.318-2.32z"
              data-name="Path 5"
            />
            <Path
              d="M21.563 17.662a5.182 5.182 0 0 0-4.837-3.518.914.914 0 0 0-.606.179 4.11 4.11 0 0 1-4.969 0 .92.92 0 0 0-.605-.178 5.185 5.185 0 0 0-4.854 3.55.917.917 0 1 0 1.714.654 3.312 3.312 0 0 1 2.944-2.351 5.931 5.931 0 0 0 6.562 0 3.3 3.3 0 0 1 2.935 2.323.918.918 0 0 0 1.711-.664z"
              data-name="Path 6"
            />
          </G>
        </Svg>
      </View>
      <Text style={styles.headerText}>{title}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
    marginLeft: 10,
  },
  headBox: {
    height: 120,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingBottom: 25,
    paddingLeft: 20,
    flexDirection: "row",
  },
});

export default ProfileHeader;
