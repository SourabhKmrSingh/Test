import React, { useState } from "react";
import {
  View,
  StyleSheet,
  elevation,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Cross from "react-native-vector-icons/Entypo";
import COLORS from "../../../constants/color";
import Svg, { Path } from "react-native-svg";
import tw from "tailwind-react-native-classnames";
import { compareDateByToday, getFormattedDate } from "../../../utils/utils";
import {
  deleteTask,
  updateTaskTodayDoneDate,
} from "../../../actions/Todo/Tasks";
import { deleteHabitById, updateHabitTodayDoneDate } from "../../../actions/Todo/Habit";
import { Alert } from "react-native";
import { taskAddedRecoil } from "../../../utils/reoil-atoms";
import { useRecoilState } from "recoil";

const PendingRemind = ({ isSober, name, data, updateTodoItemsHandler }) => {
  console.log(data);
  const [isLoading, setIsLoading] = useState(0);
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isReload, setIsReload] = useRecoilState(taskAddedRecoil);
  const [isDone, setIsDone] = useState(0);
  const iDidHandler = () => {
    setIsLoading(1);
    let newDay = new Date();
    var today =
      newDay.getFullYear() +
      "-" +
      (newDay.getMonth() + 1) +
      "-" +
      newDay.getDate();

    const body = {
      todayDoneDate: today,
      completedDays: data.completedDays + 1,
    };

    if (data.type == "Habit") {
      updateHabitTodayDoneDate(body, data._id)
        .then((res) => {
          updateTodoItemsHandler();
          setIsLoading(0);
          setIsDone(1);
        })
        .catch((err) => {
          console.log("errr", err);
          setIsLoading(0);
        });
    } else {
      updateTaskTodayDoneDate(body, data._id)
        .then((res) => {
          updateTodoItemsHandler();
          setIsLoading(0);
        })
        .catch((err) => {
          setIsLoading(0);
        });
    }
  };

  return (
    <View>
      <Text
        style={{
          color: "#78849E",
          fontWeight: "700",
        }}
      >
        {data ? getFormattedDate(data?.createdAt) : "Jan 10-12:30 PM"}
      </Text>

      <View
        style={{
          borderLeftWidth: 1.5,
          borderColor: "blue",
          width: "100%",
          paddingBottom: 30,
          marginLeft: 10,
          marginVertical: 4,
        }}
      >
        <View elevation={15} style={styles.detailsBox}>
          <View style={styles.contentBox}>
            <Text style={[styles.contentText]}>
              {data.type.charAt(0).toUpperCase() + data.type.slice(1)}
            </Text>
            <Text
              style={[
                styles.contentText,
                {
                  color: "#505050",
                },
              ]}
            >
              {name}
            </Text>
            <Text
              style={[
                styles.contentText,
                {
                  color: "#254069",
                },
              ]}
            >
              {data?.target?.valueType == "ATLEAST"
                ? "Min"
                : data?.target?.valueType == "ATMOST"
                ? "Max"
                : ""}{" "}
              {data?.target?.value} {data?.target?.unit}
            </Text>
          </View>

          {compareDateByToday(data.todayDoneDate) || isDone ? (
            <TouchableOpacity style={styles.iconBox}>
              <Icon2 name="done" size={35} color="white" />
            </TouchableOpacity>
          ) : (
            <View style={styles.confirmation}>
              <TouchableOpacity
                style={[styles.confirmItem, { borderBottomWidth: 1 }]}
                onPress={() => {
                  if (data.type === "Habit" && data.completeType === "value")
                    setModalVisible(true);
                  else iDidHandler();
                }}
              >
                {isLoading ? (
                  <ActivityIndicator size={28} color="#0E58C7" />
                ) : (
                  <Text
                    style={{
                      color: "#0E58C7",
                      fontWeight: "700",
                      fontSize: 18,
                    }}
                  >
                    I Did
                  </Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmItem}
                onLongPress={() => {
                  if (data.type == "Habit") {
                    deleteHabitById(data._id) .then((res) => {
                      updateTodoItemsHandler();
                      Alert.alert("Success", "Habit deleted successfully");
                    }
                    ).catch((err) => {
                      Alert.alert("Error", "Something went wrong");
                    }
                    );
                  }else {
                    deleteTask(data._id)
                    .then((res) => {
                      Alert.alert("Success","Task Deleted Successfully");
                      updateTodoItemsHandler();
                    }
                    )
                  }
                }}
              >
                <Text
                  style={{
                    color: "#D96400",
                    fontWeight: "700",
                    fontSize: 18,
                  }}
                >
                  I Didn't
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.centeredView]}>
          <View style={styles.modalView}>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 15,
                }}
              >
                <Text
                  style={{ color: "#2E5B9F", fontSize: 16, fontWeight: "700" }}
                >
                  {data?.category}
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Cross name="cross" color="#272727" size={25} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "#707070",
                borderBottomWidth: 1,
                opacity: 0.2,
                marginBottom: 20,
              }}
            ></View>
            <Text
              style={{ color: "#808495", fontSize: 12, textAlign: "center" }}
            >
              Enter the value!
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                padding: 15,
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#2E5B9F", fontSize: 18, fontWeight: "700" }}
              >
                {data?.target?.valueType}
              </Text>
              <TextInput
                style={{
                  color: "#254069",
                  opacity: 0.8,
                  marginRight: 15,
                  borderWidth: 2,
                  borderColor: "#7070701A",
                  borderRadius: 3,
                  padding: 10,
                  paddingHorizontal: 40,
                  backgroundColor: "#F0F6FF",
                  width: 120,
                }}
                onChangeText={setText}
                placeholder="eg. 1"
                placeholderTextColor="#254069"
              />
              <Text
                style={{ color: "#2E5B9F", fontSize: 18, fontWeight: "700" }}
              >
                {data?.target?.unit}
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                iDidHandler();
              }}
            >
              <Text style={styles.textStyle}>Enter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginHorizontal: 10,
    borderRadius: 12,
    marginLeft: 20,
    marginTop: 8,
    paddingHorizontal: 18,
    paddingTop: 18,
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
    height: "100%",
  },
  iconBox: {
    backgroundColor: "#0EC76B",
    borderRadius: 100,
    padding: 8,
  },
  confirmation: {
    borderLeftWidth: 1.5,
    borderColor: COLORS.borderColor,
    paddingHorizontal: 4,
    height: "100%",
    width: "30%",
  },
  confirmItem: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",

    borderColor: COLORS.borderColor,
  },
  soberBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    marginTop: 22,
    marginHorizontal: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    padding: 12,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#FF9241",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});

export default PendingRemind;

{
  /* <View style={styles.confirmation}>
              <TouchableOpacity style={styles.soberBox}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon name="md-hand-left" color="#D2DFF2" size={37} />
                  <Text
                    style={{
                      color: "#0E58C7",
                      fontSize: 15,
                      fontWeight: "700",
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    Yes I will stay sober
                  </Text>
                </View>
              </TouchableOpacity>
            </View> */
}
