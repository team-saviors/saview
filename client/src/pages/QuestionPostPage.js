import { useStore } from 'zustand';
import QuestionInfoSelect from '../components/QuestionInfoSelect';
import { questionRegisterStore } from '../store/store';
import { postQuestion } from '../utils/axiosRequest';

const QuestionPostPage = () => {
  const { questions, handleContentChange } = questionRegisterStore();
  const questionPostHandler = () => {
    postQuestion(questions);
  };
  return (
    <section>
      <PostBox>
        <TextBox>
          <h2>면접 질문 정보를 입력해주세요.</h2>
        </TextBox>
        <QuestionInfoSelect />
        <ContentInput
          onChange={handleContentChange}
          value={questions.content}
          fullWidth
          label="질문 내용을 입력해주세요."
          id="questionContent"
        />
        <Postbtnbox>
          <Link to="/">
            <CancelBtn>취소</CancelBtn>
          </Link>
          <PostBtn type="submit" onClick={questionPostHandler}>
            질문 등록
          </PostBtn>
        </Postbtnbox>
      </PostBox>
    </section>
  );
};

import styled from 'styled-components';
import { Box, TextField } from '@mui/material';
import BasicButton from '../components/BasicButton';
import { Link } from 'react-router-dom';
const PostBox = styled(Box)`
  max-width: 1040px;
  display: flex;
  flex-direction: column;
  width: 1024px;
  margin: 0 auto;
  padding: 60px 16px;
`;
const TextBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 30px;
  border-bottom: 3px solid #f2f2f2;
  > h2 {
    font-weight: 700;
    line-height: 40px;
    margin: 0;
  }
`;
const ContentInput = styled(TextField)`
  margin-top: 65px;
`;

const Postbtnbox = styled(Box)`
  display: flex;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
`;
const CancelBtn = styled(BasicButton)`
  font-size: 1rem;
`;
const PostBtn = styled(BasicButton)`
  font-size: 1rem;
`;

export default QuestionPostPage;
