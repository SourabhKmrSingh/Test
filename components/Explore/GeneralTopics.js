import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import tw from "tailwind-react-native-classnames";
import COLORS from "../../constants/color";
import Topicscard from "./Cards/TopicsCard";
import { Searchbar } from "react-native-paper";
const data = ["gh", "ghjgj"];

const Generaltopics = ({ allGeneralTopicsData, isLoading }) => {
  const [filteredValue, setFilteredValue] = useState(allGeneralTopicsData);

  // Write a Function name searchHandler to filter the data when user type in the search bar with title of data in allGeneralTopics on Change Text
  const searchHandler = (text) => {
    let newData = allGeneralTopicsData.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredValue(newData);
  };

  useEffect(() => {
    setFilteredValue(allGeneralTopicsData);
  }, []);

  return (
    <View style={[styles.generalTopicsBox]}>
      <Text style={styles.heading}>All Topics</Text>

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
          onChangeText={(text) => searchHandler(text)}
        />
      </View>
      {isLoading.generaltopics && !allGeneralTopicsData.length ? (
        <ActivityIndicator
          color="blue"
          size={33}
          style={{
            marginTop: 50,
          }}
        />
      ) : null}
      {filteredValue.map((item, index) => {
        return (
          <Topicscard
            title={item.title}
            details={item.desc}
            quesItems={item.quesItems}
            key={index}
          />
        );
      })}
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
});

export default Generaltopics;
