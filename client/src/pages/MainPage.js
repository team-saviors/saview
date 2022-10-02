import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Pagination from '../components/Pagination';
import QuestionCards from '../components/QuestionCards';
import { Select, MenuItem } from '@mui/material';
import Carousel from '../components/Carousel';
import Tagbox from '../components/Tab/Tagbox';
import { loginStore } from '../store/store';

const Mainpage = () => {
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(0);
  const [mainCategory, setMainCategory] = useState('all');
  const [subCategory, setSubCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('views');

  const handleChange = (e) => {
    setSort(e.target.value);
  };
  return (
    <>
      <Carousel></Carousel>
      <MainWrapper>
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
        <Select
          style={{ position: 'relative', left: '10px', width: '100px' }}
          onChange={handleChange}
          defaultValue="views"
        >
          <MenuItem value="views">조회순</MenuItem>
          <MenuItem value="createdAt">최신순</MenuItem>
          <MenuItem value="answers">댓글순</MenuItem>
        </Select>
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
        <Pagination page={page} setPage={setPage}></Pagination>
      </MainWrapper>
    </>
  );
};
export default Mainpage;
const MainWrapper = styled.main`
  max-width: 1200px;
  width: 100%;
  min-height: 60rem;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

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
