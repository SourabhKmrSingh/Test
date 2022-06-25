import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { addOtp } from "../../actions/Auth/Otp";
import COLORS from "../../constants/color";
import { gradientImage2 } from "../../constants/images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mobileNumberRecoil } from "../../utils/reoil-atoms";
import { useRecoilState } from "recoil";

const Otplogin = () => {
  const navigation = useNavigation();

  const [number, setNumber] = useState("");

  const [isLoading, setIsLoading] = useState(0);
  const [mobNum, setMobNum] = useRecoilState(mobileNumberRecoil);

  const loginHandler = async () => {
    if (isLoading) return;
    setMobNum(number);
    if (number.length < 10) {
      Alert.alert("Error", "Enter Correct Number");
      return;
    }
    setIsLoading(1);
    const generated_otp = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

    // addOtp(generated_otp).then(async (data) => {
    //   await AsyncStorage.setItem("@otpcode_key", data._id)
    //     setIsLoading(0);
    //     navigation.navigate("otpverify");

    // }).catch((err)=>{
    //   console.log("err",err)
    // })

    const response = await fetch(
      `http://digimate.airtel.in:15181/BULK_API/SendMessage?loginID=harshlyg_hsi&password=harshlyg@123&mobile=${number}&text=Hey! This is Your Otp ${generated_otp}&senderid=DGMATE&DLT_TM_ID=1001096933494158&DLT_CT_ID=&DLT_PE_ID=1001751517438613463&route_id=DLT_SERVICE_IMPLICT&Unicode=0&camp_name=harshlyg_u`
    );
    if (response) {
      addOtp(generated_otp).then(async (data) => {
        console.log("Here is Data After login", data);
        AsyncStorage.setItem("@otpcode_key", data._id).then(() => {
          setIsLoading(0);
          navigation.navigate("otpverify");
        });
      });
    }
  };
  return (
    <SafeAreaView style={tw`h-full p-0`}>
      <ImageBackground
        source={gradientImage2}
        resizeMode="cover"
        style={[
          tw`w-full pt-14 h-12 flex justify-between `,
          {
            flex: 3,
            justifyContent: "space-between",
            height: "100%",
          },
        ]}
      >
        <View style={tw`h-1/3  `}>
          <Text style={tw`text-white  text-2xl font-bold px-10`}>Login by</Text>
          <Text style={tw`text-white  text-2xl font-bold px-10`}>
            mobile OTP
          </Text>
        </View>
        <View style={tw`  h-1/3 text-white px-10 -mt-12 `}>
          <Text style={tw` text-white mb-3 `}>Mobile Number</Text>
          <TextInput
            onChangeText={(val) => {
              setNumber(val);
            }}
            keyboardType="numeric"
            placeholder="Enter Number"
            style={tw` px-4   bg-white rounded-md h-12 `}
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
            onPress={loginHandler}
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
});

export default Otplogin;
