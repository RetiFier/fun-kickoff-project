import Box from '@mui/material/Box';
import { FormikHelpers } from 'formik';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import AuthTitle from '../../components/AuthTitle/AuthTitle';
import AuthFooter from '../../components/AuthFooter/AuthFooter';

export default function Register(): JSX.Element {
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
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
        <AuthTitle title="Sign up" />
        <SignUpForm handleSubmit={handleSubmit} />
        <AuthFooter linkTo="/login" asideText="Already a member?" btnText="Login" />
      </Box>
    </AuthContainer>
  );
}
