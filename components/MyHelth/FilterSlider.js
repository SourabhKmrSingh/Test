import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

const FilterSlider = () => {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        <View style={[styles.filterItem]}>
          <Text style={{ color: "#1E64CC" }}>Habbit</Text>
        </View>
        <View style={styles.filterItem}>
          <Text style={{ color: "#1E64CC" }}>Habbit</Text> 
        </View>
        <View style={styles.filterItem}>
          <Text style={{ color: "#1E64CC" }}>Habbit</Text> 
        </View>
        <View style={styles.filterItem}>
          <Text style={{ color: "#1E64CC" }}>Habbit</Text> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  filterItem: {
    width: Dimensions.get("window").width / 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
  },
});
export default FilterSlider;
