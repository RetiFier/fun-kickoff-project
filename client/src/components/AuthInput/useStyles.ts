import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    marginBottom: '-14px',
  },
  labelText: {
    fontFamily: theme.typography.fontFamily,

    color: theme.palette.text.primary,
  },
  inputs: {
    padding: '5px',
  },
}));

export default useStyles;
