import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postLogout } from '../utils/axiosRequest';
import { loginStore } from '../store/store';
import { getUserId } from '../utils/cookies';
const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { loginHandler } = loginStore();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = async () => {
    await postLogout();
    loginHandler();
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
        // anchorOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right',
        // }}
        keepMounted
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right',
        // }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
        //   onClick={ }
        >
          <Link to={`/users/${getUserId()}`}>마이페이지</Link>
        </MenuItem>
        <MenuItem onClick={() => handleClick()}>로그아웃</MenuItem>
      </Menu>
    </>
  );
};
export default UserDropdown;
