import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../../components/Pagination';
import SearchForm from '../../components/SearchForm';
import { useQuestionStore } from '../../store/store';
import Carousel from './Components/Carousel';
import EmployAnnouncement from './Components/EmployAnnouncement';
import QuestionCards from './Components/QuestionCards';
import SearchedQuestionCards from './Components/SearchedQuestionCards';
import Tagbox from './Components/Tagbox';
import React from 'react';
const Mainpage = () => {
  const [tab, setTab] = useState(0);
  const [mainCategory, setMainCategory] = useState('all');
  const [subCategory, setSubCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('createdAt');
  const [data, setData] = useState('');
  const [onSearch, setOnSearch] = useState(false);
  const { questions } = useQuestionStore();
  const handleChange = (e: SelectChangeEvent) => {
    e.preventDefault();
    const target = e.target as HTMLSelectElement;
    setSort(target.value);
  };

  return (
    <>
      <MainWrapper>
        <Carousel></Carousel>
        <Tagbox
          setPage={setPage}
          tab={tab}
          setTab={setTab}
          setSubCategory={setSubCategory}
          setOnSearch={setOnSearch}
          setData={setData}
        ></Tagbox>
        <EmployAnnouncement
          mainCategory={mainCategory}
          subCategory={subCategory}
        ></EmployAnnouncement>
        <SelectSearchWrapper>
          <Select
            style={{ position: 'relative', left: '10px', width: '100px' }}
            onChange={handleChange}
            defaultValue="createdAt"
          >
            <MenuItem value="views">조회순</MenuItem>
            <MenuItem value="createdAt">최신순</MenuItem>
          </Select>
          <SearchForm setData={setData} setOnSearch={setOnSearch}></SearchForm>
        </SelectSearchWrapper>
        <Main>
          {onSearch === false ? (
            <QuestionCards
              tab={tab}
              page={page}
              mainCategory={mainCategory}
              subCategory={subCategory}
              setMainCategory={setMainCategory}
              setSubCategory={setSubCategory}
              sort={sort}
            />
          ) : (
            <SearchedQuestionCards sort={sort} data={data} page={page} />
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
const SelectSearchWrapper = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  margin-top: 25px;
`;

const MainWrapper = styled.main`
  max-width: 1200px;
  width: 100%;
  min-height: 40rem;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Main = styled.main`
  max-width: 1200px;
  width: 100%;
  min-height: 200px;
  padding: 10px;
  margin: 0 auto;
`;
export default Mainpage;
