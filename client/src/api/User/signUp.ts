import axiosInstance from '../../utils/axiosInstance';

export async function postSignUp(data) {
  try {
    const res = await axiosInstance.post('/users', data);
  } catch (err) {
    alert(err.response.data.message);
    throw new Error(err.response.data.status);
  }
}
