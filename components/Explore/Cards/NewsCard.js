import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AntIcon from "react-native-vector-icons/AntDesign";
import FonIcon from "react-native-vector-icons/Fontisto";

const Newscard = ({ title, details }) => {
  return (
    <View style={styles.cardBox}>
      <View style={styles.headBox}>
        <View style={styles.profileSec}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={styles.name}>Jerome Gaveau</Text>
            <Text style={styles.time}>8 Nov</Text>
          </View>
        </View>

        <Icon name="keyboard-arrow-down" size={22} color="#78849E" />
      </View>
      <View>
        <Text style={styles.post}>{details}</Text>
      </View>
      <View style={styles.cardFooter}>
        <AntIcon name="sharealt" size={18} color="#78849E" />

        <View style={styles.likeCommBox}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <Text style={styles.likeCommResult}>420</Text>
            <FonIcon name="commenting" size={18} color="#78849E" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.likeCommResult}>428</Text>
            <AntIcon name="hearto" size={18} color="#78849E" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginTop: 18,
  },
  headBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileSec: {
    flexDirection: "row",
  },
  name: {
    color: "#454F63",
  },
  time: {
    color: "#454F63",
    opacity: 0.5,
    fontSize: 11,
    marginTop: 5,
  },
  post: {
    color: "#5F789D",
    marginVertical: 15,
    lineHeight: 24,
    fontSize: 15,
  },
  cardFooter: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  likeCommBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeCommResult: {
    color: "#78849E",
    fontSize: 12,
    fontWeight: "600",
    marginRight: 5,
  },
});

export default Newscard;
