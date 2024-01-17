import React from 'react';
import { Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Home, Dashboard, FlipToFront, Email, ChatBubble, CalendarMonth, ViewKanban, ShoppingCart, Receipt, LocalShipping, PersonAddAlt } from '@mui/icons-material';

const SideNavbar = () => {
  return (
    <Box sx={{ ml: ['5px', '0px'], mr: ['5px', '10px'], height: ['100%', '750px'], borderRadius: '5px', mt: '15px' }}>

      <Box sx={{ display: 'flex', m: '10px', justifyContent: 'space-between' }}>
        <MenuIcon />
        <MoreVertIcon />
      </Box>
      <hr />
      <Box sx={{ display: 'flex', justifyContent: 'column', mt: '30px',alignItems:'center' }}>
        <Box sx={{ display: 'flex', ml: '20px' }}>
          <Home sx={{ height: '30px', width: '30px' }} />
          <Typography variant='h7' sx={{ ml: '20px' }}>Home</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'column', mt: '20px',alignItems:'center'}}>
        <Box sx={{ ml: '20px' }}>
          <Dashboard />
          <Typography variant='h7' sx={{ ml: '20px' }}>Dashboard</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'column', mt: '30px',alignItems:'center' }}>
        <Box sx={{ ml: '20px' }}>
          <FlipToFront />
          <Typography variant='h7' sx={{ ml: '20px' }}>Layout</Typography>
        </Box>
      </Box>
      <hr />
      <Typography ml={'10px'}>
        APPS & PAGES
      </Typography>
      <hr />
      <Box sx={{ display: 'flex', justifyContent: 'column', mt: '30px' }}>
        <Box sx={{ ml: '20px' }}>
          <Email />
          <Typography variant='h7' sx={{ ml: '20px' }}>Email</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'column', mt: '30px' }}>
        <Box sx={{ ml: '20px' }}>
          <ChatBubble />
          <Typography variant='h7' sx={{ ml: '20px' }}>Chat</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'column', mt: '30px' }}>
        <Box sx={{ ml: '20px' }}>
          <CalendarMonth />
          <Typography variant='h7' sx={{ ml: '20px' }}>Calender</Typography>
        </Box>
      </Box>

      {/* Placeholder for unused icons */}
      <Box sx={{ display: 'flex', justifyContent: 'column', mt: '30px' }}>
        <Box sx={{ ml: '20px' }}>
          <ViewKanban />
          <Typography variant='h7' sx={{ ml: '20px' }}>Kanbann</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'column', mt: '30px' }}>
        <Box sx={{ ml: '20px' }}>
          <ShoppingCart />
          <Typography variant='h7' sx={{ ml: '20px' }}>e-Commerce</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'column', mt: '30px' }}>
        <Box sx={{ ml: '20px' }}>
          <Receipt />
          <Typography variant='h7' sx={{ ml: '20px' }}>Invoice</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'column', mt: '30px' }}>
        <Box sx={{ ml: '20px' }}>
          <LocalShipping />
          <Typography variant='h7' sx={{ ml: '20px' }}>Logistics</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'column', mt: '30px' }}>
        <Box sx={{ ml: '20px' }}>
          <PersonAddAlt />
          <Typography variant='h7' sx={{ ml: '20px' }}>Users</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SideNavbar;
