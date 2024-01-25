import { Avatar, Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image1 from '../IMAGES/image1.jpg';
import Image2 from '../IMAGES/IMAGE2.jpg';
import Image3 from '../IMAGES/IMAge3.jpg';
import Image4 from '../IMAGES/image4.jpg';

export default function MiddleRightCard() {
  const arr = [
    { image: Image1, expert: 'Maven Analytics', designation: 'Business Intelligence', courses: '52' },
    { image: Image2, expert: 'Zsazsa McCleverty', designation: 'Digital Marketing', courses: '44' },
    { image: Image3, expert: 'Nathan Wagner', designation: 'UI/UX Design', courses: '24' },
    { image: Image4, expert: 'Emma Bowen', designation: 'React Native', courses: '72' },
  ];

  return (
    <Card elevation={2} sx={{ml:'5px', height: "255px", borderRadius: '5px', overflow: 'auto',mr:'5px',mt:'10px'}}>
      <Grid sx={{ display: 'flex', justifyContent: 'space-between', m: '5px',height:'30px',alignItems:'center' }}>
        <Typography fontSize={'17.5px'} ml={['10px', '10px']}>
          Popular Instructors
        </Typography>
        <MoreVertIcon style={{marginRight:'5px'}}/>
      </Grid>
      <hr />
      <Grid sx={{ display: 'flex', justifyContent: 'space-between', m: '5px' }}>
        <Typography sx={{ fontSize: '15px', ml: '10px' }}>INSTRUCTORS</Typography>
        <Typography sx={{ fontSize: '15px', mr: '10px' }}>COURSES</Typography>
      </Grid>
      <hr />

      <Box component="div" sx={{ marginTop: '10px', marginRight: '20px', marginLeft: '20px' }}>
        {arr.map((item, index) => (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <Box sx={{ display: 'flex', mt: '5px', alignItems: 'center' }}>
              <Avatar src={item.image} />
              <Box sx={{ ml: '10px', display: 'flex', flexDirection: 'column',alignItems:'start',mt:'25px'}}>
                <Typography fontSize={['13px', '13px']}>{item.expert}</Typography>
                <Typography variant="caption">{item.designation}</Typography>
                <br />
              </Box>
            </Box>
            <Box sx={{ mt: '10px', display: 'flex', justifyContent: 'flex-end', mr: '10px' }}>
              {item.courses}
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
