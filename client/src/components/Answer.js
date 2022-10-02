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

export default function Answer(props) {
  const params = useParams();

  const { comments, content, createdAt, modifiedAt, user, votes, answerId } =
    props.answer;
  //주석처리 해놓은 부분 = getQuestion에 votes에 따라 rerendering 하고 싶은데 어떻게 해야할지?
  const { question, getQuestion } = answerStore();
  const [open, setOpen] = useState(false);
  const [buttonVariant, setButtonVariant] = useState('outlined');
  const handleClose = (e) => {
    if (e.target.value === '삭제') {
      deleteAnswer(answerId);
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  //좋아요 클릭시 발동하는 함수

  const handleClickVotes = async (answerId, votes) => {
    await updateAnswerVotes(answerId, votes);
    await getQuestion(params.id, props.sort);
  };

  return (
    <Container
      style={{
        margin: '15px',
        marginBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AlertDialog open={open} onClose={handleClose}></AlertDialog>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <AvatarWrapper src={user.profile}></AvatarWrapper>
        <span>{user.nickname}</span>
        <span style={{ margin: '0 20px 0 20px' }}>{ISOHandler(createdAt)}</span>
        {props.answer.user.userId === Number(getUserId()) ? (
          <>
            <button
              style={{ color: 'gray', fontSize: '12px' }}
              onClick={handleClick}
            >
              삭제
            </button>
            <AnswerEditModal
              question={props.question}
              answer={props.answer}
            ></AnswerEditModal>
          </>
        ) : null}
      </div>
      <Paper
        style={{
          padding: '20px',
          width: '1200px',
          minHeight: '300px',
          position: 'relative',
          lineHeight: '25px',
        }}
        elevation={3}
      >
        <div>{content}</div>
        <div style={{ position: 'absolute', bottom: '15px' }}>
          <Button
            variant={buttonVariant}
            onClick={() => handleClickVotes(answerId, votes)}
          >
            <ThumbUpAlt></ThumbUpAlt>
            {/* <ThumbUpOffAltIcon style={{}}></ThumbUpOffAltIcon> */}
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
                // borderBottom: '1px solid #DEDEDE',

                padding: '5px',
                borderLeft: '1px solid #DEDEDE',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <AvatarWrapper src={user.profile}></AvatarWrapper>
              <Typography variant="body2" color="black">
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
