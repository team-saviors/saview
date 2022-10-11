import axiosInstance from '../../utils/axiosInstance';

export async function postAnswer(quesionId, data) {
  try {
    const res = await axiosInstance.post(
      `/questions/${quesionId}/answers`,
      data
    );
    return res;
  } catch (err) {
    return err;
  }
}
