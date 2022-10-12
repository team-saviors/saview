import { Button } from '@mui/material';
import styled from 'styled-components';
import CategoryTabs from './CategoryTabs';
import { questionStore } from '../../store/store';
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
  page,
  setPage,
}) => {
  const { getQuestions } = questionStore();
  const imgUrl = (stack) => {
    return `https://saview-dev.s3.ap-northeast-2.amazonaws.com/techStack/${stack}.png`;
  };

  const handleClick = (stack) => {
    setSubCategory(stack);
    setPage(1);
  };

  return (
    <TagboxWrapper>
      <CategoryTabs
        setData={setData}
        setOnSearch={setOnSearch}
        setTab={setTab}
        page={page}
        setPage={setPage}
      ></CategoryTabs>
      <TagButtons>
        {tab === 0 ? (
          <>
            {[...FEStacks, ...BEStacks, ...CS, ...기타].map((stack) => {
              return (
                <TagButton onClick={() => handleClick(stack)} key={stack}>
                  {stack}
                </TagButton>
              );
            })}
          </>
        ) : tab === 1 ? (
          <>
            {FEStacks.map((stack) => {
              return (
                <TagButton onClick={() => handleClick(stack)} key={stack}>
                  {stack}
                </TagButton>
              );
            })}
          </>
        ) : tab === 2 ? (
          <>
            {BEStacks.map((stack) => {
              return (
                <TagButton onClick={() => handleClick(stack)} key={stack}>
                  {stack}
                </TagButton>
              );
            })}
          </>
        ) : tab === 3 ? (
          <>
            {CS.map((stack) => {
              return (
                <TagButton onClick={() => handleClick(stack)} key={stack}>
                  {stack}
                </TagButton>
              );
            })}
          </>
        ) : tab === 4 ? (
          <>
            {기타.map((stack) => {
              return (
                <TagButton onClick={() => handleClick(stack)} key={stack}>
                  {stack}
                </TagButton>
              );
            })}
          </>
        ) : null}
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
`;

export default Tagbox;
