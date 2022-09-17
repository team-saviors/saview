import styled from 'styled-components';
import Card from '@mui/material/Card';
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
    <CardItem variant="outlined">
      {/* outline 굵기 찾아봐야함 */}
      <h1>React의 state와 props에 대해서 설명해 주세요.</h1>
    </CardItem>
  );
};
export default QuestionCard;
