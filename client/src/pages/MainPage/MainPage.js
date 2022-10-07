import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Pagination from '../../components/Pagination';
import QuestionCards from './QuestionCards';
import { Select, MenuItem } from '@mui/material';

import Tagbox from '../../components/Tab/Tagbox';
import { questionStore } from '../../store/store';
import { Pages } from '@mui/icons-material';
import SearchForm from '../../components/SearchForm';
import SearchedQuestionCards from './SearchedQuestionCards';

const Mainpage = () => {
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(0);
  const [mainCategory, setMainCategory] = useState('all');
  const [subCategory, setSubCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('views');
  const [searchPage, setSearchPage] = useState(1);
  const [data, setData] = useState('');
  const [onSearch, setOnSearch] = useState(false);
  const { questions } = questionStore();
  const handleChange = (e) => {
    e.preventDefault();
    setSort(e.target.value);
  };
  return (
    <>
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
          setOnSearch={setOnSearch}
          setData={setData}
        ></Tagbox>
        <Select
          style={{ position: 'relative', left: '10px', width: '100px' }}
          onChange={handleChange}
          defaultValue="views"
        >
          <MenuItem value="views">조회순</MenuItem>
          <MenuItem value="createdAt">최신순</MenuItem>
        </Select>
        <SearchForm
          sort={sort}
          searchPage={searchPage}
          setData={setData}
          setOnSearch={setOnSearch}
        ></SearchForm>
        <Main>
          {onSearch === false ? (
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
          ) : (
            <SearchedQuestionCards
              sort={sort}
              data={data}
              searchPage={searchPage}
            />
          )}
        </Main>
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={questions.totalPages}
        ></Pagination>
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
