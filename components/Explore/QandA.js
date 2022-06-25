import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import QuesScorecard from "./Cards/QuesScoreCard";

const Qanda = () => {
  const Navigator = useNavigation();
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <QuesScorecard />
      <View style={styles.startBox}>
        <Text style={styles.heading}>
          Answer the questions related to mental health and earn points
        </Text>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f89140",
            height: 45,
            width: 250,
            marginTop: 30,
            borderRadius: 7,
          }}
        >
          <Text
            style={[
              tw`text-white     text-lg`,
              {
                fontWeight: "500",
              },
            ]}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  startBox: {
    marginTop: 100,
    alignItems: "center",
  },
  heading: {
    color: "#1E64CC",
    maxWidth: 300,
    fontSize: 16,
    lineHeight: 25,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Qanda;
