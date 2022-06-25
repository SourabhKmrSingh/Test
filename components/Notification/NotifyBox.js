import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useRecoilState } from "recoil";
import { allNotificationRecoil } from "../../utils/reoil-atoms";
import * as Notification from "expo-notifications";

const Notifybox = ({ title, index, data }) => {
  const [allNotifications, setAllNotifications] = useRecoilState(
    allNotificationRecoil
  );

  const notifyRemoveHandler = async () => {
    let array = [];
    allNotifications.map((item, myIndex) => {
      if (index != myIndex) {
        array.push(item);
      }
    });
    setAllNotifications(array);
    await Notification.dismissNotificationAsync(data.request.identifier);
    await AsyncStorage.setItem("@notification_key", JSON.stringify(array));
  };
  return (
    <View>
      <View>
        <Text
          style={{
            color: "#78849E",
            marginBottom: 7,
          }}
        >
          Task
        </Text>
      </View>

      <LinearGradient
        colors={["#37AADD", "#1F64CC"]}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 10,
          height: 120,
          marginBottom: 22,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            {title}
          </Text>
          <TouchableOpacity onPress={notifyRemoveHandler}>
            <Icon name="cross" size={22} color="white" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            marginTop: 12,
          }}
        >
          I can achieve anything if I put my mind on it achieve anything if I
          put my mind on.
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Notifybox;
