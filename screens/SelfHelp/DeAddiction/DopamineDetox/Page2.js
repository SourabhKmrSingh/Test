import React, { useState } from "react";
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
import { Checkbox } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import COLORS from "../../../../constants/color";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Smile from "../../../Svgs/Questions/smile";
import TurtleSvg from "../../../Svgs/TurtleSvg";
import Turtle2 from "../../../Svgs/Turtle2";
import Explorefooter from "../../../../components/Explore/ExploreFooter";
import Icon from "react-native-vector-icons/Entypo";
const Page2 = () => {
  const [checked, setChecked] = useState(false);
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: COLORS.appBackground,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        },
      ]}
    >
      <LinearGradient colors={["#37AADD", "#1F64CC"]}>
        <View
          style={{
            paddingTop: StatusBar.currentHeight,
            width: width,
            height: height,

            // paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  marginTop: 20,
                }}
              >
                Session 3
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: "700",
                  marginTop: 5,
                }}
              >
                Dopamine Detox
              </Text>
            </View>

            <Icon name="cross" size={50} color="white" />
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: "#102646",
              //   alignItems: "flex-start",
              paddingTop: 10,
              paddingBottom: 20,
              marginTop: 40,
              borderRadius: 15,
              paddingHorizontal: 15,
              height: height,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "700",
                letterSpacing: 1,
                lineHeight: 30,
              }}
            >
              Estimate time for all these items in the checklist
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* selection field */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  uncheckedColor="#fff"
                  color="#fff"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <View style={{ marginLeft: -80 }}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    Adult Entertainment Sites
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    Estimate time : 12hrs
                  </Text>
                </View>
                <AntDesign name="clockcircleo" size={20} color="white" />
              </View>
            </ScrollView>
          </View>
        </View>

        {/* <Text>Estimate time for all these items in the checklist</Text> */}
      </LinearGradient>

      <Explorefooter />
    </SafeAreaView>
  );
};
export default Page2;
