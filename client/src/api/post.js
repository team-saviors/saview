import axiosInstance from '../utils/useAxiosPrivate';

export async function postAnswer(quesionId, data) {
  try {
    const res = await axiosInstance.post(
      `/questions/${quesionId}/answers`,
      data
    );
    alert('답변이 등록되었습니다.');
  } catch (err) {
    console.log(err);
    alert(err);
  }
}
