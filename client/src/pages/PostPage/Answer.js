import MessageIcon from '@mui/icons-material/Message';
import ThumbUpAlt from '@mui/icons-material/ThumbUpOffAlt';
import { Button, CardContent, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { deleteAnswer, updateAnswerVotes } from '../../api/Answer';
import { deleteComment, postComment } from '../../api/Comment';
import AlertDialog from '../../components/AlertDialog';
import AvatarWrapper from '../../components/AvatarWrapper';
import { answerStore, signInModalStore } from '../../store/store';
import { getUserId } from '../../utils/cookies';
import { ISOHandler } from '../../utils/timeHandler';
import AnswerEditModal from './Components/AnswerEditModal';

import CommentEditForm from './Components/CommentEditForm';

export default function Answer(props) {
  const { comments, content, createdAt, modifiedAt, user, votes, answerId } =
    props.answer;

  const params = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const commentError = () => {};

  const { question, getQuestion } = answerStore();
  const { openModal } = signInModalStore();
  const [open, setOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState(undefined);
  const handleClose = async (e) => {
    if (e.target.value === '삭제') {
      await deleteAnswer(answerId);
      await getQuestion(params.id, props.page, props.sort);
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClickVotes = async (answerId, votes) => {
    try {
      await updateAnswerVotes(answerId, votes);
      await getQuestion(params.id, props.page, props.sort);
    } catch (err) {
      if (err.message === '403') {
        openModal();
      }
    }
  };
  const commentSubmit = async (data) => {
    try {
      const res = await postComment(answerId, data);
      await getQuestion(params.id, props.page, props.sort);
      reset();
    } catch (err) {
      if (err.message === '403') {
        openModal();
      }
    }
  };
  const hanleDelComment = async (commentId) => {
    await deleteComment(commentId);
    await getQuestion(params.id, props.page, props.sort);
  };
  const handleSelectEdit = async (Id) => {
    await setSelectedComment(Id);
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
            <DeletelBtn onClick={handleClick}>삭제하기</DeletelBtn>
            <AnswerEditModal
              sort={props.sort}
              page={props.page}
              answer={props.answer}
            ></AnswerEditModal>
          </>
        ) : null}
      </div>
      <Paper
        style={{
          padding: '20px',
          position: 'relative',
          lineHeight: '25px',
          display: 'flex',
          flexDirection: 'column',
        }}
        elevation={3}
      >
        {content.split('\n').map((line) => {
          return (
            <>
              {line}
              <br></br>
            </>
          );
        })}

        <div
          style={{ position: 'relative', top: '25px', marginBottom: '20px' }}
        >
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

                textAlign: 'center',
              }}
            >
              <CommentWrapper>
                <CommentUser>
                  <AvatarWrapper src={comment.user.profile}></AvatarWrapper>
                  <Typography
                    variant="body2"
                    color="black"
                    style={{ maxWidth: '750px', fontFamily: 'Jua' }}
                    align="left"
                  >
                    {comment.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="gray"
                    style={{ fontFamily: 'Jua', fontWeight: '100' }}
                  >
                    &nbsp;&nbsp; {comment.user.nickname} &nbsp;&nbsp;
                    {ISOHandler(comment.createdAt)}
                  </Typography>
                  {comment.user.userId === Number(getUserId()) ? (
                    <>
                      <DeleteCommentBtn
                        onClick={() => hanleDelComment(comment.commentId)}
                      >
                        삭제
                      </DeleteCommentBtn>
                      <EditCommentBtn
                        onClick={() => handleSelectEdit(comment.commentId)}
                      >
                        수정
                      </EditCommentBtn>
                    </>
                  ) : null}
                </CommentUser>
                {selectedComment === comment.commentId ? (
                  <CommentEditForm
                    sort={props.sort}
                    page={props.page}
                    answer={props.answer}
                    setSelectedComment={setSelectedComment}
                    selectedComment={selectedComment}
                    comment={props.answer.comments}
                  />
                ) : null}
              </CommentWrapper>
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
          onSubmit={handleSubmit(commentSubmit, commentError)}
        >
          <TextField
            id="comment"
            name="comment"
            placeholder="댓글을 입력하세요"
            variant="standard"
            style={{
              marginLeft: '10px',
              width: '100%',
            }}
            {...register('content')}
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

const DeleteCommentBtn = styled.button`
  padding-right: 2px;
  font-size: 13px;
  border: none;
  background-color: transparent;
  color: #0078ff;
  &:hover {
    color: #0053f4;
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CommentUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* text-align: center; */
`;
const EditCommentBtn = styled(DeleteCommentBtn)``;
