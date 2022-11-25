import {
  getRefreshToken,
  removeAccessToken,
  setAccessToken,
} from '../../utils/cookies';
import { postLogout } from './logout';
import axios from 'axios';
export async function getAccessWithRefresh() {
  try {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Refresh: `${getRefreshToken()}`,
      },
    });
    const res = await instance.get('/refresh');
    await removeAccessToken();
    setAccessToken(res.headers.authorization);
    return res.headers.authorization;
  } catch (err) {
    console.error(err);
    if (
      (err?.response?.status === 401 &&
        err?.response?.data?.message === 'REFRESH TOKEN EXPIRED') ||
      (err?.response?.status === 400 &&
        err?.response?.data?.message === 'INVALID REFRESH TOKEN')
    ) {
      return postLogout();
    }
  }
}
