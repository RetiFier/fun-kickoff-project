import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  saveBtn: {
    width: 165,
    height: 47,
    borderRadius: theme.shape.borderRadius,
  },
}));

export default useStyles;
