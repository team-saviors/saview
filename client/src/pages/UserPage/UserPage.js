import { Box } from '@mui/material';
import AvatarWrapper from '../../components/AvatarWrapper';
import styled from 'styled-components';
import BasicTabs from '../../components/Tab/BasicTabs';
import { useState, useEffect } from 'react';
import AnswerComment from './AnswerComment';
import {
  getAccessWithRefresh,
  getUsersActivity,
} from '../../utils/axiosRequest';
import Pagination from '../../components/Pagination';
import { userStore } from '../../store/store';
import { getAccessToken, getUserId } from '../../utils/cookies';

const UserPage = () => {
  const [tab, setTab] = useState('answers');
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const { getUser, profile, nickname } = userStore();
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
  console.log(data);
  return (
    <>
      <section>
        <ProfileBox>
          <AvatarWrapper src={profile} size={100} />
          <UserNickname>{nickname}</UserNickname>
        </ProfileBox>
        <TabWrapper>
          <BasicTabs setTab={setTab}></BasicTabs>
        </TabWrapper>
        <AnswerCommentWrapper>
          {data?.data?.myPosts?.data?.length > 0 ? (
            data.data.myPosts.data.map((mypost) => (
              <AnswerComment mypost={mypost} key={mypost.createdAt} />
            ))
          ) : (
            <div>작성글이 없습니다</div>
          )}
          <AnswerComment></AnswerComment>
        </AnswerCommentWrapper>
        {data?.data?.myPosts && (
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={data.data.myPosts.pageInfo.totalPages}
          ></Pagination>
        )}
      </section>
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
export default UserPage;
