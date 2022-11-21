import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getUsersActivity } from '../../api/User';
import { userStore } from '../../store/store';
import { getUserId } from '../../utils/cookies';
import UserTab from './Components/UserTab';

const UserPage = () => {
  const params = useParams();
  const [tab, setTab] = useState('answers');
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const { getUser, profile, nickname } = userStore();
  const [isHover, setIsHover] = useState(false);
  const [menu, setMenu] = useState('회원정보');
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      const data = await getUsersActivity(tab, getUserId(), page, 10);
      setData(data);
    };
    fetch();
  }, [tab]);
  useEffect(() => {
    setTab('answers');
    getUser(getUserId());
  }, []);
  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };
  const handleMenu = (e, newMenu) => {
    setMenu(newMenu);
  };

  return (
    <>
      <UserPageContent>
        <Box sx={{ width: '150px' }}>
          <UserTab menu={menu} setMenu={setMenu}></UserTab>
        </Box>

        <div
          style={{
            width: '1024px',
            display: 'flex',
            marginLeft: '20px',
            padding: '0',
          }}
        >
          <Outlet></Outlet>
        </div>
      </UserPageContent>
    </>
  );
};

const ProfileBox = styled(Box)`
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  width: 1024px;
  height: 150px;
  margin: 0 auto;
  align-items: center;
  border: 1px solid #e5e7eb;
  padding: 30px;
  border-bottom: 0px;
  border-radius: 10px 10px 0 0;
`;
const UserNickname = styled(Box)`
  font-size: 60px;
  margin-left: 20px;
`;
const TabWrapper = styled(ProfileBox)`
  height: 50px;
  border-left: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 0 0 10px 10px;
  background: rgb(249 250 251);
`;
const AnswerCommentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 1024px;
  margin: 50px auto;
`;
const UserPageContent = styled(Box)`
  display: flex;
  width: 1024px;
  flex-direction: row;
  margin: 0 auto;
`;
const NavBar = styled(Box)`
  width: 500px;
  height: 300px;
`;
export default UserPage;
