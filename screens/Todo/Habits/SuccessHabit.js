import { useNavigation, StackActions } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import tw from "tailwind-react-native-classnames";
import { getFormattedDate } from "../../../utils/utils";
import MeditationSvg from "../../Svgs/MeditationSvg";

const SuccessHabit = ({ route }) => {
  const Navigator = useNavigation();
  console.log(route);
  return (
    <SafeAreaView>
    <View
      
    >
      <ScrollView>
      <ImageBackground
        source={require("../../../assets/images/Todo/DoneBackground.png")}
        style={styles.mainBox}
      >
        <Text style={styles.headingText}>Successfully ! </Text>
        <Text style={styles.headingText}> Created a new Habit</Text>

        <View style={styles.detailsBox}>
          <Text
            style={{
              color: "#1E64CC",
              textAlign: "center",
              fontSize: 13,
              fontWeight: "700",
            }}
          >
            {route.params.name}
          </Text>

          <View style={styles.mainIcon}>
            <MeditationSvg />

            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: "#8EB1E5",
                  fontSize: 13,
                }}
              >
                Category -{" "}
              </Text>
              <Text
                style={{
                  color: "#0E58C7",
                  fontSize: 13,
                }}
              >
                {route.params.category}
              </Text>
            </View>
          </View>

          <View style={styles.extraItem}>
            <View>
              <Text style={styles.itemQues}>Start -</Text>
              <Text style={styles.itemQues}>Reminder -</Text>
              <Text style={styles.itemQues}>Priority -</Text>
              <Text style={styles.itemQues}>Routine -</Text>
              <Text style={styles.itemQues}>Value -</Text>
            </View>
            <View>
              <Text style={styles.itemAns}>
                {getFormattedDate(route.params.startTime)}
              </Text>
              <Text style={styles.itemAns}>
                {route.params.reminderTime.hours > 12
                  ? route.params.reminderTime.hours - 12
                  : route.params.reminderTime.hours}
                : {route.params.reminderTime.minutes}
                {route.params.reminderTime.hours > 12 ? " pm" : " am"}
              </Text>
              <Text style={styles.itemAns}>
                {route.params.priority.charAt(0).toUpperCase() +
                  route.params.priority.slice(1)}
              </Text>
              <Text style={styles.itemAns}>
                {route.params.reminderType == "Week"
                  ? `${route.params.reminderType} -  ${
                      route.params.repeatWeek.Sunday ? "S " : ""
                    } ${route.params.repeatWeek.Monday ? "M " : ""} ${
                      route.params.repeatWeek.Tuesday ? "T " : ""
                    } ${route.params.repeatWeek.Wednesday ? "W " : ""} ${
                      route.params.repeatWeek.Thursday ? "T " : ""
                    } ${route.params.repeatWeek.Friday ? "F " : ""} ${
                      route.params.repeatWeek.Saturday ? "S " : ""
                    }`
                  : route.params.reminderType == "Specific"
                  ? `${route.params.reminderType} ( ${
                      route.params.specific.specificType
                        .charAt(0)
                        .toUpperCase() +
                      route.params.specific.specificType.slice(1)
                    }  - ${route.params.specific.value} )`
                  : route.params.reminderType}
              </Text>
              <Text style={styles.itemAns}>
                {route.params.type.value} {route.params.type.unit} / day
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      
      {/* `${ (route.params.reminderType( 
                      (route.params.repeatWeek.Sunday ? "S" : null)
                      (route.params.repeatWeek.Monday ? "M " : null)  
                      (route.params.repeatWeek.Tuesday ? "S " : null)
                      (route.params.repeatWeek.Wednesday ? "S " : null)  
                      (route.params.repeatWeek.Thursday ? "S " : null)
                      (route.params.repeatWeek.Friday ? "S " : null)  
                      (route.params.repeatWeek.Saturday ? "S " : null)
                     ) )}` */}

                     <View 
                      style={{
                        width:"100%",
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"center",
                        alignItems:"center",
                      }}
                     >
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1E64CC",
          height: 45,
          width: "100%",
          marginTop: 100,
          borderRadius: 7,
          paddingVertical: 2,
          width: 312,
        }}
        onPress={() => {
          Navigator.dispatch(Navigator.navigate("homepage"));
        }}
      >
        <Text
          style={[
            tw` text-white  text-lg`,
            {
              fontWeight: "700",
            },
          ]}
        >
          Done
        </Text>
      </TouchableOpacity></View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    width: "100%",
    height: 525,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: StatusBar.currentHeight + 30,
    alignItems: "center",
  },
  headingText: {
    color: "white",
    fontWeight: "700",
    fontSize: 34,
    textAlign: "center",
  },
  detailsBox: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
    width: 312,
    marginTop: 35,
  },

  mainIcon: {
    alignItems: "center",
    marginTop: 25,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#E0ECDE",
  },
  extraItem: {
    flexDirection: "row",
    paddingLeft: 20,
    marginTop: 10,
  },
  itemQues: {
    color: "#8EB1E5",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 10,
  },
  itemAns: {
    color: "#2E5B9F",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 10,
    marginLeft: 8,
  },
});

export default SuccessHabit;
