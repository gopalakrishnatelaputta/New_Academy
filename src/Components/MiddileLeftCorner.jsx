import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import MiddileLeftCornerChart from '../Components/Charts/MiddleLeftCornerChart';

export default function MiddileLeftCorner() {
  return (
    <Card elevation={2} sx={{ ml: '5px', mr: '15px', height: '250px', borderRadius: '5px', mt: '5px',  color: 'var' }}>
      <Grid container>
        <Grid item xs={12} sx={{ height: ['20px', '30px'], alignItems: 'center', mt: ['10px', '20px'] }}>
          <Typography fontSize={'17.5px'} ml={['10px', '15px']}>
            Topics you are interested in
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'start', mt: ['5px', '5px'] }}>
          <MiddileLeftCornerChart />
        </Grid>
      </Grid>
    </Card>
  );
}
