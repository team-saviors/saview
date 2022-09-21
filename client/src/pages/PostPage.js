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
  console.log(question.answers);
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
        <h2>질문:{question.content}</h2>
      </div>

      {question.answers
        ? question.answers.map((answer) => (
            <Answer key={answer.answerId} answer={answer}></Answer>
          ))
        : null}
    </div>
  );
};

export default PostPage;
