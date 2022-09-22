import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import Container from '@mui/system/Container';
import styled from 'styled-components';
import ThumbUpAlt from '@mui/icons-material/ThumbUpOffAlt';
import { TextField, Button, CardContent, Typography } from '@mui/material';
import AvatarWrapper from './AvatarWrapper';
import MessageIcon from '@mui/icons-material/Message';
import daia from '../assets/images/daia.png';
export default function Answer(props) {
  const { comments, content, createdAt, modifiedAt, user, votes } =
    props.answer;

  return (
    <Container
      style={{
        margin: '15px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <img
          style={{ width: '30px', height: '30px', borderRadius: '10px' }}
          src={daia}
          alt="grade"
        ></img>
        <span>{user.nickname}</span>
        <span>{createdAt}</span>
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
      {comments ? (
        comments.map((comment) => (
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
            <AvatarWrapper src={daia}></AvatarWrapper>
            <Typography variant="body2" color="black">
              {comment.content}
            </Typography>
            <Typography variant="body2" color="gray">
              &nbsp;&nbsp; {comment.user.nickname} &nbsp;&nbsp;
              {comment.createdAt}
            </Typography>
          </CardContent>
        ))
      ) : (
        <div>{'댓글이 없습니다'}</div>
      )}
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
