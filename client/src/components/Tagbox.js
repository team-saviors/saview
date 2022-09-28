import { Button, Box, Avatar } from '@mui/material';
import styled from 'styled-components';
import AvatarWrapper from '../components/AvatarWrapper';
import CategoryTabs from '../components/Tab/CategoryTabs';
import { useState } from 'react';
const Tagbox = ({ tab, setTab, setActive }) => {
  const imgUrl = (stack) => {
    return `https://saview-dev.s3.ap-northeast-2.amazonaws.com/techStack/${stack}.png`;
  };

  const handleClick = (e) => {
    const id = e.target.id
      ? e.target.id
      : e.target.parentElement.id
      ? e.target.parentElement.id
      : e.target.parentElement.parentElement.id
      ? e.target.parentElement.parentElement.id
      : e.target.parentElement.parentElement.parentElement.id;
  };
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
              onClick={handleClick}
              id="javascript"
            >
              JavaScript
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('react')}></AvatarWrapper>}
              onClick={handleClick}
              id="react"
            >
              React
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={
                <AvatarWrapper src={imgUrl('typescript')}></AvatarWrapper>
              }
              onClick={handleClick}
              id="typescript"
            >
              TypeScript
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('vue')}></AvatarWrapper>}
              onClick={handleClick}
              id="vue"
            >
              Vue
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('nodejs')}></AvatarWrapper>}
              onClick={handleClick}
              id="nodejs"
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
              onClick={handleClick}
              id="java"
            >
              Java
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('spring')}></AvatarWrapper>}
              onClick={handleClick}
              id="spring"
            >
              Spring
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={
                <AvatarWrapper src={imgUrl('express')}></AvatarWrapper>
              }
              onClick={handleClick}
              id="express"
            >
              Express
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('mysql')}></AvatarWrapper>}
              onClick={handleClick}
              id="mysql"
            >
              MySQL
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={
                <AvatarWrapper src={imgUrl('mongodb')}></AvatarWrapper>
              }
              onClick={handleClick}
              id="mongodb"
            >
              MongoDB
            </TagButton>
          </>
        ) : null}
        {tab === 0 || tab === 3 ? (
          <>
            <TagButton onClick={handleClick} id="운영체제">
              운영체제
            </TagButton>
            <TagButton onClick={handleClick} id="자료구조">
              자료구조
            </TagButton>
            <TagButton onClick={handleClick} id="알고리즘">
              알고리즘
            </TagButton>
            <TagButton onClick={handleClick} id="네트워크">
              네트워크
            </TagButton>
            <TagButton onClick={handleClick} id="디자인패턴">
              디자인패턴
            </TagButton>
            <TagButton onClick={handleClick} id="데이터베이스">
              데이터베이스
            </TagButton>
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
