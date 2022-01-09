import { useState } from 'react';
import { Button, FormControl, Grid, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import CustomTextField from '../AuthInput/CustomTextField';
import EditProfileLabel from '../EditProfileLabel/EditProfileLabel';
import BirthDate from '../BirthDate/BirthDate';
import PhoneNumber from '../PhoneNumber/PhoneNumber';
import useStyles from './useStyles';

const EditProfile = (): JSX.Element => {
  const classes = useStyles();
  const [gender, setGender] = useState<string>('male');

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  return (
    <Grid container sx={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={12} md={3} lg={3} sx={{ pl: 12 }}>
          <EditProfileLabel label="FIRST NAME" id="firstname" />
        </Grid>
        <Grid item xs={12} md={9} lg={9} sx={{ maxWidth: 410 }}>
          <CustomTextField
            id="firstname"
            margin="normal"
            name="firstname"
            autoComplete="name"
            autoFocus
            placeholder="John"
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={3} lg={3} sx={{ pl: 12 }}>
          <EditProfileLabel label="LAST NAME" id="lastname" />
        </Grid>
        <Grid item xs={12} md={9} lg={9} sx={{ maxWidth: 410 }}>
          <CustomTextField
            id="lastname"
            margin="normal"
            name="lastname"
            autoComplete="name"
            autoFocus
            placeholder="Doe"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={3} lg={3} sx={{ pl: 15 }}>
          <EditProfileLabel label="GENDER" id="gender" />
        </Grid>
        <Grid item xs={12} md={9} lg={9} sx={{ maxWidth: 120 }}>
          <FormControl fullWidth sx={{ mt: '16px', mb: '5px' }}>
            <Select id="gender" autoWidth onChange={handleGenderChange} value={gender} sx={{ color: 'gray' }}>
              <MenuItem value={'male'}>Male</MenuItem>
              <MenuItem value={'female'}>Female</MenuItem>
              <MenuItem value={'other'}>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={3} lg={3} sx={{ pl: 12 }}>
          <EditProfileLabel label="BIRTH DATE" id="month" />
        </Grid>
        <Grid item xs={12} md={9} lg={9} sx={{ maxWidth: 410 }}>
          <BirthDate />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={3} lg={3} sx={{ pl: 7 }}>
          <EditProfileLabel label="EMAIL ADDRESS" id="email" />
        </Grid>
        <Grid item xs={12} md={9} lg={9} sx={{ maxWidth: 410 }}>
          <CustomTextField
            id="email"
            margin="normal"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="test@test.com"
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={3} lg={3} sx={{ pl: 7, pt: '10px' }}>
          <EditProfileLabel label="PHONE NUMBER" id="month" />
        </Grid>
        <Grid item xs={12} md={9} lg={9} sx={{ maxWidth: 410 }}>
          <PhoneNumber />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={3} lg={3} justifyContent={'center'} sx={{ pl: 7 }}>
          <EditProfileLabel label="WHERE YOU LIVE" id="address" />
        </Grid>
        <Grid item xs={12} md={9} lg={9} sx={{ maxWidth: 410 }}>
          <CustomTextField
            id="address"
            margin="normal"
            name="address"
            autoComplete="street-address"
            autoFocus
            placeholder="Address"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={3} lg={3} sx={{ pl: 3 }}>
          <EditProfileLabel label="DESCRIBE YOUR SELF" id="description" />
        </Grid>
        <Grid item xs={12} md={9} lg={9} sx={{ maxWidth: 410 }}>
          <CustomTextField
            id="description"
            margin="normal"
            name="description"
            autoFocus
            placeholder="About You"
            multiline
            rows={6}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent={'center'} sx={{ mt: 5 }}>
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          className={classes.saveBtn}
          sx={{ fontWeight: 800 }}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditProfile;
