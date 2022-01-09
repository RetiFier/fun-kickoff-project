import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    justifyContent: 'center',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  profileContainer: {
    // maxHeight: '950px',
    height: '100%',
  },
}));

export default useStyles;
