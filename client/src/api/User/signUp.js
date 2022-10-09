import axiosInstance from '../../utils/axiosInstance';

export async function postSignUp(data) {
  try {
    const res = await axiosInstance.post('/users', data);
    alert('회원가입이 완료되었습니다!');
  } catch (err) {
    alert(err.response.data.message);
  }
}
