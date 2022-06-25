import React from "react";
import {
  View,
  StyleSheet,
  elevation,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import tw from "tailwind-react-native-classnames";
import { getFormattedDate } from "../../../utils/utils";

const DoneRemind = ({ name, data, isEqual }) => {
  return (
    <View>
      <Text
        style={{
          color: "#78849E",
          fontWeight: "700",
        }}
      >
        {data ? getFormattedDate(data?.createdAt) : "Jan 10-12:30 PM"}
        {/* Jan 10-12:30 PM */}
      </Text>

      <View
        style={{
          borderLeftWidth: 1.5,
          borderColor: "blue",
          width: "100%",
          paddingBottom: 45,
          marginLeft: 10,
          marginVertical: 4,
        }}
      >
        <View elevation={15} style={styles.detailsBox}>
          <View style={styles.contentBox}>
            <Text style={[styles.contentText]}>
              {data.type.charAt(0).toUpperCase() + data.type.slice(1)}
            </Text>
            <View style={tw`flex-row justify-center items-center my-5 `}>
              <Icon3 name="pill" size={12} color="#254069" />
              <Text
                style={[
                  styles.contentText,
                  {
                    color: "#254069",
                    marginLeft: 5,
                  },
                ]}
              >
                {name ? name : "Abatacept 100mg"}
              </Text>
            </View>

            <View style={styles.daysBox}>
              <Text style={styles.textBox}>08/10 pills</Text>
              <Text style={styles.textBox}>6/7 days</Text>
            </View>
          </View>

          <TouchableOpacity onPress={isEqual} style={styles.iconBox}>
            <Icon name="done" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentText: {
    fontSize: 16,
    color: "#2E5B9F",
    fontWeight: "700",
  },
  detailsBox: {
    backgroundColor: "#F0F6FA",
    width: "90%",
    minHeight: 120,
    marginHorizontal: 10,
    borderRadius: 12,
    marginLeft: 20,
    marginTop: 8,
    paddingHorizontal: 18,
    paddingVertical: 18,
    shadowColor: "#455B6314",
    shadowOpacity: 1,
    shadowRadius: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contentBox: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
  },
  iconBox: {
    backgroundColor: "#0EC76B",
    borderRadius: 100,
    padding: 8,
  },
  daysBox: {
    flexDirection: "row",
  },
  textBox: {
    color: "#254069",
    marginLeft: 15,
    fontWeight: "700",
  },
});

export default DoneRemind;
