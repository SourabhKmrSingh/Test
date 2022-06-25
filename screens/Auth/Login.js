import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../constants/color";
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { StackActions, useNavigation } from "@react-navigation/native";
import { gradientImage2 } from "../../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useRecoilState } from "recoil";
import { loggedState } from "../../utils/reoil-atoms";
import { getUserByEmail } from "../../actions/User/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const {width,height} =  Dimensions.get("screen");

const Login = () => {
  const navigator = useNavigation();

  const [isLoading, setIsLoading] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isuser, setIsUser] = useRecoilState(loggedState);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [dimensions, setDimensions] = useState({width,height});

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  const loginHandler = async () => {
    setIsLoading(1);
    if (!email) {
      Alert.alert("Required*", "Email Input is Empty");
      setIsLoading(0);

      return;
    }
    if (!password) {
      Alert.alert("Required*", "Password Input is Empty");
      setIsLoading(0);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((user, err) => {
        if (user) {
          console.log("Firebase Done");
          getUserByEmail(email).then(async (data) => {
            const value = JSON.stringify(data);
            console.log("dataaa Mongo", data);

            SecureStore.setItemAsync("user_key", value).then((res) => {
              setIsLoading(0);
              setIsUser(true);
              navigator.dispatch(StackActions.replace("homepage"));
            });
          });
        } else {
          setIsLoading(0);
          setIsUser(false);
        }
      })
      .catch((err) => {
        console.log(err.code, "Err Hai ");
        if (err.code == "auth/invalid-email") {
          Alert.alert("Error", "Invalid Email");
        } else if (err.code == "auth/user-not-found") {
          Alert.alert("Error", "User not found");
        } else {
          Alert.alert("Error", "Something error happen");
        }
        setIsLoading(0);
      });
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={gradientImage2}
          resizeMode="cover"
          style={[styles.gradientBox,{
            height: dimensions.height
          }]}
        >
          <Text style={tw`text-white text-3xl p-10 font-bold `}>
            Sign In and
          </Text>
          <Text style={tw`text-white text-3xl pl-10 -mt-9 font-bold `}>
            Lets Peace Begins
          </Text>
          <View style={tw`text-white px-10 `}>
            <Text style={tw`mt-12 mb-2 text-white`}>Email Id</Text>
            <TextInput
              value={email}
              placeholder="Enter the email id"
              style={tw` px-4   bg-white rounded-md h-12 `}
              onChangeText={(val) => setEmail(val.trim())}
            />
            <Text style={tw`mt-8 mb-2 text-white`}>Pasword</Text>
            <TextInput
              value={password}
              placeholder="Password "
              secureTextEntry
              style={tw` px-4   bg-white rounded-md h-12 `}
              onChangeText={(val) => setPassword(val.trim())}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <View></View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setEmail("");
                    setPassword("");
                    navigator.navigate("resetlink");
                  }}
                >
                  <Text style={tw`text-white`}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={loginHandler}
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.orange,
                height: 45,
                marginVertical: 30,
                borderRadius: 7,
              }}
            >
              {!isLoading ? (
                <Text style={tw`text-white  font-bold text-lg  `}>Log In</Text>
              ) : (
                <ActivityIndicator color="white" size={33} />
              )}
            </TouchableOpacity>
            <View style={[tw`text-white h-14`, styles.myCenter]}>
              <Text style={tw`text-white h-16 text-center  mb-32`}>Or</Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 45,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setEmail("");
                setPassword("");
                navigator.navigate("otplogin");
              }}
              style={styles.loginWithOtp}
            >
              <Text style={{ color: "#fff" }}>Login With OTP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.myCenter}>
            <View
              style={[
                tw`flex-row justify-center items-center`,
                styles.myCenter,
              ]}
            >
              <Text style={tw`text-white`}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  setEmail("");
                  setPassword("");
                  navigator.navigate("signupNEW");
                }}
              >
                <Text style={tw`text-white ml-2 text-xl underline`}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  gradientBox: {
    width: "100%",
    paddingTop: 5,
  },
  myCenter: {
    width: "100%",
    flex: 1,
    marginTop: 4,
    alignItems: "center",
  },
  loginWithOtp: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    paddingHorizontal: 75,
    paddingVertical: 10,
  },
});
