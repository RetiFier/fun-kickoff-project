import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto",  "Arial","sans-serif"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    fontWeightBold: 700,
  },
  palette: {
    primary: { main: '#f14140' },
    secondary: { main: '#FFF' },
    background: { default: '#fafafb' },
  },

  shape: {
    borderRadius: 5,
  },
  spacing: 6,

  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: 'black',
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});
