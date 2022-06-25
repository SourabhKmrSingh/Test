import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import Explorefooter from "../../../components/Explore/ExploreFooter";
import Sessioncard from "../../../components/Selfhelp/Cards/SessionCard";

const data = ["gg", "dgh", "gg", "dgh"];

const AllSessions = () => {
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView
      style={[
        {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        },
      ]}
    >
      <View
        style={{
          width,
          height,
          backgroundColor: "#102646",
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "#254069",
            paddingHorizontal: 15,
            paddingVertical: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            De-addiction therapy - All session
          </Text>
        </View>
        <ScrollView
          style={{
            height: "100%",
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              paddingBottom: 50,
              paddingTop: 20,
            }}
          >
            {data.map((item, index) => {
              return <Sessioncard key={index} route={index + 1} />;
            })}
          </View>
        </ScrollView>
      </View>
      <Explorefooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AllSessions;
