import axiosInstance from '../../utils/axiosInstance';

export async function postAnswer(quesionId, data) {
  try {
    const res = await axiosInstance.post(
      `/questions/${quesionId}/answers`,
      data
    );
    alert('답변 작성이 완료되었습니다');
  } catch (err) {
    alert(err.response.data.message);
    throw new Error(err.response.data.status);
  }
}
