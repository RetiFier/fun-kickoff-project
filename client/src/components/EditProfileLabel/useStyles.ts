import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    marginTop: 30,
  },
  labelText: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
