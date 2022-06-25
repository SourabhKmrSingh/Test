export const addUserInMongo = (email) => {
  return fetch(`https://zenquip-backend.herokuapp.com/api/add-Users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// add-Users-By-Mobile
export const addUserInMongoByMobile = (mobile) => {
  return fetch(
    `https://zenquip-backend.herokuapp.com/api/add-Users-By-Mobile`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile }),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUserByEmail = async (email) => {
  try {
    const data = await fetch(
      `https://zenquip-backend.herokuapp.com/api/get-User-by-email/${email}`
    );
    const parsedData = await data.json();
    if (parsedData) return parsedData;
  } catch (error) {
    return [];
  }
};

// get-User-by-mobile
export const getUserByMobile = async (mobile) => {
  try {
    const data = await fetch(
      `https://zenquip-backend.herokuapp.com/api/get-User-by-mobile/${mobile}`
    );
    const parsedData = await data.json();
    if (parsedData) return parsedData;
  } catch (error) {
    return [];
  }
};

// PUT REQUEST to update user
export const updateUser = async (user) => {
  try {
    const data = await fetch(
      `https://zenquip-backend.herokuapp.com/api/update-Users/${user._id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      }
    );
    const parsedData = await data.json();
    if (parsedData) return parsedData;
  } catch (error) {
    return [];
  }
};

// update-Contacts

export const updateUserContactById = async (id, data2) => {
  try {
    const data = await fetch(
      `https://zenquip-backend.herokuapp.com/api/update-Contacts/${id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data2),
      }
    );
    const parsedData = await data.json();
    if (parsedData) return parsedData;
  } catch (error) {
    return [];
  }
};
