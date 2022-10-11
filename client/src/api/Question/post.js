import axiosInstance from '../../utils/axiosInstance';
export async function postQuestion(data) {
  try {
    const res = await axiosInstance.post('/questions', data);
    alert('질문 작성이 완료되었습니다');
    return res;
  } catch (err) {
    return err;
  }
}
