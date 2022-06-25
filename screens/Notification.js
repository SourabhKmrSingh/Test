import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { useRecoilState } from "recoil";
import Explorefooter from "../components/Explore/ExploreFooter";
import Notifybox from "../components/Notification/NotifyBox";
import Headerbox from "../components/Todo/HeaderBox";
import { allNotificationRecoil } from "../utils/reoil-atoms";

const Notification = () => {
  const [allNotifications, setAllNotifications] = useRecoilState(
    allNotificationRecoil
  ); 
  console.log(allNotifications, "allNotification");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollview}>
        <View>
          <Headerbox title="Your daily" subtitle="reminder" />
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderColor: "#DADADA",
            paddingVertical: 15,
            maxHeight: "90%",
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={allNotifications}
            renderItem={({ item, index }) => (
              <Notifybox key={index} data={item} index={index} title={item.request.content.title} />
            )}
          />
        </View>
      </View>
      <Explorefooter/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    width: "100%",
    height: "100%",
    backgroundColor: "#E9EFF4",
  },
  scrollview: {
    maxHeight: Dimensions.get("screen").height,
    paddingBottom: 70,
    backgroundColor: "#E9EFF4",
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
});

export default Notification;
