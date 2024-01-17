import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideocamIcon from '@mui/icons-material/Videocam';
import CodeIcon from '@mui/icons-material/Code';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MicIcon from '@mui/icons-material/Mic';

export default function BottomLeftCard() {
  const arr1 = [
    {
      icon: <VideocamIcon sx={{ color: '#696cff !important', bgcolor: '#e7e7ff !important', width: '35px', height: '35px' }} />,
      expert: 'Videography Basic',
      designation: 'Design Course',
      view: '52.4 K Views',
    },
    {
      icon: <CodeIcon sx={{ color: '#03c3ec !important', bgcolor: '#d7f5fc !important', width: '35px', height: '35px' }} />,
      expert: 'Basic Front-end',
      designation: 'Development Course',
      view: '44.2 K Views',
    },
    {
      icon: <CameraAltIcon sx={{ color: '#71dd37 !important', bgcolor: '#e8fadf !important', width: '35px', height: '35px' }} />,
      expert: 'Basic Fundamentals ',
      designation: 'Photography',
      view: '24.5 K Views',
    },
    {
      icon: <MicIcon sx={{ color: '#ff3e1d !important', bgcolor: '#ffe0db !important', width: '35px', height: '35px' }} />,
      expert: 'Your First Singing',
      designation: 'Lesson',
      view: '72.3 K Views',
    },
  ];

  return (
    <Card elevation={2} sx={{ ml: '5px', mr: '15px', height: '370px', borderRadius: '5px', mt: '15px', overflowY: 'auto', color: 'var' }}>
      <Grid>
        <Grid container sx={{ height: '30px', display: 'flex', justifyContent: 'space-between', m: '10px' }}>
          <Typography sx={{ fontSize: ['16px', '17.5px'], ml: ['5px', '10px'] }}>Top Courses</Typography>
          <MoreVertIcon sx={{ display: 'flex', mr: ['5px', '20px'] }}></MoreVertIcon>
        </Grid>
      </Grid>
      <hr></hr>
      <Box component="div" sx={{ marginTop: ['5px', '10px'], marginRight: ['5px', '20px'], marginLeft: ['5px', '20px'] }}>
        {arr1.map((item) => (
          <Box sx={{ display: 'flex', alignItems: 'start', mt: 2, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Box>{item.icon}</Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', ml: ['10px', '20px'] }}>
                <Typography fontSize={['12px', '13px']} sx={{ fontStyle: '' }}>
                  {item.expert}
                </Typography>
                <Typography variant="caption">{item.designation}</Typography>
                <br></br>
              </Box>
            </Box>

            <Box sx={{ mt: ['5px', '10px'], bgcolor: '#ebeef0 !important' }}>{item.view}</Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
