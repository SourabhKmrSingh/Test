import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../constants/color";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { gradientImage2 } from "../../constants/images";
import tw from "tailwind-react-native-classnames";
import { StackActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getOtpById } from "../../actions/Auth/Otp";
import { useRecoilState } from "recoil";
import { loggedState, mobileNumberRecoil } from "../../utils/reoil-atoms";
import {
  addUserInMongo,
  addUserInMongoByMobile,
  getUserByEmail,
  getUserByMobile,
} from "../../actions/User/User";
import * as SecureStore from "expo-secure-store";

const CELL_COUNT = 4;

const Otpinputscreen = () => {
  const navigator = useNavigation();
  const [value, setValue] = useState("");
  const [userSet, setUserSet] = useRecoilState(loggedState);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const { width, height } = Dimensions.get("screen");
  const [myColor, setMyColor] = useState("white");

  const [isLoading, setIsLoading] = useState(0);
  const [mobNumb, setMobNumb] = useRecoilState(mobileNumberRecoil);

  const verifyhandler = async () => {
    setIsLoading(1);
    setMyColor("white");

    //   AsyncStorage.removeItem("@hello_key")

    const value2 = await AsyncStorage.getItem("@otpcode_key");
    if (value2) {
      getOtpById(value2).then((data) => {
        console.log(data);
        if (!data) {
          setMyColor("white");
          navigator.goBack();
        }
        console.log("Expires");
        if (data.otpCode == value) {
          getUserByMobile(mobNumb).then(async (data) => {
            if (data.length > 0) {
              const value = JSON.stringify(data);
              SecureStore.setItemAsync("islogged_key", "1").then(() => {
                SecureStore.setItemAsync("user_key", value).then((res) => {
                  setIsLoading(0);
                  setUserSet(true);
                  navigator.dispatch(StackActions.replace("homepage"));
                });
              });
            } else {
              addUserInMongoByMobile(mobNumb).then((data2) => {
                const value = JSON.stringify([data2]);
                SecureStore.setItemAsync("islogged_key", "1").then(() => {
                  SecureStore.setItemAsync("user_key", value).then((res) => {
                    setIsLoading(0);
                    setUserSet(true);
                    navigator.dispatch(StackActions.replace("homepage"));
                  });
                });
              });
            }
          });
        } else {
          setIsLoading(0);
          setMyColor("red");
        }
      });
    }
  };

  useEffect(() => {
    setMyColor("white");
  }, [value]);

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground
        source={gradientImage2}
        resizeMode="cover"
        style={styles.gradientBox}
      >
        <View
          style={{
            height: "30%",
          }}
        >
          <Text style={tw`text-white  text-3xl p-10 font-bold `}>Login By</Text>
          <Text style={tw`text-white text-3xl pl-10 -mt-9 font-bold `}>
            mobile OTP
          </Text>
        </View>
        <View style={[styles.oTpSec, tw`px-10`]}>
          <Text style={styles.title}>Enter the OTP Code</Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[
                  styles.cellRoot,
                  isFocused && styles.focusCell,
                  {
                    borderWidth: 1.5,
                    borderColor: myColor,
                  },
                ]}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          <TouchableOpacity
            onPress={() => {
              verifyhandler();
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.orange,
              height: 45,
              marginTop: 40,
              borderRadius: 7,
            }}
          >
            {isLoading ? (
              <ActivityIndicator color="white" size={33} />
            ) : (
              <Text style={tw`text-white  font-bold  text-lg`}>Verify</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.myCenter}>
          <View
            style={[tw`flex-row justify-center items-center`, styles.myCenter]}
          >
            <Text style={tw`text-white`}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigator.navigate("signupNEW")}>
              <Text style={tw`text-white ml-2 text-xl underline`}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradientBox: {
    width: "100%",
    height: Dimensions.get("screen").height,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "space-between",
  },
  root: {
    backgroundColor: "red",
    height: Dimensions.get("screen").height,
  },
  oTpSec: {
    height: "30%",
  },
  title: { fontSize: 16, color: "white", marginBottom: 10 },
  codeFieldRoot: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 2,
  },
  myCenter: {
    width: "100%",
    flex: 1,
    marginTop: 4,
    alignItems: "center",
  },
});

export default Otpinputscreen;
