// import React from "react";
// import {
//   View,
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   Image,
//   Animated,
//   FlatList
// } from "react-native";
// import { welcome1, welcome2, welcome3, welcome4 } from "../../constants/images";

// const data = [
//   {
//     // title: "Boarding 1",
//     // description: "This is description 1",
//     img: welcome1,
//   },
//   {
//     // title: "Boarding 1",
//     // description: "This is description 1",
//     img: welcome2,
//   },
//   {
//     // title: "Boarding 1",
//     // description: "This is description 1",
//     img: welcome3,
//   },
//   {
//     // title: "Boarding 1",
//     // description: "This is description 1",
//     img: welcome4,
//   },
// ];

// const Onboarding = () => {
//   function renderContent() {
//     return (
//       // <Animated.ScrollView>
//       //   {data.map((item, index) => {
//       //     <View key={index}>
//       //       <View>
//       //         <Image
//       //           source={item.img}
//       //           style={{
//       //             width: 100,
//       //             height: 100,
//       //           }}
//       //         />
//       //       </View>
//       //     </View>
//       //   })}
//       // </Animated.ScrollView>
//       <View>
//         {/* <FlatList data={ data}/> */}
//         <Text>Ashish</Text>
//       </View>
//     );
//   }
//   return <SafeAreaView>{renderContent()}</SafeAreaView>;
// };

// const styles = StyleSheet.create({});

// export default Onboarding;

import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Animated,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../../constants/color";
import { LinearGradient } from "expo-linear-gradient";
import Step1 from "./Step1";
import Svg, { Use, Image } from "react-native-svg";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step2 from "./Step2";
import tw from "tailwind-react-native-classnames";

const Onboarding = () => {
  
  const [sliderState, setSliderState] = React.useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;
  return (
    <>
      <SafeAreaView style={{ flex: 1, width, height }}>
        <ScrollView
          style={{ flex: 1, height: height, backgroundColor: "green" }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          <LinearGradient
            colors={["#37AADD", "#1F64CC"]}
            style={{ width, height }}
          >
            <View>
              <Step1 />
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["#37AADD", "#1F64CC"]}
            style={{ width, height }}
          >
            <View>
              <Step2 />
            </View>
          </LinearGradient>

          <LinearGradient
            colors={["#37AADD", "#1F64CC"]}
            style={{ width, height }}
          >
            <View>
              <Step3 />
            </View>
          </LinearGradient>

          <LinearGradient
            colors={["#37AADD", "#1F64CC"]}
            style={{ width, height }}
          >
            <View>
              <Step4 />
              <Text style={tw`text-black z-30`}>Ashish </Text>
            </View>
          </LinearGradient>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(3).keys()).map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
  paginationWrapper: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#1F64CC',
    marginLeft: 10,
  },
});

export default Onboarding;
