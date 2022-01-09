import { Box } from '@mui/material';
import AuthTitle from '../AuthTitle/AuthTitle';
import ProfileContentContainer from '../ProfileContentContainer/ProfileContentContainer';

type Props = {
  children?: JSX.Element;
  title: string;
};

const ProfileContent = ({ title, children }: Props): JSX.Element => {
  return (
    <ProfileContentContainer>
      <Box sx={{ width: '80%', p: 5 }} alignSelf="center">
        <AuthTitle title={title} />

        {children}
      </Box>
    </ProfileContentContainer>
  );
};

export default ProfileContent;
