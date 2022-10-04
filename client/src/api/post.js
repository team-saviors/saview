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

export async function postComment(answerId, data) {
  try {
    const res = await axiosInstance.post(`/answers/${answerId}/comments`, data);
    alert('댓글이 등록되었습니다.');
  } catch (err) {
    console.log(err);
    alert(err);
  }
}
