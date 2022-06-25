import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";

import { LinearGradient } from "expo-linear-gradient";
import AntIcon from "react-native-vector-icons/AntDesign";
// import Smile from "../../../Svgs/Questions/smile";
// import TurtleSvg from "../../../Svgs/TurtleSvg";


import TurtleSvg from "../../../screens/Svgs/TurtleSvg";
import Clock from "../../../screens/Svgs/DeAddictionStage/clock";

const StageCard = (props) => {
    const { width, height } = Dimensions.get("screen");
  return (
    <View style={{width:width-20}}>
      <LinearGradient
        colors={["#37AADD", "#1F64CC"]}
            style={{
              width: "100%",
              // backgroundColor: "#153669",
              alignItems: "flex-start",
              paddingTop: 10,
              paddingBottom: 20,
              marginTop: 70,
              borderRadius: 15,
              paddingHorizontal: 15,
            }}
                  >
        <View style={[tw`items-center justify-center`, {
          
          width: "100%",
          padding: 15,
          borderRadius: 10,
          paddingHorizontal: 10,
            marginTop:40
        }]}>
          <Text style={{ color: "white", fontSize: 24 }}>{props.title}</Text>
          <View style={{marginTop:38}}>
            <Clock/>
          </View>

          <View>
            <Text style={{ color: "white", fontSize: 12, textAlign: "center", marginTop: 40 }}>{ props.description }</Text>
          </View>
                          </View>
           
                  </LinearGradient>
    </View>
  )
}

export default StageCard