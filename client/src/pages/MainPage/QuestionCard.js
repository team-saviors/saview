import styled from 'styled-components';
import Card from '@mui/material/Card';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { RemoveRedEye } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';

const QuestionCard = (props) => {
  const { questionId, content, views, answerNum, subCategory } = props.question;
  return (
    <Link to={`questions/${questionId}`}>
      <CardItem
        style={{ position: 'relative', borderRadius: '20px' }}
        variant="outlined"
      >
        <Button
          variant="contained"
          style={{
            position: 'absolute',
            left: '10px',
            top: '10px',
            borderRadius: '20px',
          }}
        >
          {subCategory}
        </Button>
        <Box style={{ margin: '10px' }}>
          {/* outline 굵기 찾아봐야함 */}
          <h1>{content}</h1>
        </Box>
        <Box style={{ poistion: 'relative', bottom: '5px' }}>
          <RemoveRedEye style={{ top: '200px', color: 'gray' }} />
          {views}
          <CommentIcon style={{ color: 'gray' }}></CommentIcon>
          {answerNum}
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
  margin-right: 40px;
  margin-bottom: 80px;
`;
export default QuestionCard;
