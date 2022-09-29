import { getAccessToken, getRefreshToken } from './cookies';
import { getAccessWithRefresh } from './axiosRequest';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const refresh_token = getRefreshToken();
const access_token = getAccessToken();

axiosInstance.interceptors.request.use(
  (config) => {
    if (!access_token || !refresh_token) {
      config.headers['Authorization'] = null;
    } else {
      if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `${access_token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 403) {
      alert('로그인 해주세요.');
    } else if (
      error?.response?.status === 401 &&
      error?.response?.data?.message === 'ACCESS TOKEN EXPIRED'
    ) {
      const newAccessToken = await getAccessWithRefresh();
      console.log(newAccessToken);
      if (newAccessToken) {
        error.config.headers['Authorization'] = `${newAccessToken}`;
        return axiosInstance.request(error.config);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
