import axiosInstance from '../utils/useAxiosPrivate';

export async function postComment(answerId, data) {
  try {
    const res = await axiosInstance.post(`/answers/${answerId}/comments`, data);
    alert('댓글이 등록되었습니다.');
  } catch (err) {
    console.log(err);
    alert(err);
  }
}
