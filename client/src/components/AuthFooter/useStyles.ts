import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  authHeader: {
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  accAside: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
  },
  accBtn: {
    color: theme.palette.primary.main,
    boxShadow: 'none',
  },
}));

export default useStyles;
