import QuestionCard from './QuestionCard';
// import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Grid from '@mui/material/Unstable_Grid2/';
import { Box } from '@mui/material';

const QuestionCards = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid md={6} lg={4}>
          <QuestionCard></QuestionCard>
        </Grid>
        <Grid md={6} lg={4}>
          <QuestionCard></QuestionCard>
        </Grid>
        <Grid md={6} lg={4}>
          <QuestionCard></QuestionCard>
        </Grid>
      </Grid>
    </>
  );
};
export default QuestionCards;
