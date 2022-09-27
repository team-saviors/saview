import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const AnswerComment = (props) => {
  // const { questionId, questionContent, subCategory, createdAt,content } =
  //   props.mypost;
  return (
    <>
      <Container>
        <InfoWrapper>
          <div>
            <span>{'subCategory'}</span>
            <Link to="/question/${questionID}">
              <span style={{ marginLeft: '30px' }}>{'questionContent'}</span>
            </Link>
          </div>
          <div>{'createdAt'}</div>
        </InfoWrapper>
        <ContentsWrapper>{'content'}</ContentsWrapper>
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
