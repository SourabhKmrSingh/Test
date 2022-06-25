import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "tailwind-react-native-classnames";
import { AnimatedCircularProgress } from "react-native-circular-progress";
const HabbitTracking = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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
          Habbit Tracking (03)
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            padding: 8,
            marginTop: 23,
            paddingHorizontal: 35,
            borderRadius: 20,
            // paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: "#1E64CC" }}>View all</Text>
        </View>
      </View>

      <View style={tw`items-center justify-center`}>
        <View elevation={15} style={styles.detailsBox}>
          <View
            style={{
              marginRight: 20,
              height: 80,
              borderLeftColor: "#FFBA26",
              borderLeftWidth: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
          <View style={styles.contentBox}>
            <Text style={[tw`font-bold`, styles.contentText]}>
              Waking Up Early
            </Text>
            <Text
              style={[
                {
                  color: "#606060",
                  fontSize: 12,
                  marginTop: 10,
                },
              ]}
            >
              Successfully completed 4days
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text
                style={[
                  {
                    color: "#2E5B9F",
                    fontSize: 12,
                    marginRight: 20,
                  },
                ]}
              >
                3 km
              </Text>
              <Text
                style={[
                  {
                    color: "#2E5B9F",
                    fontSize: 12,
                  },
                ]}
              >
                21 Days
              </Text>
            </View>
          </View>

          <View style={styles.iconBox}>
            <AnimatedCircularProgress
              size={80}
              width={5}
              fill={50}
              rotation={-180}
              tintColor="#78D944"
              backgroundColor="#d6d6d6"
            >
              {(fill) => (
                <Text
                  style={{ color: "#1E64CC", fontWeight: "600", fontSize: 23 }}
                >
                  50%
                </Text>
              )}
            </AnimatedCircularProgress>
          </View>
        </View>
      </View>

      <View style={tw`items-center justify-center`}>
        <View elevation={15} style={styles.detailsBox}>
          <View
            style={{
              marginRight: 20,
              height: 80,
              borderLeftColor: "#0EBAFD",
              borderLeftWidth: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
          <View style={styles.contentBox}>
            <Text style={[tw`font-bold`, styles.contentText]}>
              Waking Up Early
            </Text>
            <Text
              style={[
                {
                  color: "#606060",
                  fontSize: 12,
                  marginTop: 10,
                },
              ]}
            >
              Successfully completed 4days
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text
                style={[
                  {
                    color: "#2E5B9F",
                    fontSize: 12,
                    marginRight: 20,
                  },
                ]}
              >
                3 km
              </Text>
              <Text
                style={[
                  {
                    color: "#2E5B9F",
                    fontSize: 12,
                  },
                ]}
              >
                21 Days
              </Text>
            </View>
          </View>

          <View style={styles.iconBox}>
            <AnimatedCircularProgress
              size={80}
              width={5}
              fill={50}
              rotation={-180}
              tintColor="#78D944"
              backgroundColor="#d6d6d6"
            >
              {(fill) => (
                <Text
                  style={{ color: "#1E64CC", fontWeight: "600", fontSize: 23 }}
                >
                  50%
                </Text>
              )}
            </AnimatedCircularProgress>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "#d6d6d6",
          borderBottomWidth: 1,
          marginTop: 30,
          marginBottom: 30,
        }}
      ></View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contentText: {
    color: "#2E5B9F",
    // fontWeight: "700",
    // marginBottom: 18,
    fontSize: 16,
  },
  detailsBox: {
    backgroundColor: "#F0F6FA",
    width: "100%",

    //   height:96,
    marginHorizontal: 10,
    borderRadius: 12,
    // marginLeft: 20,
    marginTop: 8,
    paddingHorizontal: 18,
    paddingVertical: 10,
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
    width: 90,
    height: 90,
    //   borderRadius: 100,
    padding: 8,
    //   marginTop: -8,
  },
});
export default HabbitTracking;
