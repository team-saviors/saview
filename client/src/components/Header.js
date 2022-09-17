// import { Link } from '@mui/material';
import { Box, Button } from '@mui/material';
import styled from 'styled-components';

import { SignInModal } from './SignInModal';

const NavBar = styled.header`
  /* width: 100%; */
  height: 85px;
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: auto;

  /* background-color: blue; */
`;
const LogoBox = styled(Box)`
  /* border: 1px solid; */
  > h1 {
    width: 105px;
    height: 32px;
  }
`;
const Loginbox = styled(Box)``;
const LoginButton = styled(Button)`
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
        <h1>SAVIEW</h1>
      </LogoBox>
      <Loginbox>
        {/* // <LoginButton disableRipple variant="text"> */}
        <SignInModal></SignInModal>
      </Loginbox>
    </NavBar>
  );
};
export default Header;
