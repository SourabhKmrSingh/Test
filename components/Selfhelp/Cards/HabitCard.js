import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { G, Rect, Path } from "react-native-svg";

const Habitcard = () => {
  return (
    <View
      style={{
        backgroundColor: "#F4F8FA",
        marginVertical: 10,
        padding: 15,
        borderRadius: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View>
          <Svg xmlns="http://www.w3.org/2000/svg" width={38} height={38}>
            <G data-name="Group 2749" transform="translate(-17 -6)">
              <Rect
                width={38}
                height={38}
                fill="#d2dff2"
                data-name="Rectangle 1560"
                rx={5}
                transform="translate(17 6)"
              />
              <Path
                fill="#8eb1e5"
                d="M44.169 27.793V15.538a.873.873 0 0 0-.876-.875H31.329a3.5 3.5 0 0 0-3.5 3.5v11.673a3.5 3.5 0 0 0 3.5 3.5h11.964a.873.873 0 0 0 .875-.875v-.584a.882.882 0 0 0-.325-.682 8.134 8.134 0 0 1 0-2.725.869.869 0 0 0 .326-.677zM32.498 19.55a.219.219 0 0 1 .219-.219h7.732a.219.219 0 0 1 .219.219v.729a.219.219 0 0 1-.219.219h-7.733a.219.219 0 0 1-.219-.219zm0 2.334a.219.219 0 0 1 .218-.221h7.733a.219.219 0 0 1 .219.219v.729a.219.219 0 0 1-.219.219h-7.733a.219.219 0 0 1-.219-.219zm9.242 9.118H31.329a1.167 1.167 0 1 1 0-2.334H41.74a13.131 13.131 0 0 0 0 2.335z"
                data-name="Icon awesome-book"
              />
            </G>
          </Svg>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              color: "#1E64CC",
              fontWeight: "700",
              letterSpacing: 0.5,
            }}
          >
            Waking Up Early{" "}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: "#254069",
            }}
          >
            Created on 14th nov 2021 - 7:34pm
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            color: "#254069",
            opacity: 0.5,
            fontSize: 12,
          }}
        >
          Target
        </Text>
        <Text
          style={{
            color: "#2E5B9F",
            marginLeft: 10,
            fontWeight: "700",
            fontSize: 12,
          }}
        >
          Pages - 12
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Habitcard;
