import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AvatarWrapper from '../../components/AvatarWrapper';

export const AnswerComment = () => {
  return (
    <>
      <Container>
        <InfoWrapper>
          <div>
            <span>Category</span>
            <span style={{ marginLeft: '30px' }}>좋아요 개수</span>
          </div>
          <div>몇시간전?</div>
        </InfoWrapper>
        <ContentsWrapper>질문 내용 블라블라블라</ContentsWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  border-bottom: 1px solid #e5e7eb;
  width: 1024px;
  height: 100px;
  display: flex;
  flex-direction: column;
`;
const InfoWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  line-height: 40px;
  color: gray;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: bold;
`;

export default AnswerComment;
