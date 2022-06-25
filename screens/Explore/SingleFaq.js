import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import FaQCard from "../../components/Explore/Cards/FaQCard";
import Explorefooter from "../../components/Explore/ExploreFooter";
import Exploreheading from "../../components/Explore/ExploreHeading";

const data = ["fgh", "fhf", "dfdf", "dsgdf"];

const Singlefaq = () => {
  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 55,
          backgroundColor: "#E9EFF4",
        }}
      >
        <Exploreheading />

        <View
          style={{
            paddingHorizontal: 15,
          }}
        >
          <Text style={styles.heading}>Recent Discussions</Text>
          <View style={styles.detailsBox}>
            <Text style={styles.title}>Alcool - Tabac Dragues</Text>
            <Text
              style={[
                styles.question,
                {
                  marginTop: 5,
                },
              ]}
            >
              Troubleshoot problems playing videos
            </Text>

            {data.map((item, index) => {
              return (
                <View key={index} style={styles.singleQuestion}>
                  <Text style={styles.question}>
                    Troubleshoot problems playing videos ?
                  </Text>
                  <Text style={styles.answer}>
                    When one door of happiness closes, another opens, but often
                    we look so long at the closed door that we do not see the
                    one that has been opened for us.
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 20,
          }}
        >
          <Text style={styles.heading}>Recent Discussion</Text>
          <View style={styles.relatedFaqs}>
            <FaQCard />
            <FaQCard />

            <FaQCard />
          </View>
        </View>
      </ScrollView>

      <Explorefooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#0E58C7",
    fontSize: 17,
    fontWeight: "600",
    marginVertical: 15,
  },
  detailsBox: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  singleQuestion: {
    marginVertical: 15,
  },
  title: {
    color: "#454F63",
    fontWeight: "400",
  },
  question: {
    color: "#454F63",
    fontWeight: "700",
  },
  answer: {
    color: "#78849E",
    lineHeight: 20,
    marginTop: 12,
  },
  relatedFaqs: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
});

export default Singlefaq;
