import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import tw from "tailwind-react-native-classnames";
import COLORS from "../../constants/color";
import StoryCard from "./Cards/Storycard";
import Topicscard from "./Cards/TopicsCard";
import { Searchbar } from "react-native-paper";

const data = ["gh", "ghjgj"];

const Stories = ({ allStories, isLoading }) => {
  const [filteredValue, setFilteredValue] = useState(allStories);

  // Write a Function name searchHandler to filter the data when user type in the search bar with title of data in allGeneralTopics on Change Text
  const searchHandler = (text) => {
    let newData = allStories.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredValue(newData);
  };
  return (
    <View style={[styles.generalTopicsBox]}>
      <Text style={styles.heading}>Interesting Stories</Text>
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
      {isLoading.stories && !allStories.length ? (
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
          <StoryCard
            title={item.title}
            details={item.details}
            image={item.image}
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

export default Stories;
