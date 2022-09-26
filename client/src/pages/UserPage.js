import { Box } from '@mui/material';
import AvatarWrapper from '../components/AvatarWrapper';
import styled from 'styled-components';
import BasicTabs from '../components/Tab/BasicTabs';
const UserPage = () => {
  return (
    <>
      <section>
        <ProfileBox>
          <AvatarWrapper
            src={
              'https://saview-dev.s3.ap-northeast-2.amazonaws.com/Saview/logo_circle.png'
            }
            size={100}
          />
          <UserNickname>{'colagom'}</UserNickname>
        </ProfileBox>
        <TabWrapper>
          <BasicTabs></BasicTabs>
        </TabWrapper>
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
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
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
export default UserPage;
