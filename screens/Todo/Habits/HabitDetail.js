import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Text,
  TextInput,
  // Modal,
  Pressable,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { Modal } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import Water from "../../Svgs/TaskCategory/Water";
import { Picker } from "@react-native-picker/picker";
import { Switch } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { useRecoilState } from "recoil";
import {
  allTaskItemsRecoil,
  taskAddedRecoil,
  user,
  userDataRecoil,
} from "../../../utils/reoil-atoms";
const HabitDetail = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [allTasksItems, setAllTasksItems] = useRecoilState(allTaskItemsRecoil);
  const [userDetails, setUserDetails] = useRecoilState(userDataRecoil);
  const [taskAddChange, setTaskAddChange] = useRecoilState(taskAddedRecoil);
  // Calendar Data
  const [todayDate, setTodayDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  // show
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Select");
  const [time, setTime] = useState("Select");
  const [isTaskCreating, setIsTaskCreating] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  //notifications
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const containerStyle = {
    backgroundColor: "#102646",
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hours: " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();

    setText(fDate);
    setTaskData({
      ...taskData,
      date: fDate,
    });
    setTime(fTime);
    console.log(fDate + "\n" + fTime);
    setShow(false);
  };
  const [taskData, setTaskData] = useState({
    name: "",
    category: "",
    date: "",
    isReminder: 0,
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
    priority: "",
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

  const createTaskHandler = () => {
    setIsTaskCreating(1);

    saveUserTask(taskData)
      .then((data) => {
        console.log("Data", data);
        setAllTasksItems([...allTasksItems, data]);
        setIsTaskCreating(0);
        // Navigator.navigate("todo", {
        //   screen: "sucesstask",
        // });
        setTaskAddChange(taskAddChange + 1);
      })
      .catch((err) => {
        setIsTaskCreating(0);
        Alert.alert("Error While Creating");
        console.log(err, "Ereror Hai ");
      });
  };
  return (
    <SafeAreaView style={styles.mainBox}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollBox}>
        <View>
          <Text style={styles.createText}>Habit Details</Text>

          <View style={styles.habitDetailsSection}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Water />
              <View style={{ marginLeft: 15 }}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 24,
                    marginBottom: 10,
                    fontWeight: "700",
                  }}
                >
                  Drink Water
                </Text>
                <Text style={{ color: "#D2DFF2", fontSize: 14 }}>Healthy</Text>
              </View>
            </View>

            <View style={{ marginTop: 33 }}>
              <Text
                style={{ color: "#8EB1E5", fontSize: 14, marginBottom: 10 }}
              >
                Description
              </Text>
              <Text
                style={{ color: "#EDF4FD", fontSize: 14, marginBottom: 25 }}
              >
                Have you continued your drug use despite knowledge of developing
                a persistent or recurring physical or psychological problem
              </Text>
            </View>
            <View
              style={{ borderBottomColor: "#8EB1E5", borderBottomWidth: 2 }}
            ></View>

            <TouchableOpacity style={{ marginTop: 32 }} onPress={showModal}>
              <View>
                <Text
                  style={{ color: "#EDF4FD", fontSize: 16, fontWeight: "700" }}
                >
                  Target
                </Text>
                <Text style={{ color: "#8EB1E5", fontSize: 14, marginTop: 5 }}>
                  Atleast 1 times a day
                </Text>
              </View>
            </TouchableOpacity>
            {/* <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 24, fontWeight: "700" }}
                >
                  Target
                </Text>
                <Icon
                  name="cross"
                  size={26}
                  color="#808495"
                  onPress={hideModal}
                />
              </View>
              <TouchableOpacity style={styles.modalRadioItem}>
                <View style={styles.modalRadioInActive}></View>
                
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 10,
                  }}
                >
                  <Icon2 name="check-circle-o" color="#8EB1E5" size={20} />
                  <Text style={styles.radioModalSelectText}>Yes</Text>
                  <Icon
                    name="circle-with-cross"
                    color="#8EB1E5"
                    size={20}
                    style={{ marginLeft: 10 }}
                  />
                  <Text style={styles.radioModalSelectText}>No</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalRadioItem]}>
                <View style={styles.modalRadioActive}></View>
                <Text style={styles.radioModalSelectText}>By Value</Text>                
              </TouchableOpacity>
              <View style={{ display: "flex",
                    flexDirection: "row",marginLeft: 15 ,marginTop:17}}>
              <Picker
                          selectedValue="At least"
                          dropdownIconColor="white"
                          style={{
                            color: "white",
                            width: 120,
                          }}
                        >
                          <Picker.Item label="At least" value="At least" />
                          <Picker.Item label="Day" value="day" />
                </Picker>
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
              </View>

              <View style={{ display: "flex",
                flexDirection: "row", marginLeft: 15, marginTop: 17
              }}>
                <TextInput
            keyboardType="numeric"
            style={{
              color: "#D2DFF2",
              borderBottomWidth: 1,
              borderColor: "#D2DFF2",
              width: 50,
              marginLeft: 17,
              marginRight:20
            }}
          ></TextInput>
              <Text style={styles.radioModalSelectText}>a day.</Text>
                
              </View>


              <View style={{display: "flex",
                    flexDirection: "row", justifyContent:"space-evenly" , marginTop:50}}>
                <TouchableOpacity style={{alignItems: "center",justifyContent: "center" ,borderColor: "white", borderWidth:1 ,padding:15 , paddingHorizontal:40 , borderRadius:12}}>
                  <Text style={{color:"#FFFFFF" , fontSize:14}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: "center",justifyContent: "center" ,padding:15 , paddingHorizontal:40 , borderRadius:12 , backgroundColor: "#FF9241"}}>
                  <Text style={{color:"#FFFFFF" ,fontSize:14}}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </Modal> */}
            <TouchableOpacity
              style={{ marginTop: 32 }}
              onPress={() => {
                if (taskData.isRepeat) {
                  setModalVisible(true);
                }
              }}
            >
              <View>
                <Text
                  style={{ color: "#EDF4FD", fontSize: 16, fontWeight: "700" }}
                >
                  How Long
                </Text>
                <Text style={{ color: "#8EB1E5", fontSize: 14, marginTop: 5 }}>
                  Everyday
                </Text>
              </View>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
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
                    <Icon
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
                      }}
                    >
                      <View
                        style={
                          taskData.repeatTarget == "EveryDay"
                            ? styles.modalRadioActive
                            : styles.modalRadioInActive
                        }
                      ></View>
                      <Text style={styles.radioModalSelectText}>Everyday</Text>
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
                        selectedValue="week"
                        dropdownIconColor="white"
                        style={{
                          color: "white",
                          width: 120,
                        }}
                      >
                        <Picker.Item label="Week" value="week" />
                        <Picker.Item label="Day" value="day" />
                      </Picker>
                    </View>

                    {/* Repeat */}
                    <View style={styles.modalRadioItem}>
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
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            <View style={styles.otherItem}>
              <View>
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
                    color: "#8EB1E5",
                    fontSize: 14,
                    marginTop: 10,
                    opacity: taskData.isReminder ? 1 : 0.4,
                  }}
                >
                  5:00 pm - Alarm
                </Text>
              </View>
              <View style={styles.switchBox}>
                <Switch
                  value={taskData.isReminder}
                  style={{
                    marginTop: -9,
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

            <TouchableOpacity
              style={{ marginTop: 32 }}
              onPress={() => {
                if (taskData.isRepeat) {
                  setModalVisible(true);
                }
              }}
            >
              <View>
                <Text
                  style={{ color: "#EDF4FD", fontSize: 16, fontWeight: "700" }}
                >
                  Goals
                </Text>
                <Text style={{ color: "#8EB1E5", fontSize: 14, marginTop: 5 }}>
                  60 Days
                </Text>
              </View>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
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
                    <Icon
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
                      }}
                    >
                      <View
                        style={
                          taskData.repeatTarget == "EveryDay"
                            ? styles.modalRadioActive
                            : styles.modalRadioInActive
                        }
                      ></View>
                      <Text style={styles.radioModalSelectText}>Everyday</Text>
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
                        selectedValue="week"
                        dropdownIconColor="white"
                        style={{
                          color: "white",
                          width: 120,
                        }}
                      >
                        <Picker.Item label="Week" value="week" />
                        <Picker.Item label="Day" value="day" />
                      </Picker>
                    </View>

                    {/* Repeat */}
                    <View style={styles.modalRadioItem}>
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
                    </View>
                  </View>
                </View>
              </View>
            </Modal>

            <View style={styles.otherItem}>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "700",
                    opacity: taskData.isReminder ? 1 : 0.4,
                  }}
                >
                  Pending task
                </Text>
                <Text
                  style={{
                    color: "#8EB1E5",
                    fontSize: 14,
                    marginTop: 10,
                    opacity: taskData.isReminder ? 1 : 0.4,
                  }}
                >
                  Show until the task completed
                </Text>
              </View>
              <View style={styles.switchBox}>
                <Switch
                  value={taskData.isReminder}
                  style={{
                    marginTop: -9,
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  habitDetailsSection: {
    backgroundColor: "#102646",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 40,
    paddingHorizontal: 18,
    borderBottomWidth: 1.2,
    paddingBottom: 35,
    borderColor: "#DADADA",
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
  radioModalSelectText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
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
});
export default HabitDetail;
