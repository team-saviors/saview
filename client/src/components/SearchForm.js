import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { questionStore } from '../store/store';

const SearchForm = ({ setOnSearch, setData, searchPage, sort }) => {
  const { questions, getQuestionsBySearch } = questionStore();
  const [keyword, setKeyword] = useState('');
  const searchSubmit = async (e) => {
    e.preventDefault();
    setOnSearch(true);
    setData(keyword);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <SearchInputBox>
      <Form onSubmit={searchSubmit}>
        <IconButton type="submit" aria-label="search" size="small">
          <SearchIcon></SearchIcon>
        </IconButton>
        <SearchInput type="text" onChange={handleChange}></SearchInput>
      </Form>
    </SearchInputBox>
  );
};
export default SearchForm;
const SearchIcon = styled(Search)`
  color: #9e9e9e;
  width: 25px;
  height: 25px;
  /* padding-left: 1rem; */
`;
const SearchFormContainer = styled.div``;
const SearchInputBox = styled.div`
  margin-left: 25px;
`;
const SearchInput = styled.input`
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  width: 38rem;
  height: 3rem;
`;
