import { useNavigation } from "@react-navigation/native";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { auth } from "../../config/firebase";
import COLORS from "../../constants/color";
import AwesomeAlert from "react-native-awesome-alerts";

const ResetLink = () => {
  const navigation = useNavigation();
  const [isSuccess, setIsSuccess] = useState(0);
  const [isLoading, setIsLoading] = useState(0);
  const [email, setEmail] = useState("");

  const hideAlert = () => {
    setIsSuccess(0);
  };

  const resetPasswordLink = () => {
    setIsLoading(1);
    if (!email) {
      Alert.alert("Required*", "Email Input is Empty");
      setIsLoading(0);

      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(0);
        setIsSuccess(1);
      })
      .catch((error) => {
        if (error.code == "auth/user-not-found") {
          Alert.alert("Error", "User not found");
        }
        setIsLoading(0);
      });

    // sendPasswordResetEmail(auth,"ompra.rox@gmail.com")
  };
  return (
    <SafeAreaView style={tw`h-full p-0`}>
      <AwesomeAlert
        show={isSuccess}
        showProgress={false}
        title="Success"
        message="Reset Password Link has been sent to mail!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        cancelText="No, cancel"
        confirmText="Login"
        confirmButtonColor="#37AADD"
        onCancelPressed={() => {
          hideAlert();
        }}
        onConfirmPressed={() => {
          hideAlert();
          navigation.navigate("login");
        }}
        cancelButtonStyle={styles.padding}
      />
      <ImageBackground
        source={require("../.././assets/gradient2.jpg")}
        resizeMode="cover"
        style={[
          tw`w-full pt-14 h-12 flex justify-between `,
          {
            flex: 1,
            justifyContent: "space-between",
            height: "100%",
          },
        ]}
      >
        <View style={tw`h-1/3  `}>
          <Text style={tw`text-white  text-2xl font-bold pl-10`}>
            Please Enter Email Address
          </Text>
          <Text style={tw`text-white  text-2xl font-bold px-10`}>
            to get reset Link
          </Text>
        </View>
        <View style={tw`  h-1/3 text-white px-10 -mt-12 `}>
          <Text style={tw` text-white mb-3 `}>Email Address</Text>
          <TextInput
            placeholder="Enter Email Address"
            style={tw` px-4   bg-white rounded-md h-12 `}
            value={email}
            onChangeText={(val) => setEmail(val)}
          />

          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.orange,
              height: 45,
              marginTop: 30,
              borderRadius: 7,
            }}
            onPress={() => {
              if(!isLoading)
              resetPasswordLink();
            }}
          >
            {isLoading ? (
              <ActivityIndicator color="white" size={33} />
            ) : (
              <Text style={tw`text-white  font-bold  `}>Send Code</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.myCenter}>
          <View
            style={[tw`flex-row justify-center items-center`, styles.myCenter]}
          >
            <Text style={tw`text-white`}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={tw`text-white ml-2 text-xl underline`}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  myCenter: {
    width: "100%",
    flex: 1,
    marginTop: 14,
    alignItems: "center",
  },
  alreadyAccount: {
    justifyContent: "center",
  },
  padding: {
    paddingBottom: 100,
  },
});

export default ResetLink;
