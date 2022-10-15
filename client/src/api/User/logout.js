import axiosInstance from '../../utils/axiosInstance';
import {
  removeAccessToken,
  removeRefreshToken,
  removeUserId,
  getRefreshToken,
} from '../../utils/cookies';

export async function postLogout() {
  try {
    const res = await axiosInstance.post(
      '/auths/logout',
      {},
      {
        headers: { Authorization: `${getRefreshToken()}` },
      }
    );
    removeAccessToken();
    removeRefreshToken();
    removeUserId();
    alert('로그아웃 되었습니다');
  } catch (err) {
    alert(err.response.data.message);
    throw new Error(err.response.data.status);
  }
}
