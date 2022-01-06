import { Grid, Typography } from '@mui/material';
import useStyles from './useStyles';

type Props = {
  title?: string;
};

const AuthTitle = ({ title }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.titleContainer}>
      <Grid item xs justifyContent={'center'} display={'flex'}>
        <Typography className={classes.title} component="h1" variant="h5" fontSize={35} fontWeight={600}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AuthTitle;
