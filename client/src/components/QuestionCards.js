import QuestionCard from './QuestionCard';
import Grid from '@mui/material/Unstable_Grid2/';
import styled from 'styled-components';
import { questionStore } from '../store/store';
import { useEffect } from 'react';
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const QuestionCards = () => {
  const { questions, getQuestions } = questionStore();

  useEffect(() => {
    getQuestions(1);
  }, []);

  return (
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
  );
};
export default QuestionCards;
