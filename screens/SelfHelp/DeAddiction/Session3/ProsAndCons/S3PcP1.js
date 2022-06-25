import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";
import Micsvg from "../../../../Svgs/MicSvg";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/Entypo";
import COLORS from "../../../../../constants/color";

const S3PcP1 = () => {
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
          backgroundColor: "#37AADD",
          width: "100%",
          height: Dimensions.get("screen").height,
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              Session 3
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "700",
                marginTop: 3,
              }}
            >
              Pros and cons
            </Text>
          </View>
          <Icon name="cross" size={50} color="white" />
        </View>

        <View
          style={{
            backgroundColor: "#102646",
            paddingHorizontal: 15,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingTop: 75,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginTop: 45,
              lineHeight: 30,
            }}
          >
            Write Pros and Cons of Continuing your substance
          </Text>
          {/* Input Box 1 */}
          <View
            style={{
              backgroundColor: "#EDF4FD",
              width: "100%",
              minHeight: 150,
              borderRadius: 10,
              marginTop: 25,
              paddingHorizontal: 15,
              paddingVertical: 8,
              justifyContent: "space-between",
            }}
          >
            <View>
              {/* Text Input  */}
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#8EB1E5",
                  paddingBottom: 12,
                  fontSize: 12,
                }}
              >
                <Text
                  style={{
                    color: "#254069",
                    fontSize: 16,
                  }}
                >
                  Pros
                </Text>
              </View>

              <TextInput multiline={true} placeholder="Write about a problem" />
            </View>
            <TouchableOpacity
              style={{
                width: "100%",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Micsvg />
            </TouchableOpacity>
          </View>

          {/* Text Input 2 */}
          <View
            style={{
              backgroundColor: "#EDF4FD",
              width: "100%",
              minHeight: 150,
              borderRadius: 10,
              marginTop: 45,
              paddingHorizontal: 15,
              paddingVertical: 8,
              justifyContent: "space-between",
            }}
          >
            <View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#8EB1E5",
                  paddingBottom: 12,
                  fontSize: 12,
                }}
              >
                <Text
                  style={{
                    color: "#254069",
                    fontSize: 16,
                  }}
                >
                  Cons
                </Text>
              </View>

              <TextInput multiline={true} placeholder="Write about a problem" />
            </View>
            <TouchableOpacity
              style={{
                width: "100%",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Micsvg />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#102646",
            height: "100%",
          }}
        ></View>

        {/* Footer */}
        <View
          style={{
            width: "100%",
            backgroundColor: "#102646",
            justifyContent: "flex-end",
            position: "absolute",
            bottom: 0,
            paddingHorizontal: 15,
            paddingVertical: 15,
            borderTopWidth: 0.5,
            borderColor: COLORS.borderColor,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon2 name="chevron-left" size={20} color="white" />
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Back
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <Sessionquesfooter prevRoute="session2p1" nextRoute="session3a1" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default S3PcP1;
