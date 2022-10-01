import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Pagination from '../components/Pagination';
import QuestionCards from '../components/QuestionCards';
import Tagbox from '../components/Tab/Tagbox';
import { loginStore } from '../store/store';

const Mainpage = () => {
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(0);
  const [mainCategory, setMainCategory] = useState('all');
  const [subCategory, setSubCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('views');
  return (
    <>
      <Carousel></Carousel>
      <Tagbox
        setPage={setPage}
        tab={tab}
        setTab={setTab}
        setActive={setActive}
        setMainCategory={setMainCategory}
        setSubCategory={setSubCategory}
        page={page}
        mainCategory={mainCategory}
        subCategory={subCategory}
      ></Tagbox>
      <Main>
        <QuestionCards
          tab={tab}
          page={page}
          setPage={setPage}
          mainCategory={mainCategory}
          subCategory={subCategory}
          setMainCategory={setMainCategory}
          setSubCategory={setSubCategory}
          sort={sort}
        />
      </Main>
      <Pagination page={page} setPage={setPage} numOfPages={100}></Pagination>
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
