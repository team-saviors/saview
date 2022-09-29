import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import Container from '@mui/system/Container';
import ThumbUpAlt from '@mui/icons-material/ThumbUpOffAlt';
import { TextField, Button, CardContent, Typography } from '@mui/material';
import AvatarWrapper from './AvatarWrapper';
import MessageIcon from '@mui/icons-material/Message';
import { ISOHandler } from '../utils/timeHandler';
import { getUserId } from '../utils/cookies';
import { deleteAnswer } from '../utils/axiosRequest';
import AlertDialog from './AlertDialog';
export default function Answer(props) {
  const { comments, content, createdAt, modifiedAt, user, votes, answerId } =
    props.answer;

  const [open, setOpen] = useState(false);

  const handleClose = (e) => {
    if (e.target.value === '삭제') {
      deleteAnswer(answerId);
      alert('삭제되었습니다');
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Container
      style={{
        margin: '15px',
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
          <Button variant="contained">
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
          width: '1200px',
          display: 'flex',
          padding: '8px',
          borderLeft: '1px solid #DEDEDE',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <MessageIcon />
        <form
          onSubmit={() => {
            console.log('submit');
          }}
        >
          <TextField
            placeholder="댓글을 입력하세요"
            variant="standard"
            style={{ marginLeft: '10px', width: '1200px' }}
            size="small"
          ></TextField>
        </form>
      </CardContent>
    </Container>
  );
}
