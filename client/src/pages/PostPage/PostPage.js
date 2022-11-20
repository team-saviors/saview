import { useEffect, useState } from 'react';
import Answer from './Answer';
import { answerStore } from '../../store/store';
import { useParams } from 'react-router-dom';
import AnswerModal from './Components/AnswerModal';
import styled from 'styled-components';
import { Box, Select, MenuItem } from '@mui/material';
import Pagination from '../../components/Pagination';
const PostPage = () => {
  const params = useParams();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('createdAt');
  const { question, getQuestion } = answerStore();
  const handleChange = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    getQuestion(params.id, page, sort);
  }, [sort, page]);
  return (
    <>
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
          <AnswerModal
            getQuestion={getQuestion}
            page={page}
            sort={sort}
            question={question}
          ></AnswerModal>
          <h2>질문 : {question.content}</h2>
        </AnswerHeader>
        <Select
          style={{
            position: 'relative',
            right: '550px',
            width: '100px',
            marginBottom: '20px',
          }}
          onChange={handleChange}
          defaultValue="createdAt"
        >
          <MenuItem value="votes">추천순</MenuItem>
          <MenuItem value="createdAt">최신순</MenuItem>
        </Select>
        {question?.answers?.data?.length > 0 ? (
          question.answers.data.map((answer) => (
            <Answer
              key={answer.answerId}
              answer={answer}
              sort={sort}
              page={page}
            ></Answer>
          ))
        ) : (
          <div style={{ fontSize: '18px', marginTop: '20px' }}>
            답변이 없습니다. 답변을 달아주세요
          </div>
        )}
      </main>
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={question.totalPages}
      ></Pagination>
    </>
  );
};

const AnswerHeader = styled(Box)`
  padding: 0;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
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
