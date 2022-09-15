import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import Container from '@mui/system/Container';
import styled from 'styled-components';

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
  useEffect(() => {
    // console.log(props);
    console.log(props);
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
      </div>
      <Paper
        style={{ padding: '20px', width: '1200px', minHeight: '300px' }}
        elevation={3}
      >
        {body}
      </Paper>
    </Container>
  );
}
