import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import RightArrow from "react-native-vector-icons/Entypo";
import tw from "tailwind-react-native-classnames";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntIcon from "react-native-vector-icons/AntDesign";
import Star from "react-native-vector-icons/AntDesign";
import Timecostanalysiscard from "../../../../components/Selfhelp/Cards/TimeCostAnalysisCard";
import CardBlueBgSvg from "../../../Svgs/CardBlueBgSvg";
import TurtleSvg from "../../../Svgs/TurtleSvg";
import Sessionquesfooter from "../../../../components/Selfhelp/SessionQuesFooter";

const data = ["ff", "fg", "hy"];

const SummaryS2 = () => {
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
      <ImageBackground
        source={require("../../../../assets/images/MountainBg.jpg")}
        style={{
          width,
          height,
          paddingTop: StatusBar.currentHeight,
          backgroundColor: "red",
        }}
      >
        <ScrollView>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFFFFF",
                width: 58,
                height: 58,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="file-text-o" size={30} color="#1E64CC" />
            </View>
            <Text
              style={{
                color: "#1E64CC",
                fontSize: 24,
                fontWeight: "700",
                width: 250,
              }}
            >
              Your Addiction profile Summary
            </Text>
          </View>

          {/* Card  */}
          <View
            style={{
              paddingHorizontal: 15,
              zIndex: 999,
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                backgroundColor: "white",
                padding: 15,
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  height: "100%",
                  weight: "100%",
                }}
              >
                <CardBlueBgSvg />
              </View>
              <View
                style={[
                  tw`w-full justify-center items-center `,
                  { marginTop: 20, marginBottom: 40 },
                ]}
              >
                <Text
                  style={{
                    color: "#254069",
                    fontSize: 18,
                    fontWeight: "700",
                    marginBottom: 60,
                  }}
                >
                  Hey Advik you score is
                </Text>

                <TurtleSvg />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="chart-line-variant"
                    color="#FE5041"
                    size={22}
                  />
                  <Text
                    style={{
                      color: "#FE5041",
                      fontSize: 18,
                      fontWeight: "700",
                      marginLeft: 10,
                    }}
                  >
                    High Risk group
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Content */}
          <View
            style={{
              backgroundColor: "#F0F4F6",
              paddingTop: 160,
              borderRadius: 20,
              marginTop: -120,
              height: "100%",
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                color: "#254069",
                fontSize: 24,
                fontWeight: "700",
              }}
            >
              Diagnosed Addiction
            </Text>
            <View
              style={{
                paddingBottom: 100,
              }}
            >
              {data.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: "100%",
                      paddingHorizontal: 18,
                      paddingVertical: 18,
                      backgroundColor: "white",
                      borderRadius: 15,
                      marginVertical: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: "#2E5B9F",
                        fontsSize: 18,
                        fontWeight: "700",
                      }}
                    >
                      Impaired control
                    </Text>
                    <Text
                      style={{
                        textAlign: "left",
                        fontsSize: 14,
                        color: "#254069",
                        marginTop: 5,
                      }}
                    >
                      It means that social impairment is happening in your life
                      See more
                    </Text>
                  </View>
                );
              })}
              <View
                style={{
                  borderBottomColor: "#00000014",
                  borderBottomWidth: 2,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              ></View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Star name="star" color="#254069" size={16} />
                <Text
                  style={{ fontSize: 16, marginLeft: 10, color: "#254069" }}
                >
                  Recommended
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#fff",
                  padding: 12,
                  marginTop: 20,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{ color: "#1E64CC", fontSize: 16, fontWeight: "700" }}
                >
                  Suggested Psychiatrist
                </Text>
                <Icon2 name="chevron-right" size={20} color="#1E64CC" />
              </View>
              <View>
                <Text style={{ fontSize: 16, color: "#254069", marginTop: 20 }}>
                  Other Options
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#fff",
                  padding: 12,
                  marginTop: 20,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{ color: "#1E64CC", fontSize: 16, fontWeight: "700" }}
                >
                  Zendoc assist
                </Text>
                <Icon2 name="chevron-right" size={20} color="#1E64CC" />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#fff",
                  padding: 12,
                  marginTop: 20,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{ color: "#1E64CC", fontSize: 16, fontWeight: "700" }}
                >
                  Go with exercise
                </Text>
                <Icon2 name="chevron-right" size={20} color="#1E64CC" />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>

      {/* MountainBg */}

      {/* Footer */}

      <Sessionquesfooter prevRoute="session2q11" nextRoute="allsessions" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default SummaryS2;
