import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const StoryCard = ({ title, details, image }) => {
  const Navigator = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        Navigator.navigate("singlestory", { title, details, image });
      }}
      style={styles.cardBox}
    >
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginTop: 18,
  },
  title: {
    color: "#454F63",
    fontSize: 17,
    fontWeight: "300",
    marginTop: 12,
  },
  details: {
    color: "#5F789D",
    marginTop: 10,
    lineHeight: 18,
  },
});

export default StoryCard;
