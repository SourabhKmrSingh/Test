import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Singletopic from "../../screens/Explore/SingleTopic";
import Thoughtgeneral from "../../screens/SelfHelp/ThoughtGeneral";
import Report from "../../screens/SelfHelp/Report";
import HabitTrack from "../../screens/SelfHelp/HabitTrack";
import MoodTrack from "../../screens/SelfHelp/MoodTrack";
import DeAddicRoutes from "./DeAddicRoutes.js";

const Stack = createNativeStackNavigator();
const SelfHelpRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="singletopic" component={Singletopic} />
      <Stack.Screen name="thoughtjournal" component={Thoughtgeneral} />
      <Stack.Screen name="sideeffectreport" component={Report} />
      <Stack.Screen name="habittrack" component={HabitTrack} />
      <Stack.Screen name="moodtrack" component={MoodTrack} />
      <Stack.Screen name="deaddiction" component={DeAddicRoutes} />
      


    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default SelfHelpRoutes;
