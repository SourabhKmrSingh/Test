import React from "react";
import { View, StyleSheet, elevation, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Reminders = () => {
  return (
    <View>
      <Text
        style={{
          color: "#78849E",
          fontWeight: "700",
        }}
      >
        Jan 10-12:30 PM
      </Text>

      <View
        style={{
          borderLeftWidth: 1.5,
          borderColor: "blue",
          width: "100%",
          paddingBottom: 45,
          marginLeft: 10,
          marginVertical: 4,
        }}
      >
        <View elevation={15} style={styles.detailsBox}>
          <View style={styles.contentBox}>
            <Text style={[styles.contentText]}>Pill Reminder</Text>
            <Text
              style={[
                styles.contentText,
                {
                  color: "#505050",
                },
              ]}
            >
              Cycling
            </Text>
            <Text
              style={[
                styles.contentText,
                {
                  color: "#254069",
                },
              ]}
            >
              Min 5 min
            </Text>
          </View>

          <View style={styles.iconBox}>
            <Icon name="done" size={35} color="white" />
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentText: {
    color: "#2E5B9F",
    fontWeight: "700",
    marginBottom: 18,
  },
  detailsBox: {
    backgroundColor: "#F0F6FA",
    width: "90%",
    minHeight: 120,
    marginHorizontal: 10,
    borderRadius: 12,
    marginLeft: 20,
    marginTop: 8,
    paddingHorizontal: 18,
    paddingVertical: 18,
    shadowColor: "#455B6314",
    shadowOpacity: 1,
    shadowRadius: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contentBox: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
  },
  iconBox: {
    backgroundColor: "#0EC76B",
    borderRadius: 100,
    padding: 8,
  },
});

export default Reminders;
