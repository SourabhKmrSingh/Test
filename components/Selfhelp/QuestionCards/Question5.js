import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import tw from "tailwind-react-native-classnames";
import Smile from "../../../screens/Svgs/Questions/smile";

const Question5 = () => {
  return (
    <View style={styles.assessmentBox}>
      <View
        style={{
          width: "100%",
          backgroundColor: "#153669",
          alignItems: "flex-start",
          paddingTop: 10,
          paddingBottom: 20,
          marginTop: 15,
          borderRadius: 15,
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "700",
            letterSpacing: 1,
          }}
        >
          Have you developed tolerance to the drug? (Example you have to take
          the drug in larger amounts than what you used to do)
        </Text>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              // borderWidth: 1.5,
              borderColor: "#DBECFF",
              backgroundColor: "#fff",
              width: 30,
              height: 30,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <AntIcon name="caretright" color="#0E58C7" size={15} />
          </View>
          <View
            style={{
              width: 250,
              backgroundColor: "#DCE9F5",
              height: 5,
              marginTop: 20,
            }}
          >
            <View
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#1E64CC",
              }}
            ></View>
          </View>
        </View>

        <View
          style={[
            tw`w-full justify-center items-center `,
            { marginTop: 66, marginBottom: 20 },
          ]}
        >
          <Text style={{ color: "#D2DFF2", fontSize: 12 }}>
            Select Suitable Option
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 10,
            //   alignContent: "center",
          }}
        >
          <View style={[tw`items-center justify-center  `]}>
            <TouchableOpacity>
              <Smile />
            </TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 12, marginTop: 5 }}>
              Never Or Almost
            </Text>
            <Text style={{ color: "#fff", fontSize: 12 }}>Never</Text>
          </View>
          <View style={[tw`items-center justify-center   -mt-3`]}>
            <TouchableOpacity>
              <Smile />
            </TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 12, marginTop: 5 }}>
              Sometimes
            </Text>
            {/* <Text style={{color:"#fff", fontSize:12}}>Never</Text> */}
          </View>
          <View style={[tw`items-center justify-center  `]}>
            <TouchableOpacity>
              <Smile />
            </TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 12, marginTop: 5 }}>
              Many Times/
            </Text>
            <Text style={{ color: "#fff", fontSize: 12 }}>Almost Always</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sessionImage: {
    width: "100%",
    height: 190,
    paddingTop: 10,
    paddingVertical: 10,
  },
  assessmentBox: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
});

export default Question5;
