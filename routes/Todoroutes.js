import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoHome from "../screens/Todo/Todo-Home";
import AddTaskScreen from "../screens/Todo/Tasks/AddTaskScreen";
import Successcreate from "../screens/Todo/Tasks/SuccessCreate";
import CreateHabitScreen from "../screens/Todo/Habits/CreateHabitScreen";
import SuccessHabit from "../screens/Todo/Habits/SuccessHabit";
import CreateHabitScreen2 from "../screens/Todo/Habits/CreateHabitScreen2";
import CreateHabitScreen3 from "../screens/Todo/Habits/CreateHabitScreen3";
import Targetdetails from "../screens/Todo/Habits/TargetDetails";

const Stack = createNativeStackNavigator();
const Todoroute = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
       
        <Stack.Screen name='todohome' component={TodoHome} />
        <Stack.Screen name='addtask' component={AddTaskScreen} />
        <Stack.Screen name='sucesstask' component={Successcreate} />
        <Stack.Screen name='createhabit' component={CreateHabitScreen} />
        <Stack.Screen name='createhabit2' component={CreateHabitScreen2} />
        <Stack.Screen name='createhabit3' component={CreateHabitScreen3} />
        <Stack.Screen name='successhabit' component={SuccessHabit} />
        <Stack.Screen name='targetdetails' component={Targetdetails} />




      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Todoroute;
