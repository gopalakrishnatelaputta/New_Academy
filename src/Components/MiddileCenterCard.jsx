import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import CommonBox from './CommonBoxMiddleCenter.jsx/CommonBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function MiddileCenterCard() {
  return (
    <Card elevation={2} sx={{ mr: '15px', height: '250px', borderRadius: '5px', mt: '5px', overflowY: 'auto', color: 'var' }}>
      <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', m: ['5px', '10px'] }}>
          <Typography fontSize={'17.5px'} marginTop={'5px'} ml={['10px', '10px']}>
            Performance
          </Typography>
          <MoreVertIcon sx={{ display: 'flex',mt:'5px', mr: ['10px', '10px'] }} />
        </Grid>
        <Grid container sx={{ display: 'flex', flexDirection: ['column', 'row'], mt: ['10px', '10px'] }}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', mt: ['10px', '0px'] }}>
            <Box sx={{ height: ['50px', '100%'], mt: ['10px', '0px'] }}>
              <CommonBox />
            </Box>
            <Box sx={{ height: ['50px', '100%'], mt: ['10px', '0px'] }}>
              <CommonBox />
            </Box>
            <Box sx={{ height: ['50px', '100%'], mt: ['10px', '0px'] }}>
              <CommonBox />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', mt: ['10px', '0px'] }}>
            <Box sx={{ height: ['50px', '100%'], mt: ['10px', '0px'] }}>
              <CommonBox />
            </Box>
            <Box sx={{ height: ['50px', '100%'], mt: ['10px', '0px'] }}>
              <CommonBox />
            </Box>
            <Box sx={{ height: ['50px', '100%'], mt: ['10px', '0px'] }}>
              <CommonBox />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
