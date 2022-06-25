import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import COLORS from "../../constants/color";
import Headerbox from "../../components/Todo/HeaderBox";
import tw from "tailwind-react-native-classnames";
import Explorefooter from "../../components/Explore/ExploreFooter";

const PillTracking1 = () => {
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView
      style={[
        tw`px-4`,
        {
          backgroundColor: COLORS.appBackground,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: height - 77,
        }}
      >
        <Headerbox title="Invest in your " subtitle={"Mental health : )"} />
        <View
          style={{
            backgroundColor: "#F0F6FA",
            width: "100%",
            height: 211,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              color: "#1E64CC",
              paddingTop: 15,
              paddingLeft: 20,
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            Your Mood
          </Text>
          <Text
            style={{
              color: "#1E64CC",
              paddingLeft: 20,
              fontSize: 12,
              marginTop: 5,
            }}
          >
            This week
          </Text>
          <Text
            style={{
              color: "#808495",
              paddingLeft: 20,
              fontSize: 16,
              marginTop: 18,
            }}
          >
            We seen a certain negative in your Mood. Zendoc will helps to Boost
            your mood
          </Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FF9241",
                width: "80%",
                height: 47.56,
                borderRadius: 12,
                marginTop: 30,
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 16 }}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#F0F6FA",
            width: "100%",
            height: 211,
            borderRadius: 12,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: "#1E64CC",
              paddingTop: 15,
              paddingLeft: 20,
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            Your Mood
          </Text>
          <Text
            style={{
              color: "#1E64CC",
              paddingLeft: 20,
              fontSize: 12,
              marginTop: 5,
            }}
          >
            This week
          </Text>
          <Text
            style={{
              color: "#808495",
              paddingLeft: 20,
              fontSize: 16,
              marginTop: 18,
            }}
          >
            We seen a certain negative in your Mood. Zendoc will helps to Boost
            your mood
          </Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FF9241",
                width: "80%",
                height: 47.56,
                borderRadius: 12,
                marginTop: 30,
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 16 }}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#F0F6FA",
            width: "100%",
            height: 211,
            borderRadius: 12,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: "#1E64CC",
              paddingTop: 15,
              paddingLeft: 20,
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            Your Mood
          </Text>
          <Text
            style={{
              color: "#1E64CC",
              paddingLeft: 20,
              fontSize: 12,
              marginTop: 5,
            }}
          >
            This week
          </Text>
          <Text
            style={{
              color: "#808495",
              paddingLeft: 20,
              fontSize: 16,
              marginTop: 18,
            }}
          >
            We seen a certain negative in your Mood. Zendoc will helps to Boost
            your mood
          </Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FF9241",
                width: "80%",
                height: 47.56,
                borderRadius: 12,
                marginTop: 30,
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 16 }}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Explorefooter />
    </SafeAreaView>
  );
};

export default PillTracking1;
