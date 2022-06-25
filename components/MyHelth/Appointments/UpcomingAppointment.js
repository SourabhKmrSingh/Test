import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import COLORS from "../../../constants/color";
import Appointmentcard from "../AppointmentCard";

const data = ["ok", "hi", "hello"];

const Upcomingappointment = () => {
  return (
    <SafeAreaView>
      <View
        style={[
          tw`py-14`,
          { backgroundColor: COLORS.appBackground, height: 600 },
        ]}
      >
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
          <Text style={[tw`text-white     text-lg`]}>Book New Appointment</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Today's Appointment</Text>
        {data.map((item, index) => {
          return (
            <View key={index}>
              <Appointmentcard />
            </View>
          );
        })}

        <Text style={styles.heading}>Tomorrow’ Appointment</Text>
        {data.map((item, index) => {
          return (
            <View key={index}>
              <Appointmentcard key={index} />
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#0E58C7",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default Upcomingappointment;
