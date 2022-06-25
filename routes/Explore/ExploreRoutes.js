import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoHome from "../../screens/Todo/Todo-Home";
import ExploreHome from "../../screens/Explore/Explore-Home";
import Questions from "../../screens/Explore/Questions";
import Singletopic from "../../screens/Explore/SingleTopic";
import Singlestory from "../../components/Explore/SingleStory";
import Singlefaq from "../../screens/Explore/SingleFaq";

const Stack = createNativeStackNavigator();
const ExploreRoutes = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='singletopic' component={Singletopic} />
        <Stack.Screen name='singlestory' component={Singlestory} />
        <Stack.Screen name='singlefaq' component={Singlefaq} />
        <Stack.Screen name='question' component={Questions} />
        


        


      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ExploreRoutes;
