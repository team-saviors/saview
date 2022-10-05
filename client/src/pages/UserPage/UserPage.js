import { Box, Button, Tabs, Tab } from '@mui/material';
import LinkTab from '../../components/Tab/LinkTab';
import UserPageAvatarWrapper from './UserPageAvatarWrapper';
import styled from 'styled-components';
import BasicTabs from '../../components/Tab/BasicTabs';
import { useState, useEffect } from 'react';
import AnswerComment from './AnswerComment';
import ModifyUserPage from './ModifyUserPage';
import {
  getAccessWithRefresh,
  getUsersActivity,
} from '../../utils/axiosRequest';
import Pagination from '../../components/Pagination';
import { userStore } from '../../store/store';
import { getAccessToken, getUserId } from '../../utils/cookies';
import ProfileModal from './ProfileModal';
import {
  useParams,
  Link,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import AvatarWrapper from '../../components/AvatarWrapper';
import UserInfoPage from './UserInfoPage';

const UserPage = () => {
  const params = useParams();
  const [tab, setTab] = useState('answers');
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const { getUser, profile, nickname } = userStore();
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [menu, setMenu] = useState(0);
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
  const handleClick = (e) => {
    setOpenProfileModal(true);
  };
  const handleCloseProfileModal = () => {
    setOpenProfileModal(false);
  };
  const handleMenu = (e, newMenu) => {
    setMenu(newMenu);
  };

  return (
    <>
      <UserPageContent>
        {/* <NavBar
          style={{
            width: '300px',
            height: '100%',
            border: '1px solid gray',
            marginRight: '20px',
            flex: '0.5 1 150px',
          }}
        >
          <li>
            <Link to={`/users/${params.id}`}>
              <ul
                id="회원정보"
                style={{ width: '150px', fontSize: '24px', margin: '20px 0' }}
              >
                {'회원정보'}
              </ul>
            </Link>
            {getUserId() === params.id ? (
              <Link to={`/users/${getUserId()}/modify`}>
                <ul id="내 계정">{'내 계정'}</ul>
              </Link>
            ) : null}
          </li>
        </NavBar> */}
        <Box sx={{ width: '150px' }}>
          <Tabs
            orientation="vertical"
            value={menu}
            onChange={handleMenu}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <LinkTab
              value={0}
              label="회원 정보"
              style={{ width: '150px' }}
              href={`/users/${params.id}`}
            />
            <LinkTab
              value={1}
              label="내 계정"
              // href={`/users/${getUserId()}/modify`}
            />
          </Tabs>
        </Box>

        <div
          style={{
            width: '1024px',
            oveflow: 'hidden',
            display: 'flex',
            margin: '0',
            padding: '0',
          }}
        >
          <Outlet></Outlet>
        </div>

        <ProfileModal
          open={openProfileModal}
          handleClose={handleCloseProfileModal}
        ></ProfileModal>
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
