import React from "react";
import { View, StyleSheet, ImageBackground, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import SplashSvg from "./Svgs/SplashSvg";

const Splashscreen = () => {
  return (
    <View style={styles.mainBox}>
      <ImageBackground
        source={require(".././assets/gradient.jpg")}
        resizeMode="cover"
        style={styles.imageBox}
      >
        <View style={styles.textBox}>
          <Text style={styles.appName}>Zenquip</Text>
        </View>
        <SplashSvg />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    width: "100%",
    height: "100%",
  },
  imageBox: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  textBox: {
    marginBottom: 120,
  },
  appName: {
    fontSize: 50,
    fontWeight: "700",
    color: "white",
  },
});

export default Splashscreen;
