import axios from 'axios';
import create from 'zustand';
import bronze from '../assets/images/bronze.png';
import client from '../utils/axiosInstance';
import { getQuestions } from '../utils/axiosRequest';
export const countStore = create((set) => ({
  count: 0,
  increase() {
    set((state) => ({ count: state.count + 1 }));
  },
  decrease() {
    set((state) => ({ count: state.count - 1 }));
  },
}));
export const questionStore = create((set) => ({
  questions: {},

  getQuestions: async (page) => {
    const res = await client.get(`/questions?page=${page}&size=9`);

    set({ questions: res.data });
  },
}));

export const answerStore = create((set) => ({
  question: {},
  getQuestion: async (questionId) => {
    const res = await client.get(`/questions/${questionId}`);
    set({ question: res.data });
  },
}));
