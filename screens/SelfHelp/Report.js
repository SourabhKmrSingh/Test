import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Habitcard from "../../components/Selfhelp/Cards/HabitCard";
import Headerbox from "../../components/Todo/HeaderBox";
import COLORS from "../../constants/color";
import Svg, { G, Circle, Path } from "react-native-svg";
import Explorefooter from "../../components/Explore/ExploreFooter";
import Sideeffectscard from "../../components/Selfhelp/Cards/SideEffectsCard";
import MoodTrack from "./MoodTrack";
import MoodTrackCard from "../../components/Selfhelp/Cards/MoodTrackCard";

const demoData = [
  "Hello",
  "dfg",
  "gd",
  "Hello",
  "dfg",
  "gd",
  "Hello",
  "dfg",
  "gd",
  "Hello",
  "dfg",
  "gd",
];

const Report = () => {
  return (
    <View
      style={{
        height: Dimensions.get("screen").height,
      }}
    >
      <View style={styles.mainBox}>
        <Headerbox title="Let the thoughts" subtitle="flow :)" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainContent}
        >
          <View style={[tw` justify-between my-3 mt-5`, styles.subHeader]}>
            <Text style={styles.heading}>Overview</Text>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f89140",
                height: 45,
                width: "100%",
                marginTop: 12,
                borderRadius: 7,
              }}
            >
              <View>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={19.039}
                  height={20.626}
                >
                  <Path
                    fill="#fff"
                    d="M18.482 11.119a1.6 1.6 0 0 0-2.331-.06l-1.919 1.918a.946.946 0 0 1-1.453.085c-.233-.275-.141-1.122-.076-1.66l.963-7.912a1.29 1.29 0 1 0-2.561-.311l-1.067 6.214c-.055.155-.174.181-.188-.027l-.361-8.077a1.29 1.29 0 0 0-2.58 0l-.025 8.138c.007.094-.074.121-.088.014L5.653 3.088a1.29 1.29 0 1 0-2.539.462l1.024 7.43c0 .132-.043.208-.106.038L2.505 6.943a1.312 1.312 0 0 0-1.647-.824 1.333 1.333 0 0 0-.784 1.686l2.672 8.73c.014.048.029.1.044.144l.006.018a5.685 5.685 0 0 0 5.406 3.924 7.692 7.692 0 0 0 4.574-1.55c1.381-.831 5.8-5.587 5.8-5.587a1.649 1.649 0 0 0-.094-2.365z"
                    data-name="Icon ionic-md-hand"
                  />
                </Svg>
              </View>
              <Text
                style={[
                  tw`text-white ml-2  justify-center items-center text-center   `,
                  {
                    fontWeight: "500",
                  },
                ]}
              >
                Report Side effects
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={[styles.heading, { marginBottom: 5 }]}>
              Reported side effects
            </Text>
            {demoData.map((item, index) => {
              return <Sideeffectscard key={index} />;
            })}
          </View>
        </ScrollView>
      </View>
      <Explorefooter />
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLORS.appBackground,
    height: "100%",
    paddingHorizontal: 15,
  },
  mainContent: {
    marginBottom: 60,
  },
  subHeader: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 23,
    borderColor: COLORS.borderColor,
  },
  heading: {
    color: "#0E58C7",
    fontSize: 17,
    fontWeight: "700",
  },
  addIcon: {
    position: "absolute",
    bottom: 65,
    right: 20,
    elevation: 10,
  },
});

export default Report;
