import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path,
  TSpan,
} from "react-native-svg";
import COLORS from "../../constants/color";
import tw from "tailwind-react-native-classnames";
import { useRecoilState } from "recoil";
import { allNotificationRecoil } from "../../utils/reoil-atoms";
const Headerbox = ({ title, subtitle }) => {
  const navigator = useNavigation();
  const [allNotifications, setAllNotifications] = useRecoilState(
    allNotificationRecoil
  );
  return (
    <View
      style={[
        tw``,
        {
          paddingVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: COLORS.appBackground,
        },
      ]}
    >
      <View>
        <Text
          style={[
            styles.text,
            {
              fontSize: 25,
              fontWeight: "700",
            },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: 25,
              fontWeight: "700",
            },
          ]}
        >
          {subtitle}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: 57,
          height: 57,
          marginRight: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          navigator.navigate("notification");
        }}
      >
        <Svg xmlns="http://www.w3.org/2000/svg" width={55} height={57}>
          <Defs>
            <LinearGradient
              id="a"
              x1={0.5}
              x2={0.5}
              y2={1}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0} stopColor="#4b8ceb" />
              <Stop offset={1} stopColor="#1f64cc" />
            </LinearGradient>
          </Defs>
          <G data-name="Group 2650">
            <G
              data-name="Icon ionic-ios-notifications"
              transform="translate(.478)"
            >
              <G data-name="Group 3911">
                <Circle
                  data-name="Ellipse 746"
                  cx={23}
                  cy={23}
                  r={23}
                  transform="translate(-.479 11)"
                  fill="#fff"
                />
                <Path
                  data-name="Path 9493"
                  d="M23.523 50.888c2.71 0 4.191-1.917 4.191-4.618h-8.391c0 2.701 1.485 4.618 4.2 4.618Z"
                  fill="#ff9241"
                />
                <Path
                  data-name="Path 9494"
                  d="M34.279 29.746c-1.341-1.769-3.979-2.805-3.979-10.725 0-8.129-3.59-11.4-6.935-12.18-.314-.078-.54-.183-.54-.514v-.253a2.126 2.126 0 1 0-4.252 0v.253c0 .322-.227.436-.54.514-3.354.793-6.935 4.051-6.935 12.18 0 7.92-2.64 8.948-3.982 10.725A1.729 1.729 0 0 0 8.5 32.517h24.4a1.73 1.73 0 0 0 1.379-2.771Z"
                  transform="translate(2.846 12.096)"
                  fill="url(#a)"
                />
              </G>
              {allNotifications.length ? (
                <View
                  style={{
                    backgroundColor: "#ff9241",
                    borderRadius: 20,
                    width: 25,
                    height: 25,
                    position: "absolute",
                    right: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                    }}
                  >
                    {allNotifications.length < 10 ? "0" : ""}
                    {allNotifications.length}
                  </Text>
                </View>
              ) : null}

              {/* <Circle
          data-name="Ellipse 747"
          cx={12}
          cy={12}
          r={12}
          transform="translate(30.522)"
          fill="#ff9241"
        >
        12
        </Circle> */}
            </G>
          </G>
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#1E64CC",
  },
});

export default Headerbox;
