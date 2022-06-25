import axios from "axios";

export const getAddictionByUser = async (id) => {
  try {
    const data = await axios.get(
      `https://zenquipbackend.herokuapp.com/v1/tools/getAddictionByPatientId/${id}`
    );
    if (data) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};


export const addAddictionInDatabase = async (addiction) => {
  try {
    const data = await axios.post(
      `https://zenquipbackend.herokuapp.com/v1/tools/addAddiction`,
      addiction
    );
    if (data) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
}
