import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import tw from "tailwind-react-native-classnames";
import COLORS from "../../constants/color";
import Newscard from "./Cards/NewsCard";
import { Searchbar } from "react-native-paper";

import Topicscard from "./Cards/TopicsCard";
import { getAllNews } from "../../actions/Explore/News";
const data = ["gh", "ghjgj"];

const LatestNews = () => {
  const [firstLoad, setFirstLoad] = useState(1);
  const [newsData, SetNewsData] = useState([]);

  useEffect(async () => {
    const data = await getAllNews();
    if (data) SetNewsData(data);
  }, [firstLoad]);
  return (
    <View style={[styles.generalTopicsBox]}>
      <Text style={styles.heading}>Mental health related articles</Text>
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

      {newsData.length > 0 ? null : (
        <ActivityIndicator
          color="blue"
          size={33}
          style={{
            marginTop: 50,
          }}
        />
      )}
      {newsData.map((item, index) => {
        return <Newscard details={item.details} key={index} />;
      })}

      <Newscard />
      <Newscard />
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

export default LatestNews;
