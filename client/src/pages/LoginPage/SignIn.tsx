import FacebookIcon from '@mui/icons-material/Facebook';
import { useForm } from 'react-hook-form';
import { postSignIn } from '../../api/User';
import { loginStore } from '../../store/store';
import { getUserId } from '../../utils/cookies';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FcGoogle } from 'react-icons/fc';
import { GitHub } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  Link,
  Grid,
  FormControlLabel,
  TextField,
} from '@mui/material';
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
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await postSignIn(data);
      setUserId(getUserId());
      loginHandler();
      onClose();
    } catch (err) {
      reset({
        password: '',
      });
    }
  };
  const onError = (error) => {
    console.error(error);
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
              <Box sx={style}>
                <FcGoogle size="50"></FcGoogle>
              </Box>
              <Box sx={style}>
                <GitHub style={{ width: '50px', height: '50px' }} />
              </Box>
              <Box sx={style}>
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
