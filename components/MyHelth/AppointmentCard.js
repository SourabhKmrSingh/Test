import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import InfoIcon from "../../screens/Svgs/InfoIcon";
import LocationLogo from "../../screens/Svgs/LocationLogo";
import ResheduleIcon from "../../screens/Svgs/ResheduleIcon";

const Appointmentcard = () => {
  return (
    <View style={tw`my-3`}>
      <Text style={styles.dateText}>JAN 10 - 12:30 PM</Text>
      <TouchableOpacity style={styles.card}>
        <View style={styles.singleRow}>
          <View style={tw`flex-row items-center`}>
            <Text
              style={{
                color: "#2E5B9F",
                fontSize: 14,
                fontWeight: "700",
                marginRight: 12,
              }}
            >
              Dr. Clara Odding
            </Text>
            <InfoIcon />
          </View>
          <View style={tw`flex-row items-center`}>
            <ResheduleIcon />
            <Text
              style={{
                color: "#1E64CC",
                fontSize: 14,
                fontWeight: "700",
                marginLeft: 5,
              }}
            >
              Reschedule
            </Text>
          </View>
        </View>

        <View style={[tw`mt-3 `, styles.singleRow]}>
          <View style={tw`flex-row`}>
            <Text
              style={{
                color: "#254069",
                fontSize: 16,
              }}
            >
              Thu, 09 Apr
            </Text>
            <Text
              style={{
                color: "#254069",
                fontSize: 16,
                fontWeight: "700",
                marginLeft: 8,
              }}
            >
              08:00
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#2AC052",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Confirmed
            </Text>
          </View>
        </View>

        <View style={[tw`mt-3 `, styles.singleRow]}>
          <View style={tw`flex-row items-center`}>
            <LocationLogo />
            <Text style={styles.location}>
              2 Rue de Ermesinde Frisange - Luxembourg 3 km
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dateText: {
    color: "#78849E",
    opacity: 0.57,
    fontSize: 12,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#F0F6FA",
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  singleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  location: {
    color: "#1C1C1C",
    opacity: 0.4,
    width: "73%",
    fontSize: 14,
    marginLeft: 17,
  },
});

export default Appointmentcard;
