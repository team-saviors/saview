import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import QuestionCards from '../components/QuestionCards';
import Tagbox from '../components/Tagbox';
import { loginStore } from '../store/store';

const Mainpage = () => {
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(0);
  const { isLogin, loginHandler } = loginStore();

  return (
    <>
      <Carousel></Carousel>
      <Tagbox tab={tab} setTab={setTab} setActive={setActive}></Tagbox>
      <Main>
        <QuestionCards />
      </Main>
    </>
  );
};
export default Mainpage;
const Main = styled.main`
  max-width: 1200px;
  width: 100%;
  min-height: 60rem;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
