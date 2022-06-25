import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../constants/color";
import tw from "tailwind-react-native-classnames";
import React from "react";

const AppointementSLider = () => {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        <View style={[styles.filterItem]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                }}
              >
                Fri, 10 Apr
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  opacity: 0.4,
                  marginTop: 12,
                }}
              >
                3 slots available
              </Text>
            </View>
            <TouchableOpacity
              style={[
                tw` rounded-xl px-8 justify-center items-center`,
                {
                  backgroundColor: "#4B8CEE",
                  height: 35,
                },
              ]}
            >
              <Text
                style={{
                  color: "#fff",
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginTop: 15,
            }}
          >
            <Text style={{ fontSize: 12 }}>09:00 AM</Text>
            <Text style={{ fontSize: 12 }}>09:00 AM</Text>
            <Text style={{ fontSize: 12 }}>09:00 AM</Text>
          </View>
        </View>

        <View style={[styles.filterItem]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                }}
              >
                Fri, 10 Apr
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  opacity: 0.4,
                  marginTop: 12,
                }}
              >
                3 slots available
              </Text>
            </View>
            <TouchableOpacity
              style={[
                tw` rounded-xl px-8 py-2 justify-center items-center`,
                {
                  backgroundColor: "#4B8CEE",
                  height: 35,
                },
              ]}
            >
              <Text
                style={{
                  color: "#fff",
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginTop: 15,
            }}
          >
            <Text style={{ fontSize: 12 }}>09:00 AM</Text>
            <Text style={{ fontSize: 12 }}>09:00 AM</Text>
            <Text style={{ fontSize: 12 }}>09:00 AM</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  filterItem: {
    // width: Dimensions.get('window').width / 2,

    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    marginRight: 10,
    // height: 20,
    width: 280,
  },
});
export default AppointementSLider;
