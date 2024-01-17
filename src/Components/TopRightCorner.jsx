import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import DonutChart from './CustomPieChart';

export default function TopRightCorner() {
  return (
    <Box sx={{ flex: 1, mr: ['0px', '5px'], height: '100%', borderRadius: '5px', mt: '10px', overflow: 'auto' }}>
      <Grid container>
        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h6' component="div">
            Time Spendings
          </Typography>
          <Typography>
            Weekly report
          </Typography>
          <Typography variant='h6' sx={{ display: 'flex', color: 'Black', mt: "20px" }}>
            231
            <Typography color={'#544f5a'} sx={{ mt: '6px', padding: '1px' }}>h</Typography> 14 <Typography color={"#544f5a"}
              sx={{ mt: '6px', padding: '1px' }}>min</Typography>
          </Typography>
          <Typography sx={{ fontSize: '15px', color: '#71dd37 !important', bgcolor: '#e8fadf !important' }} variant='h8' color={'#71dd37 !important'}>+18.40 %</Typography>
        </Grid>

        <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
          <Box ml={'2px'}>
            <DonutChart></DonutChart>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
