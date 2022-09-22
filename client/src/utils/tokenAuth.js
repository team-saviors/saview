import axios from 'axios';
import { Cookies } from 'react-cookie';
import { getCookie } from './cookies';
import { authClient } from './axiosInstance';
const cookies = new Cookies();

export const setToken = (accessToken, refreshToken) => {
  if (accessToken && refreshToken) {
    cookies.set('access_token', accessToken);
    cookies.set('refresh_token', refreshToken);
    authClient.defaults.headers.access_token = accessToken;
    authClient.defaults.headers.refresh_token = refreshToken;
  }
};

// export const removeToken = () => {
//   cookies.remove('access_token');
//   cookies.remove('refresh_token');
//   authClient.defaults.headers.access_token = null;
//   authClient.defaults.headers.refresh_token = null;
// };

authClient.interceptors.request.use(async (config) => {
  const accessToken = getCookie('access_token');
  const refreshToken = getCookie('refresh_token');

  if (accessToken && refreshToken) {
    config.headers.access_token = accessToken;
    config.headers.refresh_token = refreshToken;
  }
  config.headers['Content-Type'] = 'application/json';
  config.withCredentials = true;

  return config;
});

authClient.interceptors.response.use(
  (response) => response,

  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 403) {
      const originalReq = config;
      const refreshToken = getCookie('refresh_token');
      const { data } = await axios.get('/api/v1/users/refresh');
    }
  }
);

export default authClient;
