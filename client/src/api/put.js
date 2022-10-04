import axiosInstance from '../utils/useAxiosPrivate';

export async function putAnswer(data) {
  try {
    const res = axiosInstance.put(`/answers/${data.answerId}`, {
      content: data.content,
    });
    alert('답변이 수정되었습니다.');
  } catch (err) {
    console.log(err);
  }
}
export async function putComment(data) {
  try {
    const res = axiosInstance.put(`/comments/${data.commentId}`, {
      content: data.content,
    });
    alert('댓글이 수정되었습니다.');
  } catch (err) {
    console.log(err);
  }
}
