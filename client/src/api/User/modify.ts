import axiosInstance from '../../utils/axiosInstance';

export async function modifyUser(nickname, profile) {
  try {
    const res = await axiosInstance.put('/users/modify', {
      profile: profile,
      nickname: nickname,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function modifyPassword(data) {
  try {
    const res = await axiosInstance.put('/users/password', data);
    alert('비밀번호 변경이 완료되었습니다!');
  } catch (err) {
    alert('기존의 비밀번호를 확인해주세요');
  }
}
