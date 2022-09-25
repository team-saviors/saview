import { Cookies } from 'react-cookie';
import { authClient } from './axiosInstance';
const cookies = new Cookies();

export const setAccessToken = (accessToken) => {
  cookies.set('access_token', accessToken, {
    sameSite: 'strict',
  });
};
export const getAccessToken = () => {
  return cookies.get('access_token');
};
export const removeAccessToken = () => {
  return cookies.remove('access_token', { sameSite: 'strict' });
};

export const setRefreshToken = (refreshToken) => {
  cookies.set('refresh_token', refreshToken, {
    sameSite: 'strict',
  });
};
export const getCookieToken = () => {
  return cookies.get('refresh_token');
};
export const removeRefreshToken = () => {
  return cookies.remove('refresh_token', { sameSite: 'strict' });
};
