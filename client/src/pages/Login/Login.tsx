import Box from '@mui/material/Box';
import { FormikHelpers } from 'formik';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import AuthTitle from '../../components/AuthTitle/AuthTitle';
import AuthFooter from '../../components/AuthFooter/AuthFooter';

export default function Login(): JSX.Element {
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <AuthContainer>
      <Box width="100%" maxWidth={450} p={3} alignSelf="center">
        <AuthTitle title="Login" />
        <LoginForm handleSubmit={handleSubmit} />
        <AuthFooter linkTo="/signup" asideText="Don't have an account?" btnText="Create account" />
      </Box>
    </AuthContainer>
  );
}
