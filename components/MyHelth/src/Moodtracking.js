import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Picker,
} from "react-native";
import tw from "tailwind-react-native-classnames";
function Moodtracking(props) {
  const [selectedValue, setSelectedValue] = React.useState("This Week");
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text
          style={[
            tw` font-bold`,
            {
              color: "#1E64CC",
              fontSize: 18,
              marginTop: 30,
            },
          ]}
        >
          Mood Tracking (03)
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            // padding: 10,
            marginTop: 23,
            borderRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <Picker
            selectedValue={selectedValue}
            style={{
              height: 36,
              width: 90,
              border: "none",
              backgroundColor: "#fff",
              fontSize: 14,
              color: "#0E58C7",
            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="This Week" value="This Week" />
            <Picker.Item label="Monthly" value="Monthly" />
            <Picker.Item label="Half-Yearly" value="Half-Yearly" />
          </Picker>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.rect}>
          <View style={styles.mostOfTheTimeRow}>
            <Text style={styles.mostOfTheTime}>Most of the time</Text>
            <Text style={styles.clickToView}>Click to View</Text>
          </View>
          <View style={styles.calmRow}>
            <Text style={styles.calm}>#Calm</Text>
            <Text style={styles.calm1}>#Calm</Text>
            <Text style={styles.calm2}>#Calm</Text>
          </View>
          <View style={styles.groupRow}>
            <View style={styles.group}>
              <View style={styles.rect2Stack}>
                <ImageBackground
                  style={styles.rect2}
                  imageStyle={styles.rect2_imageStyle}
                  source={require("./assets/images/Gradient_Owq1CzO.png")}
                ></ImageBackground>
                <View
                  gradientImage="Gradient_Owq1CzO.png"
                  style={styles.rect3}
                ></View>
              </View>
            </View>
            <View style={styles.rect4Stack}>
              <View
                gradientImage="Gradient_Owq1CzO.png"
                style={styles.rect4}
              ></View>
              <ImageBackground
                style={styles.rect5}
                imageStyle={styles.rect5_imageStyle}
                source={require("./assets/images/Gradient_Owq1CzO.png")}
              ></ImageBackground>
            </View>
            <View style={styles.rect6Stack}>
              <View
                gradientImage="Gradient_Owq1CzO.png"
                style={styles.rect6}
              ></View>
              <ImageBackground
                style={styles.rect7}
                imageStyle={styles.rect7_imageStyle}
                source={require("./assets/images/Gradient_Owq1CzO.png")}
              ></ImageBackground>
            </View>
            <View style={styles.rect8Stack}>
              <View
                gradientImage="Gradient_Owq1CzO.png"
                style={styles.rect8}
              ></View>
              <ImageBackground
                style={styles.rect9}
                imageStyle={styles.rect9_imageStyle}
                source={require("./assets/images/Gradient_Owq1CzO.png")}
              ></ImageBackground>
            </View>
            <View style={styles.rect10Stack}>
              <View
                gradientImage="Gradient_Owq1CzO.png"
                style={styles.rect10}
              ></View>
              <ImageBackground
                style={styles.rect11}
                imageStyle={styles.rect11_imageStyle}
                source={require("./assets/images/Gradient_Owq1CzO.png")}
              ></ImageBackground>
            </View>
          </View>
          <View style={styles.imageStackRow}>
            <View style={styles.imageStack}>
              <Image
                source={require("./assets/images/008-nervous-1.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <Text style={styles.poor}>Poor</Text>
            </View>
            <View style={styles.image1Stack}>
              <Image
                source={require("./assets/images/008-nervous-1.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
              <Text style={styles.poor1}>Poor</Text>
            </View>
            <View style={styles.image2Stack}>
              <Image
                source={require("./assets/images/008-nervous-1.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <Text style={styles.poor2}>Poor</Text>
            </View>
            <View style={styles.image3Stack}>
              <Image
                source={require("./assets/images/008-nervous-1.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
              <Text style={styles.poor3}>Poor</Text>
            </View>
            <View style={styles.image4Stack}>
              <Image
                source={require("./assets/images/008-nervous-1.png")}
                resizeMode="contain"
                style={styles.image4}
              ></Image>
              <Text style={styles.poor4}>Poor</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(233,239,244,1)",
    marginLeft: -30,
  },
  rect: {
    width: 348,
    height: 296,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 13,
    shadowColor: "rgba(198,217,238,1)",
    shadowOffset: {
      height: 4,
      width: 0,
    },
    elevation: 48,
    shadowOpacity: 0.81,
    shadowRadius: 16,
    marginTop: 36,
    marginLeft: 33,
  },
  mostOfTheTime: {
    color: "rgba(30,100,204,1)",
  },
  clickToView: {
    color: "rgba(142,177,229,1)",
    lineHeight: 12,
    fontSize: 12,
    marginLeft: 139,
  },
  mostOfTheTimeRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 17,
    marginRight: 22,
  },
  calm: {
    color: "rgba(30,100,204,1)",
  },
  calm1: {
    color: "rgba(30,100,204,1)",
    marginLeft: 11,
  },
  calm2: {
    color: "rgba(30,100,204,1)",
    marginLeft: 15,
  },
  calmRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 17,
    marginRight: 182,
  },
  group: {
    width: 13,
    height: 150,
  },
  rect2: {
    top: 72,
    left: 0,
    width: 13,
    height: 78,
    position: "absolute",
    borderRadius: 2,
    overflow: "hidden",
  },
  rect2_imageStyle: {},
  rect3: {
    top: 0,
    left: 0,
    width: 13,
    height: 78,
    position: "absolute",
    borderRadius: 2,
    backgroundColor: "rgba(208,208,208,1)",
  },
  rect2Stack: {
    width: 13,
    height: 150,
  },
  rect4: {
    top: 0,
    left: 0,
    width: 13,
    height: 78,
    position: "absolute",
    borderRadius: 2,
    backgroundColor: "rgba(208,208,208,1)",
  },
  rect5: {
    top: 35,
    left: 0,
    width: 13,
    height: 115,
    position: "absolute",
    borderRadius: 2,
    overflow: "hidden",
  },
  rect5_imageStyle: {},
  rect4Stack: {
    width: 13,
    height: 150,
    marginLeft: 38,
  },
  rect6: {
    top: 0,
    left: 0,
    width: 13,
    height: 78,
    position: "absolute",
    borderRadius: 2,
    backgroundColor: "rgba(208,208,208,1)",
  },
  rect7: {
    top: 55,
    left: 0,
    width: 13,
    height: 94,
    position: "absolute",
    borderRadius: 2,
    overflow: "hidden",
  },
  rect7_imageStyle: {},
  rect6Stack: {
    width: 13,
    height: 149,
    marginLeft: 50,
  },
  rect8: {
    top: 0,
    left: 0,
    width: 13,
    height: 100,
    position: "absolute",
    borderRadius: 2,
    backgroundColor: "rgba(208,208,208,1)",
  },
  rect9: {
    top: 72,
    left: 0,
    width: 13,
    height: 78,
    position: "absolute",
    borderRadius: 2,
    overflow: "hidden",
  },
  rect9_imageStyle: {},
  rect8Stack: {
    width: 13,
    height: 150,
    marginLeft: 51,
  },
  rect10: {
    top: 0,
    left: 0,
    width: 13,
    height: 78,
    position: "absolute",
    borderRadius: 2,
    backgroundColor: "rgba(208,208,208,1)",
  },
  rect11: {
    top: 72,
    left: 0,
    width: 13,
    height: 78,
    position: "absolute",
    borderRadius: 2,
    overflow: "hidden",
  },
  rect11_imageStyle: {},
  rect10Stack: {
    width: 13,
    height: 150,
    marginLeft: 57,
  },
  groupRow: {
    height: 150,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 38,
    marginRight: 49,
  },
  image: {
    top: 0,
    left: 5,
    width: 16,
    height: 16,
    position: "absolute",
  },
  poor: {
    top: 15,
    left: 0,
    position: "absolute",

    color: "rgba(30,100,204,1)",
    fontSize: 12,
  },
  imageStack: {
    width: 26,
    height: 29,
  },
  image1: {
    top: 0,
    left: 5,
    width: 16,
    height: 16,
    position: "absolute",
  },
  poor1: {
    top: 15,
    left: 0,
    position: "absolute",

    color: "rgba(30,100,204,1)",
    fontSize: 12,
  },
  image1Stack: {
    width: 26,
    height: 29,
    marginLeft: 24,
  },
  image2: {
    top: 0,
    left: 5,
    width: 16,
    height: 16,
    position: "absolute",
  },
  poor2: {
    top: 15,
    left: 0,
    position: "absolute",

    color: "rgba(30,100,204,1)",
    fontSize: 12,
  },
  image2Stack: {
    width: 26,
    height: 29,
    marginLeft: 38,
  },
  image3: {
    top: 0,
    left: 5,
    width: 16,
    height: 16,
    position: "absolute",
  },
  poor3: {
    top: 15,
    left: 0,
    position: "absolute",

    color: "rgba(30,100,204,1)",
    fontSize: 12,
  },
  image3Stack: {
    width: 26,
    height: 29,
    marginLeft: 38,
  },
  image4: {
    top: 0,
    left: 5,
    width: 16,
    height: 16,
    position: "absolute",
  },
  poor4: {
    top: 15,
    left: 0,
    position: "absolute",

    color: "rgba(30,100,204,1)",
    fontSize: 12,
  },
  image4Stack: {
    width: 26,
    height: 29,
    marginLeft: 43,
  },
  imageStackRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 32,
    marginRight: 43,
  },
});

export default Moodtracking;
