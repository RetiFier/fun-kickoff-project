import { useState } from 'react';
import { FormControl, Grid, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const BirthDate = (): JSX.Element => {
  const [year, setYear] = useState<string>('1998');
  const [month, setMonth] = useState<string>('January');
  const [day, setDays] = useState<string>('12');
  const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };
  const handleMonthChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
  };
  const handleDayChange = (event: SelectChangeEvent) => {
    setDays(event.target.value as string);
  };
  const getYear = new Date().getFullYear();
  // To Get Years
  const getYears = Array.from(new Array(100), (val, index) => getYear - index);
  const getMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const getDays = Array.from(new Array(31), (val, index) => index + 1);

  return (
    <Grid container sx={{ mt: '3px', mb: '5px', width: '100%' }} spacing={2}>
      <Grid item xs={12} md={5} lg={5}>
        <FormControl fullWidth>
          <Select id="month" autoWidth onChange={handleMonthChange} value={month} sx={{ color: 'gray' }}>
            {getMonth?.map((data) => (
              <MenuItem key={data} value={data}>
                {data}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <FormControl fullWidth>
          <Select id="day" autoWidth onChange={handleDayChange} value={day} sx={{ color: 'gray' }}>
            {getDays?.map((data) => (
              <MenuItem key={data} value={data}>
                {data}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={4} lg={4}>
        <FormControl fullWidth>
          <Select id="year" autoWidth onChange={handleYearChange} value={year} sx={{ color: 'gray' }}>
            {getYears?.map((data) => (
              <MenuItem key={data} value={data}>
                {data}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default BirthDate;
