import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import DonutChart from './CustomPieChart';

export default function TopRightCorner() {
  return (
    <Box sx={{ flex: 1, mr: '5px',ml:'5px', height: '100%', borderRadius: '5px', mt: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',width:'45%'}}>
        <Typography variant='h6' component="div">
          Time Spendings
        </Typography>
        <Typography>
          Weekly report
        </Typography>
        <Typography variant='h6' sx={{
          display: 'flex',
          color: 'Black',
          mt: "20px",
          fontSize: '16px', // Responsive font size
        }}>
          231
          <Typography color={'#544f5a'} sx={{ mt: '2px', padding: '1px', fontSize: '14px' }}>h</Typography> 14 <Typography color={"#544f5a"}
            sx={{ mt: '2px', padding: '2px', fontSize: '14px' }}>min</Typography>
        </Typography>
        <Card elevation={0.5} sx={{ borderRadius: '10px', mt: "20px" }}>
          <Typography sx={{
            fontSize: '12px', // Responsive font size
            color: 'darkolivegreen',
            bgcolor: '#e8fadf !important'
          }} variant='h8' color={'#71dd37 !important'}>+18.40 %</Typography>
        </Card>
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        mt:'0px',
        fontSize: '16px',
        width:'55%' 
      }}>
        <Box mx="auto" >
          <DonutChart></DonutChart>
        </Box>
      </Box>

    </Box>
  );
}
