import { Box, Card, IconButton, Typography } from '@mui/material';
import React from 'react';
import RadialBarChart from './Charts/RadialBarChart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function BottomRightCard() {
  const button = (
    <IconButton
      aria-label="right arrow"
      sx={{
        backgroundColor: '#8592a3',
        color: 'white',
        width: '40px',
        height: '20px',
        borderRadius: 1,
        '&:hover': {
          backgroundColor: 'black',
        },
      }}
    >
      {<ArrowForwardIosIcon sx={{height:'12px',width:'12px'}}></ArrowForwardIosIcon>}
    </IconButton>
  );

  const arr3 = [
    { image: <Box width={'38%'}><RadialBarChart /></Box>, expert: 'User experience Design', designation: '120 Tasks', hours: button },
    { image: <Box width={'38%'}><RadialBarChart /></Box>, expert: 'Basic fundamentals', designation: '32 Tasks', hours: button },
    { image: <Box width={'38%'}><RadialBarChart /></Box>, expert: 'React native components', designation: '182 Tasks', hours: button },
    { image: <Box width={'38%'}><RadialBarChart /></Box>, expert: 'Basic of music theory', designation: '56 Tasks', hours: button },
  ];

  return (
    <Card elevation={2} sx={{ mt: '10px', mr: '10px',ml:'5px', height: '370px', borderRadius: '10px', overflow: 'auto',width:'100%'}}>
    
        <Box sx={{ display: 'flex', m: '5px', height: '30px', justifyContent: 'space-between' }}>
          <Typography fontSize={'17.5px'} sx={{ display: 'flex', ml: '10px' }}>
            Assignment Progress
          </Typography>
          <MoreVertIcon sx={{ display: 'flex', mr: '10px' }}></MoreVertIcon>
        </Box>

        <hr></hr>

        <Box  sx={{ marginTop: '10px',}}>
          {arr3.map((item, index) => (
            <Box sx={{ mt: 3 ,ml:'20px',display:'flex',justifyContent:'space-between',alignContent:'center',alignItems:'center'}}>
              <Box sx={{display:'flex'}}>
                <Box  mb={'5px'}>
                  {item.image}
                </Box>
                <Box mt={'15px'}>
                  <Typography variant="subtitle1" ml={'20px'}>{item.expert}</Typography>
                  <Typography variant="subtitle2" ml={'20px'}>{item.designation}</Typography>               
                </Box>
              </Box>
              <Box mr={'20px'} mb={'20px'}>
                {item.hours}
              </Box>
            </Box>
          ))}
        </Box>
     
    </Card>
  );
}
