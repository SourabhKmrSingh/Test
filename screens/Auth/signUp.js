import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import "../../config/firebase.js";
import React, { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../constants/color";
// import auth from "@react-native-firebase/auth";
// import { auth } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { StackActions, useNavigation } from "@react-navigation/native";
// import PushNotification from "react-native-push-notification";z
import AntIcon from "react-native-vector-icons/AntDesign";
import * as SecureStore from "expo-secure-store";


import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../config/firebase";
import { addUserInMongo } from "../../actions/User/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as AuthSession from 'expo-auth-session';
// WebBrowser.maybeCompleteAuthSession();
import * as GoogleSignIn from "expo-google-sign-in";
import { LoginManager , GraphRequestManager , GraphRequest} from "react-native-fbsdk-next";
import { async } from "@firebase/util";
import { useRecoilState } from "recoil";
import { loggedState } from "../../utils/reoil-atoms";
const provider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();
WebBrowser.maybeCompleteAuthSession();
const SignUP = () => {
  const navigator = useNavigation();
  const [inputVals, setInputVals] = useState({
    email: "",
    password: "",
    cPassword: "",
  });
  
  const [isuser, setIsUser] = useRecoilState(loggedState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [check, setCheck] = useState(1);
  const [isLoading, setIsLoading] = useState(0);
  const [submit , setSubmit] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [message, setMessage] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "160758509744-prff1vd4q6c8neueh0j7numlk0mkc03a.apps.googleusercontent.com",
    expoClientId:"160758509744-b4oatk50n4gr151jjfrp7hfgfkqmgrgm.apps.googleusercontent.com",
  });

useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}`}
    });

    userInfoResponse.json().then(data => {
      setUserInfo(data);
    });
  }
  function showUserInfo() {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{uri: userInfo.picture}} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
          <Text>Ashish</Text>
        </View>
      );
    }
  }

  const signUphandler = async () => {
    console.log("Done");
    setIsLoading(1);
    if (!email) {
      Alert.alert("Required*", "Email Input is Empty");
      setIsLoading(0);

      return;
    }
    if (!email.includes("@")) {
      Alert.alert("Required*", "Enter a valid Email Address");
      setIsLoading(0);

      return;
    }
    //Set Passsword regex 
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!password) {
      Alert.alert("Required*", "Password Input is Empty");
      setIsLoading(0);
      return;
    }

    if (!regex.test(password)) {
      Alert.alert("Required*", "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character");
      setIsLoading(0);
      return;
    }

    if (!password && !cPassword) {
      Alert.alert(
        "Required*",
        "Both Password and Confirm Password is Required"
      );
      setIsLoading(0);

      return;
    }
    if (password != cPassword) {
      Alert.alert("Error", "Password  and Confirm Password is not same");
      setIsLoading(0);

      return;
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredentials) {
        console.log(userCredentials.user);
        addUserInMongo(email).then(async (data) => {
          const user = userCredentials.user;

          const value = JSON.stringify([data]);

          SecureStore.setItemAsync("user_key", value).then((res) => {
            setIsLoading(0);
            setIsUser(true);
            setInputVals({
              email: "",
              password: "",
              cPassword: "",
            });
            
            navigator.dispatch(navigator.navigate("homepage"));
          });

          

         
        });
      }
    } catch (error) {
      setInputVals({
        email: "",
        password: "",
        cPassword: "",
      });
      if(error.code === "auth/email-already-in-use"){
        Alert.alert("Error", "Email Already Exists");
      }
      else if(error.code === "auth/weak-password"){
        Alert.alert("Error", "Weak Password");
      }
      else if(error.code === "auth/invalid-email"){
        Alert.alert("Error", "Invalid Email");
      }
      else if(error.code === "auth/operation-not-allowed"){
        Alert.alert("Error", "Operation Not Allowed");
      }

      setIsLoading(0);
    }

    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    // .then((userCredentials) => {
    //   console.log("logged:", userCredentials);
    //   const user = userCredentials.user;
    //   console.log("Registered with:", user);
    // })
    //   .catch((error) => alert(error.message));
  };

  // Google and facebook Login Handler
  const googleLoginHandler = () => {
    signInWithPopup(auth, provider).then(() => {
      navigator.navigate("To-do");
    });
  };
  const facebookLoginHandler = () => {
    signInWithPopup(auth, facebookProvider).then(() => {
      navigator.navigate("To-do");
    });
  };

  const handleGoogleLogin = () => {
    const config = {
      androidClientId: '160758509744-prff1vd4q6c8neueh0j7numlk0mkc03a.apps.googleusercontent.com',
      scopes: ["profile", "email"],
    };
    GoogleSignIn.signInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if(type === 'success') {
          console.log('user', user);
          _syncUserWithStateAsync();
          navigator.dispatch(StackActions.replace("homepage"));
        } else {
          console.log('cancelled');
        }
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  const fbLogin = (resCallback) => {
    LoginManager.logOut();
    return LoginManager.logInWithReadPermissions(["public_profile", "email"]).then(
      res => {
        console.log(res, "fb login details");
        if (res.ddeclinedPermissions && res.declinedPermissions.includes("email")) { 
          resCallback({message: "email required"})
        }
        if (res.iisCancelled) {
          console.log("error")
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=id,name,email,picture',
            null,
            resCallback
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        console.log(error+ "login failed with error")
      }
    )
  }

  const handleFBLogin = async() => {
    try {
      await fbLogin(_resCallbackFBLogin);
    }
    catch(error) {
      console.log(error , "handle fb login error")
    }
  }
  

  const _resCallbackFBLogin = async (error , result) => {
    if (error) {
      console.log(error, "callback error")
      return
    } else {
      const userData = result
      console.log(userData, "user data")
    }
  }


  //expo auth session plugin google handler

  // Reset All Inputs
  useEffect(() => {
    setInputVals({
      email: "",
      password: "",
      cPassword: "",
    })
  }, []);



  return (
    <SafeAreaView style={tw` h-full`}>
      <LinearGradient
        colors={["#37AADD", "#1F64CC"]}
        style={styles.gradientBox}
      >
        <Text style={tw`text-white text-3xl p-10 font-bold `}>Sign In and</Text>
        <Text style={tw`text-white text-3xl pl-10 -mt-9 font-bold `}>
          Lets Peace Begins
        </Text>
        <View style={tw`text-white px-10 `}>
          <Text style={tw`mt-8 mb-2 text-white`}>Email Address</Text>
          <TextInput
            placeholder="Enter the email id"
            style={tw` px-4   bg-white rounded-md h-12 `}
            onChangeText={(val) => setEmail(val.trim())}
          />
          <Text style={tw`mt-8 mb-2 text-white`}>Password</Text>
          <TextInput
            placeholder="Password "
            secureTextEntry
            style={tw` px-4   bg-white rounded-md h-12 `}
            onChangeText={(val) => setPassword(val.trim())}
          />
          <Text style={tw`mt-8 mb-2 text-white`}>Confirm Password</Text>

          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={tw` px-4   bg-white rounded-md h-12 `}
            onChangeText={(val) => setCPassword(val.trim())}

          />
          <TouchableOpacity
            onPress={() => {
              signUphandler();
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.orange,
              height: 45,
              marginTop: 30,
              borderRadius: 7,
            }}
          >
            {isLoading ? (
              <ActivityIndicator color="white" size={33} />
            ) : (
              <Text style={tw`text-white  font-bold  text-lg`}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 32,
            marginBottom: 16,
          }}
          onPress={() => {
            navigator.navigate("login");
          }}
        >
          <Text style={{ color: "#fff" }}>Or sign up with</Text>
        </View>
        <View
          style={{
            width: "100%",
            flex: 1,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 250,
              borderRadius: 10,
              border: 2,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 10,
              paddingHorizontal: 75,
              paddingVertical: 10,
            }}
          >
            <TouchableOpacity
              style={{
                height: 28,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: 1,
                borderColor: "white",
              }}
              onPress={handleGoogleLogin}
            >
              <AntIcon name="google" color="white" size={25} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 28,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handleFBLogin}
            >
              <AntIcon name="facebook-square" color="white" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <LoginButton
    onLoginFinished={
      (error, result) => {
        if (error) {
          alert("login has error: " + result.error);
        } else if (result.isCancelled) {
          alert("login is cancelled.");
        } else {

          AccessToken.getCurrentAccessToken().then(
            (data) => {
              let accessToken = data.accessToken
              alert(accessToken.toString())

              const responseInfoCallback = (error, result) => {
                if (error) {
                  console.log(error)
                  alert('Error fetching data: ' + error.toString());
                } else {
                  console.log(result)
                  alert('Success fetching data: ' + result.toString());
                }
              }

              const infoRequest = new GraphRequest(
                '/me',
                {
                  accessToken: accessToken,
                  parameters: {
                    fields: {
                      string: 'email,name,first_name,middle_name,last_name'
                    }
                  }
                },
                responseInfoCallback
              );

              // Start the graph request.
              new GraphRequestManager().addRequest(infoRequest).start()

            }
          )

        }
      }
    }
    onLogoutFinished={() => alert("logout.")}/> */}
        <View style={styles.myCenter}>
          <View
            style={[tw`flex-row justify-center items-center`, styles.myCenter]}
          >
            <Text style={tw`text-white`}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigator.navigate("login")}>
              <Text style={tw`text-white ml-2 text-xl underline`}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.container}>
      {showUserInfo()}
      <Button 
        title={accessToken ? "Get User Data" : "Login"}
        onPress={accessToken ? getUserData : () => { promptAsync({useProxy: false, showInRecents: true}) }}
      />      
    </View> */}
  
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUP;

const styles = StyleSheet.create({
  gradientBox: {
    width: "100%",
    height: "100%",
    paddingTop: 5,
  },
  myCenter: {
    width: "100%",
    flex: 1,
    marginTop: 4,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 50,
    height: 50
  }
});
