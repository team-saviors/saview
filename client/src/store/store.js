import axios from 'axios';
import create from 'zustand';
import bronze from '../assets/images/bronze.png';
import { client } from '../utils/axiosInstance';

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

export const answerStore = create((set, get) => ({
  question: {},
  getQuestion: async (questionId) => {
    try {
      const res = await client.get(`/questions/${questionId}?page=1&size=10`);
      set({ question: res.data });
    } catch (err) {
      console.log(err);
    }
  },
  updateViews: async (questionId) => {
    set((state) => ({
      question: { ...state.question, views: state.question.views + 1 },
    }));
    const res = await client.put(`/questions/${questionId}/views`, {
      views: get().question.views,
    });
  },
}));

// {
//   "questionId": 4,
//   "content": "메인 페이지 테스트용 글입니다",
//   "mainCategory": "backend",
//   "subCategory": "java",
//   "views": 1,
//   "user": {
//       "userId": 8,
//       "nickname": "lagom",
//       "profile": null
//   },
//   "answers": {
//       "data": [],
//       "pageInfo": {
//           "page": 1,
//           "size": 10,
//           "totalElements": 0,
//           "totalPages": 0
//       }
//   }
// }
