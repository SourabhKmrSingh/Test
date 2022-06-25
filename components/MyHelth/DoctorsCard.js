import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import COLORS from "../../constants/color";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import React from "react";
import ThreeDots from "../../screens/Svgs/ThreeDots";
import FilledStars from "../../screens/Svgs/FilledStars";
import BlankStars from "../../screens/Svgs/BlankStars";
import { useNavigation } from "@react-navigation/native";

const DoctorsCard = () => {
  const Navigator = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        Navigator.navigate("myhealth", {
          screen: "singledoctor",
        })
      }
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../../assets/doctor.png")}
          style={[{ width: 76, height: 76, resizeMode: "contain" }]}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 15,
          }}
        >
          <Text style={{ color: "#2E5B9F", fontSize: 14, fontWeight: "700" }}>
            Dr. Martin Pilier
          </Text>
          <Text
            style={{
              color: "#1C1C1C",
              opacity: 0.4,
              marginTop: 5,
              fontSize: 12,
            }}
          >
            Exp - 12yrs{" "}
          </Text>
          <Text style={{ color: "#1C1C1C", opacity: 0.4, fontSize: 12 }}>
            Anna Nagar Chennai - 2 km
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 8,
            }}
          >
            <FilledStars />
            <FilledStars />
            <FilledStars />
            <BlankStars />
            <BlankStars />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            position: "absolute",
            right: 10,
            top: 10,
          }}
        >
          <ThreeDots />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorsCard;
