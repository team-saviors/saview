import create from 'zustand';
import { getRefreshToken, getUserId } from '../utils/cookies';
import axiosInstance from '../utils/useAxiosPrivate';
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
    const res = await axiosInstance.get(
      `/questions?page=${page}&size=9&mainCategory=all`
    );
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
      const res = await axiosInstance.get(
        `/questions/${questionId}?page=1&size=10&sort=createdAt`
      );
      set((state) => ({
        question: { ...res.data, views: res.data.views + 1 },
      }));
      // console.log('views', get().question.views);
      const updateViews = await axiosInstance.put(
        `/questions/${questionId}/views`,
        {
          views: get().question.views,
        }
      );
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
  userId: 0,
  loginHandler() {
    const refresh_token = getRefreshToken();
    if (refresh_token) {
      set((state) => ({ isLogin: true }));
    } else {
      set((state) => ({ isLogin: false }));
    }
  },
  setUserId(id) {
    set((state) => ({
      ...state,
      userId: getUserId(),
    }));
  },
}));
export const userStore = create((set) => ({
  email: '',
  profile: '',
  nickname: '',
  getUser: async (userId) => {
    const res = await axiosInstance.get(`/users/${userId}`);
    set((state) => ({
      email: res.data.email,
      profile: res.data.profile,
      nickname: res.data.nickname,
    }));
  },
}));
