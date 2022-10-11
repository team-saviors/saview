import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postLogout } from '../utils/axiosRequest';
import { loginStore } from '../store/store';
import { getUserId } from '../utils/cookies';
const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { loginHandler } = loginStore();
  const navigate = useNavigate();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = async () => {
    await postLogout();
    loginHandler();
    navigate('/');
  };
  return (
    <>
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
        <MenuItem>
          <Link to={`/users/${getUserId()}`}>마이페이지</Link>
        </MenuItem>
        <MenuItem onClick={() => handleClick()}>로그아웃</MenuItem>
      </Menu>
    </>
  );
};
export default UserDropdown;
