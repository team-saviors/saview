import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { loginStore } from '../../store/store';
import { ISOHandler } from '../../utils/timeHandler';
export const AnswerComment = ({ mypost }) => {
  return (
    <>
      {mypost ? (
        <>
          <Container>
            <InfoWrapper>
              <div>
                <span>{mypost.subCategory}</span>
                <span style={{ marginLeft: '30px' }}>
                  문제:{mypost.questionContent}
                </span>
              </div>
              <div>{ISOHandler(mypost.createdAt)}</div>
            </InfoWrapper>
            <ContentsWrapper>
              {mypost.content.substr(0, 60) + '...'}
            </ContentsWrapper>
          </Container>
        </>
      ) : null}
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
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 500;
`;

export default AnswerComment;
