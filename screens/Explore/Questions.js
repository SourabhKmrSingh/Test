import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Exploreheading from "../../components/Explore/ExploreHeading";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import Explorefooter from "../../components/Explore/ExploreFooter";

const Questions = () => {
  const Navigator = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#E9EFF4",
      }}
    >
      <Exploreheading />
      <View
        style={{
          marginTop: 100,

          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#1E64CC",
            textAlign: "center",
            fontWeight: "500",
            fontSize: 16,
            marginBottom: 20,
          }}
        >
          How many time zones are there in Russia?
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.singleOption}>
            <Text style={styles.optionVal}>12</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleOption}>
            <Text style={styles.optionVal}>12</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleOption}>
            <Text style={styles.optionVal}>12</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleOption}>
            <Text style={styles.optionVal}>12</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleOption}>
            <Text style={styles.optionVal}>None</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Explorefooter />
    </View>
  );
};

const styles = StyleSheet.create({
  singleOption: {
    backgroundColor: "#F7FAFD",
    width: 250,
    marginVertical: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  optionVal: {
    color: "#808495",
  },
});

export default Questions;
