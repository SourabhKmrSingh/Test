import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoHome from "../../screens/Todo/Todo-Home";
import ExploreHome from "../../screens/Explore/Explore-Home";
import Questions from "../../screens/Explore/Questions";

const Stack = createNativeStackNavigator();
const QuestionRoute = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        
        <Stack.Screen name='questions' component={Questions} />

        


      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default QuestionRoute;
