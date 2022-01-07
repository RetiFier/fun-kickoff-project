import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  navButton: {
    width: 130,
    height: 45,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkBtn: {
    color: theme.palette.text.primary,
    boxShadow: 'none',
    marginRight: 15,
  },
}));

export default useStyles;
