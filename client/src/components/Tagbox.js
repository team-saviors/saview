import { Box } from '@mui/material';
import styled from 'styled-components';

const TagboxWrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  height: 230px;
  background-color: beige;
  margin: 104px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Tagbox = () => {
  return <TagboxWrapper>태그박스(layout 예시)</TagboxWrapper>;
};
export default Tagbox;
