import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  phoneAddButton: {
    height: 43,
    borderRadius: theme.shape.borderRadius,
  },
}));

export default useStyles;
