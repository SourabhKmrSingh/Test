import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useRecoilState } from "recoil";
import {
  allHabitItemsRecoil,
  allTaskItemsRecoil,
  allTodoRecoil,
  habitStoreRecoil,
  isTodoDateItemsLoadingRecoil,
  isTodoItemsLoadingRecoil,
  taskAddedRecoil,
} from "../../utils/reoil-atoms";
import { compareDayByDate, getDaysInMonth } from "../../utils/utils";
import AnimateNumber from "react-native-countup";
import { getHabitById } from "../../actions/Todo/Habit";

var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const TodayBox = () => {
  const [isDateShow, setIsDateShow] = useState(0);
  const [allTasks, setAllTasks] = useRecoilState(allTaskItemsRecoil);
  const [allHabits, setAllHabits] = useRecoilState(allHabitItemsRecoil);
  const [isTodoLoading, setIsTodoLoading] = useRecoilState(
    isTodoDateItemsLoadingRecoil
  );
  const [taskReload, SetTaskReload] = useRecoilState(taskAddedRecoil);
  const [initalHabits, setInitalHabits] = useRecoilState(habitStoreRecoil);
  const [currentDayText, setCurrentDayText] = useState("Today's");

  // Selected Date

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  // Sample Data

  const [allDayDate, setAllDayDate] = useState([]);

  const [prevIndex, setPrevIndex] = useState(0);
  const activeHandler = (index) => {
    let array = allDayDate;
    array[prevIndex] = {
      ...array[prevIndex],
      isActive: 0,
    };
    array[index] = {
      ...array[index],
      isActive: 1,
    };
    setPrevIndex(index);
    setAllDayDate(array);
  };

  // Write a function to get today's date , week and month
  const getTodayData = () => {
    const weekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth();
    let week = today.getDay();
    let year = today.getFullYear();
    let todayDate = `${date}-${month}-${year}`;
    let todayWeek = `${week}`;
    let todayMonth = `${month}`;

    let totalNumberOfDays = 1;
    setSelectedDate(date);
    let tempArray = [];
    tempArray.push({
      number: date,
      week: weekArray[week],
      isActive: 1,
      month,
    });
    week++;
    if (week > 6) {
      week = 0;
    }
    for (let i = date + 1; i <= getDaysInMonth(); i++) {
      tempArray.push({
        number: i,
        week: weekArray[week],
        isActive: 0,
        month,
      });
      week++;
      if (week > 6) {
        week = 0;
      }
      totalNumberOfDays++;
    }
    if (totalNumberOfDays != 15) {
      for (let i = 1; i <= 15 - totalNumberOfDays; i++) {
        tempArray.push({
          number: i,
          week: weekArray[week],
          isActive: 0,
          month: month + 1,
        });
        week++;
        if (week > 6) {
          week = 0;
        }
      }
    }

    setAllDayDate(tempArray);
  };

  useEffect(() => {
    getTodayData();
  }, []);

  const filterDataByDate = () => {
    setIsTodoLoading(true);
    let data = [];
    initalHabits.map((item, index) => {
      if (item.endTime) {
        if (compareDayByDate(item.endTime, selectedDate, selectedMonth)) {
          data.push(item);
        }
      } else {
        data.push(item);
      }
    });
    setAllHabits(data);
    setIsTodoLoading(false);
  };

  useEffect(() => {
    filterDataByDate();
  }, [taskReload, selectedDate, initalHabits]);

  return (
    <View
      style={{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#DADADA",
        paddingVertical: 28,
      }}
    >
      {/* {getTodayData()} */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text
          style={[
            tw` font-bold`,
            {
              color: "#1E64CC",
              fontSize: 20,
            },
          ]}
        >
          {currentDayText}
        </Text>
        <TouchableOpacity
          style={{
            marginRight: 5,
          }}
          onPress={() => {
            setIsDateShow(!isDateShow);
          }}
        >
          <Icon
            name="calendar-day"
            size={25}
            color={isDateShow ? "#254069" : "#1E64CC"}
          />
        </TouchableOpacity>
      </View>

      {isDateShow ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginBottom: 18,
          }}
        >
          {allDayDate.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  console.log(item, "heyy");
                  activeHandler(index);
                  setSelectedDate(item.number);
                  setSelectedMonth(item.month);
                  if(index==0){
                    setCurrentDayText("Today's");
                  } else if(index==1){
                    setCurrentDayText("Tomorrow's");
                  }
                  else{
                    let title =  "th"
                    if(item.number==1)
                      title = "st"
                    else if(item.number==2)
                      title = "nd"
                    else if(item.number==3)
                      title = "rd"
                    else if(item.number==21||item.number==31)
                      title = "st"
                    else if(item.number==22)
                      title = "nd"
                    else if(item.number==23)
                      title = "rd"
                    else 
                      title = "th"
                    setCurrentDayText(`${item.number}${title} ${monthArray[item.month]}`);
                      

                  }
                }}
                key={index}
              >
                <LinearGradient
                  colors={
                    item.isActive ? ["#37AADD", "#1F64CC"] : ["white", "white"]
                  }
                  style={{
                    width: 58,
                    height: 79,
                    borderRadius: 6,
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginHorizontal: 4,
                  }}
                >
                  <Text
                    style={{
                      color: item.isActive ? "white" : "#2E5B9F",
                      fontWeight: "600",
                    }}
                  >
                    {item.week}
                  </Text>
                  <Text
                    style={{
                      color: item.isActive ? "white" : "#2E5B9F",

                      fontWeight: "600",
                    }}
                  >
                    {item.number}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : (
        <Text></Text>
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {/* Meeting Box */}
        <View>
          <LinearGradient
            colors={["#37AADD", "#1F64CC"]}
            style={{
              width: 105,
              height: 105,
              borderRadius: 10,
              padding: 20,
              marginRight: 10,
            }}
          >
            <View>
              <Text style={[tw`text-white font-bold`]}>0</Text>
              <Text style={[tw`text-white font-bold`]}>Tasks</Text>
              <Text style={[tw`text-white mt-2  `]}>Meeting</Text>
            </View>
          </LinearGradient>
        </View>

        {/* Tasks Box  */}
        <View>
          <LinearGradient
            colors={["#37AADD", "#1F64CC"]}
            style={{
              width: 105,
              height: 105,
              borderRadius: 10,
              padding: 20,
              marginRight: 10,
            }}
          >
            <View>
              <Text style={[tw`text-white font-bold`]}>
                {parseInt(allTasks?.length) >= 10
                  ? allTasks?.length
                  : "0" + allTasks?.length}
              </Text>
              <Text style={[tw`text-white font-bold`]}>Tasks</Text>
              <Text style={[tw`text-white mt-2  `]}>General</Text>
            </View>
          </LinearGradient>
        </View>

        {/* Habits Box */}
        <View>
          <LinearGradient
            colors={["#37AADD", "#1F64CC"]}
            style={{
              width: 105,
              height: 105,
              borderRadius: 10,
              padding: 20,
              marginRight: 10,
            }}
          >
            <View>
              <Text style={[tw`text-white font-bold`]}>
                {parseInt(allHabits?.length) >= 10
                  ? allHabits?.length
                  : "0" + allHabits?.length}
              </Text>
              <Text style={[tw`text-white font-bold`]}>Habits</Text>
              <Text style={[tw`text-white mt-2  `]}>General</Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodayBox;
