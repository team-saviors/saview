import axios from 'axios';
import { useEffect } from 'react';
import Answer from '../components/Answer';
import { answerStore } from '../store/store';

const PostPage = () => {
  const { answers, increase, question } = answerStore();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ marginTop: '20px' }}>
        <h2>질문:{question}</h2>
      </div>

      {answers.map((answer) => (
        <Answer key={answer.answerId} answer={answer}></Answer>
      ))}
    </div>
  );
};

export default PostPage;
