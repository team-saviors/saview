import { client } from './axiosInstance';
import {
  setAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
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
  } catch (err) {
    alert(err);
  }
}
export async function getUser(userId) {
  const response = await client.get(`/users/${userId}`);
}

export async function postQuestion(data) {
  try {
    const res = await authenticClient.post('/questions', data);
  } catch (err) {
    console.log(err);
  }
}

const refresh_token = getRefreshToken();
export async function getAccessWithRefresh() {
  try {
    const res = await authenticClient.get('/refresh', {
      headers: { Refresh: `${refresh_token}` },
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
      headers: { Authorization: `${refresh_token}` },
    });
    removeAccessToken();
    removeRefreshToken();
  } catch (err) {
    console.log(err);
  }
}
