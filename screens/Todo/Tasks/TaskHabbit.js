import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
} from "react-native";
import Selectcategory from "../../../components/Todo/Tasks/SelectCategory";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { Switch } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";

const data = ["fg", "dfg"];
const normal = {
  none: 0,
  low: 0,
  normal: 0,
  high: 0,
};
const TaskHabbit = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const Navigator = useNavigation();
  const [statePriority, setStatePriority] = useState({
    none: 0,
    low: 0,
    normal: 1,
    high: 0,
  });

  const setPriority = (name) => {
    setStatePriority({
      ...normal,
      [name]: 1,
    });
  };
  return (
    <View style={styles.mainBox}>
      <ScrollView style={styles.scrollBox}>
        <View>
          <Text style={styles.createText}>Create New Habbit</Text>

          <View style={styles.addTaskSection}>
            <View styles={styles.otherOptionBox}>
              <View style={styles.otherItem}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  Start Goal
                </Text>
                <View style={styles.dateSelect}>
                  <Icon name="calendar" color="white" size={18} />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "white",
                      marginLeft: 5,
                    }}
                  >
                    Today
                  </Text>
                </View>
              </View>

              <View style={styles.otherItem}>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    End Goal
                  </Text>
                  <Text style={{ color: "white", marginTop: 5 }}>60 Days</Text>
                </View>
                <View style={styles.dateSelect}>
                  <Icon name="calendar" color="white" size={18} />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "white",
                      marginLeft: 5,
                    }}
                  >
                    26/01/2021
                  </Text>
                </View>
              </View>

              {/* Remindex Box */}
              <View style={styles.otherItem}>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "700",
                    }}
                  >
                    Set reminder
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      marginTop: 10,
                    }}
                  >
                    5:00 pm - Alarm
                  </Text>
                </View>
                <View style={styles.switchBox}>
                  <Switch thumbColor="#102646" color="white" />
                </View>
              </View>

              {/* Pending Task */}
              <View style={styles.otherItem}>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "700",
                    }}
                  >
                    Pending task
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      marginTop: 10,
                    }}
                  >
                    Show until the task completed
                  </Text>
                </View>
                <View style={styles.switchBox}>
                  <Switch thumbColor="#102646" color="white" />
                </View>
              </View>

              {/* Pending Task */}
              <View style={styles.otherItem}>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "700",
                    }}
                  >
                    Priority
                  </Text>
                  <View style={styles.priorityLists}>
                    <View style={styles.radioItem}>
                      <TouchableOpacity
                        onPress={() => {
                          setPriority("none");
                        }}
                      >
                        <View
                          style={
                            statePriority.none
                              ? styles.radioBtnInActive
                              : styles.radioBtnActive
                          }
                        ></View>
                      </TouchableOpacity>
                      <Text style={styles.radioText}>None</Text>
                    </View>
                    <View style={styles.radioItem}>
                      <TouchableOpacity
                        onPress={() => {
                          setPriority("low");
                        }}
                      >
                        <View
                          style={
                            statePriority.low
                              ? styles.radioBtnInActive
                              : styles.radioBtnActive
                          }
                        ></View>
                      </TouchableOpacity>
                      <Text style={styles.radioText}>Low</Text>
                    </View>
                    <View style={styles.radioItem}>
                      <TouchableOpacity
                        onPress={() => {
                          setPriority("normal");
                        }}
                      >
                        <View
                          style={
                            statePriority.normal
                              ? styles.radioBtnInActive
                              : styles.radioBtnActive
                          }
                        ></View>
                      </TouchableOpacity>
                      <Text style={styles.radioText}>Normal</Text>
                    </View>
                    <View style={styles.radioItem}>
                      <TouchableOpacity
                        onPress={() => {
                          setPriority("high");
                        }}
                      >
                        <View
                          style={
                            statePriority.high
                              ? styles.radioBtnInActive
                              : styles.radioBtnActive
                          }
                        ></View>
                      </TouchableOpacity>
                      <Text style={styles.radioText}>High</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Save Chnages And Cancel */}
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#102646",
              paddingBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f89140",
                height: 45,
                width: "100%",
                marginTop: 30,
                borderRadius: 7,
                paddingVertical: 2,
              }}
              onPress={() => {
                Navigator.navigate("todo", {
                  screen: "sucesstask",
                });
              }}
            >
              <Text
                style={[
                  tw` text-white  text-lg`,
                  {
                    fontWeight: "700",
                  },
                ]}
              >
                Create
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "white",
                height: 45,
                width: "100%",
                marginTop: 30,
                borderRadius: 7,
                paddingVertical: 2,
              }}
              onPress={() => Navigator.goBack()}
            >
              <Text
                style={[
                  tw` text-white  text-lg`,
                  {
                    fontWeight: "700",
                    color: "white",
                  },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <DatePicker onSelectedChange={(date) => setSelectedDate(date)} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#37AADD",
    paddingTop: StatusBar.currentHeight,
  },
  scrollBox: {
    width: "100%",
    height: "100%",
  },
  createText: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 18,
    marginBottom: 25,
    paddingHorizontal: 15,
  },
  addTaskSection: {
    backgroundColor: "#102646",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 40,
    paddingHorizontal: 18,
    borderBottomWidth: 1.2,
    paddingBottom: 35,
    borderColor: "#DADADA",
  },
  inputBox: {
    borderBottomWidth: 1.2,
    borderBottomColor: "white",
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "700",
    paddingBottom: 7,
    color: "white",
  },
  categText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
  },
  allCateg: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  otherOptionBox: {
    marginTop: 40,
  },
  dateSelect: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  otherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
  },
  switchBox: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 8,
  },
  radioBtnActive: {
    width: 10,
    height: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "white",
  },
  radioBtnInActive: {
    width: 10,
    height: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "white",
  },
  radioText: {
    color: "white",
    fontSize: 14,
    marginLeft: 5,
  },
  priorityLists: {
    marginTop: 10,
    flexDirection: "row",
  },
  radioItem: {
    alignItems: "center",
    flexDirection: "row",
    marginRight: 20,
  },
});

export default TaskHabbit;
