import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styled from 'styled-components';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '470px',
  height: '550px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bgcolor: 'background.paper',
  border: '2px solid gray',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: '20px',
};
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

function SignInModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenSignIn(true);
  };
  const [openSignIn, setOpenSignIn] = useState(true);

  return (
    <div>
      <LoginButton disableRipple onClick={handleOpen}>
        로그인
      </LoginButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style }}>
          <Box>
            <button onClick={() => setOpenSignIn(true)}>로그인</button>
            <button onClick={() => setOpenSignIn(false)}>회원가입</button>
          </Box>

          {openSignIn > 0 ? (
            <SignIn handleClose={handleClose} />
          ) : (
            <SignUp handleClose={handleClose} />
          )}
        </Box>
      </Modal>
    </div>
  );
}

export { SignInModal };
