import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const Sideeffectscard = () => {
  return (
    <View style={styles.mainBox}>
      <View style={{
          flexDirection:"row",
          alignItems:"center"
      }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width={9.134} height={10.527}>
          <Path
            fill="#2e5b9f"
            d="M7.143 1.29a2.368 2.368 0 0 0-3.277.696L1.286 5.96A2.369 2.369 0 1 0 5.26 8.54l2.58-3.972a2.368 2.368 0 0 0-.697-3.277zM5.414 5.816 3.712 4.711l1.29-1.987a1.015 1.015 0 1 1 1.702 1.105z"
            data-name="Icon awesome-pills"
          />
        </Svg>
        <Text style={styles.title}>Adatacept 100mg</Text>
      </View>
      <Text style={styles.time}>Reported on 12/02/2021</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#F0F6FA",
    elevation:1
  },
  title: {
    color: "#2E5B9F",
    alignItems:"center",
    marginLeft:5
  },
  time: {
    color: "#1E64CC",
    fontSize: 10,
    marginTop: 10,
    marginLeft:15

  },
});

export default Sideeffectscard;
