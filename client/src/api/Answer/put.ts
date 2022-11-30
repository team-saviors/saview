import axiosInstance from '../../utils/axiosInstance';

export async function putAnswer(data) {
  try {
    await axiosInstance.put(`/answers/${data.answerId}`, {
      content: data.content,
    });
    alert('답변이 수정되었습니다.');
  } catch (err) {
    console.error(err);
  }
}
