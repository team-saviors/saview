import axiosInstance from '../../utils/axiosInstance';

export async function deleteUser(nickname, profile) {
  try {
    const res = await axiosInstance.delete('/users/delete');
    alert('삭제되었습니다');
    return res;
  } catch (err) {
    console.log(err);
  }
}
