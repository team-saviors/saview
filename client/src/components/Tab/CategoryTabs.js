import Box from '@mui/material/Box';
import { useState } from 'react';
import styled from 'styled-components';
const Tabs = ['전체', '프론트엔드', '백엔드', 'CS', '기타'];
export default function CategoryTabs({
  setData,
  setOnSearch,
  setTab,
  setPage,
  setActiveTagbox,
}) {
  const [activeCategoryTabs, setActiveCategoryTabs] = useState(0);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== activeCategoryTabs) {
      setActiveCategoryTabs(index);
    }
    const category = encodeURIComponent(e.target.textContent);
    setTab(index);
    setPage(1);
    setOnSearch(false);
    setData('');
    setActiveTagbox(null);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <TabsWrapper>
          {Tabs.map((tab, idx) => (
            <Tab
              onClick={handleClick}
              active={activeCategoryTabs === idx}
              id={idx}
              key={idx}
            >
              {tab}
            </Tab>
          ))}
        </TabsWrapper>
      </Box>
    </Box>
  );
}
const TabsWrapper = styled.div``;
const Tab = styled.span`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => (props.active ? 'skyblue' : 'gray')};
  &:hover {
    color: black;
  }
  font-size: 26px;
  font-weight: 500;
`;
