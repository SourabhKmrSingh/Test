import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "tailwind-react-native-classnames";
import { AnimatedCircularProgress } from "react-native-circular-progress";
const DeAddiction = () => {
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
            tw` `,
            {
              color: "#1E64CC",
              fontSize: 18,
              marginTop: 30,
              fontWeight: "700",
            },
          ]}
        >
          De-Addiction
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            padding: 8,
            marginTop: 23,
            borderRadius: 20,
            paddingHorizontal: 35,
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
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
          <View style={styles.contentBox}>
            <Text style={[tw`font-bold`, styles.contentText]}>Alcohol</Text>
            <Text
              style={[
                {
                  color: "#2E5B9F",
                  fontSize: 12,
                  marginTop: 10,
                },
              ]}
            >
              New Milestone in next 5 days
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
                style={{
                  color: "#606060",
                  opacity: 0.5,
                  fontSize: 12,
                  marginRight: 20,
                }}
              >
                Sober
              </Text>
              <Text
                style={{
                  color: "#606060",
                  opacity: 0.5,
                  fontSize: 12,
                  marginRight: 15,
                }}
              >
                Money Saved
              </Text>
              <Text style={{ color: "#606060", opacity: 0.5, fontSize: 12 }}>
                Time Saved
              </Text>
            </View>

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
                4 days
              </Text>
              <Text
                style={[
                  {
                    color: "#2E5B9F",
                    fontSize: 12,
                    marginRight: 60,
                  },
                ]}
              >
                2000
              </Text>
              <Text
                style={[
                  {
                    color: "#2E5B9F",
                    fontSize: 12,
                  },
                ]}
              >
                3 hours
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
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
          <View style={styles.contentBox}>
            <Text style={[tw``, styles.contentText]}>Alcohol</Text>
            <Text
              style={[
                {
                  color: "#2E5B9F",
                  fontSize: 12,
                  marginTop: 10,
                  fontWeight: "700",
                },
              ]}
            >
              New Milestone in next 5 days
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
                style={{
                  color: "#606060",
                  opacity: 0.5,
                  fontSize: 12,
                  marginRight: 20,
                }}
              >
                Sober
              </Text>
              <Text
                style={{
                  color: "#606060",
                  opacity: 0.5,
                  fontSize: 12,
                  marginRight: 15,
                }}
              >
                Money Saved{" "}
              </Text>
              <Text style={{ color: "#606060", opacity: 0.5, fontSize: 12 }}>
                Time Saved{" "}
              </Text>
            </View>

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
                4 days
              </Text>
              <Text
                style={[
                  {
                    color: "#2E5B9F",
                    fontSize: 12,
                    marginRight: 60,
                  },
                ]}
              >
                2000
              </Text>
              <Text
                style={[
                  {
                    color: "#2E5B9F",
                    fontSize: 12,
                  },
                ]}
              >
                3 hours
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
    marginLeft: -20,
  },
  iconBox: {
    width: 90,
    height: 90,
    //   borderRadius: 100,
    padding: 8,
    //   marginTop: -8,
  },
});
export default DeAddiction;
