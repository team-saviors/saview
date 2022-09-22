import axios from 'axios';
import { useEffect } from 'react';
import Answer from '../components/Answer';
import { answerStore, questionStore } from '../store/store';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const params = useParams();

  const { question, getQuestion } = answerStore();
  useEffect(() => {
    getQuestion(params.id);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ marginTop: '20px' }}>
        <h2>질문:{question.content}</h2>
      </div>

      {question.answers === undefined ? (
        <div>{'답변이 없습니다. 답변을 달아주세요'}</div>
      ) : question.answers.length === 0 ? (
        <div>{'답변이 없습니다. 답변을 달아주세요'}</div>
      ) : (
        question.answers.data.map((answer) => (
          <Answer key={answer.answerId} answer={answer}></Answer>
        ))
      )}
    </div>
  );
};

export default PostPage;
