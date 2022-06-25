import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import Medicalhistorycard from "./MedicalHistoryCard";

const data = ["hey"];

const Medicalhistory = () => {
  return (
    <View>
      <View style={tw`flex-row justify-start my-3 mt-5`}>
        <Text style={styles.heading}>Medical History</Text>
      </View>

      <View>
        {data.map((item, index) => {
          return <Medicalhistorycard key={index} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#1E64CC",
    fontSize: 17,
    fontWeight: "700",
  },
});

export default Medicalhistory;
