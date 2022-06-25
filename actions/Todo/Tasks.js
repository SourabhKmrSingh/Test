import axios from "axios";

export const saveUserTask = async (body) => {
  try {
    const data = await axios.post(
      "https://zenquip-backend.herokuapp.com/api/createTask",
       body
    );
    if (data) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

export  const getTasksById =  async (id) => {
  try {
    const data = await axios.get(
      `https://zenquip-backend.herokuapp.com/api/getTaskByUser/${id}`
    );
    if (data) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
}


// Function to Update updateTodayDoneDate

export const updateTaskTodayDoneDate = async (body,id) => {
  try {
    const data = await axios.put(
      `https://zenquip-backend.herokuapp.com/api/updateTodayDoneDate/${id}`,
      body
    );
    if (data) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
}

//deleteTask
export const deleteTask = async (id) => {
  try {
    const data = await axios.delete(
      `https://zenquip-backend.herokuapp.com/api/deleteTask/${id}`
    );
    if (data) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
}