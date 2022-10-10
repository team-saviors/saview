import styled from 'styled-components';
import Card from '@mui/material/Card';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { RemoveRedEye } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';

const QuestionCard = (props) => {
  const { questionId, content, views, answerNum, subCategory } = props.question;
  const navigate = useNavigate();
  return (
    <CardItem
      variant="outlined"
      onClick={() => navigate(`questions/${questionId}`)}
    >
      <Button
        variant="contained"
        style={{
          position: 'absolute',
          left: '10px',
          top: '10px',
          borderRadius: '20px',
          fontFamily: 'Jua',
        }}
      >
        {subCategory}
      </Button>
      <Box style={{ margin: '10px' }}>
        <h1>{content}</h1>
      </Box>
      <Box style={{ poistion: 'relative', bottom: '5px' }}>
        <RemoveRedEye style={{ top: '200px', color: 'gray' }} />
        {views}
        <CommentIcon style={{ color: 'gray' }}></CommentIcon>
        {answerNum}
      </Box>
    </CardItem>
  );
};
const CardItem = styled(Card)`
  width: 340px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  margin-bottom: 80px;
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 15%) 0px 8px 24px;
  transition: all 150ms ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;
export default QuestionCard;
