import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const OverViewcard = ({active,Svg,name}) => {
    const Navigator =  useNavigation();
  return (
    <TouchableOpacity onPress={()=>{
        Navigator.navigate('')
    }} >
    <LinearGradient 
    colors={[ active? "#37AADD":"white", active?"#1F64CC":"white"]}
    style={styles.cardBox}
     >
         
      {Svg}
      <Text style={{
          color:active?"white":"#0E58C7",
          marginTop:12,
          textAlign:"center"
      }} >{name}</Text>
    </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    cardBox:{
        width:100,
        height:100,
        borderRadius:12,
        justifyContent:"center",
        alignItems:"center",
        marginTop:25
    },
    name:{
        
    }
});

export default OverViewcard;
