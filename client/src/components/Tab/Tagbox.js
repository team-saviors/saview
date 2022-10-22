import { Button } from '@mui/material';
import styled from 'styled-components';
import CategoryTabs from './CategoryTabs';
import { questionStore } from '../../store/store';
import { useState } from 'react';
const FEStacks = ['JavaScript', 'React', 'TypeScript', 'Vue', 'NodeJS'];
const BEStacks = [
  'Java',
  'Spring',
  'Express',
  'MySQL',
  'Python',
  'JPA',
  'Database',
];
const CS = ['운영체제', '자료구조', '알고리즘', '네트워크', '디자인패턴'];
const 기타 = ['트러블 슈팅', 'DEVOPS', '테스트', '컨테이너'];
const Tagbox = ({
  setData,
  setOnSearch,
  tab,
  setTab,
  setSubCategory,
  setPage,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (stack, idx) => {
    const boxArray = Array();
    setSubCategory(stack);
    setPage(1);
  };

  const Boxes = (tab) => {
    if (tab === 0) {
      return [...FEStacks, ...BEStacks, ...CS, ...기타];
    }
    if (tab === 1) {
      return FEStacks;
    }
    if (tab === 2) {
      return BEStacks;
    }
    if (tab === 3) {
      return CS;
    }
    if (tab === 4) {
      return 기타;
    }
  };

  return (
    <TagboxWrapper>
      <CategoryTabs
        setData={setData}
        setOnSearch={setOnSearch}
        setTab={setTab}
        setPage={setPage}
      ></CategoryTabs>
      <TagButtons>
        {Boxes(tab).map((stack) => {
          return (
            <TagButton onClick={() => handleClick(stack)} key={stack}>
              {stack}
            </TagButton>
          );
        })}
      </TagButtons>
    </TagboxWrapper>
  );
};

const TagboxWrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  height: 230px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
`;
const TagButtons = styled.section`
  width: 1200px;
  margin-top: 20px;
`;
const TagButton = styled(Button)`
  border-radius: 50px;
  text-transform: none;
  color: black;
  border: 1px solid #d0d0d0;
  margin: 5px;
  height: 60px;
  font-size: 16px;
  padding: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 6px;
  /* opacity: ${(props) => (props.isClicked ? 1 : 0.3)}; */
`;

export default Tagbox;
