import {
  setAccessToken,
  setRefreshToken,
  setUserId,
} from '../../utils/cookies';
import axiosInstance from '../../utils/axiosInstance';

export async function postSignIn(data) {
  try {
    const res = await axiosInstance.post('/login', data);
    setAccessToken(res.data.accessToken);
    setRefreshToken(res.data.refreshToken);
    setUserId(res.data.userId);
    alert('로그인이 성공했습니다');
  } catch (err) {
    alert(err.response.data.message);
  }
}
