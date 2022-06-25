import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllSessions from "../../screens/SelfHelp/DeAddiction/AllSessions";
import Sep1 from "../../screens/SelfHelp/DeAddiction/Sessions1/SeP1";
import Se1add from "../../screens/SelfHelp/DeAddiction/Sessions1/Se1Add";
// import S3AllAssesment from "../../screens/SelfHelp/DeAddiction/Sessions3/S3AllAssesment";
import Se1complete from "../../screens/SelfHelp/DeAddiction/Sessions1/Se1Complete";
import Se2P1 from "../../screens/SelfHelp/DeAddiction/Session2/Se2P1";
import Se2Q1 from "../../screens/SelfHelp/DeAddiction/Session2/Se2Q1";
import Se2Q2 from "../../screens/SelfHelp/DeAddiction/Session2/Se2Q2";
import Se2Q3 from "../../screens/SelfHelp/DeAddiction/Session2/Se2Q3";
import Se2Q4 from "../../screens/SelfHelp/DeAddiction/Session2/Se2Q4";
import Se2Q5 from "../../screens/SelfHelp/DeAddiction/Session2/Se2Q5";
import Se2Q6 from "../../screens/SelfHelp/DeAddiction/Session2/Se2Q6";
import Se2Q7 from "../../screens/SelfHelp/DeAddiction/Session2/Se2Q7";
import Se2Q8 from "../../screens/SelfHelp/DeAddiction/Session2/Se2Q8";
import Se2Q9 from "../../screens/SelfHelp/DeAddiction/Session2/Se2Q9";
import Se2Q10 from "../../screens/SelfHelp/DeAddiction/Session2/Se2Q10";
import Se2Q11 from "../../screens/SelfHelp/DeAddiction/Session2/Se2Q11";
import SummaryS2 from "../../screens/SelfHelp/DeAddiction/Session2/SummaryS2";
import DeAddictHome from "../../screens/SelfHelp/DeAddiction/DeAddictHome";
import S3AllAssesment from "../../screens/SelfHelp/DeAddiction/Session3/S3AllAssesment";
import S3CAP1 from "../../screens/SelfHelp/DeAddiction/Session3/CostAnalysis/S3CAP1";
import S3cap2 from "../../screens/SelfHelp/DeAddiction/Session3/CostAnalysis/S3CAP2";
import S3cap3 from "../../screens/SelfHelp/DeAddiction/Session3/CostAnalysis/S3CAP3";
import S3CAReview from "../../screens/SelfHelp/DeAddiction/Session3/CostAnalysis/S3CAReview";
import S3CAComplete from "../../screens/SelfHelp/DeAddiction/Session3/CostAnalysis/S3CAComplete";
// Session 3


// const config = {
//   animation: "spring",
//   config: {
//     stiffness: 1000,
//     damping: 50,
//     mass: 3,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };



const Stack = createNativeStackNavigator();
const DeAddicRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled:true
      }}
    >
      <Stack.Screen name="deaddicthome" component={DeAddictHome} />
      <Stack.Screen name="allsessions" component={AllSessions} />
      {/* Session 1 Routes */}
      <Stack.Screen name="session1p1" component={Sep1} />
      <Stack.Screen name="session1p2" component={Se1add} />
      <Stack.Screen name="session1complete" component={Se1complete} />


      {/* Session 2 Routes */}
      <Stack.Screen name="session2p1" component={Se2P1} />
      <Stack.Screen name="session2q1" component={Se2Q1} />
      <Stack.Screen name="session2q2" component={Se2Q2} />
      <Stack.Screen name="session2q3" component={Se2Q3} />
      <Stack.Screen name="session2q4" component={Se2Q4} />
      <Stack.Screen name="session2q5" component={Se2Q5} />
      <Stack.Screen name="session2q6" component={Se2Q6} />
      <Stack.Screen name="session2q7" component={Se2Q7} />
      <Stack.Screen name="session2q8" component={Se2Q8} />
      <Stack.Screen name="session2q9" component={Se2Q9} />
      <Stack.Screen name="session2q10" component={Se2Q10} />
      <Stack.Screen name="session2q11" component={Se2Q11} />
      <Stack.Screen name="session2summary" component={SummaryS2} />

      {/* Session3 Routes */}
      {/* Complete Routes  */}
      {/* <Stack.Screen name="complete" component={S3AllAssesment} />
      <Stack.Screen name="session3p1" component={S3AllAssesment} /> */}
      {/* <Stack.Screen name="session2a1" component={S3P1} /> */}
      {/* onPress={() => {
                Navigator.navigate("selfhelphome", {
                  screen: "deaddiction",
                  params: {
                    screen: prevRoute,
                  },
                });
              }} */}
      <Stack.Screen name="session3p1" component={S3AllAssesment} />
      <Stack.Screen name="session3cap1" component={S3CAP1} />
      <Stack.Screen name="session3cap2" component={S3cap2} />
      <Stack.Screen name="session3cap3" component={S3cap3} />
      <Stack.Screen name="session3careview" component={S3CAReview} />
      <Stack.Screen name="session3cacomplete" component={S3CAComplete} />







      {/* Session 4 Routes */}







    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default DeAddicRoutes;
