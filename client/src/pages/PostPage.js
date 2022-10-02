import { useEffect, useState } from 'react';
import Answer from '../components/Answer';
import { answerStore } from '../store/store';
import { useParams } from 'react-router-dom';
import AnswerModal from '../components/AnswerModal';
import styled from 'styled-components';
import { Box } from '@mui/material';
const PostPage = () => {
  const params = useParams();
  const [sort, setSort] = useState('votes');
  const { question, getQuestion } = answerStore();
  useEffect(() => {
    getQuestion(params.id, sort);
  }, []);

  return (
    <main
      style={{
        margin: 'auto',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AnswerHeader>
        <AnswerModal question={question}></AnswerModal>
        <h2>질문 : {question.content}</h2>
      </AnswerHeader>

      {question?.answers?.data?.length > 0 ? (
        question.answers.data.map((answer) => (
          <Answer key={answer.answerId} answer={answer} sort={sort}></Answer>
        ))
      ) : (
        <div>답변이 없습니다. 답변을 달아주세요</div>
      )}
    </main>
  );
};

const AnswerHeader = styled(Box)`
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  > h2 {
    padding-left: 10px;
  }
`;
export default PostPage;
