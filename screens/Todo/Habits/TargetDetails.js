import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../../constants/color";

const Targetdetails = () => {
  const Navigator = useNavigation();
  return (
    <SafeAreaView style={styles.mainBox}>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={[
            tw`text-white `,
            {
              fontSize: 20,
              fontWeight: "700",
            },
          ]}
        >
          {" "}
          Set Target
        </Text>
        <Text
          style={[
            tw`text-white `,
            {
              fontSize: 16,
              lineHeight: 30,
              marginTop: 15,
              marginLeft: 5,
            },
          ]}
        >
          Do not worry these things happen. The most important part is the
          introspection of the episode; accept it and learn from that mistake
        </Text>

        <Text
          style={{
            fontSize: 18,
            marginTop: 75,
            fontWeight: "700",
            color: "white",
          }}
        >
          How you want to do this ?
        </Text>
        <Text
          style={[
            tw`text-white `,
            {
              marginTop: 15,
              fontSize: 16,
              lineHeight: 30,
              marginBottom: 10,
              paddingRight: 10,
            },
          ]}
        >
          <Text
            style={{
              fontWeight: "700",
            }}
          >
            YES
          </Text>{" "}
          or{" "}
          <Text
            style={{
              fontWeight: "700",
            }}
          >
            NO
          </Text>{" "}
          these things happen. The most important part
        </Text>
        <Text
          style={[
            tw`text-white `,
            {
              fontSize: 16,
              lineHeight: 30,
              marginTop: 5,
            },
          ]}
        >
          {" "}
          <Text
            style={{
              fontWeight: "700",
            }}
          >
            By Value{" "}
          </Text>{" "}
          ntrospection of the episode; accept it and learn from that mistake
        </Text>
      </View>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 45,
          width: "100%",
          marginTop: 30,
          borderRadius: 7,
          paddingVertical: 2,
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          borderTopWidth: 1,
          borderColor: COLORS.borderColor,
          height: 80,
        }}
        onPress={() => Navigator.goBack()}
      >
        <Icon name="cross" color="white" size={22} />
        <Text
          style={[
            tw` text-white  text-lg`,
            {
              fontWeight: "700",
              color: "white",
              marginLeft: 5,
            },
          ]}
        >
          Close
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: "#102646",
    width: "100%",
    height: "100%",
    paddingTop: StatusBar.currentHeight + 30,
  },
});

export default Targetdetails;
