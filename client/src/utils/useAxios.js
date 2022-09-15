import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.eventNames.REACT_APP_API_URL,
  timeout: 3000,
});
