import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Text,
  TextInput,
  Modal,
  Pressable,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import Selectcategory from "../../../components/Todo/Tasks/SelectCategory";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Switch } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  allTaskItemsRecoil,
  taskAddedRecoil,
  user,
  userDataRecoil,
} from "../../../utils/reoil-atoms";
import Icon2 from "react-native-vector-icons/Entypo";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import storage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-modern-datepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { saveUserTask } from "../../../actions/Todo/Tasks";

const data = ["fg", "dfg"];
const normal = {
  none: 0,
  low: 0,
  normal: 0,
  high: 0,
};
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const AddTaskScreen = () => {
  const Navigator = useNavigation();
  const [allTasksItems, setAllTasksItems] = useRecoilState(allTaskItemsRecoil);
  const [userDetails, setUserDetails] = useRecoilState(userDataRecoil);
  const [taskAddChange, setTaskAddChange] = useRecoilState(taskAddedRecoil);
  const ResetTaskData = useResetRecoilState(taskAddedRecoil);
  // Calendar Data
  const [todayDate, setTodayDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [timeDate, setTimeDate] = useState(new Date());
  const [isTimeSelect, setIsTimeSelect] = useState(false);
  const [mode, setMode] = useState("date");
  // show
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Select");
  const [time, setTime] = useState("Select");
  const [isTaskCreating, setIsTaskCreating] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  //notifications
  const [notification, setNotification] = useState(false);
  const [repeatVal, setRepeatVal] = useState("Everyday");
  const [specificDay, setSpecificDay] = useState("Week");
  const notificationListener = useRef();
  const responseListener = useRef();

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    setText(fDate);
    setTaskData({
      ...taskData,
      date: fDate,
    });
  };

  // Time Picker Function
  const timeSelect = (event, selectedDate) => {
    setIsTimeSelect(false);

    const currentDate = selectedDate || date;
    setTimeDate(currentDate);
    let tempDate = new Date(currentDate);
    setTaskData({
      ...taskData,
      reminderTime: {
        hours: tempDate.getHours(),
        minutes: tempDate.getMinutes(),
      },
    });
    let fTime =
      tempDate.getHours() +
      ":" +
      (tempDate.getMinutes() > 9
        ? tempDate.getMinutes()
        : "0" + tempDate.getMinutes());
    setTime(fTime);
    console.log(taskData);
  };

  const [taskData, setTaskData] = useState({
    name: "",
    category: "",
    date: "",
    isReminder: 1,
    reminderTime: {
      hours: 0,
      minutes: 0,
    },
    isRepeat: 1,
    repeatTarget: "EveryDay",
    repeatWeek: {
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
    },
    isShowPendingTask: true,
    todayDoneDate: "2022-4-21",
    priority: "low",
    user: userDetails?._id,
    type: "task",
  });

  const taskDataHandler = (name, value) => {
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const weekHandler = () => {};

  // Priority Data
  const [selectedDate, setSelectedDate] = useState("");
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
      if (Constants.isDevice) {
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
      } else {
        alert("Must use physical device for Push Notifications");
      }

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

        console.log("Notification Added hai Bhai ");
      });
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Response Added ");
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // Notification Create Handler
  const createDailyNotification = async () => {
    // await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: taskData.name,
        body: `It's Time to get your  ${taskData.name} `,
        data: { desc: "This is Description of this task data" },
      },
      trigger: {
        // seconds: 1,
        hour: taskData.reminderTime.hours,
        minute: taskData.reminderTime.minutes,
        repeats: true,
      },
    }).then(() => {
      // console.log("Data hai :-  ",data)
      setIsTaskCreating(0);
      setTaskData({
        name: "",
        category: "",
        date: "",
        isReminder: 1,
        reminderTime: {
          hours: 0,
          minutes: 0,
        },
        isRepeat: 1,
        repeatTarget: "EveryDay",
        repeatWeek: {
          Sunday: 0,
          Monday: 0,
          Tuesday: 0,
          Wednesday: 0,
          Thursday: 0,
          Friday: 0,
          Saturday: 0,
        },
        isShowPendingTask: true,
        todayDoneDate: "2022-4-21",
        priority: "low",
        user: userDetails?._id,
        type: "Task",
      });

      Navigator.navigate("todo", {
        screen: "sucesstask",
        params: {
          name: taskData.name,
          category: taskData.category,
          date: taskData.date,
          priority: taskData.priority,
          reminderTime: taskData.reminderTime,
          repeatVal,
        },
      });
    });
  };

  const weekNotificationSet = async (weekNumber) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: taskData.name,
        body: `It's Time to get your  ${taskData.name} `,
        data: { desc: "This is Description of this task data" },
      },
      trigger: {
        // seconds: 1,
        weekday: weekNumber,
        hour: taskData.reminderTime.hours,
        minute: taskData.reminderTime.minutes,
        repeats: true,
      },
    }).then(() => {
      console.log("Notification Create Successfully Weekly");
    });
  };
  // Weekly Notification Handler
  const createWeeklyNotification = async () => {
    if (taskData.repeatWeek.Sunday == 1) weekNotificationSet(1);
    if (taskData.repeatWeek.Monday == 1) weekNotificationSet(2);
    if ((taskData.repeatWeek.Tuesday = 1)) weekNotificationSet(3);
    if (taskData.repeatWeek.Wednesday == 1) weekNotificationSet(4);
    if (taskData.repeatWeek.Thursday == 1) weekNotificationSet(5);
    if (taskData.repeatWeek.Friday == 1) weekNotificationSet(6);
    if (taskData.repeatWeek.Saturday == 1) weekNotificationSet(7);

    console.log("Notification Create Successfully ");
    setIsTaskCreating(0);
    setTaskData({
      name: "",
      category: "",
      date: "",
      isReminder: 1,
      reminderTime: {
        hours: 0,
        minutes: 0,
      },
      isRepeat: 1,
      repeatTarget: "EveryDay",
      repeatWeek: {
        Sunday: 0,
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0,
        Saturday: 0,
      },
      isShowPendingTask: true,
      todayDoneDate: "2022-4-21",
      priority: "low",
      user: userDetails?._id,
      type: "Task",
    });

    Navigator.navigate("todo", {
      screen: "sucesstask",
      params: {
        name: taskData.name,
        category: taskData.category,
        date: taskData.date,
        priority: taskData.priority,
      },
    });
  };

  // Create Task Handler
  const createTaskHandler = () => {
    setIsTaskCreating(1);

    // Check is All Task Items is Greater than 5 or not 
    if ( allTasksItems.length >= 5 ) {
      alert("You can't add more than 5 tasks");
      setIsTaskCreating(0);
      return;
    }

    saveUserTask(taskData)
      .then((data) => {
        if (taskData.isReminder == 1) {
          setAllTasksItems([...allTasksItems, data]);

          setTaskAddChange(taskAddChange + 1);
          

            createDailyNotification();
          
        } else {
          setAllTasksItems([...allTasksItems, data]);
          setTaskAddChange(taskAddChange + 1);
          setIsTaskCreating(0);
          setTaskData({
            name: "",
            category: "",
            date: "",
            isReminder: 1,
            reminderTime: {
              hours: 0,
              minutes: 0,
            },
            isRepeat: 1,
            repeatTarget: "EveryDay",
            repeatWeek: {
              Sunday: 0,
              Monday: 0,
              Tuesday: 0,
              Wednesday: 0,
              Thursday: 0,
              Friday: 0,
              Saturday: 0,
            },
            isShowPendingTask: true,
            todayDoneDate: "2022-4-21",
            priority: "low",
            user: userDetails?._id,
            type: "Task",
          });

          Navigator.navigate("todo", {
            screen: "sucesstask",
            params: {
              name: taskData.name,
              category: taskData.category,
              date: taskData.date,
              priority: taskData.priority,
              reminderTime: taskData.reminderTime,
              repeatVal,
            },
          });
        }
      })
      .catch((err) => {
        setIsTaskCreating(0);
        Alert.alert("Required", "Something went wrong");
      });
  };

  const weekRepeatTextHandler = (isAdd, index) => {
    let res = "";
    if (isAdd) {
      if (taskData.repeatWeek.Sunday || index == 1) {
        res += "S";
      }
      if (taskData.repeatWeek.Monday || index == 2) {
        res += " M";
      }
      if (taskData.repeatWeek.Tuesday || index == 3) {
        res += " T";
      }
      if (taskData.repeatWeek.Wednesday || index == 4) {
        res += " W";
      }
      if (taskData.repeatWeek.Thursday || index == 5) {
        res += " T";
      }
      if (taskData.repeatWeek.Friday || index == 6) {
        res += " F";
      }
      if (taskData.repeatWeek.Saturday || index == 7) {
        res += " S";
      }
    } else {
      if (taskData.repeatWeek.Sunday && index != 1) {
        res += "S";
      }
      if (taskData.repeatWeek.Monday && index != 2) {
        res += " M";
      }
      if (taskData.repeatWeek.Tuesday && index != 3) {
        res += " T";
      }
      if (taskData.repeatWeek.Wednesday && index != 4) {
        res += " W";
      }
      if (taskData.repeatWeek.Thursday && index != 5) {
        res += " T";
      }
      if (taskData.repeatWeek.Friday && index != 6) {
        res += " F";
      }
      if (taskData.repeatWeek.Saturday && index != 7) {
        res += " S";
      }
    }

    setRepeatVal(res);
  };

  return (
    <View style={styles.mainBox}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollBox}>
        <View>
          <Text style={styles.createText}>Create New Task </Text>

          <View style={styles.addTaskSection}>
            <TextInput
              value={taskData.name}
              onChangeText={(text) => {
                taskDataHandler("name", text);
              }}
              style={styles.inputBox}
              placeholder="Enter Task Name"
              placeholderTextColor={"#8A8F9E"}
            />

            <View style={styles.categSection}>
              <Text style={styles.categText}>Select Category</Text>

              <View style={styles.allCateg}>
                <Selectcategory taskData={taskData} setTaskData={setTaskData} />
              </View>
            </View>

            <View styles={styles.otherOptionBox}>
              <View style={styles.otherItem}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  Date
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setShow(true);
                  }}
                  style={styles.dateSelect}
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
                </TouchableOpacity>
                {show && (
                  <RNDateTimePicker
                    minimumDate={todayDate}
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={false}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>

              {/* Remindex Box */}
              <View style={styles.otherItem}>
                <TouchableOpacity
                onPress={() => {
                  if (taskData.isReminder == 1) {
                    setIsTimeSelect(true);
                    
                  }
                }}
                  
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "700",
                      opacity: taskData.isReminder ? 1 : 0.4,
                    }}
                  >
                    Set reminder
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      marginTop: 10,
                      opacity: taskData.isReminder ? 1 : 0.4,
                    }}
                  >
                    {time} - Alarm
                  </Text>
                </TouchableOpacity>
                <View style={styles.switchBox}>
                  <Switch
                    value={taskData.isReminder ? true : false}
                    style={{
                      marginTop: -10,
                      marginRight: -10,
                    }}
                    onChange={() => {
                      setTaskData({
                        ...taskData,
                        isReminder: !taskData.isReminder,
                      });
                    }}
                    thumbColor="#102646"
                    color="white"
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
                />
              )}

              {/* Repeat Box */}
              <View style={styles.otherItem}>
                <TouchableOpacity
                  onPress={() => {
                    if (taskData.isRepeat) {
                      setModalVisible(true);
                    }
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "700",
                      opacity: taskData.isRepeat ? 1 : 0.4,
                    }}
                  >
                    Repeat
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      marginTop: 10,
                      opacity: taskData.isRepeat ? 1 : 0.4,
                    }}
                  >
                    {repeatVal}
                  </Text>
                </TouchableOpacity>
                <View style={styles.switchBox}>
                  <Switch
                    value={taskData.isRepeat ? true : false}
                    // value={taskData.isRepeat}
                    thumbColor="#102646"
                    color="white"
                    style={{
                      marginTop: -10,
                      marginRight: -10,
                    }}
                    onChange={() => {
                      setTaskData({
                        ...taskData,
                        isRepeat: !taskData.isRepeat,
                      });
                    }}
                  />
                </View>
              </View>

              {/* Select Repeat Target Modal  */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.modalView}>
                  <View style={styles.modalData}>
                    {/* Modal Titlte */}
                    <View style={styles.modalTitle}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 24,
                          fontWeight: "700",
                        }}
                      >
                        Repeat Target
                      </Text>
                      <Icon2
                        name="cross"
                        size={26}
                        color="#808495"
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      />
                    </View>

                    <View>
                      {/* everyday */}
                      <TouchableOpacity
                        style={styles.modalRadioItem}
                        onPress={() => {
                          setTaskData({
                            ...taskData,
                            repeatTarget: "EveryDay",
                          });
                          setRepeatVal("EveryDay");
                        }}
                      >
                        <View
                          style={
                            taskData.repeatTarget == "EveryDay"
                              ? styles.modalRadioActive
                              : styles.modalRadioInActive
                          }
                        ></View>
                        <Text style={styles.radioModalSelectText}>
                          Everyday
                        </Text>
                      </TouchableOpacity>

                      {/* Week  */}
                      <View>
                        <TouchableOpacity
                          style={[
                            tw`flex-row items-center `,
                            styles.modalRadioItem,
                          ]}
                          onPress={() => {
                            setTaskData({
                              ...taskData,
                              repeatTarget: "Week",
                            });
                            weekRepeatTextHandler(1, 0);
                          }}
                        >
                          <View
                            style={
                              taskData.repeatTarget == "Week"
                                ? styles.modalRadioActive
                                : styles.modalRadioInActive
                            }
                          ></View>
                          <Text style={styles.radioModalSelectText}>Week</Text>
                        </TouchableOpacity>
                        {taskData.repeatTarget == "Week" ? (
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
                                taskData.repeatWeek.Sunday
                                  ? styles.selectedWeekBox
                                  : styles.weekBox
                              }
                              onPress={() => {
                                weekRepeatTextHandler(
                                  !taskData.repeatWeek.Sunday,
                                  1
                                );
                                setTaskData({
                                  ...taskData,
                                  repeatWeek: {
                                    ...taskData.repeatWeek,
                                    Sunday: !taskData.repeatWeek.Sunday,
                                  },
                                });
                              }}
                            >
                              <Text style={{ color: "#fff" }}>S</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={
                                taskData.repeatWeek.Monday
                                  ? styles.selectedWeekBox
                                  : styles.weekBox
                              }
                              onPress={() => {
                                weekRepeatTextHandler(
                                  !taskData.repeatWeek.Monday,
                                  2
                                );
                                setTaskData({
                                  ...taskData,
                                  repeatWeek: {
                                    ...taskData.repeatWeek,
                                    Monday: !taskData.repeatWeek.Monday,
                                  },
                                });
                              }}
                            >
                              <Text style={{ color: "#fff" }}>M</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={
                                taskData.repeatWeek.Tuesday
                                  ? styles.selectedWeekBox
                                  : styles.weekBox
                              }
                              onPress={() => {
                                weekRepeatTextHandler(
                                  !taskData.repeatWeek.Tuesday,
                                  3
                                );
                                setTaskData({
                                  ...taskData,
                                  repeatWeek: {
                                    ...taskData.repeatWeek,
                                    Tuesday: !taskData.repeatWeek.Tuesday,
                                  },
                                });
                              }}
                            >
                              <Text style={{ color: "#fff" }}>T</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={
                                taskData.repeatWeek.Wednesday
                                  ? styles.selectedWeekBox
                                  : styles.weekBox
                              }
                              onPress={() => {
                                weekRepeatTextHandler(
                                  !taskData.repeatWeek.Wednesday,
                                  4
                                );
                                setTaskData({
                                  ...taskData,
                                  repeatWeek: {
                                    ...taskData.repeatWeek,
                                    Wednesday: !taskData.repeatWeek.Wednesday,
                                  },
                                });
                              }}
                            >
                              <Text style={{ color: "#fff" }}>W</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={
                                taskData.repeatWeek.Thursday
                                  ? styles.selectedWeekBox
                                  : styles.weekBox
                              }
                              onPress={() => {
                                weekRepeatTextHandler(
                                  !taskData.repeatWeek.Thursday,
                                  5
                                );
                                setTaskData({
                                  ...taskData,
                                  repeatWeek: {
                                    ...taskData.repeatWeek,
                                    Thursday: !taskData.repeatWeek.Thursday,
                                  },
                                });
                              }}
                            >
                              <Text style={{ color: "#fff" }}>T</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={
                                taskData.repeatWeek.Friday
                                  ? styles.selectedWeekBox
                                  : styles.weekBox
                              }
                              onPress={() => {
                                weekRepeatTextHandler(
                                  !taskData.repeatWeek.Friday,
                                  6
                                );
                                setTaskData({
                                  ...taskData,
                                  repeatWeek: {
                                    ...taskData.repeatWeek,
                                    Friday: !taskData.repeatWeek.Friday,
                                  },
                                });
                              }}
                            >
                              <Text style={{ color: "#fff" }}>F</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={
                                taskData.repeatWeek.Saturday
                                  ? styles.selectedWeekBox
                                  : styles.weekBox
                              }
                              onPress={() => {
                                weekRepeatTextHandler(
                                  !taskData.repeatWeek.Saturday,
                                  7
                                );
                                setTaskData({
                                  ...taskData,
                                  repeatWeek: {
                                    ...taskData.repeatWeek,
                                    Saturday: !taskData.repeatWeek.Saturday,
                                  },
                                });
                              }}
                            >
                              <Text style={{ color: "#fff" }}>S</Text>
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
                            setTaskData({
                              ...taskData,
                              repeatTarget: "Specific",
                            });
                            setRepeatVal("Specific")
                          }}
                        >
                          <View
                            style={
                              taskData.repeatTarget == "Specific"
                                ? styles.modalRadioActive
                                : styles.modalRadioInActive
                            }
                          ></View>
                          <Text style={styles.radioModalSelectText}>
                            Specific
                          </Text>
                        </TouchableOpacity>
                        <TextInput
                          keyboardType="numeric"
                          style={{
                            color: "#D2DFF2",
                            borderBottomWidth: 1,
                            borderColor: "#D2DFF2",
                            width: 50,
                            marginLeft: 30,
                          }}
                        ></TextInput>
                        <Picker
                        selectedValue={specificDay}
                          dropdownIconColor="white"
                          style={{
                            color: "white",
                            width: 120,
                          }}
                          onValueChange={(itemValue, itemIndex) =>
                            setSpecificDay(itemValue)
                          }
                        >
                          <Picker.Item label="Week" value="week" />
                          <Picker.Item label="Day" value="day" />
                        </Picker>
                      </View>

                      {/* Repeat */}
                      {/* <View style={styles.modalRadioItem}>
                        <TouchableOpacity
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          onPress={() => {
                            setTaskData({
                              ...taskData,
                              repeatTarget: "Repeat",
                            });
                          }}
                        >
                          <View
                            style={
                              taskData.repeatTarget == "Repeat"
                                ? styles.modalRadioActive
                                : styles.modalRadioInActive
                            }
                          ></View>
                          <Text style={styles.radioModalSelectText}>
                            Repeat Every
                          </Text>
                        </TouchableOpacity>
                        <TextInput
                          keyboardType="numeric"
                          style={{
                            color: "#D2DFF2",
                            borderBottomWidth: 1,
                            borderColor: "#D2DFF2",
                            width: 50,
                            marginLeft: 20,
                          }}
                        ></TextInput>
                        <Text
                          style={{
                            color: "white",
                            width: 120,
                            fontSize: 16,
                            marginLeft: 10,
                          }}
                        >
                          Day
                        </Text>
                      </View> */}
                    </View>
                  </View>
                </View>
              </Modal>

              {/* Pending Task */}
              <View style={styles.otherItem}>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "700",
                      opacity: taskData.isShowPendingTask ? 1 : 0.4,
                    }}
                  >
                    Pending task
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      marginTop: 10,
                      opacity: taskData.isShowPendingTask ? 1 : 0.4,
                    }}
                  >
                    Show until the task completed
                  </Text>
                </View>
                <View style={styles.switchBox}>
                  <Switch
                    thumbColor="#102646"
                    color="white"
                    value={taskData.isShowPendingTask}
                    style={{
                      marginTop: -10,
                      marginRight: -10,
                    }}
                    onChange={() => {
                      setTaskData({
                        ...taskData,
                        isShowPendingTask: !taskData.isShowPendingTask,
                      });
                    }}
                  />
                </View>
              </View>

              {/* Priorit Task */}
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
                      style={styles.radioItem}
                      onPress={() => {
                        setPriority("none");
                        taskDataHandler("priority", "none");
                      }}
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
                      style={styles.radioItem}
                      onPress={() => {
                        setPriority("low");
                        taskDataHandler("priority", "low");
                      }}
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
                      style={styles.radioItem}
                      onPress={() => {
                        setPriority("normal");
                        taskDataHandler("priority", "normal");
                      }}
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
                      style={styles.radioItem}
                      onPress={() => {
                        setPriority("high");
                        taskDataHandler("priority", "high");
                      }}
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
              paddingBottom: 50,
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
                if (taskData.name == "") {
                  Alert.alert("Required", "Please enter task name");
                } else if (taskData.category == "") {
                  Alert.alert("Required", "Please select category");
                } else if (taskData.date == "") {
                  Alert.alert("Required", "Please select date");
                } else if (time == "Select") {
                  Alert.alert("Required", "Please select time");
                } else {
                  createTaskHandler();
                }
              }}
            >
              {isTaskCreating ? (
                <ActivityIndicator color="white" size={33} />
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
              onPress={() => {
                ResetTaskData();
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
    width: 12,
    height: 12,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "white",
  },
  radioBtnInActive: {
    width: 12,
    height: 12,
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
  weekBox: {
    borderWidth: 2,
    borderColor: "#1E64CC",
    marginRight: 10,
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedWeekBox: {
    borderWidth: 2,
    borderColor: "#1E64CC",
    backgroundColor: "#1E64CC",
    marginRight: 10,
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "#53555985",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalData: {
    backgroundColor: "#102646",
    marginHorizontal: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: "100%",
    borderRadius: 20,
  },
  modalTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  radioModalSelectText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  modalRadioInActive: {
    width: 15,
    height: 15,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#1E64CC",
  },
  modalRadioActive: {
    width: 15,
    height: 15,
    borderRadius: 20,
    borderWidth: 3.5,
    borderColor: "#1E64CC",
    backgroundColor: "white",
  },
  modalRadioItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    flexWrap: "wrap",
  },
});

export default AddTaskScreen;

// Services , partnership  , About Us  , Contact Us ,  Footer ,
