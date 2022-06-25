import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CardBlueBgSvg from "../../../screens/Svgs/CardBlueBgSvg";

const Timecostanalysiscard = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        padding: 15,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          position: "absolute",
          height: "100%",
          weight: "100%",
        }}
      >
        <CardBlueBgSvg />
      </View>
      <Text
        style={{
          color: "#1E64CC",
          fontSize: 16,
          fontWeight: "700",
        }}
      >
        Substance - Liquor
      </Text>
      <View
        style={{
          borderBottomWidth: 1,
          marginTop: 15,
          borderColor: "#BFD2ED",
          paddingBottom: 18,
        }}
      >
        <Text
          style={{
            color: "#254069",
            fontSize: 26,
            fontWeight: "700",
          }}
        >
          June 2018 - Present
        </Text>
        <Text
          style={{
            color: "#254069",
            fontSize: 12,
          }}
        >
          Consumed Period
        </Text>
      </View>

      {/* Money Spent Box */}
      <View
        style={{
          borderBottomWidth: 1,
          marginTop: 15,
          borderColor: "#BFD2ED",
          paddingBottom: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 29,
              fontWeight: "700",
            }}
          >
            100k
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#254069",
              marginTop: 5,
            }}
          >
            Total Money Spent
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: "#254069",
            }}
          >
            {" "}
            <Text
              style={{
                fontSize: 16,
                color: "#254069",
                fontWeight: "700",
              }}
            >
              4.5k
            </Text>{" "}
            /month
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#254069",
              marginTop: 8,
            }}
          >
            Time spent
          </Text>
        </View>
      </View>

      {/*Days Spent Box  */}
      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 29,
              fontWeight: "700",
            }}
          >
            82 days
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#254069",
              marginTop: 5,
            }}
          >
            Total days Spent
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: "#254069",
            }}
          >
            {" "}
            <Text
              style={{
                fontSize: 16,
                color: "#254069",
                fontWeight: "700",
              }}
            >
              3 hrs
            </Text>{" "}
            /day
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#254069",
              marginTop: 8,
            }}
          >
            Time spent
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Timecostanalysiscard;
