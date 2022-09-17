// import { Link } from '@mui/material';
import { Box, Button } from '@mui/material';
import styled from 'styled-components';

import { SignInModal } from './SignInModal';

// import Main_Logo from '../assets/images/saview.png';
import mainLogo from '../assets/images/mainlogo2.png';

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
  > img {
    width: 120px;
    height: 35px;
  }
`;
const Loginbox = styled(Box)``;

const Header = () => {
  return (
    <NavBar>
      <LogoBox>
        {/* <h1>SAVIEW</h1> */}
        <img alt="react" src={mainLogo}></img>
      </LogoBox>

      <Loginbox>
        {/* // <LoginButton disableRipple variant="text"> */}
        <SignInModal></SignInModal>
      </Loginbox>
    </NavBar>
  );
};
export default Header;
