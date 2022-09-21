import client from './axiosInstance';

export async function postSignUp(data) {
  try {
    const res = await client.post('/users', data);
    alert('회원가입이 완료되었습니다!');
  } catch (err) {
    alert('회원가입이 실패했습니다');
  }
}
export async function postSignIn(data) {
  try {
    const res = await client.post('/login', data);
  } catch (err) {
    alert(err);
  }
}
export async function getUser(userId) {
  const response = await client.get(`/users/${userId}`);
}

export async function getQuestions() {
  const res = await client.get('/questions?page=1&size=9');
}

export async function updateVotes() {
  const res = await client;
}
