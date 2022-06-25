import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const Sessionscard = () => {
  return (
    <View style={tw`my-3`}>
      <TouchableOpacity style={styles.mainCard}>
        <View style={styles.card}>
          <View style={tw`items-center justify-center mr-7`}>
            <Text
              style={{
                color: "#D65022",
                fontSize: 16,
              }}
            >
              Session
            </Text>
            <Text
              style={{
                color: "#D65022",
                fontSize: 26,
              }}
            >
              08
            </Text>
          </View>
          <View>
            <View>
              <Text
                style={{
                  color: "#606060",
                  fontSize: 12,
                }}
              >
                Doctor
              </Text>
              <Text
                style={{
                  color: "#272727",
                  fontSize: 14,
                  fontWeight: "700",
                  marginTop: 5,
                }}
              >
                Dr . chan droku mar
              </Text>
            </View>
            <View style={tw`mt-3`}>
              <Text
                style={{
                  color: "#606060",
                  fontSize: 12,
                }}
              >
                Time/date
              </Text>
              <Text
                style={{
                  color: "#272727",
                  fontSize: 14,
                  fontWeight: "700",
                  marginTop: 5,
                }}
              >
                11/07/2020 12:00 PM - 2:00 PM{" "}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dateText: {
    color: "#78849E",
    opacity: 0.57,
    fontSize: 12,
    fontWeight: "700",
  },
  mainCard: {
    backgroundColor: "#F0F6FA",
    padding: 20,
    borderRadius: 10,
  },
  card: {
    backgroundColor: "#F0F6FA",
    marginTop: 5,
    flexDirection: "row",
  },
  singleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  location: {
    color: "#1C1C1C",
    opacity: 0.4,
    width: "73%",
    fontSize: 14,
    marginLeft: 17,
  },
  notesCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Sessionscard;
