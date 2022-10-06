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
  display: flex;
  height: 2.3rem;
  width: 15rem;
`;
const SearchInput = styled.input`
  width: 100%;
`;
