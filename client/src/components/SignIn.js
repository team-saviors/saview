import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FcGoogle } from 'react-icons/fc';
import { GitHub } from '@mui/icons-material';
import { postSignIn } from '../api/User';
import { loginStore } from '../store/store';
import { getUserId } from '../utils/cookies';

const theme = createTheme();
const style = {
  border: '1px solid #D9E4EC',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  margin: '40px',
};
export default function SignIn({ onClose }) {
  const { loginHandler, setUserId } = loginStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const res = await postSignIn(data);
    if (res?.response?.status >= 400) {
      return;
    }
    setUserId(getUserId());
    loginHandler();
    onClose();
  };
  const onError = (error) => {
    console.log(error);
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
            onSubmit={handleSubmit(onSubmit, onError)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              {...register('email', {
                required: '이메일을 입력하세요',
              })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              {...register('password', {
                required: '비밀번호를 입력하세요',
              })}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#4981f8' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
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
