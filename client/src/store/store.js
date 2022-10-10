import create from 'zustand';
import { getRefreshToken, getUserId } from '../utils/cookies';
import axiosInstance from '../utils/axiosInstance';
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
    totalPages: '',
  },
  getQuestions: async (page, mainCategory, subCategory, sort) => {
    const res = await axiosInstance.get(
      `/questions/tags?page=${page}&size=9&mainCategory=${mainCategory}&subCategory=${subCategory}&sort=${sort}`
    );
    set((state) => ({
      questions: {
        data: [...res.data.data],
        totalPages: res.data.pageInfo.totalPages,
      },
    }));
  },
  getQuestionsBySearch: async (searchPage, data, sort) => {
    const res = await axiosInstance.get(
      `/questions/search?page=${searchPage}&size=9&keyword=${data}&sort=${sort}`
    );
    set((state) => ({
      questions: {
        data: [...res.data.data],
        totalPages: res.data.pageInfo.totalPages,
      },
    }));
  },
}));

export const answerStore = create((set, get) => ({
  question: {},
  getQuestion: async (questionId, page, sort) => {
    try {
      const res = await axiosInstance.get(
        `/questions/${questionId}?page=${page}&size=7&sort=${sort}`
      );
      set((state) => ({
        question: {
          // ...state.question,
          ...res.data,
          views: res.data.views + 1,
          totalPages: res.data.answers.pageInfo.totalPages,
        },
      }));
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
  reset() {
    set((state) => ({
      questions: { mainCategory: '', subCategory: '', content: '' },
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

export const signInModalStore = create((set) => ({
  open: false,
  openModal() {
    set((state) => ({
      open: true,
    }));
  },
  closeModal() {
    set((state) => ({
      open: false,
    }));
  },
}));
