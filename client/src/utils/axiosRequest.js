import { client } from './axiosInstance';
import {
  setAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
} from './cookies';
// import useAxiosPrivate from './useAxiosPrivate';
import authenticClient from './useAxiosPrivate';
// const authenticClient = useAxiosPrivate();

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
  // const authenticClient = useAxiosPrivate();
  try {
    const res = await authenticClient.post('/questions', data);
    // if (res.data.status === '200') alert('질문이 등록되었습니다.');
  } catch (err) {
    console.log(err);
  }
}
const refresh_token = getRefreshToken();
export async function getAccessWithRefresh() {
  // const authenticClient = useAxiosPrivate();
  try {
    const res = await authenticClient.get('/refresh', {
      headers: { Refresh: `${refresh_token}` },
    });
    setAccessToken(...res.data.accessToken);
    return res.data.accessToken;
  } catch (err) {
    console.log(err);
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
