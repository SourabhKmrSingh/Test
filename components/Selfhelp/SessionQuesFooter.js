import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon2 from "react-native-vector-icons/Entypo";


const Sessionquesfooter = ({prevRoute,nextRoute,nextText}) => {
    const Navigator =  useNavigation();
    return (
        <View
          style={{
            width: "100%",
            backgroundColor: "#102646",
            justifyContent: "flex-end",
            position: "absolute",
            bottom: 0,
            paddingHorizontal: 15,
            paddingVertical: 15,
            borderTopWidth: 0.5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => {
                Navigator.navigate("selfhelphome", {
                  screen: "deaddiction",
                  params: {
                    screen: prevRoute,
                  },
                });
              }}
            >
              <Icon2 name="chevron-left" size={20} color="white" />
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Back
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Navigator.navigate("selfhelphome", {
                  screen: "deaddiction",
                  params: {
                    screen: nextRoute,
                  },
                });
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                {nextText?nextText:"Next"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Sessionquesfooter;
