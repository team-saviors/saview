import axiosInstance from '../../utils/axiosInstance';

export async function postComment(answerId, data) {
  try {
    const res = await axiosInstance.post(`/answers/${answerId}/comments`, data);
    alert('댓글 작성이 완료되었습니다');
    return res;
  } catch (err) {
    return err;
  }
}
