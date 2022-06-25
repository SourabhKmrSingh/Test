import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useRecoilState } from "recoil";
import { getHabitById } from "../../actions/Todo/Habit";
import { getTasksById } from "../../actions/Todo/Tasks";
import Createtask from "../../components/Todo/CreateTask";
import Headerbox from "../../components/Todo/HeaderBox";
import DoneRemind from "../../components/Todo/Reminders/DoneRemind";
import PendingRemind from "../../components/Todo/Reminders/PendingRemind";
import Reminders from "../../components/Todo/Reminders/Reminders";
import Selecttype from "../../components/Todo/SelectType";
import TodayBox from "../../components/Todo/TodayBox";
import {
  allTaskItemsRecoil,
  allTodoRecoil,
  habitStoreRecoil,
  isTodoDateItemsLoadingRecoil,
  isTodoItemsLoadingRecoil,
  taskAddedRecoil,
  userDataRecoil,
} from "../../utils/reoil-atoms";
import { allHabitItemsRecoil } from "../../utils/reoil-atoms";
import {
  compareDateByToday,
  getFormattedDate,
  sortArrayByDateTime,
} from "../../utils/utils";
import * as SecureStore from "expo-secure-store";

export default function TodoHome() {
  const [firstLoad, setFirstLoad] = useState(1);
  const [allTaskItems, setAllTaskItems] = useRecoilState(allTaskItemsRecoil);
  const [allHabitItems, setAllHabitItems] = useRecoilState(allHabitItemsRecoil);
  const [allTodo, setAllTodo] = useRecoilState(allTodoRecoil);
  const [userDetails, setUserDetails] = useRecoilState(userDataRecoil);
  const [isTaskAdded, setIsTaskAdded] = useRecoilState(taskAddedRecoil);
  const [isTodoLoading, setIsTodoLoading] = useRecoilState(
    isTodoItemsLoadingRecoil
  );
  const [isTodoHabitLoading, setIsTodoHabitLoading] = useRecoilState(
    isTodoDateItemsLoadingRecoil
  );
  const [initalHabits, setInitalHabits] = useRecoilState(habitStoreRecoil);
  
  // Function to Update All Todo Items From Database
  const updateItemsByDatabase = async () => {
    SecureStore.getItemAsync("user_key").then((res) => {
      const response = JSON.parse(res);
      setUserDetails(response[0]);

      console.log( "allHabitItems")
      getTasksById(response[0]._id).then((res) => {
        setAllTaskItems(res);

        getHabitById(response[0]._id).then((res2) => {
          setInitalHabits(res2);
          setAllHabitItems(res2);
          // updateTodoItemsHandler();
        });
      });
    });
  };

  // Update Data From Database from all Data Chnaged in Database
  useEffect(() => {
    updateItemsByDatabase();
  }, [isTaskAdded]);

 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}
      >
        <Headerbox title="You are" subtitle={"Not Alone in this :)"} />
        <TodayBox />
        <Createtask />
        
        {isTodoLoading || isTodoHabitLoading ? (
          <View
            style={{
              marginTop: 30,
            }}
          >
            <ActivityIndicator color="#0E58C7" size="large" />
          </View>
        ) : (
          <>
            {allTaskItems?.map((item, index) => {
              return (
                <PendingRemind
                  isSober={0}
                  name={item.name}
                  data={item}
                  key={index}
                  updateTodoItemsHandler={updateItemsByDatabase}
                />
              );
            })}

            {/* All HAbits */}
              {allHabitItems?.map((item, index) => {
              
              return (
                <PendingRemind
                  isSober={0}
                  name={item.name}
                  data={item}
                  key={index}
                  updateTodoItemsHandler={updateItemsByDatabase}
                />
              );
            })}
          </>
        )}
        

        {/* {allTodo.map((item, index) => (
          <PendingRemind isSober={0} name={item.name} data={item} key={index} updateTodoItemsHandler={updateTodoItemsHandler} />
        ))}
        <PendingRemind isSober={0} />
        {allTodo.map((item, index) => (
          <DoneRemind isEqual={isEqual} name={item.name} data={item} key={index} />
        ))} */}

        {/* <PendingRemind isSober={1} />
        <PendingRemind isSober={0} />

        <PendingRemind isSober={0} />

        <PendingRemind isSober={1} />

        <DoneRemind /> */}
      </ScrollView>
      <Selecttype />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    width: "100%",
    height: "100%",
    backgroundColor: "#E9EFF4",
  },
  scrollview: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E9EFF4",
    paddingHorizontal: 10,
    marginBottom: 70,
  },
});
