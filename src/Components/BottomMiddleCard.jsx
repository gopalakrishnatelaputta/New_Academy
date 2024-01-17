import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import Image5 from '../IMAGES/Image5.png';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { height } from '@mui/system';

export default function BottomMiddleCard() {
  const buttonStyle = {
    backgroundColor: '#696cff',
    color: 'white',
    padding: '8px 25px', // Adjusted padding for reduced height and increased length
    borderRadius: '5px',
    fontSize: '16px',
  };

  return (
    <Card elevation={2} sx={{ mr: '15px', height: '370px', borderRadius: '5px', mt: '15px', overflowY: 'auto' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box boxShadow={'4px 4px 4px 4px rgba(0, 0, 0, 0.1)'}>
          <img src={Image5} alt="" height={130} style={{ backgroundColor: '#d9dee3', margin: '15px', width: '92%', borderRadius: '5px' }} />
        </Box>
        <Box ml={2} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography fontSize={'17.5'} mt="10px">
            Upcoming Webinar
          </Typography>
          <Typography sx={{ fontSize: '13px', ml: '5px',mt:'3px' }}>
            Next Generation Frontend Architecture Using Layout Engine And React Native Web.
          </Typography>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', mt: '10px' }}>
            <Grid item xs={12} md={6}>
              <Box m={2} sx={{ display: 'flex' }}>
                <DateRangeIcon sx={{ color: '#696cff !important', bgcolor: '#e7e7ff !important', width: '35px', height: '35px' }} />
                <Box sx={{ ml: '8px', display: 'flex', flexDirection: 'column' }}>
                  <Typography>17 Nov 2023</Typography>
                  <Typography sx={{ fontSize: '13px', fontWeight: 'block' }}>Date</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box m={2} sx={{ display: 'flex' }}>
                <ScheduleIcon sx={{ color: '#696cff !important', bgcolor: '#e7e7ff !important', width: '35px', height: '35px' }} />
                <Box sx={{ ml: '8px', display: 'flex', flexDirection: 'column' }}>
                  <Typography>150 minutes</Typography>
                  <Typography sx={{ fontSize: '13px', fontWeight: 'block' }}>Duration</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
              <button  style={buttonStyle}>Join the event</button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}
