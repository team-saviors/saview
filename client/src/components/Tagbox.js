import { Button, Box, Avatar } from '@mui/material';
import styled from 'styled-components';
import AvatarWrapper from '../components/AvatarWrapper';
import CategoryTabs from '../components/Tab/CategoryTabs';
import { useState } from 'react';
const Tagbox = () => {
  const imgUrl = (stack) => {
    return `https://saview-dev.s3.ap-northeast-2.amazonaws.com/techStack/${stack}.png`;
  };
  const [tab, setTab] = useState(0);
  console.log(tab);
  return (
    <TagboxWrapper>
      <CategoryTabs setTab={setTab}></CategoryTabs>
      <TagButtons>
        {tab === 0 || tab === 1 ? (
          <>
            <TagButton
              variant="outlined"
              startIcon={
                <AvatarWrapper src={imgUrl('javascript')}></AvatarWrapper>
              }
            >
              JavaScript
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('react')}></AvatarWrapper>}
            >
              React
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={
                <AvatarWrapper src={imgUrl('typescript')}></AvatarWrapper>
              }
            >
              TypeScript
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('vue')}></AvatarWrapper>}
            >
              Vue
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('nodejs')}></AvatarWrapper>}
            >
              NodeJS
            </TagButton>
          </>
        ) : null}
        {tab === 0 || tab === 2 ? (
          <>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('java')}></AvatarWrapper>}
            >
              Java
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('spring')}></AvatarWrapper>}
            >
              Spring
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={
                <AvatarWrapper src={imgUrl('express')}></AvatarWrapper>
              }
            >
              Express
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('mysql')}></AvatarWrapper>}
            >
              MySQL
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={
                <AvatarWrapper src={imgUrl('mongodb')}></AvatarWrapper>
              }
            >
              MongoDB
            </TagButton>
          </>
        ) : null}
        {tab === 0 || tab === 3 ? (
          <>
            <TagButton>운영체제</TagButton>
            <TagButton>자료구조</TagButton>
            <TagButton>알고리즘</TagButton>
            <TagButton>네트워크</TagButton>
            <TagButton>디자인패턴</TagButton>
            <TagButton>데이터베이스</TagButton>
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
  /* display: flex; */
  /* flex-direction: column; */
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
`;

export default Tagbox;
