import axiosInstance from '../../utils/axiosInstance';

export async function postComment(answerId, data) {
  try {
    const res = await axiosInstance.post(`/answers/${answerId}/comments`, data);
    return res;
  } catch (err) {
    return err;
  }
}
