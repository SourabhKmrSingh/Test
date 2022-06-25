import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import FaQCard from "./Cards/FaQCard";

const data = ["gh", "ghjgj", "dfgf", "fhjfg"];

const FaQ = () => {
  return (
    <View style={[styles.generalTopicsBox]}>
      <Text style={styles.heading}>Recent discussions</Text>
      <View
        style={{
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <Searchbar
          style={{
            borderRadius: 10,
          }}
          placeholder="Search"
        />
      </View>
      <View style={styles.allFaqs}>
        {data.map((item, index) => {
          return <FaQCard key={index} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  generalTopicsBox: {
    marginTop: 20,
  },
  heading: {
    color: "#0E58C7",
    fontSize: 17,
    fontWeight: "700",
  },

  allFaqs: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default FaQ;
