import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postLogout } from '../api/User';
import { loginStore } from '../store/store';
import { getUserId } from '../utils/cookies';
import LogoutAlert from './LogoutAlert';
const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const { loginHandler } = loginStore();
  const navigate = useNavigate();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleAlertClose = async (e) => {
    if (e.target.value === '로그아웃') {
      await postLogout();
      loginHandler();
    }
    setOpen(false);
    navigate('/');
  };
  return (
    <>
      <LogoutAlert open={open} onClose={handleAlertClose} />
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={`/users/${getUserId()}`}>
          <MenuItem onClick={() => handleClose()}>마이페이지</MenuItem>
        </Link>
        <MenuItem onClick={() => handleClick()}>로그아웃</MenuItem>
      </Menu>
    </>
  );
};
export default UserDropdown;
