import { Container } from '@mui/material';
import styled from 'styled-components';
import QuestionCards from '../components/QuestionCards';
// const ContainerItem = styled(Container)``;
const Main = styled.main`
  /* max-width: 1200px; */
  width: 100%;
  min-height: 60rem;
  padding: 10px;
  margin: 0;
`;
const Mainpage = () => {
  return (
    <>
      <Main>
        {/* <Container maxWidth=""> */}
        <QuestionCards />
        {/* </Container> */}
      </Main>
    </>
  );
};
export default Mainpage;
