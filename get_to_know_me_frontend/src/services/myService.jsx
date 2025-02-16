import axios from "axios";

export const GET_URL = "http://localhost:8080/portfolio/details";
export const POST_URL = "http://localhost:8080/portfolio/addMyDetails";
export const UPDATE_PERSONAL_DETAILS_URL ="http://localhost:8080/portfolio/updateMyDetails/";
export const UPDATE_CONTACT_DETAILS_URL ="http://localhost:8080/portfolio/updateContactDetails/";

export const listDetails = () => axios.get(GET_URL);

export const saveDetails = (details) => {
  axios
    .post(POST_URL, details, {
      headers: {
        Authorization: "Bearer your-token",
        "Content-Type": "application/json",
      },
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
      }
      console.log(error.config);
    });
};

export const updateMyDetails = (id, updatedData) => {
  console.log(`${UPDATE_PERSONAL_DETAILS_URL}` + `${id}`);

  try {
    axios.put(`${UPDATE_PERSONAL_DETAILS_URL}` + `${id}`, updatedData, {
      headers: {
        Authorization: "Bearer your-token",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.status);
      throw new Error(`Error: ${error.response.status}`);
    } else if (error.request) {
      console.error("Error request:", error.request);
      throw new Error("No response received");
    } else {
      console.error("Error message:", error.message);
      throw new Error(`Unexpected error: ${error.message}`);
    }
  }
};

export const updateContactDetails = (username, updatedData) => {
 
  console.log("updateContactDetails");
  console.log(updatedData);

  console.log("URL : " + `${UPDATE_CONTACT_DETAILS_URL}` + `${username}`);

  try {
    axios.put(`${UPDATE_CONTACT_DETAILS_URL}` + `${username}`, updatedData, {
      headers: {
        Authorization: "Bearer your-token",
        "Content-Type": "application/json",
      },
    });
  }  catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.status);
      throw new Error(`Error: ${error.response.status}`);
    } else if (error.request) {
      console.error("Error request:", error.request);
      throw new Error("No response received");
    } else {
      console.error("Error message:", error.message);
      throw new Error(`Unexpected error: ${error.message}`);
  }
}}
