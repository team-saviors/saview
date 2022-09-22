// import { Link } from '@mui/material';
import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import { SignInModal } from './SignInModal';
import mainLogo from '../assets/images/mainlogo2.png';
import { Link } from 'react-router-dom';

const NavBar = styled.header`
  /* width: 100%; */
  height: 85px;
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: auto;
`;
const LogoBox = styled(Box)`
  .main_logo {
    width: 120px;
    height: 35px;
  }
`;
const Loginbox = styled(Box)`
  display: flex;
  text-align: center;
  grid-gap: 35px;
`;
const QuestionPostBtn = styled(Button)`
  font-size: 1.125rem;
  font-weight: 600;
  color: black;
  &:hover {
    background-color: transparent;
    box-shadow: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

const Header = () => {
  return (
    <NavBar>
      <LogoBox>
        {/* <h1>SAVIEW</h1> */}
        <Link to="/">
          <img className="main_logo" alt="react" src={mainLogo}></img>
        </Link>
      </LogoBox>
      <Loginbox>
        <Link to="/questionpost">
          <QuestionPostBtn disableRipple>새 질문 쓰기</QuestionPostBtn>
        </Link>
        <SignInModal></SignInModal>
      </Loginbox>
    </NavBar>
  );
};
export default Header;
