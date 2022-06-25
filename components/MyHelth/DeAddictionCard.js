import React from 'react';
import {View, StyleSheet} from 'react-native';
import PendingRemind from "../Todo/Reminders/PendingRemind"

const Deaddictioncard = () => {
    return (
        <View>
            <PendingRemind isSober={0}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Deaddictioncard;
