import axiosInstance from '../../utils/axiosInstance';
export async function postQuestion(data) {
  try {
    const res = await axiosInstance.post('/questions', data);
    alert('질문이 등록되었습니다.');
  } catch (err) {
    alert(err.response.data.message);
  }
}
