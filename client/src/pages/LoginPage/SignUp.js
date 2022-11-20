import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { GitHub } from '@mui/icons-material';
import { postSignUp } from '../../api/User';

const style = {
  border: '1px solid #D9E4EC',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  margin: '40px',
};
const theme = createTheme();

export default function SignUp({ onClose }) {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await postSignUp(data);
      alert('회원가입이 완료되었습니다. 다시 로그인 해 주세요');
      onClose();
    } catch (err) {
      console.log(err);
    }
  };
  const onError = (error) => {
    if (error.nickname) alert(error.nickname.message);
    else if (error.email) alert(error.email.message);
    else if (error.password) alert(error.password.message);
    else {
      alert('비밀번호가 맞는지 확인해주세요');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit, onError)}
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="닉네임"
                  {...register('nickname', {
                    required: '닉네임을 입력하세요',
                    pattern: {
                      value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,10}$/,
                      message: '닉네임은 영문,한글,숫자 및 10글자 미만입니다',
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="이메일"
                  placeholder="이메일을 입력해주세요"
                  {...register('email', {
                    required: '이메일을 입력하세요',
                    pattern: {
                      value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: '이메일 형식이 아닙니다',
                    },
                  })}
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
                  {...register('password', {
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      message:
                        '비밀번호는 영문자,숫자,특수문자 포함 8글자이상으로 해주세요',
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="비밀번호 확인"
                  type="password"
                  placeholder="비밀번호를 확인해주세요"
                  {...register('passwordcheck', {
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return password === value || 'Passwords should match!';
                      },
                    },
                  })}
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
