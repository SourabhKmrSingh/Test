import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Explorefooter from "../../../../components/Explore/ExploreFooter";
import COLORS from "../../../../constants/color";
import { useNavigation } from "@react-navigation/native";

const Se2P1 = () => {
  const { width, height } = Dimensions.get("screen");
  const Navigator = useNavigation();
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
          paddingTop: StatusBar.currentHeight,
          width: width,
          height: height,
          backgroundColor: "#102646",
        }}
      >
        {/* Video Section */}
        <View
          style={{
            paddingHorizontal: 15,
            borderBottomWidth: 0.3,
            borderColor: COLORS.borderColor,
            paddingBottom: 35,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "700",
              paddingTop: 8,
              marginBottom: 20,
            }}
          >
            De-addiction Session 2
          </Text>

          <View
            style={{
              width: "100%",
              height: 190,
              borderRadius: 15,
              overflow: "hidden",
            }}
          >
            <ImageBackground
              source={require("../../../../assets/welcome.png")}
              style={styles.sessionImage}
              resizeMethod="resize"
              resizeMode="cover"
            >
              <View
                style={{
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
                  Basic Psycho-Education
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        {/* Assesment Section */}
        <View style={styles.assessmentBox}>
          <Text
            style={{
              color: "#8EB1E5",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Assessment
          </Text>
          <View
            style={{
              width: "100%",
              backgroundColor: "#153669",
              alignItems: "flex-start",
              paddingTop: 10,
              paddingBottom: 20,
              marginTop: 15,
              borderRadius: 15,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Questionnaire - 11
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                marginTop: 10,
                color: "#D2DFF2",
              }}
            >
              Exercise Type - Selecting option
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                marginTop: 8,
                color: "#D2DFF2",
              }}
            >
              Why - To know your problem better
            </Text>

            <View
              style={{
                alignItems: "center",
                width: "100%",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.orange,
                  paddingVertical: 15,
                  borderRadius: 5,
                  width: "90%",
                  marginTop: 28,
                }}
                onPress={() => {
                  Navigator.navigate("selfhelphome", {
                    screen: "deaddiction",
                    params: {
                      screen: "session2q1",
                    },
                  });
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Explorefooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sessionImage: {
    width: "100%",
    height: 190,
    paddingTop: 10,
    paddingVertical: 10,
  },
  assessmentBox: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
});

export default Se2P1;
