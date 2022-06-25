import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../../constants/color";
import tw from "tailwind-react-native-classnames";
import Unorderedlist from "react-native-unordered-list";

const Doctor = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[tw`py-14`, { backgroundColor: COLORS.appBackground }]}>
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Languages</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <Text style={{ fontSize: 12, color: "#0E58C7", marginRight: 30 }}>
              English
            </Text>
            <Text style={{ fontSize: 12, color: "#0E58C7", marginRight: 30 }}>
              Hindi
            </Text>
            <Text style={{ fontSize: 12, color: "#0E58C7" }}>Kanada</Text>
          </View>
          <View
            style={{
              borderBottomColor: COLORS.borderColor,
              borderBottomWidth: 1,
              marginTop: 25,
              marginBottom: 25,
            }}
          ></View>
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Education</Text>
          <View style={{ marginTop: 20 }}>
            <Unorderedlist bulletUnicode={0x25e6} style={{ fontSize: 15 }}>
              <Text style={{ fontSize: 12, color: "#000", opacity: 0.4 }}>
                UCL - Cliniques Saint - Luc (1987 -1999)- Docteur
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x25e6} style={{ fontSize: 15 }}>
              <Text style={{ fontSize: 12, color: "#000", opacity: 0.4 }}>
                Cardiologue. Recherche au Laboratoire d’échocardiographie.{" "}
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x25e6} style={{ fontSize: 15 }}>
              <Text style={{ fontSize: 12, color: "#000", opacity: 0.4 }}>
                ULG-CHU Start-Tilman (1999-2000). Recherche
              </Text>
            </Unorderedlist>
          </View>
          <View
            style={{
              borderBottomColor: COLORS.borderColor,
              borderBottomWidth: 1,
              marginTop: 25,
              marginBottom: 25,
            }}
          ></View>
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Publications</Text>
          <View style={{ marginTop: 20 }}>
            <Unorderedlist bulletUnicode={0x25e6} style={{ fontSize: 15 }}>
              <Text style={{ fontSize: 12, color: "#000", opacity: 0.4 }}>
                Electrocardiograms Findings - Lebrun F, Blouard Ph, Ch Brohe
                Quotation of functional mitral regurgitation during bicycle
                exercise in patients with heart failure. 1998
              </Text>
            </Unorderedlist>
          </View>
          <View
            style={{
              borderBottomColor: COLORS.borderColor,
              borderBottomWidth: 1,
              marginTop: 25,
              marginBottom: 25,
            }}
          ></View>
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Description</Text>
          <View style={{ marginTop: 20 }}>
            <Unorderedlist bulletUnicode={0x25e6} style={{ fontSize: 15 }}>
              <Text style={{ fontSize: 12, color: "#000", opacity: 0.4 }}>
                Electrocardiograms Findings - Lebrun F, Blouard Ph, Ch Brohe
                Quotation of functional mitral regurgitation during bicycle
                exercise in patients with heart failure. 1998
              </Text>
            </Unorderedlist>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Doctor;
