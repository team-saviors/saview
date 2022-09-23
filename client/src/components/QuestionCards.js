import QuestionCard from './QuestionCard';
import styled from 'styled-components';
import { questionStore } from '../store/store';
import { useEffect, useState, useRef, Suspense } from 'react';
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const QuestionCards = () => {
  const { questions, getQuestions } = questionStore();
  const [page, setPage] = useState(1);
  const loading = useRef(null);
  const callback = ([entries]) => {
    if (entries.isIntersecting) {
      setPage((prev) => prev + 1);
      // console.log('intersecting');
    }
  };
  const observer = new IntersectionObserver(callback, {
    threshold: 1,
  });

  useEffect(() => {
    observer.observe(loading.current);
  }, []);
  useEffect(() => {
    getQuestions(page);
  }, [page]);
  return (
    <>
      <CardWrapper>
        {questions.data
          ? questions.data.map((question) => (
              <QuestionCard
                key={question.questionId}
                question={question}
              ></QuestionCard>
            ))
          : null}
      </CardWrapper>
      <div ref={loading}>
        <h1>로딩중~</h1>
      </div>
    </>
  );
};
export default QuestionCards;
