import { Box, Card, IconButton, Typography } from '@mui/material';
import React from 'react';
import RadialBarChart from './Charts/RadialBarChart';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function BottomRightCard() {
  const button = (
    <IconButton
      aria-label="right arrow"
      sx={{
        backgroundColor: '#8592a3',
        color: 'white',
        width: '20px',
        height: '20px',
        borderRadius: 0,
        '&:hover': {
          backgroundColor: 'black',
        },
      }}
    >
      {'>'}
    </IconButton>
  );

  const arr3 = [
    { image: <RadialBarChart />, expert: 'User experience Design', designation: '120 Tasks', hours: button },
    { image: <RadialBarChart />, expert: 'Basic fundamentals', designation: '32 Tasks', hours: button },
    { image: <RadialBarChart />, expert: 'React native components', designation: '182 Tasks', hours: button },
    { image: <RadialBarChart />, expert: 'Basic of music theory', designation: '56 Tasks', hours: button },
  ];

  return (
    <Card elevation={2} sx={{ mt: '15px', mr: '5px', height: '370px', borderRadius: '10px', overflow: 'auto' }}>
      <Box>
        <Box sx={{ display: 'flex', m: '5px', height: '30px', justifyContent: 'space-between' }}>
          <Typography fontSize={'17.5px'} sx={{ display: 'flex', ml: '10px' }}>
            Assignment Progress
          </Typography>
          <MoreVertIcon sx={{ display: 'flex', mr: '10px' }}></MoreVertIcon>
        </Box>

        <hr></hr>

        <Box component="div" sx={{ marginTop: '10px' }}>
          {arr3.map((item, index) => (
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mt: 2 }}>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: { xs: '0', md: '-90px' } }}>
                  {item.image}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: { xs: '10px', md: '18px' }, ml: { xs: '0', md: '-100px' } }}>
                  <Typography variant="subtitle1">{item.expert}</Typography>
                  <Typography variant="subtitle2">{item.designation}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mt: { xs: '10px', md: '23px' }, color: '#e7e7e8' }}>
                {item.hours}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
}
