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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const data = ["gy", "gg", "ghh", "gh", "fgh", "dfh"];

const Assesslists3 = () => {
  const { width, height } = Dimensions.get("screen");
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
              <View
                style={{
                  marginLeft: 30,
                }}
              >
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

export default Assesslists3;
