import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import COLORS from "../../../../constants/color";
import { LinearGradient } from "expo-linear-gradient";
import AntIcon from "react-native-vector-icons/AntDesign";
import Smile from "../../../Svgs/Questions/smile";
import TurtleSvg from "../../../Svgs/TurtleSvg";
import Turtle2 from "../../../Svgs/Turtle2";
import Explorefooter from "../../../../components/Explore/ExploreFooter";
import Icon from "react-native-vector-icons/Entypo";
import StageCard from "../../../../components/Selfhelp/DeAddiction/StageCard";
// import { ScrollView } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import Clock from "../../../Svgs/DeAddictionStage/clock";
const Screen1 = () => {
  const [sliderState, setSliderState] = React.useState({ currentPage: 0 });
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
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: COLORS.appBackground,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        },
      ]}
    >
      <View
        style={{
          paddingTop: StatusBar.currentHeight,
          width: width,
          height: height,
          paddingHorizontal: 15,
          backgroundColor: "#102646",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                marginTop: 20,
              }}
            >
              Session 3
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 24,
                fontWeight: "700",
                marginTop: 5,
              }}
            >
              De-addiction stage
            </Text>
          </View>

          <Icon name="cross" size={50} color="white" />
        </View>
        <View style={{}}>{/* <StageCard />  */}</View>

        <Swiper
          style={styles.wrapper}
          autoplay={false}
          pagingEnabled={true}
          showsButtons={false}
          dotStyle={{
            backgroundColor: "transparent",
            borderColor: "white",
            borderWidth: 1,
          }}
        >
          <View style={styles.slide1}>
            <StageCard
              title="6 stage of De-addiction "
              description="See what are the 6 stage of de-addiction and select your current stage"
            />
          </View>
          <View style={styles.slide2}>
            <StageCard
              title="Pre-contemplation"
              description="In this phase a person does not consider his substance abuse as problem. 50 – 60% of clients are in the stage of Pre contemplation, which means they do not see a problem and therefore they see no need to change their behaviours. These include any client who is pressured or coerced into services like AA or support groups."
            />
          </View>
          <View style={styles.slide3}>
            <StageCard
              title="Contemplation "
              description="Patient starts to consider his behaviour as a problem.  In this phase a person recognizes his/her addiction a problem and are contemplating a change but have not yet committed to changing. For example, you want to live a healthy life and have investigated joining a gym or thought about jogging every morning but have not yet started. A person in contemplation is sitting right on the edge. Some part of his/her consciousness wants to change, but an equally compelling part of that person wants to stay the same."
            />
          </View>
          <View style={styles.slide4}>
            <StageCard
              title="Preparation "
              description="Preparation: In this stage, the person generally decides to change his/her dysfunctional behaviours & subsequently start to gather information about various resources. In short, the person is testing water before diving in. Those in this stage are generally taking small steps towards a change but still they are hanging in the middle, because those changes have not worked as they intended them to be. For example, you know about various plans for de-addiction, but you have never joined or actively participated in them."
            />
          </View>
          <View style={styles.slide5}>
            <StageCard
              title="Action "
              description="In this stage, the person generally put their plans into actions for at least a day or so. By doing this, the person generally faces new roadblocks and realizes that there is a night and a day difference between thinking and doing. If the person continues action phase for about 2-3 month, then enters the next stage which is called as “maintenance phase”. For example, an addicted person will not drink alcohol at all; he/she will deny his/her “drinking buddies”."
            />
          </View>
          <View style={styles.slide6}>
            <StageCard
              title="Maintenance "
              description="Maintenance: The fifth stage is called maintenance. In this stage, the person continues to be abstinent & is observed to be engaged in the new behaviour for at least six months and is determined to maintain the new behaviour."
            />
          </View>
          <View style={styles.slide7}>
            <StageCard
              title="Relapse "
              description="This stage is also known as “falling off the wagon”. In this stage, the person usually goes back to his/her older maladaptive behaviours of taking substance abuse."
            />
          </View>
        </Swiper>
        {/* <View style={{paddingHorizontal:20,marginTop:20}}>
                      <TouchableOpacity>
                      <View style={[tw`items-center justify-center`, {
                      backgroundColor: "#FF9241",
                      width: "100%",
                      padding: 15,
                      borderRadius:10,
                    //   paddingHorizontal:10
                  }]}>
                      <Text style={{color:"white",fontSize:16}}>Get Started</Text>
                  </View>
                  </TouchableOpacity>
                  </View> */}
      </View>

      <Explorefooter />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  paginationWrapper: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#1F64CC",
    marginLeft: 10,
  },
});

export default Screen1;
