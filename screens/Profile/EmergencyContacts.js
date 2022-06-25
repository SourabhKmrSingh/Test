import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useRecoilState } from "recoil";
import tw from "tailwind-react-native-classnames";
import Explorefooter from "../../components/Explore/ExploreFooter";
import ProfileHeader from "../../components/Profile/Cards/ProfileHeader";
import COLORS from "../../constants/color";
import { user, userDataRecoil } from "../../utils/reoil-atoms";

const demodata = ["Father", "Friend1", "Friend2", "Friend3"];
const EmergencyContacts = () => {
  const Navigator = useNavigation();
  // create a usestate to store the data
  const [userDataProfile, setUserDataProfile] = useRecoilState(userDataRecoil);
  // creating a contacts data
  const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   AsyncStorage.getItem("user_key").then((res) => {
  //     setUserDataProfile(JSON.parse(res));
  //     setContacts(JSON.parse(res).contacts);
  //   });
  // }, []);

  return (
    <SafeAreaView
      style={[
        tw`w-full h-full`,
        {
          backgroundColor: COLORS.appBackground,
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader title="Emergency Contacts" />

        <View
          style={[
            tw`flex-row justify-between mt-7 mb-3 `,
            { paddingHorizontal: 15 },
          ]}
        >
          <Text
            style={[
              tw`font-medium	`,
              {
                color: "#0E58C7",
                fontSize: 18,
              },
            ]}
          >
            Contacts
          </Text>
          <TouchableOpacity
            onPress={() =>
              Navigator.navigate("profilehome", {
                screen: "addcontacts",
              })
            }
          >
            <Text
              style={[
                tw`font-medium`,
                {
                  color: "#FF9241",
                },
              ]}
            >
              + Add New
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          {userDataProfile?.contacts?.map &&
            userDataProfile.contacts.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[tw`bg-white  my-2 rounded-md p-3`]}
                  onPress={() =>
                    Navigator.navigate("profilehome", {
                      screen: "singlecontacts",
                      params: {
                        contact: item,
                        index,
                      },
                    })
                  }
                >
                  {console.log("single", item)}
                  <Text style={[tw`font-medium`, { color: "#1E64CC" }]}>
                    {item.name}
                  </Text>
                  <Text style={[tw`mt-2 text-sm`, { color: "#1E64CC" }]}>
                    {item.mobile}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
      <Explorefooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default EmergencyContacts;
