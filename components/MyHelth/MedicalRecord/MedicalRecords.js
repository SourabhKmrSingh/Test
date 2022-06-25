import React from 'react';
import {View, StyleSheet} from 'react-native';
import COLORS from '../../../constants/color';
import Explorefooter from '../../Explore/ExploreFooter';
import Medicalrecordcard from './Cards/MedicalRecordCard';

const data =["Hey","hey1","gh","dgh","hfh","Hey","hey1","gh","dgh","hfh"]
const Medicalrecords = () => {
    return (
        <View style={{backgroundColor:COLORS.appBackground, height:"100%"}}>
            
            {data.map((item,index)=>{
                return(
                    <Medicalrecordcard key={index}/>
                )
            })}

        </View>
    );
}

const styles = StyleSheet.create({})

export default Medicalrecords;
