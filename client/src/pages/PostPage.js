import axios from 'axios';
import { useEffect } from 'react';
import Answer from '../components/Answer';
import { answerStore } from '../store/store';
const PostPage = () => {
  const { answers } = answerStore();
  return (
    <>
      {answers.map((answer) => (
        <Answer key={answer.answerId} answer={answer} />
      ))}
    </>
  );
};

export default PostPage;
