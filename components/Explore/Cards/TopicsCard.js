import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Topicscard = ({ title, details, quesItems }) => {
  const Navigator = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => Navigator.navigate("singletopic", { quesItems })}
      style={styles.cardBox}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>{details}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },
  title: {
    color: "#1E64CC",
    fontSize: 18,
    fontWeight: "500",
  },
  details: {
    color: "#5F789D",
    marginTop: 10,
    lineHeight: 25,
  },
});

export default Topicscard;
