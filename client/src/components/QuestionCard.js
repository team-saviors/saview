import styled from 'styled-components';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
const CardItem = styled(Card)`
  width: 340px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-bottom: 80px;

  /* background-color: red; */
`;
const QuestionCard = ({ content }) => {
  return (
    <Link to="/postpage">
      <CardItem variant="outlined">
        <CardActionArea>
          {/* outline 굵기 찾아봐야함 */}
          <h1>{content}</h1>
        </CardActionArea>
      </CardItem>
    </Link>
  );
};
export default QuestionCard;
