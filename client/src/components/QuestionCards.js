import QuestionCard from './QuestionCard';
import Grid from '@mui/material/Unstable_Grid2/';
import styled from 'styled-components';
import { questionStore } from '../store/store';
import { useEffect } from 'react';
import delay from '../utils/delay';
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const QuestionCards = () => {
  const { questions, getQuestions } = questionStore();

  useEffect(() => {
    getQuestions();
  }, []);
  console.log(questions.data);
  return (
    <CardWrapper>
      {/* {questions.data ? <div>{questions.data[0].content}</div> : null} */}
      {questions.data
        ? questions.data.map((question) => (
            <QuestionCard
              key={question.questionId}
              content={question.content}
            ></QuestionCard>
          ))
        : null}
    </CardWrapper>
  );
};
export default QuestionCards;
