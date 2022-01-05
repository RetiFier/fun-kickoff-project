import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  btnText: string;
}

const AuthFooter = ({ linkTo, asideText, btnText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} display="flex" justifyContent="center" alignSelf="center" marginTop={5} className={classes.authHeader}>
      <Typography className={classes.accAside} fontWeight={700}>
        {asideText}
      </Typography>
      <Link to={linkTo} className={classes.accBtn}>
        {btnText}
      </Link>
    </Box>
  );
};

export default AuthFooter;
