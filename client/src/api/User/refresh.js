import axiosInstance from '../../utils/axiosInstance';
import {
  getRefreshToken,
  removeAccessToken,
  setAccessToken,
} from '../../utils/cookies';
import { postLogout } from './logout';

export async function getAccessWithRefresh() {
  try {
    const instance = axiosInstance.create({
      headers: { Refresh: `${getRefreshToken()}` },
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
