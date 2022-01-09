import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid, Box } from '@mui/material';
import ProfileList from '../../components/ProfileList/ProfileList';
import ProfileContent from '../../components/ProfileContent/ProfileContent';
import EditProfile from '../../components/EditProfile/EditProfile';

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
          <Grid item xs={'auto'} md={3} lg={3}>
            <ProfileList />
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <ProfileContent title="Edit Profile">
              <EditProfile />
            </ProfileContent>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
