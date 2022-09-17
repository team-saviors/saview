import client from './axiosInstance';
async function postSignUp() {
  const response = await client.post('/users');
  console.log(response.data);
}
async function getUser(userId) {
  const response = await client.get(`/users/${userId}`);
  console.log(response.data);
}
