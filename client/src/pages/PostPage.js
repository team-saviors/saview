import axios from 'axios';
import { useEffect } from 'react';
import Answer from '../components/Answer';
import { answerStore } from '../store/store';

const PostPage = () => {
  const { answers, increase } = answerStore();
  const answer = answers[0];

  return (
    <>
      <Answer key={answers.answerId} answer={answer} />
    </>
  );
};

export default PostPage;
