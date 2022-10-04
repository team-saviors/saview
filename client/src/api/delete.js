import axiosInstance from '../utils/useAxiosPrivate';

export async function deleteComment(commentId) {
  try {
    const res = await axiosInstance.delete(`/comments/${commentId}`);
    alert('댓글이 삭제되었습니다');
  } catch (err) {
    console.log(err);
  }
}
