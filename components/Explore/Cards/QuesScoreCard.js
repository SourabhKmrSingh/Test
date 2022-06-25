import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuesScorecard = () => {
  return (
    <View style={styles.scoreBox}>
      <View style={styles.firstBox}>
        <Text style={styles.totalScore}>Your score 40</Text>
        <View style={styles.points}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            05{" "}
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: "300",
            }}
          >
            points
          </Text>
        </View>
      </View>
      <View style={styles.firstBox}>
        <Text style={styles.quesNum}>Answered 100 Questions</Text>
        <View style={styles.points}>
          <Text style={styles.expire}>Expires 12/0421 </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreBox: {
    backgroundColor: "#153669",
    width: "100%",
    height: 87,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  firstBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalScore: {
    color: "#D2DFF2",
    fontSize: 29,
    fontWeight: "500",
    alignItems: "flex-end",
  },
  points: {
    flexDirection: "row",
    alignItems: "center",
  },
  quesNum: {
    color: "#D2DFF1",
    opacity: 0.5,
    marginTop: 8,
  },
  expire: {
    color: "#D2DFF1",
    opacity: 0.5,
    marginTop: 8,
  },
});

export default QuesScorecard;
