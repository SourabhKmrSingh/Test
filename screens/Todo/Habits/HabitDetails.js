import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Selectcategory from "../../../components/Todo/Tasks/SelectCategory";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Switch } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { useNavigation, StackActions } from "@react-navigation/native";
import COLORS from "../../../constants/color";
import HealthCateg from "../../Svgs/TaskCategory/HealthCateg";

const data = ["fg", "dfg"];
const normal = {
  none: 0,
  low: 0,
  normal: 0,
  hight: 0,
};
const HabitDetails = () => {
  const Navigator = useNavigation();

  const [taskData, setTaskData] = useState({
    name: "",
    category: "",
    date: "",
    reminder: "",
    repeat: "",
    isShowPendingTask: false,
    priority: "",
    type: "habit",
  });

  const [statePriority, setStatePriority] = useState({
    none: 0,
    low: 0,
    normal: 1,
    hight: 0,
  });

  const setPriority = (name) => {
    setStatePriority({
      ...normal,
      [name]: 1,
    });
  };
  return (
    <View style={styles.mainBox}>
      <ScrollView style={styles.scrollBox}>
        <View>
          <Text style={styles.createText}>Habit Details</Text>

          <View style={styles.addTaskSection}>
            <View
              style={[
                tw`mt-5 mb-5`,
                {
                  borderBottomWidth: 1,
                  borderColor: "#8EB1E5",
                  paddingBottom: 25,
                },
              ]}
            >
              <View style={{ flexDirection: "row" }}>
                <HealthCateg />
                <View
                  style={{ marginLeft: 15, justifyContent: "space-between" }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 24,
                    }}
                  >
                    Drink water
                  </Text>
                  <Text
                    style={{
                      color: "#D2DFF2",
                      fontSize: 13,
                    }}
                  >
                    Healthy
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "#8EB1E5",
                  fontSize: 14,
                  marginTop: 25,
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  color: "#EDF4FD",
                  fontSize: 14,
                  marginTop: 5,
                }}
              >
                Have you continued your drug use despite knowledge of developing
                a persistent or recurring physical or psychological problem
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#102646",
              paddingHorizontal: 15,
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                }}
              >
                Target
              </Text>
              <Text
                style={{
                  color: "#8EB1E5",
                  fontSize: 14,
                  marginTop: 15,
                }}
              >
                Atleast 1 times a day
              </Text>
            </TouchableOpacity>

            {/* How Long  */}
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  marginTop: 35,
                }}
              >
                How Long
              </Text>
              <Text
                style={{
                  color: "#8EB1E5",
                  fontSize: 14,
                  marginTop: 15,
                }}
              >
                Everyday
              </Text>
            </TouchableOpacity>
          </View>

          {/* Save Changes And Cancel */}
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#102646",
              paddingBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                height: 45,
                width: "100%",
                marginTop: 30,
                borderRadius: 7,
                paddingVertical: 2,
              }}
            >
              <Text
                style={[
                  tw`  text-lg`,
                  {
                    fontWeight: "700",
                    color: "#0E58C7",
                  },
                ]}
              >
                Next
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "white",
                height: 45,
                width: "100%",
                marginTop: 30,
                borderRadius: 7,
                paddingVertical: 2,
              }}
              onPress={() =>
                Navigator.dispatch(StackActions.replace("homepage"))
              }
            >
              <Text
                style={[
                  tw` text-white  text-lg`,
                  {
                    fontWeight: "700",
                    color: "white",
                  },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#37AADD",
    paddingTop: StatusBar.currentHeight,
  },
  scrollBox: {
    width: "100%",
    height: "100%",
  },
  createText: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 18,
    marginBottom: 25,
    paddingHorizontal: 15,
  },
  addTaskSection: {
    backgroundColor: "#102646",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 40,
    paddingHorizontal: 18,
    paddingBottom: 15,
    borderColor: COLORS.borderColor,
  },
  inputBox: {
    borderBottomWidth: 1.2,
    borderBottomColor: "white",
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "700",
    paddingBottom: 7,
    color: "white",
  },
  categText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
  },
  allCateg: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  otherOptionBox: {
    marginTop: 40,
  },
  dateSelect: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  otherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
  },
  switchBox: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 8,
  },
  radioBtnActive: {
    width: 10,
    height: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "white",
  },
  radioBtnInActive: {
    width: 10,
    height: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "white",
  },
  radioText: {
    color: "white",
    fontSize: 14,
    marginLeft: 5,
  },
  priorityLists: {
    marginTop: 10,
    flexDirection: "row",
  },
  radioItem: {
    alignItems: "center",
    flexDirection: "row",
    marginRight: 20,
  },
});

export default HabitDetails;
