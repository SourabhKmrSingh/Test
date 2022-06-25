import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom } from "recoil";

export const loggedState = atom({
  key: "loggedState",
  default: false,
});
// User Recoil State
export const user = atom({
  key: "user",
  default: false,
});
export const userDataRecoil = atom({
  key: "userDataRecoil",
  default: null,
});

// All Todo Items Recoil State
export const isTodoItemsLoadingRecoil = atom({
  key: "isTodoItemsLoadingRecoil",
  default: true,
});
export const isTodoDateItemsLoadingRecoil = atom({
  key: "isTodoDateItemsLoadingRecoil",
  default: false,
});
export const allTaskItemsRecoil = atom({
  key: "alltaskitems",
  default: [],
});
export const allHabitItemsRecoil = atom({
  key: "allhabititems",
  default: [],
});
export const habitStoreRecoil = atom({
  key: "habitStoreRecoil",
  default: [],
});

export const allTodoRecoil = atom({
  key: "alltodo",
  default: [],
});

export const taskAddedRecoil = atom({
  key: "taskadded",
  default: 1,
});
export const habitAddedRecoil = atom({
  key: "habitadded",
  default: 1,
});

export const habitCreateRecoil = atom({
  key: "habitcreaterecoil",
  default: {
    name: "",
    category: "",
    description: "",
    target: {
      valueType: "",
      value: "",
      unit: "",
    },
    completeType: "bool",
    reminderType: "EveryDay",
    repeatWeek: {
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
    },
    specific: {
      specificType: "week",
      value: 0,
    },
    startTime: "",
    endTime: "",
    isReminder: true,
    reminderTime: {
      hour: "12",
      minute: "01",
    },
    isShowPendingTask: true,
    priority: "normal",
    completedDays: 0,
    todayDoneDate: "2022-4-21",
    type: "Habit",
  },
});

export const value = atom({
  key: "myvalue",
  default: "hello",
});

// ALl Notification State

export const allNotificationRecoil = atom({
  key: "allnotification",
  default: [],
});

export const mobileNumberRecoil = atom({
  key: "mobileNumberRecoil",
  default: "",
})
