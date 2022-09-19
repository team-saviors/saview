import client from './axiosInstance';
async function postSignUp(data) {
  try {
    const res = await client.post('/users', data);
    console.log(res);
    alert('회원가입이 완료되었습니다!');
  } catch (err) {
    console.log('err : ', err.response);
    alert('회원가입이 실패했습니다');
  }
}
async function postSignIn(data) {
  try {
    const res = await client.post('/login', data);
    console.log(res);
  } catch (err) {
    console.log('err : ', err.response);
  }
}
async function getUser(userId) {
  const response = await client.get(`/users/${userId}`);
  console.log(response.data);
}

export { postSignUp, postSignIn };
