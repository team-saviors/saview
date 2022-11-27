export interface Question {
  page: number;
  mainCategory: string;
  subCategory: string;
  sort: string;
}

export interface Searching {
  searchPage: number;
  data: string;
  sort: string;
}
export interface QuestionStore {
  questions: { data: any; totalPages: string };
  getQuestions: (question: Question) => void;
  getQuestionsBySearch: (obj: Searching) => void;
}

export interface Review {
  reviewId: string;
  createdAt: string;
  updatedAt: string;
  reviewStatus: string;
  storeId: string;
  body: string;
  score: number;
}

export interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface AnswerStore {
  question: {
    answers: {
      data: [
        {
          answerId: number;
          content: string;
          createdAt: string;
          modifiedAt: string;
          user: {
            userId: number;
            nickname: string;
            profile: string;
            status: string;
          };
        }
      ];
      pageInfo: {
        page: number;
        size: number;
        totalElements: number;
        totalPages: number;
      };
      content: string;
      mainCategory: string;
      questionId: number;
      subCategory: string;
      totalPages: number;
    };
    user: {
      userId: number;
      nickname: string;
      profile: string;
      status: string;
    };
    views: number;
  };
  getQuestion: (questionId: number, page: number, sort: string) => void;
}

export interface QuestionRegisterStore {
  questions: { mainCategory: string; subCategory: string; content: string };
  handleContentChange: (e: any) => void;
  handleMainChange: (e: any) => void;
  handleSubChange: (e: any) => void;
  reset: () => void;
}

export interface LoginStore {
  isLogin: boolean;
  userId: number;
  loginHandler: () => void;
  setUserId: (id: number) => void;
}

export interface SignInModalStore {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface UserStore {
  email: string;
  profile: string;
  nickname: string;
  getUser: (userId: number) => void;
}
