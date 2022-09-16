import QuestionCard from './QuestionCard';
// import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Grid from '@mui/material/Unstable_Grid2/';
import styled from 'styled-components';
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const QuestionCards = () => {
  return (
    <CardWrapper>
      <QuestionCard></QuestionCard>
      <QuestionCard></QuestionCard>
      <QuestionCard></QuestionCard>
      <QuestionCard></QuestionCard>
      <QuestionCard></QuestionCard>
      <QuestionCard></QuestionCard>
      <QuestionCard></QuestionCard>
    </CardWrapper>
  );
};
export default QuestionCards;
