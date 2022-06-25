import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    title: "Cost analysis",
    pretitle: "Exercise Type - Severity meter",
    pretitle1: "Why - Helps to find your obsession",
    route: "",
  },
  {
    title: "Pro and Cons",
    pretitle: "Exercise Type - Severity meter",
    pretitle1: "Why - Helps to find your obsession",
    route: "",
  },
  {
    title: "Dopamine Detox",
    pretitle: "Exercise Type - Severity meter",
    pretitle1: "Why - Helps to find your obsession",
    route: "",
  },
  {
    title: "De-addiction stage",
    pretitle: "Exercise Type - Severity meter",
    pretitle1: "Why - Helps to find your obsession",
    route: "",
  },
  {
    title: "Change blueprint",
    pretitle: "Exercise Type - Severity meter",
    pretitle1: "Why - Helps to find your obsession",
    route: "",
  },
];

const S3AllAssesment = () => {
  const { width, height } = Dimensions.get("screen");
  const Navigator = useNavigation();
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#37AADD", "#1F64CC"]}
        style={{
          width: width,
          height: height,
          paddingTop: StatusBar.currentHeight,
          paddingHorizontal: 20,
        }}
      >
        <ScrollView
          style={{
            width: width,
            height: height,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            De-addiction Session 3
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              marginTop: 30,
            }}
          >
            Assessment / Blueprint
          </Text>

          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: "90%",
                backgroundColor: "#102646",
                flexDirection: "row",
                paddingHorizontal: 25,
                marginVertical: 10,
                borderRadius: 10,
                paddingVertical: 25,
                paddingTop: 25,
                justifyContent: "space-between",
              }}
              onPress={() => {
                // Alert.alert("hey")
                Navigator.navigate("selfhelphome", {
                  screen: "deaddiction",
                  params: {
                    screen: "session3cap1",
                  },
                });
              }}
            >
              <View
                style={{
                  width: 50,

                  height: 50,

                  backgroundColor: "white",
                  borderRadius: 25,
                }}
              ></View>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  Cost analysis
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "white",
                    marginTop: 30,
                  }}
                >
                  Exercise Type - Severity meter
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "white",
                    marginTop: 12,
                  }}
                >
                  Why - Helps to find your obsession
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default S3AllAssesment;
