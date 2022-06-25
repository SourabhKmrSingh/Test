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
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Selectcategory from "../../../components/Todo/Tasks/SelectCategory";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome";
import tw from "tailwind-react-native-classnames";
import { useNavigation, StackActions } from "@react-navigation/native";
import { useRecoilState, useResetRecoilState } from "recoil";
import { habitCreateRecoil } from "../../../utils/reoil-atoms";
import DropDownPicker from "react-native-dropdown-picker";

const CreateHabitScreen2 = () => {
  const Navigator = useNavigation();
  const { width, height } = Dimensions.get("screen");
  const [selectedValue, setSelectedValue] = useState("At least");
  const resetHabit = useResetRecoilState(habitCreateRecoil);
  const [text, onChangeText] = React.useState("eg. 1");
  const [statePriority, setStatePriority] = useState({
    none: 0,
    low: 0,
    normal: 1,
    hight: 0,
  });
  const [habitData, setHabitData] = useRecoilState(habitCreateRecoil);

  const setPriority = (name) => {
    setStatePriority({
      ...normal,
      [name]: 1,
    });
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("apple");
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  return (
    <View style={styles.mainBox}>
      <ScrollView
        style={{ width: width, height: height - 77, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.createText}>Create New Habbit </Text>

          <View style={styles.addTaskSection}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ fontSize: 18, color: "#ffffff", fontWeight: "700" }}
              >
                Set Target
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Navigator.navigate("todo", {
                    screen: "targetdetails",
                  });
                }}
              >
                <Icon name="info-with-circle" color="white" size={22} />
              </TouchableOpacity>
            </View>

            <View style={styles.categSection}>
              {/* <Text style={styles.categText}>Select Category</Text> */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <Picker
                  selectedValue={habitData?.target?.valueType}
                  style={{
                    height: 50,
                    width: 120,
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    color: "#fff",
                  }}
                  onValueChange={(itemValue) =>
                    setHabitData({
                      ...habitData,
                      target: {
                        ...habitData.target,
                        valueType: itemValue,
                      },
                    })
                  }
                  dropdownIconColor="#fff"
                >
                  <Picker.Item label="At least" value="ATLEAST" />
                  <Picker.Item label="At Most" value="ATMOST" />
                  <Picker.Item label="None" value="NONE" />
                </Picker>

                {/* <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  containerStyle={{
                    height: 50,
                    width: 120,
                  }}
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    color: "#fff",

                  }} 
                  textStyle={{
                    color: "black",
                  }}
                  labelStyle={{
                    color: "#fff",
                  }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    borderColor: "red",
                    color: "#fff",
                  }}
                  placeholderStyle={{
                    color: "#fff",
                  }}
                  dropDownContainerStyle={{
                    color:"red"
                  }}
                  //change icon color 
                  ArrowUpIconComponent={() => (
                    <Icon name="chevron-up" color="#fff" size={20} />
                  )}
                  ArrowDownIconComponent={() => (
                    <Icon name="chevron-down" color="#fff" size={20} />
                  )}
/> */}

                {/* <TextInput
                  style={{
                    borderColor: "transparent",
                    color: "#fff",
                    opacity: 0.8,
                    marginLeft: 20,
                    borderBottomWidth: 2,
                    borderBottomColor: "#fff",
                    width: 120,
                  }}
                  onChangeText={(text) => {
                    setHabitData({
                      ...habitData,
                      target: {
                        ...habitData.target,
                        unit: text,
                      },
                    });
                  }}
                  placeholder="eg. 1"
                  placeholderTextColor="#fff"
                  // value={text}
                /> */}

                <Picker
                  selectedValue={habitData?.target?.unit}
                  style={{
                    height: 50,
                    width: 100,
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    color: "#fff",
                    marginLeft: 10,
                    opacity: habitData.target.valueType === "NONE" ? 0.5 : 1,
                  }}
                  enabled={habitData.target.valueType !== "NONE"}
                  onValueChange={(text) => {
                    setHabitData({
                      ...habitData,
                      target: {
                        ...habitData.target,
                        unit: text,
                      },
                    });
                    console.log(text);
                  }}
                  dropdownIconColor="#fff"
                >
                  <Picker.Item label="KM" value="Km" />
                  <Picker.Item label="MIN" value="Min" />
                  <Picker.Item label="HR" value="Hour" />
                </Picker>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  marginTop: 10,
                  marginLeft: 10,
                  opacity: habitData.target.valueType === "NONE" ? 0.5 : 1,
                }}
              >
                <TextInput
                  style={{
                    borderColor: "transparent",
                    color: "#fff",
                    opacity: 0.8,
                    marginRight: 15,
                    borderBottomWidth: 2,
                    borderBottomColor: "#fff",
                    width: 80,
                  }}
                  //disable TextInput
                  editable={habitData.target.valueType !== "NONE"}
                  onChangeText={(text) => {
                    setHabitData({
                      ...habitData,
                      target: {
                        ...habitData.target,
                        value: text,
                      },
                    });
                  }}
                  placeholder="eg. 1"
                  placeholderTextColor="#fff"
                  keyboardType="numeric"
                />
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 18 }}
                >
                  a day.
                </Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.4,
                  borderBottomColor: "#fff",
                  marginTop: 50,
                  width: width,
                  marginLeft: -20,
                }}
              ></View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 50,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#ffffff",
                    fontWeight: "700",
                    marginBottom: 10,
                  }}
                >
                  How you want to do this ?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    Navigator.navigate("todo", {
                      screen: "targetdetails",
                    });
                  }}
                >
                  <Icon name="info-with-circle" color="white" size={22} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => {
                  setHabitData({
                    ...habitData,
                    completeType: "bool",
                  });
                }}
                style={styles.radioItem}
              >
                <View
                  style={[
                    habitData.completeType == "bool"
                      ? styles.modalRadioActive
                      : styles.modalRadioInActive,
                    {
                      marginRight: 10,
                    },
                  ]}
                ></View>
                <Icon2
                  name="check-circle-o"
                  color="white"
                  style={{
                    marginLeft: 5,
                  }}
                  size={18}
                />
                <Text style={styles.radioText}>Yes</Text>
                <Icon name="circle-with-cross" color="white" size={18} />
                <Text style={styles.radioText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHabitData({
                    ...habitData,
                    completeType: "value",
                  });
                }}
                style={styles.radioItem}
              >
                <View
                  style={[
                    habitData.completeType == "value"
                      ? styles.modalRadioActive
                      : styles.modalRadioInActive,
                    {
                      marginRight: 10,
                    },
                  ]}
                ></View>

                <Text style={styles.radioText}>By Value</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Ye hai Often */}
          <View
            style={{
              backgroundColor: "#102646",
              paddingHorizontal: 18,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#ffffff",
                  fontWeight: "700",
                  marginBottom: 5,
                }}
              >
                How often you want to do this ?
              </Text>
            </View>

            <View>
              {/* everyday */}
              <TouchableOpacity
                style={styles.modalRadioItem}
                onPress={() => {
                  setHabitData({
                    ...habitData,
                    reminderType: "EveryDay",
                  });
                }}
              >
                <View
                  style={
                    habitData.reminderType == "EveryDay"
                      ? styles.modalRadioActive
                      : styles.modalRadioInActive
                  }
                ></View>
                <Text style={styles.radioModalSelectText}>Everyday</Text>
              </TouchableOpacity>

              {/* Week  */}
              <View>
                <TouchableOpacity
                  style={[tw`flex-row items-center `, styles.modalRadioItem]}
                  onPress={() => {
                    setHabitData({
                      ...habitData,
                      reminderType: "Week",
                    });
                  }}
                >
                  <View
                    style={
                      habitData.reminderType == "Week"
                        ? styles.modalRadioActive
                        : styles.modalRadioInActive
                    }
                  ></View>
                  <Text style={styles.radioModalSelectText}>Week</Text>
                </TouchableOpacity>
                {habitData.reminderType == "Week" ? (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 25,
                      marginTop: 20,
                    }}
                  >
                    <TouchableOpacity
                      style={
                        habitData.repeatWeek.Sunday
                          ? styles.selectedWeekBox
                          : styles.weekBox
                      }
                      onPress={() => {
                        setHabitData({
                          ...habitData,
                          repeatWeek: {
                            ...habitData.repeatWeek,
                            Sunday: !habitData.repeatWeek.Sunday,
                          },
                        });
                      }}
                    >
                      <Text
                        style={{
                          color: habitData.repeatWeek.Sunday
                            ? "#0E58C7"
                            : "#fff",
                        }}
                      >
                        S
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        habitData.repeatWeek.Monday
                          ? styles.selectedWeekBox
                          : styles.weekBox
                      }
                      onPress={() => {
                        setHabitData({
                          ...habitData,
                          repeatWeek: {
                            ...habitData.repeatWeek,
                            Monday: !habitData.repeatWeek.Monday,
                          },
                        });
                      }}
                    >
                      <Text
                        style={{
                          color: habitData.repeatWeek.Monday
                            ? "#0E58C7"
                            : "#fff",
                        }}
                      >
                        M
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        habitData.repeatWeek.Tuesday
                          ? styles.selectedWeekBox
                          : styles.weekBox
                      }
                      onPress={() => {
                        setHabitData({
                          ...habitData,
                          repeatWeek: {
                            ...habitData.repeatWeek,
                            Tuesday: !habitData.repeatWeek.Tuesday,
                          },
                        });
                      }}
                    >
                      <Text
                        style={{
                          color: habitData.repeatWeek.Tuesday
                            ? "#0E58C7"
                            : "#fff",
                        }}
                      >
                        T
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        habitData.repeatWeek.Wednesday
                          ? styles.selectedWeekBox
                          : styles.weekBox
                      }
                      onPress={() => {
                        setHabitData({
                          ...habitData,
                          repeatWeek: {
                            ...habitData.repeatWeek,
                            Wednesday: !habitData.repeatWeek.Wednesday,
                          },
                        });
                      }}
                    >
                      <Text
                        style={{
                          color: habitData.repeatWeek.Wednesday
                            ? "#0E58C7"
                            : "#fff",
                        }}
                      >
                        W
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        habitData.repeatWeek.Thursday
                          ? styles.selectedWeekBox
                          : styles.weekBox
                      }
                      onPress={() => {
                        setHabitData({
                          ...habitData,
                          repeatWeek: {
                            ...habitData.repeatWeek,
                            Thursday: !habitData.repeatWeek.Thursday,
                          },
                        });
                      }}
                    >
                      <Text
                        style={{
                          color: habitData.repeatWeek.Thursday
                            ? "#0E58C7"
                            : "#fff",
                        }}
                      >
                        T
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        habitData.repeatWeek.Friday
                          ? styles.selectedWeekBox
                          : styles.weekBox
                      }
                      onPress={() => {
                        setHabitData({
                          ...habitData,
                          repeatWeek: {
                            ...habitData.repeatWeek,
                            Friday: !habitData.repeatWeek.Friday,
                          },
                        });
                      }}
                    >
                      <Text
                        style={{
                          color: habitData.repeatWeek.Friday
                            ? "#0E58C7"
                            : "#fff",
                        }}
                      >
                        F
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        habitData.repeatWeek.Saturday
                          ? styles.selectedWeekBox
                          : styles.weekBox
                      }
                      onPress={() => {
                        setHabitData({
                          ...habitData,
                          repeatWeek: {
                            ...habitData.repeatWeek,
                            Saturday: !habitData.repeatWeek.Saturday,
                          },
                        });
                      }}
                    >
                      <Text
                        style={{
                          color: habitData.repeatWeek.Saturday
                            ? "#0E58C7"
                            : "#fff",
                        }}
                      >
                        S
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>

              {/* Specific */}
              <View style={styles.modalRadioItem}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    setHabitData({
                      ...habitData,
                      reminderType: "Specific",
                    });
                  }}
                >
                  <View
                    style={
                      habitData.reminderType == "Specific"
                        ? styles.modalRadioActive
                        : styles.modalRadioInActive
                    }
                  ></View>
                  <Text style={styles.radioModalSelectText}>Specific</Text>
                </TouchableOpacity>
                <TextInput
                  keyboardType="numeric"
                  style={{
                    color: "#D2DFF2",
                    borderBottomWidth: 1,
                    borderColor: "#D2DFF2",
                    width: 50,
                    marginLeft: 10,
                  }}
                  onChangeText={(text) => {
                    setHabitData({
                      ...habitData,
                      specific: {
                        ...habitData.specific,
                        value: text,
                      },
                    });
                  }}
                ></TextInput>
                <Picker
                  selectedValue={habitData.specific.specificType}
                  dropdownIconColor="white"
                  style={{
                    color: "white",
                    width: 120,
                  }}
                  onValueChange={(itemValue, itemIndex) => {
                    setHabitData({
                      ...habitData,
                      specific: {
                        ...habitData.specific,
                        specificType: itemValue,
                      },
                    });
                  }}
                >
                  <Picker.Item label="Week" value="week" />
                  <Picker.Item label="Day" value="day" />
                </Picker>
              </View>

              {/* Repeat */}
            </View>
          </View>

          {/* Save Changes And Cancel */}
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#102646",
              paddingBottom: 50,
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                height: 45,
                width: "100%",
                marginTop: 30,
                borderRadius: 7,
                paddingVertical: 2,
              }}
              onPress={() => {
                if (
                  habitData.target.value == "" &&
                  habitData.target.valueType != "NONE"
                ) {
                  Alert.alert("Required*", "Please enter a Value");
                } else if (habitData.completeType == "") {
                  Alert.alert("Required*", "Please select a Complete Type");
                } else if (habitData.reminderType == "") {
                  Alert.alert("Required*", "Please select a Reminder Type");
                } else {
                  Navigator.navigate("todo", {
                    screen: "createhabit3",
                  });
                }
              }}
            >
              <Text
                style={[
                  tw`   text-lg`,
                  {
                    fontWeight: "700",
                    color: "#0E58C7",
                  },
                ]}
              >
                Next
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
              onPress={() => {
                resetHabit();
                Navigator.pop(2);
              }}
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
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 45,
                width: "100%",
                marginTop: 30,
                borderRadius: 7,
                paddingVertical: 2,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => {
                resetHabit();
                Navigator.dispatch(Navigator.navigate("homepage"));
              }}
            >
              <Icon name="cross" color="white" size={22} />
              <Text
                style={[
                  tw` text-white  text-lg`,
                  {
                    fontWeight: "700",
                    color: "white",
                    marginLeft: 5,
                  },
                ]}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
    height: Dimensions.get("screen").height,
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
    borderBottomWidth: 0.4,
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
    marginRight: 30,
  },
  priorityLists: {
    marginTop: 10,
    flexDirection: "row",
  },
  radioItem: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  weekBox: {
    borderWidth: 2,
    borderColor: "white",
    marginRight: 8,
    width: 35,
    height: 35,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedWeekBox: {
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    marginRight: 8,
    width: 35,
    height: 35,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  inActiveRadio: {
    width: 10,
    height: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "white",
    marginRight: 10,
    marginLeft: 20,
  },
  modalRadioItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    flexWrap: "wrap",
  },
  modalRadioInActive: {
    width: 15,
    height: 15,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "white",
  },
  modalRadioActive: {
    width: 15,
    height: 15,
    borderRadius: 20,
    borderWidth: 3.5,
    borderColor: "white",
    backgroundColor: "white",
  },
  radioModalSelectText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
});
export default CreateHabitScreen2;
