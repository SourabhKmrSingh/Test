import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet , Text} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


const Explorefooter = () => {
    const Navigator =  useNavigation()
    return (
        <View style={styles.footer}>
            <View style={{width:"20%"}}>
        <Icon 
        onPress={()=>
            Navigator.goBack()
        }
                    name="arrow-back-ios" size={20} color="white" />
               
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    footer:{
        width:"100%",
        backgroundColor:"#102646",
        height:55,
        position:"absolute",
        bottom:0,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:30
    },
})

export default Explorefooter;
