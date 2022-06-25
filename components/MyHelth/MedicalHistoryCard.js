import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FileIcon from "../../screens/Svgs/FileIcon";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const Medicalhistorycard = () => {
  const Navigator = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          Navigator.navigate("myhealth", {
            screen: "medicalhistory",
          })
        }
      >
        <View style={tw`flex-row`}>
          <View>
            <FileIcon />
          </View>
          <View style={tw`justify-around ml-4`}>
            <Text
              style={{
                color: "#0E58C7",
                fontWeight: "700",
                fontSize: 14,
              }}
            >
              All Records/Reports
            </Text>
            <Text
              style={{
                color: "#1C1C1C",
                fontSize: 12,
                opacity: 0.5,
              }}
            >
              Last Updated Mon, 01 Jan
            </Text>
          </View>
        </View>
        <View style={styles.totalAppointResult}>
          <Text style={tw`text-white`}>5</Text>
        </View>
        <View style={[tw`mt-4 pb-2`, styles.allResult]}>
          <Text style={styles.result}>80 Sessions</Text>
          <Text style={styles.result}>02 Records</Text>

          <Text style={styles.result}>15 Lab reports</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#F0F6FA",
  },
  allResult: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalAppointResult: {
    backgroundColor: "#FE7614",
    width: 25,
    height: 25,
    borderRadius: 20,
    color: "white",
    position: "absolute",
    right: 0,
    top: -5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  result: {
    color: "#1E64CC",
    fontWeight: "700",
    fontSize: 14,
  },
});

export default Medicalhistorycard;
