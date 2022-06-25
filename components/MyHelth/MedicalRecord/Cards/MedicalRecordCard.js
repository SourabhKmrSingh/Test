import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import tw from "tailwind-react-native-classnames";
import COLORS from "../../../../constants/color";
import DownloadIcon from "../../../../screens/Svgs/DownloadIcon";

const Medicalrecordcard = () => {
  return (
    <View style={styles.card}>
      <Text
        style={{
          color: "#8EB1E5",
          fontSize: 12,
        }}
      >
        01/02/2020
      </Text>
      <View style={tw`mt-1 flex-row justify-between`}>
        <Text
          style={{
            color: "#2E5B9F",
            fontWeight: "700",
          }}
        >
          Dermatologist - Noemi Shinte
        </Text>
        <TouchableOpacity style={tw`flex-row`}>
          <DownloadIcon />
          <Text
            style={{
              color: "#1E64CC",
              fontWeight: "700",
              marginLeft: 5,
            }}
          >
            Download
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderTopWidth: 1,
    borderColor: COLORS.borderColor,
    paddingVertical: 20,
  },
});

export default Medicalrecordcard;
