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
import { postLogout } from '../api/User';
import axiosInstance from './axiosInstance';

export async function postQuestion(data) {
  try {
    const res = await axiosInstance.post('/questions', data);
    alert('질문이 등록되었습니다.');
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
