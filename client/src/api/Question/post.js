import axiosInstance from '../../utils/axiosInstance';
export async function postQuestion(data) {
  try {
    const res = await axiosInstance.post('/questions', data);
    return res;
  } catch (err) {
    return err;
  }
}
