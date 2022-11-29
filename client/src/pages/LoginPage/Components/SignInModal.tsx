import Box from '@mui/material/Box';
import { useState } from 'react';
import styled from 'styled-components';
import { signInModalStore } from '../../../store/store';
import { Modal } from '@mui/material';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
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
          <TabBox>
            <LoginTab onClick={() => setOpenSignIn(true)}>로그인</LoginTab>
            <SignupTab onClick={() => setOpenSignIn(false)}>회원가입</SignupTab>
          </TabBox>

          {openSignIn ? (
            <SignIn onClose={handleClose} />
          ) : (
            <SignUp onClose={handleClose} />
          )}
        </Box>
      </Modal>
    </div>
  );
}
const TabBox = styled(Box)`
  display: inline-flex;
`;
const LoginTab = styled.button`
  border: 1px solid #4981f8;
  color: #4981f8;
  font-size: 15px;
  padding: 5px;
  border-right: none;
  background-color: white;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  &:hover {
    color: white;
    background-color: #4981f8;
  }
`;
const SignupTab = styled(LoginTab)`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #4981f8;
`;

export { SignInModal };
