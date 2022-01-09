import { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import useStyles from './useStyles';
import CustomTextField from '../AuthInput/CustomTextField';

const PhoneNumber = (): JSX.Element => {
  const [openInput, setOpenInput] = useState<boolean>(false);
  const classes = useStyles();
  if (openInput) {
    return (
      <CustomTextField
        id="phonenumber"
        margin="normal"
        name="phonenumber"
        autoComplete="tel"
        autoFocus
        placeholder="Enter Phone Number"
      />
    );
  }
  return (
    <Grid container sx={{ mt: '28px', mb: 7, width: '100%', height: 15 }}>
      <Grid item xs={12} md={7} lg={7} sx={{ p: 2 }}>
        <Typography fontSize={13} justifyContent={'center'} fontStyle={'italic'} fontWeight={500}>
          No Phone number entered
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} lg={5} sx={{ mb: 10 }}>
        <Button
          type="submit"
          size="large"
          variant="outlined"
          color="primary"
          className={classes.phoneAddButton}
          sx={{ fontWeight: 700 }}
          onClick={() => setOpenInput(true)}
        >
          Add a Phone Number
        </Button>
      </Grid>
    </Grid>
  );
};

export default PhoneNumber;
