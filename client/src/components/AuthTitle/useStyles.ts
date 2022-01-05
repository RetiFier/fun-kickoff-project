import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  titleContainer: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  title: {
    fontFamily: theme.typography.fontFamily,
    paddingBottom: 20,
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
