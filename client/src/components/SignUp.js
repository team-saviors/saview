import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FacebookIcon from '@mui/icons-material/Facebook';

import { FcGoogle } from 'react-icons/fc';
import { GitHub } from '@mui/icons-material';
const style = {
  border: '1px solid #D9E4EC',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  margin: '40px',
};
const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth label="닉네임" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="이메일"
                  placeholder="이메일을 입력해주세요"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  label="비밀번호"
                  name="비번"
                  placeholder="영문자,숫자,특수문자 포함 8글자이상"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="비밀번호 확인"
                  type="password"
                  placeholder="비밀번호를 확인해주세요"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Box style={style}>
                <FcGoogle size="50"></FcGoogle>
              </Box>
              <Box style={style}>
                <GitHub style={{ width: '50px', height: '50px' }} />
              </Box>
              <Box style={{ ...style }}>
                <FacebookIcon
                  style={{
                    width: '50px',
                    height: '50px',
                    color: '#4267B2',
                    margin: '0',
                  }}
                ></FacebookIcon>
              </Box>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
