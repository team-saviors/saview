import { client, authClient } from './axiosInstance';
import { setAccessToken, setRefreshToken } from './cookies';
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
    const res = await authClient.post('/questions', data);
    alert('질문이 등록되었습니다.');
  } catch (err) {
    console.log(err);
  }
}

export async function getUsersActivity(activity, id, paramObj) {
  const params = new URLSearchParams({
    ...paramObj,
  }).toString();
  const result = await client.get(`/${activity}/${id}/${params}`);
  return result;
}
