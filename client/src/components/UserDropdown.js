import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { postLogout } from '../utils/axiosRequest';

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          내 작성글
        </MenuItem>
        <MenuItem
        //   onClick={ }
        >
          마이페이지
        </MenuItem>
        <MenuItem onClick={postLogout}>로그아웃</MenuItem>
      </Menu>
    </>
  );
};
export default UserDropdown;
