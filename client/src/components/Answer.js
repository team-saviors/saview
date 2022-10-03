import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import Container from '@mui/system/Container';
import ThumbUpAlt from '@mui/icons-material/ThumbUpOffAlt';
import { TextField, Button, CardContent, Typography } from '@mui/material';
import AvatarWrapper from './AvatarWrapper';
import MessageIcon from '@mui/icons-material/Message';
import { ISOHandler } from '../utils/timeHandler';
import { getUserId } from '../utils/cookies';
import { deleteAnswer, updateAnswerVotes } from '../utils/axiosRequest';
import { answerStore } from '../store/store';
import AlertDialog from './AlertDialog';
import { useParams } from 'react-router-dom';
import AnswerEditModal from './AnswerEditModal';
import styled from 'styled-components';

export default function Answer(props) {
  const params = useParams();

  const { comments, content, createdAt, modifiedAt, user, votes, answerId } =
    props.answer;
  const { question, getQuestion } = answerStore();
  const [open, setOpen] = useState(false);
  const handleClose = (e) => {
    if (e.target.value === '삭제') {
      deleteAnswer(answerId);
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClickVotes = async (answerId, votes) => {
    await updateAnswerVotes(answerId, votes);
    await getQuestion(params.id, props.sort);
  };

  return (
    <Container
      style={{
        padding: '0',
        marginBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AlertDialog open={open} onClose={handleClose}></AlertDialog>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <AvatarWrapper src={user.profile}></AvatarWrapper>
        <span style={{ fontSize: '20px' }}>{user.nickname}</span>
        <span style={{ margin: '0 20px 0 20px', fontSize: '20px' }}>
          {ISOHandler(createdAt)}
        </span>
        {props.answer.user.userId === Number(getUserId()) ? (
          <>
            <DeletelBtn onClick={handleClick}>삭제 하기</DeletelBtn>
            <AnswerEditModal answer={props.answer}></AnswerEditModal>
          </>
        ) : null}
      </div>
      <Paper
        style={{
          padding: '20px',
          minHeight: '300px',
          position: 'relative',
          lineHeight: '25px',
        }}
        elevation={3}
      >
        <div>{content}</div>
        <div style={{ position: 'absolute', bottom: '15px' }}>
          <Button
            variant="outlined"
            onClick={() => handleClickVotes(answerId, votes)}
          >
            <ThumbUpAlt></ThumbUpAlt>
            <span>좋아요 {votes}</span>
          </Button>
        </div>
      </Paper>
      {comments?.length > 0
        ? comments.map((comment) => (
            <CardContent
              key={comment.commentId}
              style={{
                width: '1200px',
                padding: '5px',
                borderLeft: '1px solid #DEDEDE',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <AvatarWrapper src={user.profile}></AvatarWrapper>
              <Typography
                variant="body2"
                color="black"
                style={{ maxWidth: '950px' }}
              >
                {comment.content}
              </Typography>
              <Typography variant="body2" color="gray">
                &nbsp;&nbsp; {comment.user.nickname} &nbsp;&nbsp;
                {ISOHandler(comment.createdAt)}
              </Typography>
            </CardContent>
          ))
        : null}
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
            marginLeft: '10px',
            width: '100%',
          }}
          onSubmit={() => {}}
        >
          <TextField
            placeholder="댓글을 입력하세요"
            variant="standard"
            style={{
              marginLeft: '10px',
              width: '100%',
            }}
            size="small"
          ></TextField>
        </form>
      </CardContent>
    </Container>
  );
}
const DeletelBtn = styled.button`
  margin-right: 10px;
  font-size: 17px;
  font-weight: 500;
  padding: 0.4375rem 0.8125rem;
  color: #263747;
  border-radius: 3px;
  border: 1px solid #00000000;
  background-color: #e9ecf3;
  &:hover {
    background-color: #d7e2eb;
  }
`;
