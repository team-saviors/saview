import axiosInstance from '../../utils/axiosInstance';
export async function postQuestion(data) {
  try {
    const res = await axiosInstance.post('/questions', data);
    alert('질문 작성이 완료되었습니다');
  } catch (err) {
    alert(err.response.data.message);
    throw new Error(err.response.data.status);
  }
}
