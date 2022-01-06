import { Box, Button, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  loggedIn: boolean;
}

const GuestMenu = ({}: Props): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box justifyContent={'center'}>
      <Link to={'/'} className={classes.linkBtn}>
        <Typography display={'inline'} fontWeight={800} fontSize={11}>
          BECOME A SITTER
        </Typography>
      </Link>
      <Button
        type="submit"
        size="large"
        variant="outlined"
        color="primary"
        className={classes.navButton}
        onClick={() => history.push(`/login`)}
        sx={{ ml: 5 }}
      >
        LOGIN
      </Button>

      <Button
        type="submit"
        size="large"
        variant="contained"
        color="primary"
        className={classes.navButton}
        onClick={() => history.push(`/signup`)}
        sx={{ ml: 2, mr: 4 }}
      >
        SIGN UP
      </Button>
    </Box>
  );
};

export default GuestMenu;
