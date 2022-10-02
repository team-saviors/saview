import QuestionCard from './QuestionCard';
import styled from 'styled-components';
import { questionStore } from '../store/store';
import { useEffect, useState, useRef, Suspense } from 'react';
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const QuestionCards = ({
  tab,
  page,
  setPage,
  mainCategory,
  subCategory,
  setMainCategory,
  setSubCategory,
  sort,
}) => {
  const { questions, getQuestions } = questionStore();

  useEffect(() => {
    if (tab === 0) {
      setMainCategory('all');
    } else if (tab === 1) {
      setMainCategory('프론트엔드');
    } else if (tab === 2) {
      setMainCategory('백엔드');
    } else if (tab === 3) {
      setMainCategory('CS');
    } else {
      setMainCategory('기타');
    }
  }, [tab]);

  useEffect(() => {
    getQuestions(page, mainCategory, subCategory, sort);
  }, [page, mainCategory, subCategory, sort]);

  return (
    <>
      <CardWrapper>
        {questions.data
          ? questions.data.map((question) => (
              <QuestionCard
                key={question.questionId}
                question={question}
                setSubCategory={setSubCategory}
              ></QuestionCard>
            ))
          : null}
      </CardWrapper>
    </>
  );
};
export default QuestionCards;
