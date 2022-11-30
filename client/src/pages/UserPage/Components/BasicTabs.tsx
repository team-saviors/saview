import Box from '@mui/material/Box';
import { useState } from 'react';
import styled from 'styled-components';

export default function BasicTabs({ setTab }) {
  const [active, setActive] = useState('answers');
  const handleClick = (e) => {
    if (e.target.id !== active) {
      setActive(e.target.id);
    }
    setTab(e.target.id);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs>
          <Tab onClick={handleClick} id="answers">
            내 답변
          </Tab>
          <Tab onClick={handleClick} id="comments">
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
  &:hover {
    color: black;
  }
`;
