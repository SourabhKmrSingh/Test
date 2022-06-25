import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const data = ["op", "op", "iuop"];

const Relatedstory = () => {
  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <Text style={styles.headingText}>Related Stories</Text>
        <Text style={styles.headingText}>5</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.allcards}
      >
        {data.map((item, index) => {
          return (
            <View style={styles.singleCard} key={index}>
              <Text style={styles.cardTitle}>
                Believe you can and you're halfway there
              </Text>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                }}
                style={{
                  width: "100%",
                  height: 110,
                  borderRadius: 10,
                }}
              />
            </View>
          );
        })}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 8,
        }}
      >
        <Text style={styles.headingText}>Related Articles</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.allcards}
      >
        {data.map((item, index) => {
          return (
            <View style={styles.singleCard} key={index}>
              <Text style={styles.articleCardTitle}>Discussion is no ...</Text>
              <Text style={styles.author}>By Gr.Kumar</Text>
              <Text style={styles.description}>
                When I stand before God at the end of my life. I would hope that
                I would not have a single bit of talent left
              </Text>

              <Text style={styles.date}>5 Nov</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    color: "#0E58C7",
    fontWeight: "500",
  },
  allcards: {
    flexDirection: "row",
    marginVertical: 15,
  },
  singleCard: {
    backgroundColor: "white",
    width: 170,
    height: 210,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    marginRight: 12,
    paddingVertical: 18,
  },
  cardTitle: {
    color: "#2E5B9F",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
  },
  articleCardTitle: {
    color: "#454F63",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    width: "100%",
  },
  author: {
    color: "#454F63",
    opacity: 0.5,
    textAlign: "left",
    width: "100%",
  },
  description: {
    color: "#454F63",
    opacity: 0.8,
    textAlign: "justify",
    width: "100%",
    marginVertical: 18,
    lineHeight: 19,
  },
  date: {
    color: "#454F63",
    opacity: 0.5,
    textAlign: "left",
    width: "100%",
  },
});

export default Relatedstory;
