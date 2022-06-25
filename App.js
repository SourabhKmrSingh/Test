import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Bottomtabs from "./routes/BottomTabs";
import Authroute from "./routes/AuthRoute";
import { useState, useEffect } from "react";
import { useAuthentication } from "./utils/auth";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Notification from "./screens/Notification";
import Questions from "./screens/Explore/Questions";
import Singletopic from "./screens/Explore/SingleTopic";
import Singlestory from "./components/Explore/SingleStory";
import ExploreRoutes from "./routes/Explore/ExploreRoutes";
import Singlefaq from "./screens/Explore/SingleFaq";
import Thoughtgeneral from "./screens/SelfHelp/ThoughtGeneral";
import SelfHelpRoutes from "./routes/SelfHelp/SelfhelpRoutes";
import ProfileRoutes from "./routes/Profile/ProfileRoutes";
import Selecttype from "./components/Todo/SelectType";

// import Splashscreen from "./screens/SplashScreen";
import Onboarding from "./screens/Welcome/Onboarding";
import { allNotificationRecoil, loggedState } from "./utils/reoil-atoms";
import RouteState from "./RouteState";
import { RecoilRoot, useRecoilState } from "recoil";
import { auth } from "./config/firebase";
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'

// import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  const [firstLoad, setFirstLoad] = useState(1);
  const [isSplash, setIsSplash] = useState(1);
  const user = useAuthentication();

  
  


  

  return (
    <RecoilRoot>
      <SafeAreaProvider><RouteState/></SafeAreaProvider>
      
    </RecoilRoot>
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
