import create from 'zustand';
import { client } from '../utils/axiosInstance';
import { getRefreshToken } from '../utils/cookies';

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
  questions: {
    data: [],
  },
  getQuestions: async (page) => {
    const res = await client.get(`/questions?page=${page}&size=9`);
    if (page === 1) {
      set({
        questions: {
          data: [...res.data.data],
        },
      });
      return;
    }
    set((state) => ({
      questions: {
        data: [...state.questions.data, ...res.data.data],
      },
    }));
  },
}));

export const answerStore = create((set, get) => ({
  question: {},
  getQuestion: async (questionId) => {
    try {
      const res = await client.get(`/questions/${questionId}?page=1&size=10`);
      set((state) => ({
        question: { ...res.data, views: res.data.views + 1 },
      }));
      const updateViews = await client.put(`/questions/${questionId}/views`, {
        views: get().question.views,
      });
    } catch (err) {
      console.log(err);
    }
  },
}));

export const questionRegisterStore = create((set) => ({
  questions: { mainCategory: '', subCategory: '', content: '' },
  handleContentChange(e) {
    set((state) => ({
      questions: { ...state.questions, content: e.target.value },
    }));
  },
  handleMainChange(e) {
    set((state) => ({
      questions: {
        ...state.questions,
        mainCategory: e.target.value,
        subCategory: '',
      },
    }));
  },
  handleSubChange(e) {
    set((state) => ({
      questions: { ...state.questions, subCategory: e.target.value },
    }));
  },
}));

export const loginStore = create((set) => ({
  isLogin: false,
  loginHandler() {
    const refresh_token = getRefreshToken();
    if (refresh_token) {
      set((state) => ({ isLogin: true }));
    } else {
      set((state) => ({ isLogin: false }));
    }
  },
}));
