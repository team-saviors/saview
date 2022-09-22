import styled from 'styled-components';
import Card from '@mui/material/Card';
import { CardActionArea, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { RemoveRedEye } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import { answerStore } from '../store/store';
import { useEffect } from 'react';
const QuestionCard = (props) => {
  const { questionId, content, views } = props.question;
  const { question, getQuestion, updateViews } = answerStore();
  useEffect(() => {
    getQuestion(questionId);
  }, []);

  return (
    <Link
      to={`questions/${questionId}`}
      onClick={() => updateViews(questionId)}
    >
      <CardItem style={{ position: 'relative' }} variant="outlined">
        <Box style={{ margin: '10px' }}>
          {/* outline 굵기 찾아봐야함 */}
          <h1>{content}</h1>
        </Box>
        <Box style={{ poistion: 'relative', bottom: '5px' }}>
          <RemoveRedEye style={{ top: '200px', color: 'gray' }} />
          {views}
          <CommentIcon style={{ color: 'gray' }}></CommentIcon>
          {question.answers ? question.answers.data.length : 0}
        </Box>
      </CardItem>
    </Link>
  );
};
const CardItem = styled(Card)`
  width: 340px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-bottom: 80px;
`;
export default QuestionCard;
