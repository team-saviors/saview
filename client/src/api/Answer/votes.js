import axiosInstance from '../../utils/axiosInstance';

export async function updateAnswerVotes(answerId, votes) {
  try {
    const res = await axiosInstance.put(`/answers/${answerId}/votes`, {
      votes: votes + 1,
    });
  } catch (err) {
    alert(err.response.data.message);
    console.log(err.response);
  }
}
