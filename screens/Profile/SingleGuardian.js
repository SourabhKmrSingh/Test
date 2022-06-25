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
} from "react-native";
import tw from "tailwind-react-native-classnames";
import ProfileHeader from "../../components/Profile/Cards/ProfileHeader";
import COLORS from "../../constants/color";

//  Filter array of objects by id
const filterById = (arr, id) => {
  return arr.filter((item) => item.id === id);
};
const SingleGuardian = () => {
  const Navigator = useNavigation();
  const [userDataProfile, setUserDataProfile] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const inputHandler = (val) => {};
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
                Contact Details
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
                  value={userDataProfile.name}
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
                  value={userDataProfile.mobile}
                  onChangeText={(val) => {
                    inputHandler("mobile", val);
                  }}
                />
              </View>

              <View style={styles.singleItem}>
                <Text>Email Address</Text>
                <TextInput
                  value={userDataProfile.email}
                  style={styles.textInput}
                  onChangeText={(val) => {
                    inputHandler("email", val);
                  }}
                />
              </View>

              <TouchableOpacity
                style={[
                  tw`flex-row justify-between mt-10 mb-3 `,
                  { paddingHorizontal: 15 },
                ]}
              >
                <Text
                  style={[
                    tw`font-bold	`,
                    {
                      color: "#FF9241",
                      fontSize: 18,
                    },
                  ]}
                >
                  Delete Contacts
                </Text>
              </TouchableOpacity>
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
              onPress={() => Navigator.goBack()}
            >
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

export default SingleGuardian;
