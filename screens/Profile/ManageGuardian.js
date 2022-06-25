import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
// import { Image } from 'react-native-web';
import tw from "tailwind-react-native-classnames";
import Explorefooter from "../../components/Explore/ExploreFooter";
import ProfileHeader from "../../components/Profile/Cards/ProfileHeader";
import COLORS from "../../constants/color";

const demodata = ["Father", "Friend1", "Friend2", "Friend3"];

const Manageguardian = () => {
  return (
    <View
      style={[
        tw`w-full h-full`,
        {
          backgroundColor: COLORS.appBackground,
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader title="Guardian Profile" />

        <View
          style={[
            tw`flex-row justify-between mt-7 mb-3 `,
            { paddingHorizontal: 10 },
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
            My Gaurdians
          </Text>
          <Text
            style={[
              tw`font-medium`,
              {
                color: "#FF9241",
              },
            ]}
          >
            
            + Invite Guardian
          </Text>
        </View>

        <View style={{ paddingHorizontal: 10 }}>
          {demodata.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[tw`bg-white  my-2 rounded-md p-3`]}
              >
                
                <Text style={[tw`font-medium`, { color: "#1E64CC" }]}>
                  {item}
                </Text>
                <Text style={[tw`mt-2 text-sm`, { color: "#1E64CC" }]}>
                  +91-2282652314
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <Explorefooter />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Manageguardian;
