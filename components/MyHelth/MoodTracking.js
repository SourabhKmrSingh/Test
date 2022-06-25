import {
  View,
  Text,
  SafeAreaView,
  Picker,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { LinearGradient } from "expo-linear-gradient";
import ConfuseIcon from "./svgImports/confuse";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
// const data = ["Ashish", "Kumar", "Mishra", "OP", "ankit"];
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const MoodTracking = () => {
  const [selectedValue, setSelectedValue] = React.useState("This Week");
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView>
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
            <Picker.Item label="Monthly" value="Monthly" />
          </Picker>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#000",
          borderRadius: 12,
          paddingHorizontal: 18,
          paddingVertical: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#1E64CC", fontSize: 12 }}>
            Most of the Time
          </Text>
          <Text style={{ color: "#8EB1E5", fontSize: 12 }}>Click to view</Text>
        </View>

        <BarChart
          style={{ marginVertical: 8, marginLeft: -90, borderRadius: 16 }}
          data={data}
          width={width}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          verticalLabelRotation={30}
        />
      </View>
    </SafeAreaView>
  );
};

export default MoodTracking;
