import { useNavigation } from "@react-navigation/native";
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

const Sep1 = () => {
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
            De-addiction Session 1
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
              alignItems: "center",
              paddingTop: 25,
              paddingBottom: 20,
              marginTop: 15,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Whats your addiction
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                marginTop: 5,
              }}
            >
              Enter your addiction substance name and details
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: COLORS.orange,
                paddingVertical: 10,
                borderRadius: 5,
                width: "70%",
                marginTop: 30,
              }}
              onPress={() => {
                Navigator.navigate("selfhelphome", {
                  screen: "deaddiction",
                  params: {
                    screen: "session1p2",
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
                Add your addiction
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          borderTopWidth: 0.3,
          borderColor: COLORS.borderColor,
          borderTopWidth: 0.3,
        }}
      >
        <Explorefooter />
      </View>
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

export default Sep1;
