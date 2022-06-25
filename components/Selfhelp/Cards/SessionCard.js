import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";

const Sessioncard = ({ route }) => {
  const Navigator = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        Navigator.navigate("selfhelphome", {
          screen: "deaddiction",
          params: {
            screen: `session${route}p1`,
          },
        });
      }}
      style={styles.sessionItem}
    >
      <ImageBackground
        source={require("../../../assets/welcome.png")}
        style={styles.sessionImage}
        resizeMethod="resize"
        resizeMode="cover"
      >
        <View
          style={{
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Session {route}
            </Text>
            <Icon name="options-vertical" color="white" size={17} />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              textAlign: "right",
              paddingHorizontal: 10,
            }}
          >
            2:13
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          Basic Psycho-Education
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            marginTop: 5,
          }}
        >
          Understanding what happens in addiction
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "700",
            marginTop: 10,
          }}
        >
          Includes -{" "}
          <Text
            style={{
              color: "white",
              fontSize: 14,
            }}
          >
            Theory
          </Text>
        </Text>

        <Text
          style={{
            color: "white",
            textAlign: "right",
            fontSize: 14,
            marginTop: 8,
          }}
        >
          60% Completed
        </Text>

        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            height: 5,
            marginTop: 9,
          }}
        >
          <View
            style={{
              width: "60%",
              height: 5,
              backgroundColor: "#FF9241",
            }}
          ></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sessionItem: {
    width: "100%",
    backgroundColor: "#153669",
    marginVertical: 18,
    borderRadius: 15,
    paddingBottom: 18,
    overflow: "hidden",
  },
  sessionImage: {
    width: "100%",
    height: 160,
    paddingTop: 10,
    paddingVertical: 10,
  },
});

export default Sessioncard;
