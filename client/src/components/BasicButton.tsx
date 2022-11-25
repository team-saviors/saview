import Button from '@mui/material/Button';
import styled from 'styled-components';

const BasicButton = styled(Button)`
  color: black;
  &:hover {
    background-color: transparent;
    box-shadow: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;
export default BasicButton;
