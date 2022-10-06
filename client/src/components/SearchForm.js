import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import styled from 'styled-components';

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <SearchInputBox>
        <IconButton aria-label="search" size="small">
          <SearchIcon></SearchIcon>
        </IconButton>
        <SearchInput></SearchInput>
      </SearchInputBox>
    </SearchFormContainer>
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
  border: 1px solid #9e9e9e;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 1;
  height: 2.3rem;
  width: 15rem;
`;
const SearchInput = styled.input`
  border: none;
  width: 10rem;
  -webkit-appearance: none;
  text-align: center;
  margin-left: 10px;
  overflow: auto;
  z-index: -1;
  height: 2.3rem;
  &:focus {
    outline: none;
    width: 15rem;
    text-align: center;
  }
`;
