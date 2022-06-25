import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SingleStoryCard from './Cards/SingleStoryCard';
import StoryCard from './Cards/Storycard';
import Explorefooter from './ExploreFooter';
import Exploreheading from './ExploreHeading';

const Singlestory = ({route}) => {
    return (
        <View style={{
            height:"100%",
            
        }} >
            <ScrollView showsVerticalScrollIndicator={false} >
                <Exploreheading/> 
                
            <SingleStoryCard  title={route.params.title} details={route.params.details} image={route.params.image}/>
            </ScrollView>
            <Explorefooter/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Singlestory;
