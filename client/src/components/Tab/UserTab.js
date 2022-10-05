import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getUserId } from '../../utils/cookies';
export default function UserTab({ setMenu }) {
  const navigate = useNavigate();
  const params = useParams();
  const [active, setActive] = useState('회원정보');
  const handleClick = (e) => {
    if (e.target.id !== active) {
      setActive(e.target.id);
    }
    setMenu(e.target.id);
    if (e.target.id === '회원정보') {
      navigate(`/users/${params.id}`);
    }
    if (e.target.id === '내 계정') {
      navigate(`/users/${getUserId()}/modify`);
    }
  };

  return (
    <Box
      sx={{ width: '100%', height: '800px', borderRight: '1px solid #e5e7eb' }}
    >
      <Box>
        <Tabs>
          <Tab
            onClick={handleClick}
            active={active === '회원정보'}
            id="회원정보"
          >
            회원정보
          </Tab>
          {params.id === getUserId() ? (
            <Tab
              component={Link}
              onClick={handleClick}
              active={active === '내 계정'}
              id="내 계정"
            >
              내 계정
            </Tab>
          ) : null}
        </Tabs>
      </Box>
    </Box>
  );
}
const Tabs = styled.div`
  display: flex;
  flex-direction: column;
`;
const Tab = styled.span`
  margin-right: 20px;
  margin-top: 20px;
  cursor: pointer;
  color: ${(props) => (props.active ? 'skyblue' : 'gray')};
  &:hover {
    color: black;
  }
  width: 150px;
`;
