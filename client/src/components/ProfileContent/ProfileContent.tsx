import { Box } from '@mui/material';
import AuthTitle from '../AuthTitle/AuthTitle';
import ProfileContentContainer from '../ProfileContentContainer/ProfileContentContainer';

type Props = {
  children?: JSX.Element;
  title: string;
};

const ProfileContent = ({ title }: Props): JSX.Element => {
  return (
    <ProfileContentContainer>
      <Box width="100%" maxWidth={450} p={3} alignSelf="center">
        <AuthTitle title={title} />
      </Box>
    </ProfileContentContainer>
  );
};

export default ProfileContent;
