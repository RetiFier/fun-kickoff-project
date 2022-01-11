import { useAuth } from '../../context/useAuthContext';
import { Route, RouteComponentProps, Switch, useHistory } from 'react-router-dom';
import { CircularProgress, Grid, Box } from '@mui/material';
import ProfileList from '../../components/ProfileList/ProfileList';
import ProfileContent from '../../components/ProfileContent/ProfileContent';
import EditProfile from '../../components/EditProfile/EditProfile';

type TParams = { url: string };

export default function Settings({ match }: RouteComponentProps<TParams>): JSX.Element {
  const { loggedInUser } = useAuth();
  const history = useHistory();
  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }
  return (
    <Box sx={{ flexGrow: 1, m: 12, mt: 14 }}>
      <Grid container>
        <Grid item xs={'auto'} md={3} lg={3}>
          <ProfileList />
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <Switch>
            <Route path={`${match.url}/profile-photo`}>
              <ProfileContent title="Profile Photo" />
            </Route>

            <Route path={`${match.url}/edit-profile`}>
              <ProfileContent title="Edit Profile">
                <EditProfile />
              </ProfileContent>
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
}
