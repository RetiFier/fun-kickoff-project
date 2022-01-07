import React from 'react';
import { useAuth } from '../../context/useAuthContext';
import { AppBar, Toolbar, Box } from '@mui/material';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import AuthMenu from '../AuthMenu/AuthMenu';
import GuestMenu from '../GustMenu/GustMenu';
const Navbar: React.FC = () => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  return (
    <AppBar position="static" color={'secondary'} sx={{ mt: 4, mb: 4, height: 75 }}>
      <Toolbar>
        <Box flexGrow={1}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Box>

        {loggedInUser ? (
          <>
            <AuthMenu loggedIn={true} userInfo={loggedInUser} />
          </>
        ) : (
          <GuestMenu loggedIn={false} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
