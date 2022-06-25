import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useRecoilState } from "recoil";
import tw from "tailwind-react-native-classnames";
import { updateUser, UpdateUserById } from "../../actions/User/User";
import Explorefooter from "../../components/Explore/ExploreFooter";
import ProfileHeader from "../../components/Profile/Cards/ProfileHeader";
import COLORS from "../../constants/color";
import { user, userDataRecoil } from "../../utils/reoil-atoms";
import * as SecureStore from "expo-secure-store";

const AccountSettings = ({ route }) => {
  const Navigator = useNavigation();
  const [userDataProfile, setUserDataProfile] = useRecoilState(userDataRecoil);
  const [isLoading, setIsLoading] = useState(0);
  const [inputVals, setInputVals] = useState(userDataProfile);

  const inputHandler = (name, value) => {
    setInputVals({
      ...inputVals,
      [name]: value,
    });
  };

  const saveUserData = () => {
    if (isLoading) return;
    setIsLoading(1);
    setUserDataProfile(inputVals);
    updateUser(inputVals).then((data, err) => {
      if (err) {
        setIsLoading(0);
        return;
      }
      if (data) {
        setIsLoading(0);
        SecureStore.setItemAsync("user_key", JSON.stringify([data])).then(
          () => {
            setIsLoading(0);
            setUserDataProfile(data);
            Navigator.goBack();
          }
        );
      }
    });
  };
  return (
    <SafeAreaView >
      <View
        style={[
          tw`w-full h-full `,
          {
            backgroundColor: COLORS.appBackground,
          },
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false} >
          <ProfileHeader title="Account Settings" />

          <View
            style={[
              tw`flex-row justify-between mt-7 mb-3 `,
              { paddingHorizontal: 15 },
            ]}
          >
            <Text
              style={[
                tw`font-bold	`,
                {
                  color: "#0E58C7",
                  fontSize: 18,
                },
              ]}
            >
              Personal Details
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: 15,
              borderBottomWidth: 1,
              borderColor: COLORS.borderColor,
              paddingBottom: 25,
            }}
          >
            <View style={styles.singleItem}>
              <Text>User name</Text>
              <TextInput
                value={inputVals?.name}
                style={styles.textInput}
                onChangeText={(val) => {
                  inputHandler("name", val);
                }}
              />
            </View>

            <View style={styles.singleItem}>
              <Text>Mobile</Text>
              <TextInput
                style={styles.textInput}
                value={inputVals?.mobile}
                onChangeText={(val) => {
                  inputHandler("mobile", val);
                }}
              />
            </View>

            <View style={styles.singleItem}>
              <Text>Email Address</Text>
              <TextInput
                value={inputVals?.email}
                style={styles.textInput}
                onChangeText={(val) => {
                  inputHandler("email", val);
                }}
              />
            </View>

            <View style={styles.singleItem}>
              <Text>Location</Text>
              <TextInput
                style={styles.textInput}
                value={inputVals?.address}
                onChangeText={(val) => {
                  inputHandler("address", val);
                }}
              />
            </View>

            <View style={styles.singleItem}>
              <Text>Password</Text>
              <View  style={[styles.passwordBox,{
                height:58
              }]}>
                <Text>********</Text>
                <TouchableOpacity><Text style={{
                  color:"blue",
                  textDecorationLine : "underline",
                  fontWeight:"700"
                }}></Text></TouchableOpacity>
                

                

              </View>
            </View>
          </View>

          <View style={{ paddingHorizontal: 15 ,paddingBottom:30 }}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f89140",
                height: 45,
                width: "100%",
                marginTop: 30,
                borderRadius: 7,
                paddingVertical: 2,
                
              }}
              onPress={saveUserData}
            >
              {isLoading ? (
                <ActivityIndicator size={33} color="#fff" />
              ) : (
                <Text
                  style={[
                    tw` text-white  text-lg`,
                    {
                      fontWeight: "700",
                    },
                  ]}
                >
                  Save Changes
                </Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#0E58C7",
                height: 45,
                width: "100%",
                marginTop: 30,
                borderRadius: 7,
                paddingVertical: 2,
              }}
              onPress={() => Navigator.goBack()}
            >
              <Text
                style={[
                  tw` text-white  text-lg`,
                  {
                    fontWeight: "700",
                    color: "#0E58C7",
                  },
                ]}
              >
                Cancel and Go back
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* <Explorefooter /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: "#1C1C1C",
    opacity: 0.6,
    fontSize: 16,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,
    elevation: 20,
  },
  passwordBox:{
    color: "#1C1C1C",
    opacity: 0.6,
    fontSize: 16,
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 5,
    elevation: 20,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
    
  },
  singleItem: {
    marginVertical: 10,
  },
});

export default AccountSettings;
