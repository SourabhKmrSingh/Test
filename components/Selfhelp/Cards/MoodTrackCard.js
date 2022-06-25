import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import Svg, { G, Ellipse, Path } from "react-native-svg";
import COLORS from "../../../constants/color";

const MoodTrackCard = () => {
  return (
    <View>
      <View style={tw`flex-row justify-between mt-3`}>
        <Text
          style={[
            tw`font-semibold`,
            {
              color: "#254069",
            },
          ]}
        >
          Apr 10 Jan
        </Text>
        <Text
          style={[
            tw`font-medium`,
            {
              color: "#254069",
            },
          ]}
        >
          12:22pm
        </Text>
      </View>
      <View style={styles.box}>
        <View>
          <View style={tw`flex-row`}>
            <View>
              <Svg xmlns="http://www.w3.org/2000/svg" width={41} height={42}>
                <G data-name="004-morning">
                  <G data-name="Group 2819" transform="translate(0 .001)">
                    <Ellipse
                      cx={20.5}
                      cy={21}
                      fill="#f5f3e5"
                      data-name="Ellipse 445"
                      rx={20.5}
                      ry={21}
                    />
                  </G>
                  <G data-name="Group 2821">
                    <G data-name="Group 2820">
                      <Path
                        fill="#ffba26"
                        d="M31.945 26.792h-5.331a6.369 6.369 0 1 0-11.984 0H9.299a.708.708 0 1 0 0 1.415h22.647a.708.708 0 0 0 0-1.415zm-11.323-9.908a.707.707 0 0 0 .708-.708v-1.415a.708.708 0 0 0-1.415 0v1.415a.707.707 0 0 0 .707.708zm-9.908 8.492h1.415a.708.708 0 1 0 0-1.415h-1.415a.708.708 0 1 0 0 1.415zm17.693-.708a.707.707 0 0 0 .708.708h1.415a.708.708 0 1 0 0-1.415h-1.415a.707.707 0 0 0-.708.708zm-.076-3.633 1.225-.708a.708.708 0 1 0-.708-1.226l-1.225.708a.708.708 0 1 0 .708 1.226zm-3.816-3.109a.708.708 0 0 0 .967-.259l.708-1.225a.708.708 0 0 0-1.226-.708l-.708 1.225a.708.708 0 0 0 .258.968zm-8.752-.259a.708.708 0 0 0 1.226-.708l-.708-1.225a.708.708 0 1 0-1.226.708zm-4.075 2.66 1.225.708a.708.708 0 1 0 .708-1.226l-1.225-.708a.708.708 0 0 0-.708 1.226z"
                        data-name="Path 4727"
                      />
                    </G>
                  </G>
                </G>
              </Svg>
            </View>
            <View style={tw`ml-3  w-full `}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Text style={styles.name}>Drink Water</Text>
                <Text>Easy</Text>
              </View>

              <Text style={styles.complete}>
                Am feeling productive as I wake up Earlier today and seen
                sunrise
              </Text>
              <View style={styles.alltags}>
                <Text style={styles.singleTag}>#Happy</Text>
                <Text style={styles.singleTag}>#Sad</Text>

                <Text style={styles.singleTag}>#Proud</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    minHeight: 100,
    borderRadius: 10,

    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 18,
    marginVertical: 10,
  },
  circleResult: {
    borderWidth: 3.5,
    borderColor: "#50B41B",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    color: "#1C1C1C",
    fontSize: 14,
    fontWeight: "700",
  },
  complete: {
    color: "#606060",
    marginTop: 7,
    width: 220,
    fontSize: 14,
    lineHeight: 18,
  },
  alltags: {
    flexDirection: "row",
    marginTop: 15,
  },
  singleTag: {
    color: "#0E58C7",
    fontSize: 12,
    fontWeight: "700",
    marginRight: 12,
  },
});

export default MoodTrackCard;
