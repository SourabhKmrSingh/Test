import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const SingleStoryCard = ({ title, details, image }) => {
  return (
    <View style={styles.cardBox}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: "100%",
          height: 130,
          borderRadius: 12,
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>{details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginTop: 18,
    marginHorizontal: 10,
  },
  title: {
    color: "#454F63",
    fontSize: 17,
    fontWeight: "300",
    marginTop: 12,
  },
  details: {
    color: "#78849E",
    marginTop: 10,
    lineHeight: 20,
  },
});

export default SingleStoryCard;
