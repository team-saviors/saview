import axiosInstance from '../../utils/axiosInstance';
export async function putComment(data) {
  try {
    await axiosInstance.put(`/comments/${data.commentId}`, {
      content: data.content,
    });
    alert('댓글이 수정되었습니다.');
  } catch (err) {
    console.error(err);
  }
}
