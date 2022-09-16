import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
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
  borderRadius: '8px',
};

function SignInModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>로그인</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style }}>
          <SignIn></SignIn>
        </Box>
      </Modal>
    </div>
  );
}

export { SignInModal };
