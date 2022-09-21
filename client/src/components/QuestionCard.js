import styled from 'styled-components';
import Card from '@mui/material/Card';
import { CardActionArea, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { RemoveRedEye } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';

const QuestionCard = (props) => {
  console.log(props.question);
  const { questionId, content, views } = props.question;
  return (
    <Link to={`questions/${questionId}`} state={{ questionId: questionId }}>
      <CardItem style={{ position: 'relative' }} variant="outlined">
        <Box style={{ margin: '10px' }}>
          {/* outline 굵기 찾아봐야함 */}
          <h1>{content}</h1>
        </Box>
        <Box style={{ poistion: 'relative', bottom: '5px' }}>
          <RemoveRedEye style={{ top: '200px', color: 'gray' }} />
          {views}
          <CommentIcon style={{ color: 'gray' }}></CommentIcon>0
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
