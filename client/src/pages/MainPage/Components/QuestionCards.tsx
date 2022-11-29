import { useEffect } from 'react';
import styled from 'styled-components';
import { questionStore } from '../../../store/store';
import QuestionCard from './QuestionCard';
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 2rem;
  justify-content: flex-start;
`;
const QuestionCards = ({
  tab,
  page,
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
      setSubCategory('all');
    } else if (tab === 1) {
      setMainCategory('프론트엔드');
      setSubCategory('all');
    } else if (tab === 2) {
      setMainCategory('백엔드');
      setSubCategory('all');
    } else if (tab === 3) {
      setMainCategory('CS');
      setSubCategory('all');
    } else {
      setMainCategory('기타');
      setSubCategory('all');
    }
  }, [tab]);

  useEffect(() => {
    const question = {
      page: page,
      mainCategory: mainCategory,
      subCategory: subCategory,
      sort: sort,
    };
    getQuestions(question);
  }, [page, mainCategory, subCategory, sort]);

  return (
    <>
      <CardWrapper>
        {questions.data
          ? questions.data.map((question) => (
              <QuestionCard
                class="questionCard"
                key={question.questionId}
                question={question}
              ></QuestionCard>
            ))
          : null}
      </CardWrapper>
    </>
  );
};
export default QuestionCards;
