import client from './axiosInstance';

async function postSignUp(data) {
  try {
    const res = await client.post('/users', data);
    alert('회원가입이 완료되었습니다!');
  } catch (err) {
    alert('회원가입이 실패했습니다');
  }
}
async function postSignIn(data) {
  try {
    const res = await client.post('/login', data);
  } catch (err) {
    alert(err);
  }
}
async function getUser(userId) {
  const response = await client.get(`/users/${userId}`);
}

export { postSignUp, postSignIn };
