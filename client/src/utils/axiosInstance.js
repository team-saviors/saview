import axios from 'axios';
const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
