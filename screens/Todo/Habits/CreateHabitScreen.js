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
  ActivityIndicator,
  Alert,
} from "react-native";
import Selectcategory from "../../../components/Todo/Tasks/SelectCategory";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Switch } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { useNavigation, StackActions } from "@react-navigation/native";
import COLORS from "../../../constants/color";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  allHabitItemsRecoil,
  userDataRecoil,
  habitAddedRecoil,
  habitCreateRecoil,
} from "../../../utils/reoil-atoms";
import { createHabit } from "../../../actions/Todo/Habit";
const data = ["fg", "dfg"];
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const normal = {
  none: 0,
  low: 0,
  normal: 0,
  hight: 0,
};
const CreateHabitScreen = () => {
  const Navigator = useNavigation();
  const [allTasksItems, setAllTasksItems] = useRecoilState(allHabitItemsRecoil);
  const [userDetails, setUserDetails] = useRecoilState(userDataRecoil);
  const [habitAdded, setHabitAdded] = useRecoilState(habitAddedRecoil);
  const [todayDate, setTodayDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [isHabitCreating, setIsHabitCreating] = useState(0);
  const resetHabit = useResetRecoilState(habitCreateRecoil);
  const [habitData, setHabitData] = useRecoilState(habitCreateRecoil);

  const habitDataHandler = (name, value) => {
    setHabitData({
      ...habitData,
      [name]: value,
    });
  };
  // const createTaskHandler = () => {
  //   setIsHabitCreating(1);
  //   createHabit(habitData)
  //     .then((data) => {
  //       setAllTasksItems([...allTasksItems, data]);
  //       setIsHabitCreating(0);
  //       // Navigator.navigate("todo", {
  //       //   screen: "sucesstask",
  //       // });
  //       setHabitAdded(habitAdded + 1);
  //     })
  //     .catch((err) => {
  //       setIsHabitCreating(0);
  //       Alert.alert("Error While Creating");
  //       console.log(err, "Ereror Hai ");
  //     });

  //   // console.log(habitData);
  //   // setAllTasksItems([...allTasksItems, habitData]);
  //   // console.log(allTasksItems);
  //   // Navigator.navigate("todo", {
  //   //   screen: "sucesstask",
  //   // });
  // };

  const [statePriority, setStatePriority] = useState({
    none: 0,
    low: 0,
    normal: 1,
    hight: 0,
  });

  const setPriority = (name) => {
    setStatePriority({
      ...normal,
      [name]: 1,
    });
  };

  // UseEffect for setting _Id in Habit Data
  React.useEffect(() => {
    if (userDetails._id) {
      setHabitData({
        ...habitData,
        user: userDetails._id,
      });
    }
  }, [userDetails]);
  return (
    <KeyboardAwareScrollView
      enableAutomaticScroll={true}
      extraHeight={500}
      style={styles.mainBox}
      keyboardShouldPersistTaps='handled'
    >
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollBox}
          keyboardShouldPersistTaps='handled'
        >
          <View>
            <Text style={styles.createText}>Create New Habit </Text>

            <View style={styles.addTaskSection}>
              <TextInput
                value={habitData.name}
                onChangeText={(text) => {
                  habitDataHandler("name", text);
                }}
                style={styles.inputBox}
                placeholder="Enter Task Name"
                placeholderTextColor={"#8A8F9E"}
              />

              <View style={styles.categSection}>
                <Text style={styles.categText}>Select Category</Text>

                <View style={styles.allCateg}>
                  <Selectcategory
                    taskData={habitData}
                    setTaskData={setHabitData}
                  />
                </View>
              </View>
              <View style={tw`mt-10 mb-5`}>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Write a Description"
                  placeholderTextColor={"#8A8F9E"}
                  onChangeText={(text) => {
                    habitDataHandler("description", text);
                  }}
                />
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
                  backgroundColor: "#FFFFFF",
                  height: 45,
                  width: "100%",
                  marginTop: 30,
                  borderRadius: 7,
                  paddingVertical: 2,
                }}
                onPress={() => {
                  if (habitData.name == "") {
                    Alert.alert("Required*", "Please Enter Habit Name");
                  } else if (habitData.category == "") {
                    Alert.alert("Required*", "Please enter Habit Category");
                  } else {
                    Navigator.navigate("todo", {
                      screen: "createhabit2",
                    });
                  }
                }}
              >
                {isHabitCreating ? (
                  <ActivityIndicator color="white" size={33} />
                ) : (
                  <Text
                    style={[
                      tw`text-lg`,
                      {
                        fontWeight: "700",
                        color: "#0E58C7",
                      },
                    ]}
                  >
                    Next
                  </Text>
                )}
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
                  Navigator.goBack();
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
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
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
    borderBottomWidth: 0.4,
    paddingBottom: 35,
    borderColor: COLORS.borderColor,
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

export default CreateHabitScreen;
