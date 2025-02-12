import axios from "axios";

export const REST_API_BASED_URL = "http://localhost:8080/portfolio/details";
export const REST_API_BASED_POST_URL ="http://localhost:8080/portfolio/addMyDetails";
export const REST_API_BASED_UPDATE_PERSONAL_DETAILS_URL="http://localhost:8080/portfolio/updateMyDetails/";

export const listDetails = () => axios.get(REST_API_BASED_URL);

export const saveDetails = (details) =>{
  axios
    .post(REST_API_BASED_POST_URL, details, {
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
}

export const updateMyDetails =(id,updatedData)=>{

  console.log(`${REST_API_BASED_UPDATE_PERSONAL_DETAILS_URL}`+`${id}`);
  
  try{
      axios.put(`${REST_API_BASED_UPDATE_PERSONAL_DETAILS_URL}`+`${id}`,updatedData,{
        headers: {
          Authorization: "Bearer your-token",
          "Content-Type": "application/json",
        },
      })   
  } 
    catch (error) {
      // Handle error properly
      if (error.response) {
        console.error("Error response:", error.response.status);
        throw new Error(`Error: ${error.response.status}`); // Throw error for higher-level handling
      } else if (error.request) {
        console.error("Error request:", error.request);
        throw new Error('No response received');
      } else {
        console.error("Error message:", error.message);
        throw new Error(`Unexpected error: ${error.message}`);
      }
    }

}