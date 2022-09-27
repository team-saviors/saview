import { getAccessToken, getRefreshToken } from './cookies';
import { getAccessWithRefresh } from './axiosRequest';
import axios from 'axios';

const authenticClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const refresh_token = getRefreshToken();
const access_token = getAccessToken();

authenticClient.interceptors.request.use(
  (config) => {
    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = `${access_token}`;
    }

    console.log(config);
    return config;
  },
  (error) => Promise.reject(error)
);

authenticClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    const prevReq = error?.config;
    console.log(prevReq);
    if (error?.response?.status === 403 && !prevReq?.sent) {
      prevReq.sent = true;
      const newAccessToken = await getAccessWithRefresh();
      prevReq.headers['Authorization'] = `${newAccessToken}`;
      return authenticClient(prevReq);
    }
    return Promise.reject(error);
  }
);

export default authenticClient;
