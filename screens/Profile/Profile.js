import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Alert,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
// import Icon from "react-native-vector-icons/FontAwesome5";
import tw from "tailwind-react-native-classnames";
import Explorefooter from "../../components/Explore/ExploreFooter";
import ProfileHeader from "../../components/Profile/Cards/ProfileHeader";
import COLORS from "../../constants/color";
import Manageguardian from "./ManageGuardian";
import { LinearGradient } from "expo-linear-gradient";
import ProfileCard from "../../components/Profile/Cards/ProfileCard";
import { Avatar } from "react-native-paper";
import { StackActions, useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
// import ProfileHome from './ProfileHome';

import StepIndicator from "react-native-step-indicator";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  allHabitItemsRecoil,
  allTaskItemsRecoil,
  habitStoreRecoil,
  loggedState,
  user,
  userDataRecoil,
} from "../../utils/reoil-atoms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

import { getUserByEmail } from "../../actions/User/User";
import ProfileCoin from "../Svgs/ProfileCoin";
import Crown from "react-native-vector-icons/FontAwesome5";
const labels = ["Active", "Growing", "Well Being"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fe7013",
  stepStrokeWidth: 10,
  stepStrokeFinishedColor: "#fe7013",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#fe7013",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 10,
  currentStepLabelColor: "#fe7013",
};

const demodata = ["Father", "Friend1", "Friend2", "Friend3"];
const Profile = () => {
  const Navigator = useNavigation();
  const { width, height } = Dimensions.get("screen");
  const [isUser, setIsUser] = useRecoilState(loggedState);
  const [userUpdate, setUserUpdate] = useState(1);
  const [userData, setUserData] = useRecoilState(user);
  const [allHabits, setAllHabits] = useRecoilState(allHabitItemsRecoil);
  const resetHabit = useResetRecoilState(allHabitItemsRecoil);
  const resetTask = useResetRecoilState(allTaskItemsRecoil);
  const resetHabitStore = useResetRecoilState(habitStoreRecoil);

  const [userDataProfile, setUserDataProfile] = useRecoilState(userDataRecoil);

  const logOutProfile = () => {
    signOut(auth).then(() => {
      setIsUser(false);
      resetHabit();
      resetTask();
      resetHabitStore();

      SecureStore.setItemAsync("islogged_key", "");
      AsyncStorage.setItem("@notification_key", "[]");
      SecureStore.deleteItemAsync("user_key").then(() => {
        Notifications.cancelAllScheduledNotificationsAsync().then(() => {
          Navigator.dispatch(StackActions.replace("auth"));
          Alert.alert("Logout Succuss");
        });
      });
    });
  };

  useEffect(async () => {
    let storage = await SecureStore.getItemAsync("user_key");
    if (storage) {
      const tempData = JSON.parse(storage);
      // console.log(tempData,"temp")
      setUserDataProfile(tempData[0]);
      getUserByEmail(tempData[0].email).then((res) => {
        storage = JSON.stringify(res);
        SecureStore.getItemAsync("user_key", storage);
      });
    }
  }, [userUpdate]);

  return (
    <SafeAreaView style={{
      paddingTop: StatusBar.currentHeight
    }} >
      <View
        style={[
          tw` justify-center items-center `,
          {
            width: width,
            height: height,
          },
        ]}
      >
        <LinearGradient
          colors={["#37AADD", "#1F64CC"]}
          style={[
            tw` flex`,
            {
              width: width,
              height: height,
            },
          ]}
        >
          <View style={tw`justify-center items-center mt-14`}>
            <Avatar.Image
              size={100}
              source={require("../../assets/images/icons/user.png")}
            />
            <Text
              style={tw`text-white font-semibold text-xl tracking-wide mt-4 `}
            >
              {/* {console.log(userDataProfile, "userData")} */}
              {userDataProfile?.name}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: 20,
              // backgroundColor:"red",
            }}
          >
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexDirection: "row",
                borderTopWidth: 5,
                borderColor: "white",
                width: "90%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginTop: -8,
                  position: "absolute",
                  left: 0,
                  right: 0,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#FE7614",
                    borderWidth: 2,
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                    // marginTop:10,
                  }}
                ></View>
                <Text style={{ color: "#FFFFFF", fontSize: 16, marginTop: 20 }}>
                  Active
                </Text>
                <Text style={{ color: "#FFFFFF", fontSize: 16, marginTop: 15 }}>
                  800 points
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginTop: -8,
                  position: "absolute",
                  // left: 0,
                  right: 0,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#FE7614",
                    borderWidth: 2,
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                  }}
                ></View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#EBBC1E",
                    padding: 8,
                    borderRadius: 50,
                    paddingHorizontal: 15,
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <Crown name="crown" size={12} color="white" />
                  <Text
                    style={{ color: "#FFFFFF", fontSize: 12, marginLeft: 5 }}
                  >
                    Well Being
                  </Text>
                </View>
                <Text style={{ color: "#FFFFFF", fontSize: 16, marginTop: 15 }}>
                  100 points
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginTop: -8,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#FE7614",
                    borderWidth: 2,
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                  }}
                ></View>
                <Text style={{ color: "#FFFFFF", fontSize: 16, marginTop: 20 }}>
                  Active
                </Text>
                <Text style={{ color: "#FFFFFF", fontSize: 16, marginTop: 15 }}>
                  500 points
                </Text>
              </View>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <View>
              <View
                style={[
                  tw`justify-center w-full  items-center mb-14 `,
                  { marginTop: 200, width, paddingHorizontal: 10 },
                ]}
              >
                <View
                  style={[
                    tw` bg-white w-full justify-around   mt-32 rounded-2xl flex flex-row items-center `,
                    { paddingHorizontal: 10, backgroundColor: "#EDF4FD" },
                  ]}
                >
                  <View>
                    <ProfileCoin />
                  </View>
                  <Text
                    style={[
                      tw` font-bold text-xl tracking-wide my-7  items-center `,
                      {
                        color: COLORS.profileText,
                        fontSize: 26,
                      },
                    ]}
                  >
                    2300 Points
                  </Text>
                  <Text
                    style={[
                      tw` font-bold text-sm text-gray-700   items-center`,
                      {
                        color: COLORS.lightBlue,
                        fontSize: 10,
                      },
                    ]}
                  >
                    Expires 20/04/2023
                  </Text>
                </View>
              </View>

              <View
                style={[
                  tw`h-full w-full bg-white p-6 -mt-7 `,
                  {
                    overflow: "hidden",
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                  },
                  { width, height },
                ]}
              >
                <View
                  style={[
                    tw`items-center justify-center mb-10  `,
                    {
                      borderRadius: 10,
                      overflow: "hidden",
                    },
                  ]}
                >
                  <View
                    style={{
                      width: "100%",
                      borderRadius: 10,
                      overflow: "hidden",
                      marginBottom: 12,
                      marginTop: 20,
                    }}
                  >
                    <ImageBackground
                      source={require("../../assets/images/CardBack1.jpg")}
                      style={{
                        width: "100%",
                        height: 150,
                        borderRadius: 10,
                      }}
                    >
                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingTop: 10,
                        }}
                      >
                        <Text style={tw`text-white text-xl font-bold mb-6  `}>
                          Earned Point
                        </Text>
                        <Text style={tw`text-white text-lg font-bold  mb-3`}>
                          3000 pts
                        </Text>
                        <View style={[tw`flex flex-row text-white text-xl `]}>
                          <Text style={[tw`text-white  `]}>Total Points</Text>
                          <Text style={tw`ml-20 text-white`}>
                            Expires - 20 Dec 2023
                          </Text>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>

                  {/* Image Card 2 */}
                  <View
                    style={{
                      width: "100%",
                      borderRadius: 10,
                      overflow: "hidden",
                      marginBottom: 20,
                      marginTop: 20,
                    }}
                  >
                    <ImageBackground
                      source={require("../../assets/images/CardBack2.jpg")}
                      style={{
                        width: "100%",
                        height: 150,
                        borderRadius: 10,
                      }}
                    >
                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingTop: 10,
                        }}
                      >
                        <Text style={tw`text-white text-xl font-bold mb-6  `}>
                          Earned Point
                        </Text>
                        <Text style={tw`text-white text-lg font-bold  mb-3`}>
                          3000 pts
                        </Text>
                        <View style={[tw`flex flex-row text-white text-xl `]}>
                          <Text style={[tw`text-white  `]}>Total Points</Text>
                          <Text style={tw`ml-20 text-white`}>
                            Expires - 20 Dec 2023
                          </Text>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: COLORS.borderColor,
                    borderBottomWidth: 1,
                  }}
                ></View>
                <View style={tw`p-4`}>
                  <TouchableOpacity
                    onPress={() =>
                      Navigator.navigate("profilehome", {
                        screen: "emergencycontacts",
                      })
                    }
                  >
                    <Text style={tw`text-blue-500 text-xl font-bold mt-8`}>
                      Emergency Contact
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      Navigator.navigate("profilehome", {
                        screen: "manageguardian",
                      })
                    }
                  >
                    <Text style={tw`text-blue-500 text-xl font-bold mt-8`}>
                      Manage Guardian
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      Navigator.navigate(
                        "profilehome",
                        {
                          screen: "accountsettings",
                        },
                        { userData }
                      )
                    }
                  >
                    <View style={tw`flex flex-row`}>
                      <Text style={tw`text-blue-500 text-xl font-bold mt-8`}>
                        Account Setting
                      </Text>
                      <Icon
                        name="settings"
                        color="blue"
                        size={20}
                        style={tw`ml-32 mt-9`}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={tw`text-blue-500 text-xl font-bold mt-8`}>
                      Switch to guardian profile
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      logOutProfile();
                    }}
                  >
                    <Text style={tw`text-blue-500 text-xl font-bold mt-8`}>
                      Log Out
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      paddingBottom: 77,
                      marginBottom: 88,
                    }}
                  >
                    <Text
                      style={[
                        tw`text-blue-500 text-xl font-bold mt-8  mb-72`,
                        {
                          paddingBottom: 77,
                        },
                      ]}
                    >
                      Support
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  timelineCont: {
    width: 100,
    height: 20,
    backgroundColor: "white",
  },
  timelineLine: {
    height: 8,
    width: 100,
    backgroundColor: "white",
    borderRadius: 5,
    position: "relative",
  },
  boxImage: {
    width: 40,
    height: 40,
    marginTop: 32,
    marginBottom: 32,
    marginLeft: 20,
  },
  scroll: {
    // paddingTop: 200,
    position: "absolute",
    top: 0,
    // paddingHorizontal:20,
    height: Dimensions.get("screen").height - 70,
  },
  timelineCircle: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
});

export default Profile;
