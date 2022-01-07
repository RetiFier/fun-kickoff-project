import { Box, Grid } from '@mui/material';
import ProfileLink from '../ProfileLink/ProfileLink';
import useStyles from './useStyles';

const ProfileList = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection="column">
        <ProfileLink linkTo="edit-profile" linkText="Edit Profile" />
        <ProfileLink linkTo="profile-photo" linkText="Profile Photo" />
        <ProfileLink linkTo="availability" linkText="Availability" />
        <ProfileLink linkTo="payment" linkText="Payment" />
        <ProfileLink linkTo="security" linkText="Security" />
        <ProfileLink linkTo="setting" linkText="Setting" />
      </Box>
    </Grid>
  );
};

export default ProfileList;
