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
const QuestionCard = () => {
  return (
    <Link to="/postpage">
      <CardItem variant="outlined">
        <CardActionArea>
          {/* outline 굵기 찾아봐야함 */}
          <h1>React의 state와 props에 대해서 설명해 주세요.</h1>
        </CardActionArea>
      </CardItem>
    </Link>
  );
};
export default QuestionCard;
