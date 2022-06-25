import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import AddCateg from "../../../screens/Svgs/TaskCategory/AddCateg";
import DietCateg from "../../../screens/Svgs/TaskCategory/DietCateg";
import HealthCateg from "../../../screens/Svgs/TaskCategory/HealthCateg";
import JoggCateg from "../../../screens/Svgs/TaskCategory/JoggCateg";
import JunkFoodCateg from "../../../screens/Svgs/TaskCategory/JunkFoodCateg";
import MeditCateg from "../../../screens/Svgs/TaskCategory/MeditCateg";
import NutritionCateg from "../../../screens/Svgs/TaskCategory/NutritionCateg";
import OutCateg from "../../../screens/Svgs/TaskCategory/OutCateg";
import RunCateg from "../../../screens/Svgs/TaskCategory/RunCateg";
import SleepCateg from "../../../screens/Svgs/TaskCategory/SleepCateg";
import SocialCateg from "../../../screens/Svgs/TaskCategory/SocialCateg";
import StudyCateg from "../../../screens/Svgs/TaskCategory/StudyCateg";
import WakeupCateg from "../../../screens/Svgs/TaskCategory/WakeupCateg";
import AddTaskScreen from "../../../screens/Todo/Tasks/AddTaskScreen";

const Selectcategory = ({ taskData, setTaskData }) => {
  const TaskCategoryHandler = (category) => {
    setTaskData({ ...taskData, category: category });
  };
  return (
    <>
    <View style={styles.AllCategLists}>
      <TouchableOpacity
        style={
          taskData.category == "Task" ? styles.activecateg : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Task");
        }}
      >
        <DietCateg />
        <Text
          style={
            taskData.category == "Task" ? styles.activeName : styles.categName
          }
        >
          Task
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          taskData.category == "Meditation"
            ? styles.activecateg
            : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Meditation");
        }}
      >
        <MeditCateg />
        <Text
          style={
            taskData.category == "Meditation"
              ? styles.activeName
              : styles.categName
          }
        >
          Meditation
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          taskData.category == "Track Pill"
            ? styles.activecateg
            : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Track Pill");
        }}
      >
        <JoggCateg />
        <Text
          style={
            taskData.category == "Track Pill"
              ? styles.activeName
              : styles.categName
          }
        >
          Track Pill
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          taskData.category == "Social"
            ? styles.activecateg
            : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Social");
        }}
      >
        <SocialCateg />
        <Text
          style={
            taskData.category == "Social" ? styles.activeName : styles.categName
          }
        >
          Social
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          taskData.category == "Health"
            ? styles.activecateg
            : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Health");
        }}
      >
        <HealthCateg />
        <Text
          style={
            taskData.category == "Health" ? styles.activeName : styles.categName
          }
        >
          Health
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          taskData.category == "Nutrition"
            ? styles.activecateg
            : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Nutrition");
        }}
      >
        <NutritionCateg />
        <Text
          style={
            taskData.category == "Nutrition"
              ? styles.activeName
              : styles.categName
          }
        >
          Nutrition
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          taskData.category == "Study" ? styles.activecateg : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Study");
        }}
      >
        <StudyCateg />
        <Text
          style={
            taskData.category == "Study" ? styles.activeName : styles.categName
          }
        >
          Study
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          taskData.category == "Outdoor"
            ? styles.activecateg
            : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Outdoor");
        }}
      >
        <OutCateg />
        <Text
          style={
            taskData.category == "Outdoor"
              ? styles.activeName
              : styles.categName
          }
        >
          Outdoor
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          taskData.category == "Wake up"
            ? styles.activecateg
            : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Wake up");
        }}
      >
        <WakeupCateg />
        <Text
          style={
            taskData.category == "Wake up"
              ? styles.activeName
              : styles.categName
          }
        >
          Wake up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          taskData.category == "Sleep" ? styles.activecateg : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Sleep");
        }}
      >
        <SleepCateg />
        <Text
          style={
            taskData.category == "Sleep" ? styles.activeName : styles.categName
          }
        >
          Sleep
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          taskData.category == "Running"
            ? styles.activecateg
            : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Running");
        }}
      >
        <RunCateg />
        <Text
          style={
            taskData.category == "Running"
              ? styles.activeName
              : styles.categName
          }
        >
          Running
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          taskData.category == "No Junk food"
            ? styles.activecateg
            : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("No Junk food");
        }}
      >
        <JunkFoodCateg />
        <Text
          style={
            taskData.category == "No Junk food"
              ? styles.activeName
              : styles.categName
          }
        >
          No Junk food
        </Text>
      </TouchableOpacity>
     
      <TouchableOpacity
        style={
          taskData.category == "Sports"
            ? styles.activecateg
            : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Sports");
        }}
      >
        <JoggCateg />
        <Text
          style={
            taskData.category == "Sports" ? styles.activeName : styles.categName
          }
        >
          Sports
        </Text>
      </TouchableOpacity>

      
      
      {/* <TouchableOpacity
        style={
          taskData.category == "task" ? styles.activecateg : styles.singlecateg
        }
        onPress={() => {
          TaskCategoryHandler("Task");
        }}
      >
        <AddCateg />
        <Text
          style={
            taskData.category == "Task" ? styles.activeName : styles.categName
          }
        >
          Type here
        </Text>
      </TouchableOpacity> */}
    </View>
     
      </>
  );
};

const styles = StyleSheet.create({
  AllCategLists: {
    display: "flex",   
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    
  },
  singlecateg: {
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  activecateg: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#ecececb5",
    borderRadius: 10,
  },
  categName: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  activeName: {
    color: "black",
    fontSize: 12,
    marginTop: 5,
    fontWeight: "700",
  },
});

export default Selectcategory;
