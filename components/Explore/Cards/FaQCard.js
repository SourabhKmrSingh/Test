import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../../constants/color";

const FaQCard = () => {
  const Navigator = useNavigation();
  return (
    <View style={styles.singleFaq}>
      <View style={styles.section}>
        <Text
          style={{
            color: "black",
            opacity: 0.4,
          }}
        >
          18/02/2020
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Icon name="comment-o" size={18} color="#02020259" />
          <Text
            style={{
              color: "black",
              opacity: 0.4,
              marginLeft: 5,
            }}
          >
            20
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.section,
          {
            marginTop: 2,
          },
        ]}
      >
        <Text
          style={{
            color: "#454F63",
            fontWeight: "500",
          }}
        >
          Alcool - Tabac Drogues
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
          }}
          onPress={() =>
            Navigator.navigate("explore", {
              screen: "singlefaq",
            })
          }
        >
          <Text
            style={{
              color: "#1E64CC",
              fontWeight: "500",
            }}
          >
            See More
          </Text>
          <Icon2 name="arrow-forward-ios" size={18} color="#1E64CC" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singleFaq: {
    marginTop: 17,
    borderBottomWidth: 1.4,
    borderColor: COLORS.borderColor,
    paddingBottom: 12,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },
});

export default FaQCard;
