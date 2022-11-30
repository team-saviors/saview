import axiosInstance from '../../utils/axiosInstance';
export async function deleteAnswer(answerId: number) {
  try {
    const res = await axiosInstance.delete(`/answers/${answerId}`);
    alert('삭제되었습니다');
  } catch (err) {
    alert(err.response.data.message);
    throw new Error(err.response.data.status);
  }
}
