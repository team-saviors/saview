import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import Container from '@mui/system/Container';
import styled from 'styled-components';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAlt from '@mui/icons-material/ThumbUpOffAlt';
import { Button, CardContent, Typography } from '@mui/material';
import { answerStore } from '../store/store';
import AvatarWrapper from './AvatarWrapper';
export default function Answer(props) {
  const {
    answerId,
    question,
    imgURL,
    author,
    createdAt,
    modifiedAt,
    body,
    votes,
    comments,
  } = props.answer;
  const { increase } = answerStore();
  // const increase = props.increase;
  useEffect(() => {
    console.log(comments);
  });

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
          src={Object.values(imgURL)}
          alt="grade"
        ></img>
        <span>{author}</span>
        <span>{Date(createdAt)}</span>
      </div>
      <Paper
        style={{
          padding: '20px',
          width: '1200px',
          minHeight: '300px',
          position: 'relative',
        }}
        elevation={3}
      >
        <div>{body}</div>
        <div style={{ position: 'absolute', bottom: '15px' }}>
          <Button variant="contained" onClick={() => increase()}>
            <ThumbUpAlt></ThumbUpAlt>
            {/* <ThumbUpOffAltIcon style={{}}></ThumbUpOffAltIcon> */}
            <span>좋아요 {votes}</span>
          </Button>
        </div>
      </Paper>

      {comments.map((comment) => (
        <CardContent
          key={comment.commentId}
          style={{
            width: '1200px',
            borderBottom: '1px solid #DEDEDE',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <AvatarWrapper src={Object.values(imgURL)}></AvatarWrapper>
          <Typography variant="body2" color="text.secondary">
            {comment.body}
          </Typography>
        </CardContent>
      ))}
    </Container>
  );
}
