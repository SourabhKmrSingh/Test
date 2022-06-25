import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import COLORS from "../../constants/color";
import tw from "tailwind-react-native-classnames";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Searchbar } from "react-native-paper";
import LocationLogo from "../Svgs/LocationLogo";
import Calender from "../Svgs/Calendar";
import DoctorsCard from "../../components/MyHelth/DoctorsCard";
import Explorefooter from "../../components/Explore/ExploreFooter";
const DoctorsList = () => {
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: COLORS.appBackground,
          display: "flex",
          flexDirection: "column",
          flex: 1,

          justifyContent: "space-between",
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: height - 70,
          marginBottom: 55,
        }}
      >
        <LinearGradient
          colors={["#37AADD", "#1F64CC"]}
          style={{
            width: width,
            height: 156,
            paddingTop: 90,
            paddingHorizontal: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            Search
          </Text>
        </LinearGradient>
        <View style={[tw`px-4`, {}]}>
          <Searchbar
            style={{
              borderRadius: 10,
              marginTop: 70,
            }}
            placeholder="Doctor, Specialities …   "
          />
          <Searchbar
            style={{
              borderRadius: 10,
              marginTop: 20,
            }}
            placeholder="Select Area"
            icon={LocationLogo}
          />
          <Searchbar
            style={{
              borderRadius: 10,
              marginTop: 20,
            }}
            placeholder="Select Date"
            icon={Calender}
          />

          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f89140",
              height: 45,
              width: "100%",
              marginTop: 30,
              borderRadius: 7,
            }}
          >
            <Text style={[tw`text-white     text-lg`]}>Search</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            tw`px-4`,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
            },
          ]}
        >
          <Text style={{ fontSize: 16 }}>All Specialities</Text>
          <Icon
            name="equalizer"
            size={24}
            style={{
              transform: [{ rotate: "90deg" }],
            }}
          />
        </View>
        <View style={tw`px-4 mt-6`}>
          <DoctorsCard />
        </View>
        <View style={tw`px-4 mt-6`}>
          <DoctorsCard />
        </View>
        <View style={tw`px-4 mt-6`}>
          <DoctorsCard />
        </View>
        <View style={tw`px-4 mt-6`}>
          <DoctorsCard />
        </View>
      </ScrollView>
      <Explorefooter />
    </SafeAreaView>
  );
};

export default DoctorsList;
