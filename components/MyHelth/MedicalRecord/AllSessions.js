import React from "react";
import { View, StyleSheet } from "react-native";
import COLORS from "../../../constants/color";
import Sessionscard from "./Cards/SessionsCard";

const data = ["Hey", "hey2"];
const Allsessions = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.appBackground,
      }}
    >
      {data.map((item, index) => {
        return <Sessionscard key={index} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Allsessions;
