import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SingleTopicCard from "../../components/Explore/Cards/SingleTopicCard";
import Explorefooter from "../../components/Explore/ExploreFooter";
import Exploreheading from "../../components/Explore/ExploreHeading";
import Relatedstory from "../../components/Explore/RelatedStory";

const Singletopic = ({ route }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Exploreheading />
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 55,
          }}
        >
          {route.params.quesItems.map((item, index) => {
            return (
              <SingleTopicCard
                key={index}
                openProps={index ? 0 : 1}
                title={item.title}
                details={item.details}
              />
            );
          })}

          <Relatedstory />
        </View>
      </ScrollView>
      <Explorefooter />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Singletopic;
