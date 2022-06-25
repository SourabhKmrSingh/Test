import axios from "axios";

export const createHabit = async (body) => {
  try {
    const data = await axios.post(
      "https://zenquip-backend.herokuapp.com/api/createHabit",
      body
    );
    if (data) {
      return data.data;
    }
  } catch (error) {
    console.log(error)
    return [];
  }
};


export const getHabitById = async (id) => {
  try {
    const data = await axios.get(
      `https://zenquip-backend.herokuapp.com/api/getHabitByUser/${id}`
    );
    if (data) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
}


// Update Today Done Date Function

export const updateHabitTodayDoneDate = async (body,id) => {
  try {
    const data = await axios.put(
      `https://zenquip-backend.herokuapp.com/api/habit/todayDoneDate/${id}`,
      body
    );
    if (data) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
}

//delete Habit
export const deleteHabitById = async (id) => {
  try {
    const data = await axios.delete(
      `https://zenquipbackend-app.herokuapp.com/api/deleteHabit/${id}`
    );
    if (data) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
}