import axios from 'axios';
import { useEffect } from 'react';
import Answer from '../components/Answer';
import { answerStore } from '../store/store';
import { useParams } from 'react-router-dom';
import AnswerModal from '../components/AnswerModal';
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
        <AnswerModal question={question}></AnswerModal>
        <h2>질문:{question.content}</h2>
      </div>

      {question?.answers?.data?.length > 0 ? (
        question.answers.data.map((answer) => (
          <Answer key={answer.answerId} answer={answer}></Answer>
        ))
      ) : (
        <div>답변이 없습니다. 답변을 달아주세요</div>
      )}
    </div>
  );
};

export default PostPage;
