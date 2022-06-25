import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

const Selfhelpcard = ({active,Svg,name,mainRoute,subRoute,isStatus}) => {
  const Navigator =  useNavigation();
  return (
    <TouchableOpacity onPress={()=>
      Navigator.navigate(mainRoute,{
        screen:subRoute
      })
    } >
    <LinearGradient 
    colors={[ active? "#37AADD":"white", active?"#1F64CC":"white"]}
    style={styles.cardBox}
     >
       {isStatus?<View style={styles.circleResult} ><Text style={{
         color:"white"
       }} >7</Text></View>:null}
       
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
        
    },
    circleResult:{
      backgroundColor:"#FF9241",
      width:25,height:25,
      borderRadius:30,
      position:"absolute",
      right:-5,
      top:-5,
      borderWidth:2,
      borderColor:"white",
      justifyContent:"center",
      alignItems:"center"
    }
});

export default Selfhelpcard;
