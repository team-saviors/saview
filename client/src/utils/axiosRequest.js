import { loginStore } from '../store/store';

import {
  setAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setUserId,
  removeUserId,
} from './cookies';
import axiosInstance from './useAxiosPrivate';

export async function postSignUp(data) {
  try {
    const res = await axiosInstance.post('/users', data);
    alert('회원가입이 완료되었습니다!');
  } catch (err) {
    alert('회원가입이 실패했습니다');
  }
}
export async function postSignIn(data) {
  try {
    const res = await axiosInstance.post('/login', data);
    setAccessToken(res.data.accessToken);
    setRefreshToken(res.data.refreshToken);
    setUserId(res.data.userId);
    alert('로그인이 성공했습니다');
    console.log(res);
  } catch (err) {
    alert(err);
  }
}

export async function postQuestion(data) {
  try {
    const res = await axiosInstance.post('/questions', data);
  } catch (err) {
    console.log(err);
  }
}

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
    postLogout();
  }
}

export async function postLogout() {
  try {
    // const res = await axiosInstance.post(
    //   '/auths/logout',
    //   {},
    //   {
    //     headers: { Authorization: `${getRefreshToken()}` },
    //   }
    // );
    removeAccessToken();
    removeRefreshToken();
    removeUserId();
    alert('로그아웃 되었습니다');
  } catch (err) {
    console.log(err);
  }
}

export async function getUsersActivity(activity, id, page, size) {
  const result = await axiosInstance.get(
    `/users/${id}/user-${activity}?page=${page}&size=${size}`
  );
  return result;
}
