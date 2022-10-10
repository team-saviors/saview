import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styled from 'styled-components';
import { signInModalStore } from '../store/store';
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

function SignInModal() {
  const [openSignIn, setOpenSignIn] = useState(true);
  const { open, closeModal } = signInModalStore();
  const handleClose = () => {
    closeModal();
    setOpenSignIn(true);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style }}>
          <Box>
            <button onClick={() => setOpenSignIn(true)}>로그인</button>
            <button onClick={() => setOpenSignIn(false)}>회원가입</button>
          </Box>

          {openSignIn > 0 ? (
            <SignIn onClose={handleClose} />
          ) : (
            <SignUp onClose={handleClose} />
          )}
        </Box>
      </Modal>
    </div>
  );
}

export { SignInModal };
