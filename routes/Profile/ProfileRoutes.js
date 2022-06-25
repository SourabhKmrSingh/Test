import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Singletopic from "../../screens/Explore/SingleTopic";
import Thoughtgeneral from "../../screens/SelfHelp/ThoughtGeneral";
import Report from "../../screens/SelfHelp/Report";
import HabitTrack from "../../screens/SelfHelp/HabitTrack";
import MoodTrack from "../../screens/SelfHelp/MoodTrack";
import EmergencyContacts from "../../screens/Profile/EmergencyContacts";
import Manageguardian from "../../screens/Profile/ManageGuardian";
import AccountSettings from "../../screens/Profile/AccountSettings";
import Singlecontact from "../../screens/Profile/SingleContact";
import AddContacts from "../../screens/Profile/AddContacts";


const Stack = createNativeStackNavigator();

const ProfileRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="emergencycontacts" component={EmergencyContacts} />
      <Stack.Screen name="manageguardian" component={Manageguardian} />
      <Stack.Screen name="accountsettings" component={AccountSettings} />
      <Stack.Screen name="singlecontacts" component={Singlecontact} />
      <Stack.Screen name="addcontacts" component={AddContacts} />


    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ProfileRoutes;
