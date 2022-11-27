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
  question: {};
  getQuestion: (questionId: number, page: number, sort: string) => void;
}
