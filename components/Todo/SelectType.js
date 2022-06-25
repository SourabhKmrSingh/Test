import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Svg, { G, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const Selecttype = () => {
  const Navigator = useNavigation();
  return (
    <ActionSheet id="createSheet">
      <View style={styles.selectBox}>
        <View style={styles.whiteLine}></View>
        <Text style={styles.selectText}>Select type</Text>
        <View style={styles.allBoxes}>
          <TouchableOpacity
            style={styles.selectCard}
            onPress={() => {
              SheetManager.hide("createSheet");
              Navigator.navigate("todo", {
                screen: "addtask",
              });
            }}
          >
            <Icon2 name="tasks" size={32} color="#2E5B9F" />
            <Text style={styles.cardText}>Add Task/ Reminder</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectCard}
            onPress={() => {
              SheetManager.hide("createSheet");
              Navigator.navigate("todo", {
                screen: "createhabit",
              });
            }}
          >
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={37.126}
                height={33.001}
              >
                <G fill="#2e5b9f">
                  <Path
                    d="M22.688 4.125A4.125 4.125 0 1 1 18.563 0a4.125 4.125 0 0 1 4.125 4.125z"
                    data-name="Path 4707"
                  />
                  <Path
                    d="M37.126 24.751v-4.125a14.7 14.7 0 0 1-11.55-5.528l-2.764-3.3a4.084 4.084 0 0 0-3.156-1.485h-2.165a4.083 4.083 0 0 0-3.156 1.485l-2.764 3.3A14.774 14.774 0 0 1 0 20.626v4.125a18.762 18.762 0 0 0 14.438-6.7v4.641l-8 3.2a3.692 3.692 0 0 0 1.382 7.116h4.558V31.97a5.156 5.156 0 0 1 5.154-5.157h6.188a1.032 1.032 0 1 1 0 2.063h-6.188a3.09 3.09 0 0 0-3.094 3.094v1.031h14.871a3.692 3.692 0 0 0 1.382-7.116l-8-3.2v-4.637a18.762 18.762 0 0 0 14.435 6.703z"
                    data-name="Path 4708"
                  />
                </G>
              </Svg>
            </View>
            <Text style={styles.cardText}>Create Habit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.selectCard}>
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={37.126}
                height={33.001}
              >
                <G fill="#2e5b9f">
                  <Path
                    d="M22.688 4.125A4.125 4.125 0 1 1 18.563 0a4.125 4.125 0 0 1 4.125 4.125z"
                    data-name="Path 4707"
                  />
                  <Path
                    d="M37.126 24.751v-4.125a14.7 14.7 0 0 1-11.55-5.528l-2.764-3.3a4.084 4.084 0 0 0-3.156-1.485h-2.165a4.083 4.083 0 0 0-3.156 1.485l-2.764 3.3A14.774 14.774 0 0 1 0 20.626v4.125a18.762 18.762 0 0 0 14.438-6.7v4.641l-8 3.2a3.692 3.692 0 0 0 1.382 7.116h4.558V31.97a5.156 5.156 0 0 1 5.154-5.157h6.188a1.032 1.032 0 1 1 0 2.063h-6.188a3.09 3.09 0 0 0-3.094 3.094v1.031h14.871a3.692 3.692 0 0 0 1.382-7.116l-8-3.2v-4.637a18.762 18.762 0 0 0 14.435 6.703z"
                    data-name="Path 4708"
                  />
                </G>
              </Svg>
            </View>
            <Text style={styles.cardText}>Mental Health Exercise</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  selectBox: {
    backgroundColor: "#102646",
    height: 313,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: "center",
    paddingTop: 25,
  },
  whiteLine: {
    borderWidth: 1.2,
    borderColor: "white",
    width: 130,
  },
  selectText: {
    color: "white",
    marginTop: 20,
    fontWeight: "700",
    fontSize: 20,
  },
  allBoxes: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 65,
  },
  selectCard: {
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    width: 110,
    height: 110,
    paddingTop: 23,
    paddingBottom: 14,
  },
  cardText: {
    textAlign: "center",
    color: "#2E5B9F",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
  },
});

export default Selecttype;
