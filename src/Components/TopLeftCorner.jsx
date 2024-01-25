import React from 'react';
<<<<<<< HEAD
import { Typography, Box, Grid, Card, Button } from '@mui/material';
=======
import { Typography, Box, Grid, Card } from '@mui/material';
>>>>>>> origin/main
import LaptopIcon from '@mui/icons-material/Laptop';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

<<<<<<< HEAD

=======
>>>>>>> origin/main
export default function TopLeftCorner() {
  return (
    <Box sx={{ flex: 1, ml:'5px',mr:'5px',height: '100%', borderRadius: '5px', mt: '10px', overflow: 'auto' }}>
      <Box sx={{ mt: '20px', ml: '20px' }}>
        <Typography variant="h5">
          Welcome back, Felecia 👋🏻
        </Typography>

        <Typography variant="subtitle1" sx={{ color: '#544f5a', mt: '20px' }}>
          Your progress this week is awesome. Let's keep it up and get a lot of points reward!
        </Typography>

        <Grid container sx={{ display: 'flex',justifyContent: 'space-evenly', mt: '40px',width:'90%' }}>
         
          <Grid item xs={12} md={3} sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',mb:'20px'}}>
            <Card elevation={0.8} sx={{borderRadius:'6px',bgcolor:'#fff4d9 !important',height:'50px', width: '60px', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: "space-evenly" }}>
              <LaptopIcon sx={{fontSize:'25px',color: '#ffb400 !important'}}></LaptopIcon>
            </Card>
            <Grid sx={{ display: 'flex', flexDirection: 'column', ml: '5px', mt: '10px' }}>
              <Typography variant="subtitle1" color={'#544f5a'}>Hours Spent</Typography>
              <Typography variant="h6" sx={{ display: 'flex', color: '#9055fd !important' }}>
                34h
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} md={3} sx={{display: 'flex', flexDirection:'row',justifyContent: 'space-evenly',mb: '20px' }} >
            <Card elevation={0.8} sx={{ borderRadius: '6px', bgcolor: '#e8fadf !important', height: '50px', width: '60px', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: "space-evenly" }}>
              <TipsAndUpdatesIcon sx={{ fontSize: '25px', color: '#71dd37 !important' }}/>
            </Card>
            <Grid sx={{ display: 'flex', flexDirection: 'column', ml: '5px', mt: '10px' }}>
              <Typography variant="subtitle1" color={'#544f5a'}>Test Results</Typography>
              <Typography variant="h6" color={'#71dd37 !important'}>
                82%
              </Typography>
            </Grid>
          </Grid>  
           
            

          <Grid item xs={12} md={3}  sx={{ display: 'flex',flexDirection: 'row',justifyContent: 'space-evenly',mb: '20px',ml:'22px' }} >
            <Card elevation={0.8} sx={{ borderRadius: '6px', bgcolor: '#eee6ff !important', height: '50px', width: '60px', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: "space-evenly" }}>
              <TaskAltIcon
                sx={{ fontSize: '25px', color: '#9055fd !important' }}
              />
            </Card>
            <Grid sx={{ display: 'flex', flexDirection: 'column', ml: '5px', mt: '10px' }}>
              <Typography variant="subtitle1" color={'#544f5a'}>Course Completed</Typography>
              <Typography variant="h6" color={'#ff3e1d !important'}>
                23
              </Typography>
            </Grid>

          </Grid>
        </Grid>
      </Box>
    </Box>
  );
<<<<<<< HEAD

=======
>>>>>>> origin/main
}
