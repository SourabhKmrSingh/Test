import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, Text } from "react-native";
import { exploreicon, profileicon, todoicon } from "../constants/images";
import Login from "../screens/Auth/Login";
import SignUP from "../screens/Auth/signUp";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/Fontisto";
import WelcomeRoute from "./WelcomeRoute";
import Step2 from "../screens/Welcome/Step2";
import TodoHome from "../screens/Todo/Todo-Home";
import Authroute from "./AuthRoute";
import Notification from "../screens/Notification";
import Todoroute from "./Todoroutes";
import Notify from "../screens/Notify";
import ExploreRoutes from "./Explore/ExploreRoutes";
import ExploreHome from "../screens/Explore/Explore-Home";
import Selfhelphome from "../screens/SelfHelp/SelfHelpHome";
import Thoughtgeneral from "../screens/SelfHelp/ThoughtGeneral";
import Report from "../screens/SelfHelp/Report";
import Profile from "../screens/Profile/Profile";
import AccountSettings from "../screens/Profile/AccountSettings";
import { LinearGradient } from "react-native-svg";
import tw from "tailwind-react-native-classnames";
import Onboarding from "../screens/Welcome/Onboarding";
import PillTracking1 from "../screens/MyHealth/PillTracking1";
import MyHealthHome from "../screens/MyHealth/MyHealthHome";
import Appointmentrecords from "../screens/MyHealth/AppointmentRecords";
import TopTabNavigator from "../screens/MyHealth/TopTabNavigator";
import DoctorsList from "../screens/MyHealth/DoctorsList";
import SingleDoctor from "../screens/MyHealth/SingleDoctor";
import Allappointments from "../screens/MyHealth/AllAppointments";
import Allsessions from "../components/MyHelth/MedicalRecord/AllSessions";
import Medicalrecords from "../components/MyHelth/MedicalRecord/MedicalRecords";
import Deaddiction from "../screens/MyHealth/DeAddiction";
import Singlecontact from "../screens/Profile/SingleContact";
import HabbitTracking from "../screens/Todo/HabbitTracking";
import AddTaskScreen from "../screens/Todo/Tasks/AddTaskScreen";
import CreateHabbit from "../screens/Todo/Habits/CreateHabitScreen2";
import TaskHabbit from "../screens/Todo/Tasks/TaskHabbit";
import CreateHabitScreen3 from "../screens/Todo/Habits/CreateHabitScreen3";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  allHabitItemsRecoil,
  allTaskItemsRecoil,
  habitStoreRecoil,
  isTodoItemsLoadingRecoil,
  userDataRecoil,
} from "../utils/reoil-atoms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getTasksById } from "../actions/Todo/Tasks";
import { getHabitById } from "../actions/Todo/Habit";
import HabitDetail from "../screens/Todo/Habits/HabitDetail";
import Se2P1 from "../screens/SelfHelp/DeAddiction/Session2/Se2P1";
import * as SecureStore from "expo-secure-store";

const Tab = createBottomTabNavigator();

const Bottomtabs = () => {
  const [userDetails, setUserDetails] = useRecoilState(userDataRecoil);
  const [allTaskItems, setAllTodoItems] = useRecoilState(allTaskItemsRecoil);
  const [allHabitItems, setAllHabitItems] = useRecoilState(allHabitItemsRecoil);
  const [isTodoLoading, setIsTodoLoading] = useRecoilState(
    isTodoItemsLoadingRecoil
  );
  const [initalHabits, setinitalHabits] = useRecoilState(habitStoreRecoil);

  useEffect(() => {
    SecureStore.getItemAsync("user_key").then((value) => {
      if (value) {
        const userData = JSON.parse(value);
        setUserDetails(userData[0]);
        getTasksById(userData[0]._id).then((res) => {
          setAllTodoItems(res);

          getHabitById(userData[0]._id).then((res2) => {
            setinitalHabits(res2);
            setAllHabitItems(res2);
            setIsTodoLoading(false);
          });
        });
      }
    });
  }, []);

  useEffect(() => {
    setIsTodoLoading(true);

    SecureStore.getItemAsync("user_key").then((res) => {
      console.log("My User Is :- ", res);
      if (res) {
        setUserDetails(JSON.parse(res)[0]);
        console.log("My User Is :- ", userDetails);
      }
    });
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          borderWidth: 0,
          margin: 0,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          elevation: 0,
          height: 70,
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 8,
          backgroundColor: "#1F64CC",
        },
      }}
    >
      <Tab.Screen
        name="to-do"
        component={TodoHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
                borderBottomWidth: focused ? 1.5 : 0,
                borderColor: "white",
                width: 65,
              }}
            >
              <Icon
                name="notes-medical"
                size={20}
                style={{
                  marginBottom: 8,
                }}
                color="white"
              />
              <Text
                style={{
                  color: focused ? "white" : "white",
                  fontSize: 12,
                  paddingBottom: 5,
                }}
              >
                To-do
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Health"
        component={TopTabNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
                borderBottomWidth: focused ? 1.5 : 0,
                borderColor: "white",
                width: 65,
              }}
            >
              <Icon2
                name="doctor"
                size={20}
                style={{
                  marginBottom: 8,
                }}
                color="white"
              />

              <Text
                style={{
                  color: focused ? "white" : "white",
                  fontSize: 12,
                  paddingBottom: 5,
                }}
              >
                My Health
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SelfHelp"
        component={Selfhelphome}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
                borderBottomWidth: focused ? 1.5 : 0,
                borderColor: "white",
                width: 65,
              }}
            >
              <Icon
                name="hand-holding-heart"
                size={20}
                style={{
                  marginBottom: 8,
                }}
                color="white"
              />
              <Text
                style={{
                  color: focused ? "white" : "white",
                  fontSize: 12,
                  paddingBottom: 5,
                }}
              >
                Self Help
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
                borderBottomWidth: focused ? 1.5 : 0,
                borderColor: "white",
                width: 65,
              }}
            >
              <Image
                source={exploreicon}
                resizeMode="cover"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: "white",
                  marginBottom: 8,
                }}
              />
              <Text
                style={{
                  color: focused ? "white" : "white",
                  fontSize: 12,
                  paddingBottom: 5,
                }}
              >
                Explore
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
                borderBottomWidth: focused ? 1.5 : 0,
                borderColor: "white",
                width: 65,
              }}
            >
              <Image
                source={profileicon}
                resizeMode="cover"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: "white",
                  marginBottom: 8,
                }}
              />
              <Text
                style={{
                  color: focused ? "white" : "white",
                  fontSize: 12,
                  paddingBottom: 5,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottomtabs;
