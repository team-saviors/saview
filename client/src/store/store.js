import create from 'zustand';
import bronze from '../assets/images/bronze.png';
export const countStore = create((set) => ({
  count: 0,
  increase() {
    set((state) => ({ count: state.count + 1 }));
  },
  decrease() {
    set((state) => ({ count: state.count - 1 }));
  },
  //ajax요청
  // async useFetch() {
  //   const res = await fetch('url');
  //   console.log(await res.json());
  // },
}));

//이건 나중에 fetch로 refactoring할 것
export const answerStore = create((set) => ({
  question: 'react의 state와 props 차이를 설명하시오',
  answers: [
    {
      answerId: 1,

      imgURL: { bronze },
      author: 'colagom',
      createdAt: '2022-09-15T01:02:17Z',
      modifiedAt: '2022-09-15T01:02:17Z',
      body: 'state는 상태가 변하는 놈, props는 인자를 전달해주는 놈입니다',
      votes: 0,
      comments: [
        {
          commentId: 1,
          imgURL: { bronze },
          author: 'krkim13',
          createdAt: '2022-09-15T02:02:17Z',
          modifiedAt: '2022-09-15T02:02:17Z',
          body: '안녕하세요 당신을 구글 시니어 개발자로 채용하고 싶습니다',
        },
        {
          commentId: 2,
          imgURL: { bronze },
          author: 'yeonkkk',
          createdAt: '2022-09-15T03:02:17Z',
          modifiedAt: '2022-09-15T03:02:17Z',
          body: 'react에 대한 이해도가 굉장하십니다',
        },
      ],
    },
    {
      answerId: 2,

      imgURL: { bronze },
      author: 'pjhyeok',
      createdAt: '2022-09-15T01:02:17Z',
      modifiedAt: '2022-09-15T01:02:17Z',
      body: 'props는 불변 데이터입니다. 부모 컴포넌트로부터 자식컴포넌트로 전달하고 매개변수처럼 취급합니다. state는 가변데이터이고 함수 내에서 선언된 변수처럼 컴포넌트 내에서 관리됩니다. state가 변경될 때 컴포넌트가 리렌더링 됩니다.',
      votes: 0,
      comments: [
        {
          commentId: 1,
          imgURL: { bronze },
          author: 'krkim13',
          createdAt: '2022-09-15T02:02:17Z',
          modifiedAt: '2022-09-15T02:02:17Z',
          body: '대단한 답변에 감탄을 금치 못했습니다.',
        },
        {
          commentId: 2,
          imgURL: { bronze },
          author: 'yeonkkk',
          createdAt: '2022-09-15T03:02:17Z',
          modifiedAt: '2022-09-15T03:02:17Z',
          body: '너무 허접한 답변입니다. 500자 이상으로 서술하세요',
        },
      ],
    },
  ],
  increase() {
    set((state) => {
      // console.log(state);
      return { votes: state.votes + 1 };
    });
  },
}));
