import React, { useEffect, useState, useRef } from "react";
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
  Modal,
  Pressable,
  Button,
  Alert,
  ActivityIndicator
} from "react-native";
import Selectcategory from "../../../components/Todo/Tasks/SelectCategory";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { Switch } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
// import DatePicker from 'react-native-modern-datepicker';
import DatePicker from "react-native-datepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "expo-modules-core";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import storage from "@react-native-async-storage/async-storage";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  allHabitItemsRecoil,
  habitCreateRecoil,
  habitStoreRecoil,
  taskAddedRecoil,
  userDataRecoil,
  
} from "../../../utils/reoil-atoms";
import { createHabit } from "../../../actions/Todo/Habit";
import { getDaysBetweenDates } from "../../../utils/utils";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
const data = ["fg", "dfg"];
const normal = {
  none: 0,
  low: 0,
  normal: 0,
  high: 0,
};
const CreateHabitScreen3 = () => {
  // Start Goal Values
  const [isStartDateShow, setIsStartDateShow] = useState(false);
  const [isEndDateShow, setIsEndDateShow] = useState(false);
  // const [show, isShow] = useState(false);
  const [startDay, setStartDay] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });
  const [endDay, setEndDay] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });
  const [startValue, setStartValue] = useState(new Date());
  const [endValue, setEndValue] = useState(new Date());
  const [timeDate, setTimeDate] = useState(new Date());
  const [text, setText] = useState("Select");
  const [text2, setText2] = useState("Select");
  const [numOfDays, setNumOfDays] = useState(0);
  const [isTimeSelect, setIsTimeSelect] = useState(false);

  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [time, setTime] = useState("Select");
  const [notification, setNotification] = useState(false);
  const [habitData, setHabitData] = useRecoilState(habitCreateRecoil);
  const ResetHabitData = useResetRecoilState(habitCreateRecoil);
  const [taskAddChange, setTaskAddChange] = useRecoilState(taskAddedRecoil);
  const [allHabitItems, setAllHabitItems] = useRecoilState(allHabitItemsRecoil);
  const [allStoreHabit, setAllStoreHabit] = useRecoilState(habitStoreRecoil);
  const [userDetails, setUserDetails] = useRecoilState(userDataRecoil);
  const [isHabitCreating, setIsHabitCreating] = useState(0);
  const notificationListener = useRef();
  const responseListener = useRef();

  // Start Goal Time Set Function
  const setStartGoalTimeHandler = (event, selectedDate) => {
    setIsStartDateShow(false);
    const currentDate = selectedDate || startValue;

    let tempDate = new Date(currentDate);
    setStartDay({
      year: tempDate.getFullYear(),
      month: tempDate.getMonth() + 1,
      day: tempDate.getDate(),
    });
    setStartValue(tempDate);
    setText(
      `${tempDate.getDate() < 10 ? 0 : ""}${tempDate.getDate()}-${
        tempDate.getMonth() + 1
      }-${tempDate.getFullYear()}`
    );
    setHabitData({
      ...habitData,
      startTime: `${startValue}`,
    });
    if (text != "Select" && text2 != "Select") {
      setNumOfDays(getDaysBetweenDates(tempDate, endValue));
    }
  };

  // End Goal Day Set Fucntion
  const setEndGoalDayHandler = (event, selectedDate) => {
    setIsEndDateShow(false);
    const currentDate = selectedDate || endValue;

    let tempDate = new Date(currentDate);
    setEndValue(tempDate);

    setEndDay({
      year: tempDate.getFullYear(),
      month: tempDate.getMonth() + 1,
      day: tempDate.getDate(),
    });
    setText2(
      `${tempDate.getDate() < 10 ? 0 : ""}${tempDate.getDate()}-${
        tempDate.getMonth() + 1
      }-${tempDate.getFullYear()}`
    );
    setHabitData({
      ...habitData,
      endTime: `${tempDate}`,
    });

    setNumOfDays(getDaysBetweenDates(startValue, tempDate));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const [modalVisible, setModalVisible] = useState(false);
  // const [date, setDate] = useState('09-10-2020');

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
  useEffect(() => {
    const getPermission = async () => {
      // if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Enable push notifications to use the app!");
        await storage.setItem("expopushtoken", "");
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      await storage.setItem("expopushtoken", token);
      // } else {
      //   alert('Must use physical device for Push Notifications');
      // }

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }
    };

    getPermission();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
        Alert.alert("Notification ", notification);
        console.log("Notifcation  received ", notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        Alert.alert(
          "Notification addNotificationResponseReceivedListener ",
          response
        );
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  // Time Picker Function
  const timeSelect = (event, selectedDate) => {
    const currentDate = selectedDate || timeDate;
    setIsTimeSelect(false);
    setTimeDate(currentDate);
    let tempDate = new Date(currentDate);
    setHabitData({
      ...habitData,
      reminderTime: {
        hours: tempDate.getHours(),
        minutes: tempDate.getMinutes(),
      },
    });
    let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
    setTime(fTime);
  };

  // Notification Create Handler
  const createDailyNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: habitData.name,
        body: `It's Time to get your  ${habitData.name} `,
        data: { desc: habitData.description, endTime: habitData.endTime },
      },
      trigger: {
        // seconds: 1,
        hour: habitData.reminderTime.hours,
        minute: habitData.reminderTime.minutes,
        repeats: true,
      },
    }).then(() => {
      // console.log("Data hai :-  ",data)
      ResetHabitData();

      setIsHabitCreating(0);

      Navigator.navigate("todo", {
        screen: "successhabit",
        params: {
          name: habitData.name,
          category: habitData.category,
          startTime: habitData.startTime,
          priority: habitData.priority,
          reminderTime: habitData.reminderTime,
          reminderType: habitData.reminderType,
          type: habitData.target,
          repeatWeek: habitData.repeatWeek,
          specific: habitData.specific,
        },
      });
    });
  };

  const weekNotificationSet = async (weekNumber) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: habitData.name,
        body: `It's Time to get your  ${habitData.name} `,
        data: { desc: habitData.description, endTime: habitData.endTime },
      },
      trigger: {
        // seconds: 1,
        weekday: weekNumber,
        hour: habitData.reminderTime.hours,
        minute: habitData.reminderTime.minutes,
        repeats: true,
      },
    }).then(() => {
      console.log("Notification Create Successfully Weekly");
    });
  };

  // Weekly Notification Handler
  const createWeeklyNotification = async () => {
    if (habitData.repeatWeek.Sunday == 1) weekNotificationSet(1);
    if (habitData.repeatWeek.Monday == 1) weekNotificationSet(2);
    if ((habitData.repeatWeek.Tuesday = 1)) weekNotificationSet(3);
    if (habitData.repeatWeek.Wednesday == 1) weekNotificationSet(4);
    if (habitData.repeatWeek.Thursday == 1) weekNotificationSet(5);
    if (habitData.repeatWeek.Friday == 1) weekNotificationSet(6);
    if (habitData.repeatWeek.Saturday == 1) weekNotificationSet(7);

    console.log("Notification Create Successfully ");
    setIsHabitCreating(0);

    Navigator.navigate("todo", {
      screen: "successhabit",
      params: {
        name: habitData.name,
        category: habitData.category,
        startTime: habitData.startTime,
        priority: habitData.priority,
        reminderTime: habitData.reminderTime,
        reminderType: habitData.reminderType,
        type: habitData.target,
        specific: habitData.specific,
      },
    });
  };

  // Create Habit Handler
  const createHabitHandler = () => {
    setIsHabitCreating(1);
    // Check is all Habit Items is More than 5 or not 
    if ( allStoreHabit.length >= 5) {
      setIsHabitCreating(0);
      Alert.alert("You can't create more than 5 habits");
      return;
    }
    console.log(userDetails._id);
    setHabitData({
      ...habitData,
      user: userDetails._id,
    });
    createHabit(habitData)
      .then((data) => {
        // setAllTasksItems([...allTasksItems, data]);

        if (habitData.isReminder) {
          setTaskAddChange(taskAddChange + 1);
          setAllHabitItems([...allHabitItems, data]);
          createDailyNotification();
        } else {
          setTaskAddChange(taskAddChange + 1);
          setAllHabitItems([...allHabitItems, data]);
          ResetHabitData();

          setIsHabitCreating(0);

          Navigator.navigate("todo", {
            screen: "successhabit",
            params: {
              name: habitData.name,
              category: habitData.category,
              startTime: habitData.startTime,
              priority: habitData.priority,
              reminderTime: habitData.reminderTime,
              reminderType: habitData.reminderType,
              type: habitData.target,
              repeatWeek: habitData.repeatWeek,
              specific: habitData.specific,
            },
          });
        }
      })
      .catch((err) => {
        setIsHabitCreating(0);
        Alert.alert("Required*", "Error While Creating");
      });

    // console.log(habitData);
    // setAllTasksItems([...allTasksItems, habitData]);
    // console.log(allTasksItems);
    // Navigator.navigate("todo", {
    //   screen: "sucesstask",
    // });
  };

  return (
    <View style={styles.mainBox}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollBox}>
        <View>
          <Text style={styles.createText}>Create New Habit</Text>

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

                <Pressable
                  style={styles.dateSelect}
                  onPress={() => {
                    setIsStartDateShow(true);
                  }}
                >
                  <Icon name="calendar" color="white" size={18} />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "white",
                      marginLeft: 5,
                    }}
                  >
                    {text}
                  </Text>
                </Pressable>
              </View>

              {/* Start Goal Calender */}
              {isStartDateShow && (
                <RNDateTimePicker
                  testID="dateTimePicker"
                  value={startValue}
                  mode="date"
                  minimumDate={new Date()}
                  is24Hour={false}
                  display="default"
                  onChange={setStartGoalTimeHandler}
                />
              )}

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
                  <Text style={{ color: "white", marginTop: 5 }}>
                    {text != "Select" ? numOfDays : "0"} Days
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.dateSelect}
                  onPress={() => setIsEndDateShow(true)}
                >
                  <Icon name="calendar" color="white" size={18} />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "white",
                      marginLeft: 5,
                    }}
                  >
                    {text2}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Start Goal Calender */}
              {isEndDateShow && (
                <RNDateTimePicker
                  testID="dateTimePicker"
                  value={endValue}
                  mode="date"
                  minimumDate={new Date()}
                  is24Hour={false}
                  display="default"
                  onChange={setEndGoalDayHandler}
                />
              )}

              {/* Remindex Box */}
              <View style={styles.otherItem}>
                {setShow && (
                  <TouchableOpacity
                    onPress={() => {
                      if (habitData.isReminder) {
                      setIsTimeSelect(true);
                      }
                    }}
                    onChange={showMode}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: "700",
                        opacity: habitData.isReminder ? 1 : 0.5,
                      }}
                    >
                      Set reminder
                    </Text>
                    <View>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 14,
                          marginTop: 10,
                          opacity: habitData.isReminder ? 1 : 0.5,
                        }}
                      >
                        {time} - Alarm
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                <View style={styles.switchBox}>
                  <Switch
                    value={habitData.isReminder ? true : false}
                    thumbColor="#102646"
                    color="white"
                    onChange={() => {
                      setHabitData({
                        ...habitData,
                        isReminder: !habitData.isReminder,
                      });
                    }}
                    style={{
                      marginTop: -10,
                      marginRight: -10,
                    }}
                  />
                </View>
              </View>
              {isTimeSelect && (
                <RNDateTimePicker
                  testID="dateTimePicker2"
                  value={timeDate}
                  mode="time"
                  is24Hour={false}
                  display="default"
                  onChange={timeSelect}
                  timeZoneOffsetInSeconds={3600}
                  
                />
              )}

              {/* Pending Task */}
              <View style={styles.otherItem}>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "700",
                      opacity: habitData.isShowPendingTask ? 1 : 0.4,
                    }}
                  >
                    Pending task
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      marginTop: 10,
                      opacity: habitData.isShowPendingTask ? 1 : 0.4,
                    }}
                  >
                    Show until the task completed
                  </Text>
                </View>
                <View style={styles.switchBox}>
                  <Switch
                    value={habitData.isShowPendingTask ? true : false}
                    thumbColor="#102646"
                    color="white"
                    onChange={() => {
                      setHabitData({
                        ...habitData,
                        isShowPendingTask: !habitData.isShowPendingTask,
                      });
                    }}
                    style={{
                      marginTop: -10,
                      marginRight: -10,
                    }}
                  />
                </View>
              </View>

              {/* Priority Select */}
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
                    <TouchableOpacity
                      onPress={() => {
                        setPriority("none");
                        setHabitData({
                          ...habitData,
                          priority: "none",
                        });
                      }}
                      style={styles.radioItem}
                    >
                      <View>
                        <View
                          style={
                            statePriority.none
                              ? styles.radioBtnInActive
                              : styles.radioBtnActive
                          }
                        ></View>
                      </View>
                      <Text style={styles.radioText}>None</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setPriority("low");
                        setHabitData({
                          ...habitData,
                          priority: "low",
                        });
                      }}
                      style={styles.radioItem}
                    >
                      <View>
                        <View
                          style={
                            statePriority.low
                              ? styles.radioBtnInActive
                              : styles.radioBtnActive
                          }
                        ></View>
                      </View>
                      <Text style={styles.radioText}>Low</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setPriority("normal");
                        setHabitData({
                          ...habitData,
                          priority: "normal",
                        });
                      }}
                      style={styles.radioItem}
                    >
                      <View>
                        <View
                          style={
                            statePriority.normal
                              ? styles.radioBtnInActive
                              : styles.radioBtnActive
                          }
                        ></View>
                      </View>
                      <Text style={styles.radioText}>Normal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setPriority("high");
                        setHabitData({
                          ...habitData,
                          priority: "high",
                        });
                      }}
                      style={styles.radioItem}
                    >
                      <View>
                        <View
                          style={
                            statePriority.high
                              ? styles.radioBtnInActive
                              : styles.radioBtnActive
                          }
                        ></View>
                      </View>
                      <Text style={styles.radioText}>High</Text>
                    </TouchableOpacity>
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
              paddingBottom: Dimensions.get("screen").height / 8,
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
                if(isHabitCreating) return;
                if (text == "Select") {
                  Alert.alert("Required*", "Select Start Goal");
                } else if (text2 == "Select") {
                  Alert.alert("Required*", "Select End Goal");
                } else if (habitData.isReminder && time == "Select") {
                  Alert.alert("Required*", "Select Reminder Time ");
                } else {
                  createHabitHandler();
                }
              }}
            >
              {isHabitCreating ? (
                <View>
                 <ActivityIndicator size={33} color="#fff" />
                </View>
              ) : (
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
              onPress={() => Navigator.goBack(3)}
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

        <View style={{}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 22,
              }}
            >
              {/* <DatePicker         
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        /> */}
            </View>
          </Modal>
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
    height: 30,
    width: 45,
    // paddingVertical:-10
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

export default CreateHabitScreen3;
