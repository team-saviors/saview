import { SignInModal } from './SignInModal';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { loginStore, signInModalStore } from '../store/store';
import { useState, useEffect } from 'react';
const Header = () => {
  const { isLogin } = loginStore();
  const { openModal } = signInModalStore();

  const navigate = useNavigate();

  const handleClick = () => {
    if (isLogin) {
      navigate('/questionpost');
    } else {
      openModal();
      navigate('/questionpost');
    }
  };
  return (
    <>
      <NavBar>
        <LogoBox>
          <Link to="/">
            <img
              className="main_logo"
              alt="react"
              src={
                'https://saview-dev.s3.ap-northeast-2.amazonaws.com/Saview/logo_tranverse.png'
              }
            ></img>
          </Link>
        </LogoBox>
        <Loginbox>
          <QuestionPostBtn disableRipple onClick={handleClick}>
            새 질문 쓰기
          </QuestionPostBtn>

          {isLogin ? (
            <>
              <NoticeModal></NoticeModal>
              <UserDropdown></UserDropdown>
            </>
          ) : (
            <LoginButton disableRipple onClick={() => openModal()}>
              로그인
            </LoginButton>
          )}
        </Loginbox>
        <SignInModal></SignInModal>
      </NavBar>
      <div>
        <Outlet />
      </div>
    </>
  );
};

import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import NoticeModal from './NoticeModal';
import UserDropdown from './UserDropdown';

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
  margin-left: 600px;
`;

const QuestionPostBtn = styled(Button)`
  font-size: 1.125rem;
  font-weight: 600;
  font-family: inherit;
  color: black;
  &:hover {
    background-color: transparent;
    box-shadow: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

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

export default Header;
