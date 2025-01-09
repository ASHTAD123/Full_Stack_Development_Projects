import axios from 'axios'

export const REST_API_BASED_URL ='http://localhost:8080/portfolio/details'
export const REST_API_BASED_POST_URL ='http://localhost:8080/portfolio/addMyDetails'

export const listDetails = () =>axios.get(REST_API_BASED_URL);

export const addDetails = (details)=> axios.post(REST_API_BASED_POST_URL,details)

