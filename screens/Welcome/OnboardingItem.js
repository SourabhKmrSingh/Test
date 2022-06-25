import { View, Text ,Image , useWindowDimensions} from 'react-native'
import React from 'react'

const OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions()
  return (
    <View style={[{width}]}>
          <Image source={item.image} style={[{width, resizeMode: 'contain'}]}/>
    </View>
  )
}

export default OnboardingItem