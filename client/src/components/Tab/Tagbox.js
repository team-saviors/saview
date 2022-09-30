import { Button, Box, Avatar } from '@mui/material';
import styled from 'styled-components';
import AvatarWrapper from '../AvatarWrapper';
import CategoryTabs from './CategoryTabs';
import { useState, useEffect } from 'react';
import { questionStore } from '../../store/store';
const Tagbox = ({
  tab,
  setTab,
  setActive,
  setMainCategory,
  setSubCategory,
  page,
}) => {
  const { getQuestions } = questionStore();
  const imgUrl = (stack) => {
    return `https://saview-dev.s3.ap-northeast-2.amazonaws.com/techStack/${stack}.png`;
  };

  const handleClick = async (e) => {
    const id = e.target.id
      ? e.target.id
      : e.target.parentElement.id
      ? e.target.parentElement.id
      : e.target.parentElement.parentElement.id
      ? e.target.parentElement.parentElement.id
      : e.target.parentElement.parentElement.parentElement.id;
    setSubCategory(id);
  };
  return (
    <TagboxWrapper>
      <CategoryTabs
        setTab={setTab}
        getQuestions={getQuestions}
        page={page}
      ></CategoryTabs>
      <TagButtons>
        {tab === 0 || tab === 1 ? (
          <>
            <TagButton
              variant="outlined"
              startIcon={
                <AvatarWrapper src={imgUrl('javascript')}></AvatarWrapper>
              }
              onClick={handleClick}
              id="JavaScript"
            >
              JavaScript
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('react')}></AvatarWrapper>}
              onClick={handleClick}
              id="React"
            >
              React
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={
                <AvatarWrapper src={imgUrl('typescript')}></AvatarWrapper>
              }
              onClick={handleClick}
              id="TypeScript"
            >
              TypeScript
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('vue')}></AvatarWrapper>}
              onClick={handleClick}
              id="Vue"
            >
              Vue
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('nodejs')}></AvatarWrapper>}
              onClick={handleClick}
              id="NodeJS"
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
              id="Java"
            >
              Java
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('spring')}></AvatarWrapper>}
              onClick={handleClick}
              id="Spring"
            >
              Spring
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={
                <AvatarWrapper src={imgUrl('express')}></AvatarWrapper>
              }
              onClick={handleClick}
              id="Express"
            >
              Express
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={<AvatarWrapper src={imgUrl('mysql')}></AvatarWrapper>}
              onClick={handleClick}
              id="MySQL"
            >
              MySQL
            </TagButton>
            <TagButton
              variant="outlined"
              startIcon={
                <AvatarWrapper src={imgUrl('mongodb')}></AvatarWrapper>
              }
              onClick={handleClick}
              id="MongoDB"
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
