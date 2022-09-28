import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
export default function CategoryTabs({ tab, setTab }) {
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
    setTab(index);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs>
          <Tab onClick={handleClick} active={active === 0} id={0}>
            전체
          </Tab>
          <Tab onClick={handleClick} active={active === 1} id={1}>
            프론트엔드
          </Tab>
          <Tab onClick={handleClick} active={active === 2} id={2}>
            백엔드
          </Tab>
          <Tab onClick={handleClick} active={active === 3} id={3}>
            CS
          </Tab>
          <Tab onClick={handleClick} active={active === 4} id={4}>
            기타
          </Tab>
        </Tabs>
      </Box>
    </Box>
  );
}
const Tabs = styled.div``;
const Tab = styled.span`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => (props.active ? 'skyblue' : 'gray')};
  &:hover {
    color: black;
  }
  font-size: 26px;
  font-weight: 700;
`;
