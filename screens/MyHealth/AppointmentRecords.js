import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Appointmentcard from "../../components/MyHelth/AppointmentCard";
import { Searchbar } from "react-native-paper";
import COLORS from "../../constants/color";
import Medicalhistory from "../../components/MyHelth/MedicalHistory";
import { useRecoilState } from "recoil";
import { value } from "../../utils/reoil-atoms";
import { useNavigation } from "@react-navigation/native";

const data = ["zenquip", "zenquip"];
const Appointmentrecords = () => {
  const Navigator = useNavigation();
  const { weight, height } = Dimensions.get("screen");

  return (
    <View
      style={[
        tw``,
        {
          backgroundColor: COLORS.appBackground,
          paddingBottom: 70,
          paddingHorizontal: 15,
        },
      ]}
    >
      <ScrollView
        style={
          {
            // marginBottom:40
          }
        }
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View
            style={{
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <Searchbar
              style={{
                borderRadius: 10,
              }}
              placeholder="Search"
            />
          </View>
          <View style={styles.bottomBorder}>
            <View
              style={[
                tw`flex-row justify-between my-3 mt-5`,
                styles.borderCard,
              ]}
            >
              <View style={tw`flex-row justify-center items-center`}>
                <Text style={styles.heading}>Appointment</Text>
                <View style={styles.totalAppointResult}>
                  <Text style={tw`text-white`}>5</Text>
                </View>
              </View>

              <TouchableOpacity
                style={tw`bg-white rounded-2xl px-8 justify-center items-center py-2`}
                onPress={() => {
                  Navigator.navigate("myhealth", {
                    screen: "allappointment",
                  });
                }}
              >
                <Text
                  style={{
                    color: "#0E58C7",
                  }}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              {data.map((item, index) => {
                return <Appointmentcard key={index} />;
              })}
            </View>

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
              onPress={() =>
                Navigator.navigate("myhealth", { screen: "doctorlist" })
              }
            >
              <Text style={[tw`text-white text-lg`]}>Book New Appointment</Text>
            </TouchableOpacity>
          </View>

          <Medicalhistory />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#1E64CC",
    fontSize: 17,
    fontWeight: "700",
  },
  borderCard: {
    borderTopWidth: 1,
    borderColor: COLORS.borderColor,
    paddingTop: 30,
  },
  totalAppointResult: {
    backgroundColor: "#FE7614",
    width: 25,
    height: 25,
    borderRadius: 20,
    color: "white",

    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 7,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
    paddingBottom: 35,
  },
});

export default Appointmentrecords;
