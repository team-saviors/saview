import { useEffect, useState } from 'react';
import Answer from '../components/Answer';
import { answerStore } from '../store/store';
import { useParams } from 'react-router-dom';
import AnswerModal from '../components/AnswerModal';
import styled from 'styled-components';
import { Box, Select, MenuItem } from '@mui/material';
const PostPage = () => {
  const params = useParams();
  const [sort, setSort] = useState('votes');
  const { question, getQuestion } = answerStore();
  const handleChange = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    getQuestion(params.id, sort);
  }, [sort]);

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
      <Select
        style={{ position: 'relative', right: '525px', width: '100px' }}
        onChange={handleChange}
        defaultValue="votes"
      >
        <MenuItem value="votes">추천순</MenuItem>
        <MenuItem value="createdAt">최신순</MenuItem>
        {/* <MenuItem value="answers">댓글순</MenuItem> */}
      </Select>
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
  padding: 0;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  border-bottom: 3px solid #f2f2f2;
  padding-bottom: 20px;
  > h2 {
    font-size: 28px;
    margin-left: 25px;
  }
`;
export default PostPage;
