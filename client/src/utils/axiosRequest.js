import { loginStore } from '../store/store';
import { client } from './axiosInstance';
import {
  setAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setUserId,
  removeUserId,
} from './cookies';
import authenticClient from './useAxiosPrivate';

export async function postSignUp(data) {
  try {
    const res = await client.post('/users', data);
    alert('회원가입이 완료되었습니다!');
  } catch (err) {
    alert('회원가입이 실패했습니다');
  }
}
export async function postSignIn(data) {
  try {
    const res = await client.post('/login', data);
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
    const res = await authenticClient.post('/questions', data);
  } catch (err) {
    console.log(err);
  }
}

export async function getAccessWithRefresh() {
  try {
    const res = await authenticClient.get('/refresh', {
      headers: { Refresh: `${getRefreshToken()}` },
    });
    setAccessToken(res.headers.authorization);
    return res.headers.authorization;
  } catch (err) {
    console.log(err.response.status);
    if (err.response.status === 400) {
      postLogout();
    }
  }
}

export async function postLogout() {
  try {
    const res = await authenticClient.post('/auths/logout', {
      headers: { Authorization: `${getRefreshToken()}` },
    });
    removeAccessToken();
    removeRefreshToken();
    removeUserId();
    alert('로그아웃 되었습니다');
  } catch (err) {
    console.log(err);
  }
}

export async function getUsersActivity(activity, id, page, size) {
  const result = await authenticClient.get(
    `/users/${id}/user-${activity}?page=${page}&size=${size}`
  );
  return result;
}
