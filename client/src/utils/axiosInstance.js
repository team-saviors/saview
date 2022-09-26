import axios from 'axios';
import { getAccessToken, getRefreshToken } from './cookies';

const access_token = getAccessToken();
const refresh_token = getRefreshToken();
export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// // authenticClient.interceptors.request.use(function(config))
// authenticClient.interceptors.response.use(
//   function (response) {
//     console.log(response);
//     return response;
//   },
//   function (error) {
//     const originalReq = error.config;
//     console.log(originalReq);
//     if (error.response && error.response.status === 403) {
//       // console.log(access_token);
//       return getAccessWithRefresh();
//     }
//     console.log(error);
//   }
// );
