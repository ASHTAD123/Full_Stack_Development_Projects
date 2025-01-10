import axios from 'axios'
// import data from './AddMyDetails';
export const REST_API_BASED_URL ='http://localhost:8080/portfolio/details'
export const REST_API_BASED_POST_URL ='http://localhost:8080/portfolio/addMyDetails'

export const listDetails = () =>axios.get(REST_API_BASED_URL);

//export const addDetails = (details)=> axios.post(REST_API_BASED_POST_URL,details)

// export const addDetails =  (details)=> axios.post(REST_API_BASED_POST_URL, details, {
     
//     headers: {
//       'Authorization': 'Bearer your-token',
//       'Content-Type': 'application/json',
//     }
    
//   }).catch(function (error) {
//     if (error.response) {

//       console.log("CATCH in SERVICE COMPONENT");
//       console.log(error.response.status);
//       console.log(error.toJSON());
    
//     }else if (error.request) {
  
//       console.log(error.request);
//       console.log(error.toJSON());
//     } else {

//      // console.log('Error', error.message);
//       console.log(error.toJSON());
//     }
//     console.log(error.config);
//    });

