import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { getALlGeneralArticles } from "../../actions/Explore/GeneralTopics";
import { getALlStories } from "../../actions/Explore/Stories";
import Exploreheading from "../../components/Explore/ExploreHeading";
import FaQ from "../../components/Explore/FaQ";
import Generaltopics from "../../components/Explore/GeneralTopics";
import LatestNews from "../../components/Explore/LatestNews";
import Qanda from "../../components/Explore/QandA";
import Stories from "../../components/Explore/Stories";
import COLORS from "../../constants/color";

const data = [
  {
    title: "General Topics",
    active: 1,
  },
  {
    title: "Stories",
    active: 0,
  },
  {
    title: "Latest New",
    active: 0,
  },
  {
    title: "FAQ",
    active: 0,
  },
  {
    title: "Q/A",
    active: 0,
  },
];

const ExploreHome = () => {
  const [options, setOptions] = useState(data);
  const [prevIndex, setPrevIndex] = useState(0);
  const [activeindex, setActiveindex] = useState(0);
  const [allStories, setAllStories] = useState([]);
  const [allGeneralTopicsData, setAllGeneralTopicsData] = useState([]);

  const [isLoading, setIsLoading] = useState({
    generaltopics: true,
    stories: true,
    latestNews: true,
    faQ: true,
  });

  const activeStatehandler = (index) => {
    setActiveindex(index);

    let temp = options;
    temp[prevIndex] = {
      ...temp[prevIndex],
      active: 0,
    };
    temp[index] = {
      ...temp[index],
      active: 1,
    };
    setOptions(temp);

    setPrevIndex(index);
  };

  // Update Story
  const updateStory = async () => {
    const stories = await getALlStories();
    if (stories) {
      setAllStories(stories);
      setIsLoading({ ...isLoading, stories: false });
    }
  };
  // Update General Topics
  const updateGeneralTopics = async () => {
    const articles = await getALlGeneralArticles();
    if (articles) {
      setAllGeneralTopicsData(articles);
      setIsLoading({ ...isLoading, generaltopics: false });
    }
  };
  // Fetching data

  useEffect(async () => {
    updateStory();
    updateGeneralTopics();
  }, [activeindex]);
  return (
    <View style={styles.exploreScreen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Exploreheading />
        <View style={styles.optionBox}>
          {options.map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.options,
                  item.active ? styles.activeOptions : styles.nonActiveOptions,
                ]}
                key={index}
                onPress={() => {
                  activeStatehandler(index);
                }}
              >
                <Text
                  style={item.active ? styles.activeText : styles.nonActiveText}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.resultBox}>
          {activeindex == 0 ? (
            <Generaltopics
              allGeneralTopicsData={allGeneralTopicsData}
              isLoading={isLoading}
            />
          ) : null}
          {activeindex == 1 ? (
            <Stories allStories={allStories} isLoading={isLoading} />
          ) : null}
          {activeindex == 2 ? <LatestNews /> : null}
          {activeindex == 3 ? <FaQ /> : null}
          {activeindex == 4 ? <Qanda /> : null}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  exploreScreen: {
    backgroundColor: COLORS.appBackground,
    width: "100%",
    height: "100%",
    paddingBottom: 74,
  },

  optionBox: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 25,
    marginLeft: 14,
    borderBottomWidth: 0.9,
    borderColor: COLORS.borderColor,
    paddingBottom: 10,
  },
  options: {
    borderRadius: 20,
    paddingHorizontal: 17,
    paddingVertical: 10,
    marginRight: 12,
    marginBottom: 15,
    minWidth: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  activeOptions: {
    backgroundColor: COLORS.deepBlue,
  },
  nonActiveOptions: {
    backgroundColor: "white",
  },
  activeText: {
    color: "white",
    fontWeight: "500",
  },
  nonActiveText: {
    color: COLORS.deepBlue,
    fontWeight: "500",
  },
  resultBox: {
    paddingHorizontal: 20,
  },
});

export default ExploreHome;
