import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
export default function BasicTabs({ tab, setTab }) {
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
            내 답변
          </Tab>

          <Tab onClick={handleClick} active={active === 1} id={1}>
            내댓글
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
`;
