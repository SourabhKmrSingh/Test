import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

const Exploreheading = () => {
  return (
    <LinearGradient
      colors={["#37AADD", "#1F64CC"]}
      style={[tw`w-full`, styles.headBox]}
    >
      <Text style={styles.headerText}>Information Center</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
  headBox: {
    height: 151,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "flex-end",
    paddingBottom: 19,
    paddingLeft: 20,
  },
});

export default Exploreheading;
