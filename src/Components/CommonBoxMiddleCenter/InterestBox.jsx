// InterestBox.jsx
import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const InterestBox = ({ name, percentage }) => {
  return (
    <Box m={'8px'}>
      <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircleIcon sx={{ color: '#544f5a', height: '15px', width: '15px' }}></CircleIcon>
        <Typography variant='subtitle2' sx={{ color: 'black', ml: '10px', mt: '-3px' }}>
          {name}
          <Card elevation={0.8} sx={{ bgcolor: '#e8fadf !important' }}>
            <Typography sx={{ color: 'darkgreen', fontSize: '14px', justifyContent: 'center', alignItems: 'center', alignContent: 'center', ml: '1px' }}>
              {percentage}%
            </Typography>
          </Card>
        </Typography>
      </Grid>
    </Box>
  );
};

export default InterestBox;
