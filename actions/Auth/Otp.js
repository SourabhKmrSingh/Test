export const getOtpById = async (id) => {
  try {
    const data = await fetch(
      `https://zenquip-backend.herokuapp.com/api/get-otp/${id}`
    );
    const parsedData = await data.json();
    if (parsedData) return parsedData;
  } catch (error) {
    return "";
  }
};

export const addOtp = async (code) => {
  try {
    const data = await fetch(
      `https://zenquip-backend.herokuapp.com/api/add-otp`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      }
    );
    const parsedData = await data.json();
    if (parsedData) return parsedData;
  } catch (error) {
    console.log(error, "error ho gya ho");
    return 0;
  }
};
