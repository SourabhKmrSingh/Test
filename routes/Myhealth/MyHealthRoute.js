import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Singletopic from "../../screens/Explore/SingleTopic";
import Thoughtgeneral from "../../screens/SelfHelp/ThoughtGeneral";
import Report from "../../screens/SelfHelp/Report";
import HabitTrack from "../../screens/SelfHelp/HabitTrack";
import MoodTrack from "../../screens/SelfHelp/MoodTrack";
import PillTracking1 from "../../screens/MyHealth/PillTracking1";
import Allappointments from "../../screens/MyHealth/AllAppointments";
import Medicalhistory from "../../components/MyHelth/MedicalHistory";
import MedicalRecords from "../../screens/MyHealth/MedicalRocords";
import DoctorsList from "../../screens/MyHealth/DoctorsList";
import SingleDoctor from "../../screens/MyHealth/SingleDoctor";

const Stack = createNativeStackNavigator();
const MyHealthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="pilltrack" component={PillTracking1} />
      <Stack.Screen name="allappointment" component={Allappointments} />
      <Stack.Screen name="medicalhistory" component={MedicalRecords } />
      <Stack.Screen name="doctorlist" component={DoctorsList } />
      <Stack.Screen name="singledoctor" component={SingleDoctor } />


      



    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MyHealthRoutes;
