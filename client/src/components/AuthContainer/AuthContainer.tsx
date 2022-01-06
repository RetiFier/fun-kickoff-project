import { Box, Grid, Paper } from '@mui/material';
import useStyles from './useStyles';

type Props = {
  children: JSX.Element;
};

const AuthContainer = ({ children }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        xs={12}
        sm={8}
        md={8}
        lg={6}
        elevation={7}
        component={Paper}
        padding={2}
        marginTop={12}
        className={classes.authContainer}
      >
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection="column">
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthContainer;
