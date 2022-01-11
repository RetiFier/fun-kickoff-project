import { Box, Grid, Paper } from '@mui/material';
import useStyles from './useStyles';

type Props = {
  children: JSX.Element;
};

const ProfileContentContainer = ({ children }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={10} lg={10} elevation={7} component={Paper} className={classes.profileContainer}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection="column">
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileContentContainer;
