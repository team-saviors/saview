import axiosInstance from '../../utils/axiosInstance';

export async function postSignUp(data) {
  try {
    const res = await axiosInstance.post('/users', data);
    return res;
  } catch (err) {
    throw new Error('err');
  }
}
