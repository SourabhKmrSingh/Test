import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import COLORS from "../../constants/color";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

const Createtask = () => {
  return (
    <View
      style={{
        marginTop: 25,
      }}
    >
      <Text
        style={[
          tw` font-bold`,
          {
            color: "#1E64CC",
            fontSize: 20,
          },
        ]}
      >
        Task / Reminders
      </Text>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.orange,
          height: 45,
          marginTop: 15,
          marginBottom: 29,
          borderRadius: 7,
        }}
        onPress={() => {
          SheetManager.show("createSheet");
        }}
      >
        <Text
          style={[
            tw`text-white    `,
            {
              fontSize: 15,
              fontWeight: "500",
            },
          ]}
        >
          Create New Habit/task/Exercise
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Createtask;
