import axios from 'axios'

const REST_API_BASED_URL ='http://localhost:8080'

export const listDetails = () =>axios.get(REST_API_BASED_URL);

export const addDeatils = (details)=> axios.post(REST_API_BASED_URL,details)