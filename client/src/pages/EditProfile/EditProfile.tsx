import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid, Box } from '@mui/material';
import ProfileList from '../../components/ProfileList/ProfileList';
import ProfileContent from '../../components/ProfileContent/ProfileContent';

export default function Profile(): JSX.Element {
  const { loggedInUser } = useAuth();
  const history = useHistory();
  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, m: 12, mt: 14 }}>
        <Grid container>
          <Grid item xs={4}>
            <ProfileList />
          </Grid>
          <Grid item xs={8}>
            <ProfileContent title="Edit Profile"></ProfileContent>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
