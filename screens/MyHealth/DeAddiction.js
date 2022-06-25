import React from "react";
import { View, StyleSheet } from "react-native";
import Deaddictioncard from "../../components/MyHelth/DeAddictionCard";
import COLORS from "../../constants/color";

const data =["op","ddf","dgd","dg"]

const Deaddiction = () => {
  return (
    <View style={{
        backgroundColor:COLORS.appBackground,
        paddingHorizontal:10
    }} >
      {data.map((item, index) => {
        return <Deaddictioncard key={index} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Deaddiction;
