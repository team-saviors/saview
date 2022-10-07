import { CardContent, TextField } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import { useForm } from 'react-hook-form';
import { useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { putComment } from '../api/put';
import { answerStore } from '../store/store';
import { useParams } from 'react-router-dom';
const CommentEditForm = ({
  answer,
  page,
  sort,
  setSelectedComment,
  selectedComment,
  comment,
}) => {
  const params = useParams();
  const result = comment.find((el) => el.commentId === selectedComment);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return result;
    }, [result]),
  });
  useEffect(() => {
    reset(result);
  }, [result]);
  const { question, getQuestion } = answerStore();
  const commentEditSubmit = async (data) => {
    await putComment(data);
    await setSelectedComment(undefined);
    await getQuestion(params.id, page, sort);
  };
  const commentError = () => {};
  const handleCancel = async () => {
    await setSelectedComment(undefined);
  };
  return (
    <CardContent
      style={{
        maxWidth: '1200px',
        display: 'flex',
        padding: '8px',
        borderLeft: '1px solid #DEDEDE',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <MessageIcon />
      <form
        style={{
          display: 'flex',
          marginLeft: '10px',
          width: '100%',
        }}
        onSubmit={handleSubmit(commentEditSubmit, commentError)}
      >
        <TextField
          id="comment"
          name="comment"
          placeholder="댓글을 입력하세요"
          variant="standard"
          style={{
            marginLeft: '10px',
            width: '40%',
          }}
          {...register('content')}
          size="small"
        ></TextField>
        <CommentEditbtnBox>
          <CancelBtn type="button" onClick={handleCancel}>
            취소
          </CancelBtn>
          <CancelBtn type="submit">수정</CancelBtn>
        </CommentEditbtnBox>
      </form>
    </CardContent>
  );
};

const CommentEditbtnBox = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CancelBtn = styled.button`
  margin-right: 5.5px;
  font-size: 10px;
  font-weight: 350;
  padding: 0.28rem 0.28rem;
  color: #263747;
  border-radius: 1px;
  border: 1px solid #00000000;
  background-color: #e9ecf3;
  &:hover {
    background-color: #d7e2eb;
  }
`;
export default CommentEditForm;
