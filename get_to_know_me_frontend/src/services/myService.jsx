import axios from 'axios'

const REST_API_BASED_URL = "http://localhost:8080/aboutMe"

export const listDetails = () =>axios.get(REST_API_BASED_URL);
