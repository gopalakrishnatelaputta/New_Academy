import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function TopLeftCorner() {
  return (
    <Box sx={{ flex: 1, mr: ['0px', '5px'], height: '107%', borderRadius: '5px', mt: '10px', overflow: 'auto' }}>
      <Box sx={{ mt: ['20px', '40px'], ml: ['20px', '20px'] }}>
        <Typography variant="h5">
          Welcome back, Felecia 👋🏻
        </Typography>

        <Typography variant="subtitle1" sx={{ color: '#544f5a', mt: ['10px', '20px'] }}>
          Your progress this week is awesome. Let's keep it up and get a lot of points reward!
        </Typography>

        <Grid
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            justifyContent: 'space-evenly',
            mt: ['20px', '30px'],
          }}
        >
          <Grid sx={{ display: 'flex', justifyContent: ['center', 'flex-start'], mb: ['20px', '0px'] }}>
            <Grid>
              <LaptopIcon
                sx={{ fontSize: ['30px', '40px'], color: '#9055fd !important', bgcolor: '#e7e7ff !important' }}
              />
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', ml: ['0px', '8px'], mt: ['10px', '0px'] }}>
              <Typography variant="subtitle1">Hours Spent</Typography>
              <Typography variant="h6" sx={{ display: 'flex', color: '#9055fd !important' }}>
                34h
              </Typography>
            </Grid>
          </Grid>

          <Grid sx={{ display: 'flex', justifyContent: ['center', 'flex-start'], mb: ['20px', '0px'] }}>
            <Grid>
              <TipsAndUpdatesIcon
                sx={{ fontSize: ['30px', '40px'], color: '#71dd37 !important', bgcolor: '#e8fadf !important' }}
              />
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', ml: ['0px', '8px'], mt: ['10px', '0px'] }}>
              <Typography variant="subtitle1">Test Results</Typography>
              <Typography variant="h6" color={'#71dd37 !important'}>
                82%
              </Typography>
            </Grid>
          </Grid>

          <Grid sx={{ display: 'flex', justifyContent: ['center', 'flex-start'] }}>
            <Grid>
              <CheckBoxIcon
                sx={{ fontSize: ['30px', '40px'], color: '#ff3e1d !important', bgcolor: '#ffe0db !important' }}
              />
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', ml: ['0px', '8px'], mt: ['10px', '0px'] }}>
              <Typography variant="subtitle1">Course Completed</Typography>
              <Typography variant="h6" color={'#ff3e1d !important'}>
                23
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
