import { loginStore } from '../store/store';
import { useState } from 'react';
import {
  setAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setUserId,
  removeUserId,
} from './cookies';
import axiosInstance from './useAxiosPrivate';

export async function postSignUp(data) {
  try {
    const res = await axiosInstance.post('/users', data);
    alert('회원가입이 완료되었습니다!');
  } catch (err) {
    alert(err.response.data.message);
  }
}
export async function postSignIn(data) {
  try {
    const res = await axiosInstance.post('/login', data);
    setAccessToken(res.data.accessToken);
    setRefreshToken(res.data.refreshToken);
    setUserId(res.data.userId);
    alert('로그인이 성공했습니다');
  } catch (err) {
    alert(err.response.data.message);
  }
}

export async function postQuestion(data) {
  try {
    const res = await axiosInstance.post('/questions', data);
    alert('질문이 등록되었습니다.');
  } catch (err) {
    alert(err.response.data.message);
  }
}

export async function getAccessWithRefresh() {
  try {
    const instance = axiosInstance.create({
      headers: { Refresh: `${getRefreshToken()}` },
    });
    const res = await instance.get('/refresh');
    await removeAccessToken();
    setAccessToken(res.headers.authorization);
    return res.headers.authorization;
  } catch (err) {
    if (
      err?.response?.status === 401 &&
      err?.response?.data?.message === 'REFRESH TOKEN EXPIRED'
    ) {
      return postLogout();
    }
  }
}

export async function postLogout() {
  try {
    const res = await axiosInstance.post(
      '/auths/logout',
      {},
      {
        headers: { Authorization: `${getRefreshToken()}` },
      }
    );
    removeAccessToken();
    removeRefreshToken();
    removeUserId();
    alert('로그아웃 되었습니다');
  } catch (err) {
    alert(err.response.data.message);
  }
}

export async function getUsersActivity(activity, id, page, size) {
  const result = await axiosInstance.get(
    `/users/${id}/user-${activity}?page=${page}&size=${size}`
  );
  return result;
}

export async function deleteAnswer(answerId) {
  try {
    const res = await axiosInstance.delete(`/answers/${answerId}`);
    alert('삭제되었습니다');
    location.reload();
  } catch (err) {
    alert(err.response.data.message);
  }
}

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

export async function updateVotes(answerId, votes) {
  try {
    const res = await axiosInstance.put(`/answers/${answerId}/votes`, {
      votes: votes + 1,
    });
    location.reload();
  } catch (err) {
    alert(err.response.data.message);
    console.log(err);
  }
}

export async function modifyUser(nickname, profile) {
  try {
    const res = await axiosInstance.put('/users/modify', {
      profile: profile,
      nickname: nickname,
    });
  } catch (err) {
    console.log(err);
  }
}
