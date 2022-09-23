import axios from 'axios';
import { getAccessToken } from './Cookie';
const access_token = getAccessToken();
// console.log(access_token);

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    Authorization: `${access_token}`,
  },
});
