//expo build:android -t apk
import { Alert, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Bottomtabs from "./routes/BottomTabs";
import Authroute from "./routes/AuthRoute";
import { useState, useEffect } from "react";
import { useAuthentication } from "./utils/auth";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notification from "./screens/Notification";
import Questions from "./screens/Explore/Questions";
import Singletopic from "./screens/Explore/SingleTopic";
import Singlestory from "./components/Explore/SingleStory";
import ExploreRoutes from "./routes/Explore/ExploreRoutes";
import Singlefaq from "./screens/Explore/SingleFaq";
import Thoughtgeneral from "./screens/SelfHelp/ThoughtGeneral";
import SelfHelpRoutes from "./routes/SelfHelp/SelfhelpRoutes";
import ProfileRoutes from "./routes/Profile/ProfileRoutes";
import Selecttype from "./components/Todo/SelectType";
import { RecoilRoot, useRecoilState } from "recoil";
import Splashscreen from "./screens/SplashScreen";
import Onboarding from "./screens/Welcome/Onboarding";
import {
  allNotificationRecoil,
  loggedState,
  userDataRecoil,
} from "./utils/reoil-atoms";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import MyHealthRoutes from "./routes/Myhealth/MyHealthRoute";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WelcomeRoute from "./routes/WelcomeRoute";
import SingleGuardian from "./screens/Profile/SingleGuardian";
import AddContacts from "./screens/Profile/AddContacts";
import Todoroute from "./routes/Todoroutes";
import Successcreate from "./screens/Todo/Tasks/SuccessCreate";
import CreateHabitScreen from "./screens/Todo/Habits/CreateHabitScreen";
import SuccessHabit from "./screens/Todo/Habits/SuccessHabit";
import * as Notifications from "expo-notifications";
import Allsessions from "./screens/SelfHelp/DeAddiction/AllSessions";
import Sep1 from "./screens/SelfHelp/DeAddiction/Sessions1/SeP1";
import Se1add from "./screens/SelfHelp/DeAddiction/Sessions1/Se1Add";
import Se1complete from "./screens/SelfHelp/DeAddiction/Sessions1/Se1Complete";
import Se2P1 from "./screens/SelfHelp/DeAddiction/Session2/Se2P1";
import Timecost1 from "./screens/SelfHelp/DeAddiction/TimeCost1";
import Costanalysisadd from "./screens/SelfHelp/DeAddiction/AddAddiction/CostanalysisAdd";
import PlanAddS3 from "./screens/SelfHelp/DeAddiction/AddAddiction/PlanAddS3";
import PlanAddS2 from "./screens/SelfHelp/DeAddiction/AddAddiction/PlanAddS2";
import PlanAdd3S3 from "./screens/SelfHelp/DeAddiction/AddAddiction/PlanAdd3S3";
import PlanAddInviteS3 from "./screens/SelfHelp/DeAddiction/AddAddiction/PlanAddInviteS3";
import PlanAdd5S3 from "./screens/SelfHelp/DeAddiction/AddAddiction/PlanAdd5S3";
import PlanAdd6S3 from "./screens/SelfHelp/DeAddiction/AddAddiction/PlanAdd6S3";
import Assesslists3 from "./screens/SelfHelp/DeAddiction/AddAddiction/AssessListS3";
import Step2 from "./screens/Welcome/Step2";
import Se2Q1 from "./screens/SelfHelp/DeAddiction/Session2/Se2Q1";
import Se2Q2 from "./screens/SelfHelp/DeAddiction/Session2/Se2Q2";
import Se2Q3 from "./screens/SelfHelp/DeAddiction/Session2/Se2Q3";
import SummaryS2 from "./screens/SelfHelp/DeAddiction/Session2/SummaryS2";
// import S3CAReview from "./screens/SelfHelp/DeAddiction/Session3/CostAnalysis/S3CAReview";
import S3PcP1 from "./screens/SelfHelp/DeAddiction/Session3/ProsAndCons/S3PcP1";
import DeAddictHome from "./screens/SelfHelp/DeAddiction/DeAddictHome";

import SummaryDeAddiction from "./screens/SelfHelp/DeAddiction/DeAddictionStage/SummaryDeAddiction";

import Screen3 from "./screens/SelfHelp/DeAddiction/Session4/Indentification/Screen3";
import Screen5 from "./screens/SelfHelp/DeAddiction/Session4/Indentification/Screen5";
import SummaryS4 from "./screens/SelfHelp/DeAddiction/Session4/Indentification/SummaryS4";
import CompleteS4 from "./screens/SelfHelp/DeAddiction/Session4/Indentification/CompleteS4";
import S3CAP2 from "./screens/SelfHelp/DeAddiction/Session3/CostAnalysis/S3CAP2";
import Screen1 from "./screens/SelfHelp/DeAddiction/Session4/MakingAmends/Screen1";
import Screen2 from "./screens/SelfHelp/DeAddiction/Session4/MakingAmends/Screen2";
import Screen4 from "./screens/SelfHelp/DeAddiction/Session4/MakingAmends/Screen4";
import * as SecureStore from "expo-secure-store";
import HabitDetails from "./screens/Todo/Habits/HabitDetails";
import Testi from "./screens/Testi";

// import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function RouteState() {
  const [firstLoad, setFirstLoad] = useState(1);
  const [isSplash, setIsSplash] = useState(1);
  const [isSplash2, setIsSplash2] = useState(1);

  const [isUser, setIsUser] = useRecoilState(loggedState);
  const [userDetails, setUserDetails] = useRecoilState(userDataRecoil);

  useEffect(async () => {
    const response = await AsyncStorage.getItem("@otpcode_key");
    if (response) {
      if (response == 1) setIsUser(true);
    }
  }, [firstLoad]);

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user is logged in");
        setIsUser(true);
        setIsSplash(0);
      } else {
        SecureStore.getItemAsync("islogged_key").then((value) => {
          if (value && value == 1) {
            setIsUser(true);
            SecureStore.getItemAsync("user_key").then((res) => {
              const details = JSON.parse(res);
              setUserDetails(details[0]);
              setIsSplash(0);
            });
          } else {
            setIsUser(false);
            setIsSplash(0);
          }
        });
      }
      // User is signed out
    });

    return unsubscribeFromAuthStatuChanged();
  }, []);

  const [allNotification, setAllNotification] = useRecoilState(
    allNotificationRecoil
  );
  // Notification
  useEffect(async () => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        console.log(notification);
        await AsyncStorage.getItem("@notification_key").then(async (data) => {
          if (data) {
            let array = JSON.parse(data);
            array.push(notification);
            setAllNotification(array);
            await AsyncStorage.setItem(
              "@notification_key",
              JSON.stringify(array)
            );
          } else {
            let array = [];
            array.push(notification);
            setAllNotification(array);
            await AsyncStorage.setItem(
              "@notification_key",
              JSON.stringify(array)
            );
          }
        });
      }
    );
    return () => subscription.remove();
  }, []);

  useEffect(async () => {
    await AsyncStorage.getItem("@notification_key").then((data) => {
      if (data) {
        setAllNotification(JSON.parse(data));
      } else {
      }
    });
  }, []);

  return (
    <>
      {isSplash ? (
        <Splashscreen />
      ) : (
        <SafeAreaProvider
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={isUser ? "homepage" : "auth"}
            >
              <Stack.Screen name="auth" component={Authroute} />

              <Stack.Screen name="homepage" component={Testi} />

              <Stack.Screen name="welcome" component={Onboarding} />

              <Stack.Screen name="todo" component={Todoroute} />
              <Stack.Screen name="explore" component={ExploreRoutes} />
              <Stack.Screen name="myhealth" component={MyHealthRoutes} />
              <Stack.Screen name="selfhelphome" component={SelfHelpRoutes} />
              <Stack.Screen name="profilehome" component={ProfileRoutes} />

              <Stack.Screen name="notification" component={Notification} />
              <Stack.Screen name="question" component={Questions} />
              <Stack.Screen name="singletopic" component={Singletopic} />
              <Stack.Screen name="singlestory" component={Singlestory} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
