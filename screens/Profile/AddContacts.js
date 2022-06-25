import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRecoilState } from "recoil";
import tw from "tailwind-react-native-classnames";
import { updateUser, updateUserContactById } from "../../actions/User/User";
import ProfileHeader from "../../components/Profile/Cards/ProfileHeader";
import COLORS from "../../constants/color";
import { user, userDataRecoil } from "../../utils/reoil-atoms";
import * as SecureStore from "expo-secure-store";

const AddContacts = () => {
  const Navigator = useNavigation();

  const [isLoading, setIsLoading] = useState(0);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [userProfile, setUserProfile] = useRecoilState(userDataRecoil);

  const inputHandler = (name, val) => {
    if (name == "mobile") {
      if (val.length > 10) {
        return;
      }
    }

    setNewContact({
      ...newContact,
      [name]: val,
    });
  };

  const AddContacts = () => {
    setIsLoading(1);
    if (!newContact.name) {
      Alert.alert("Required*", "Name Input is Empty");
      setIsLoading(0);
      return;
    }
    // if (!newContact.email) {
    //   Alert.alert("Required*", "Email Input is Empty");
    //   setIsLoading(0);
    //   return;
    // }
    if (!newContact.mobile) {
      Alert.alert("Required*", "Mobile Input is Empty");
      setIsLoading(0);
      return;
    }
    const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (newContact.email && !newContact.email.match(emailRegex)) {
      Alert.alert("Invalid Email", "Please enter a valid email");
      setIsLoading(0);
      return;
    }
    // check is newContact.name is already in userProfile.contacts
    // if(userProfile.contacts.find(contact => contact.name === newContact.name)){
    //   Alert.alert("Required*", "Name is already in your contacts");
    //   setIsLoading(0);
    //   return;
    // }
    // check is newContact.email is already in userProfile.contacts
    if (
      newContact.email &&
      userProfile.contacts.find((contact) => contact.email === newContact.email)
    ) {
      Alert.alert("Error", "Email is already in your contacts");
      setIsLoading(0);
      return;
    }
    // check is newContact.mobile is already in userProfile.contacts
    if (
      userProfile.contacts.find(
        (contact) => contact.mobile === newContact.mobile
      )
    ) {
      Alert.alert("Error", "Mobile is already in your contacts");
      setIsLoading(0);
      return;
    }

    setUserProfile({
      ...userProfile,
      contacts: [...userProfile.contacts, newContact],
    });

    let userArray = {
      ...userProfile,
      contacts: [...userProfile.contacts],
    };

    updateUserContactById(userProfile._id, userArray).then((data, err) => {
      console.log(data);
      SecureStore.setItemAsync("user_key", JSON.stringify([userArray])).then(
        () => {
          setNewContact({
            name: "",
            email: "",
            mobile: "",
          });
          setIsLoading(0);
          Navigator.goBack();
        }
      );
    });
  };
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <ScrollView
        style={{
          height: "100%",
          paddingBottom: 15,
          backgroundColor: COLORS.appBackground,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            paddingBottom: 55,
          }}
        >
          <View>
            <ProfileHeader title="Emergency Contacts" />
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
                Add Contact
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                paddingBottom: 25,
              }}
            >
              <View style={styles.singleItem}>
                <Text>User name</Text>
                <TextInput
                  value={newContact.name}
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
                  value={newContact.mobile}
                  onChangeText={(val) => {
                    inputHandler("mobile", val);
                  }}
                />
              </View>

              <View style={styles.singleItem}>
                <Text>Email Address</Text>
                <TextInput
                  value={newContact.email}
                  style={styles.textInput}
                  onChangeText={(val) => {
                    inputHandler("email", val);
                  }}
                />
              </View>
            </View>
          </View>

          <View style={{ paddingHorizontal: 15 }}>
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
              onPress={AddContacts}
            >
              {isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text style={[tw`text-xl font-bold text-white`]}>
                  Add Contact
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
              onPress={() => {
                setNewContact({
                  name: "",
                  email: "",
                  mobile: "",
                });
                Navigator.goBack();
              }}
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
        </View>
      </ScrollView>
    </View>
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
  singleItem: {
    marginVertical: 10,
  },
});

export default AddContacts;
