import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Home from '@mui/icons-material/Home';
import Dashboard from '@mui/icons-material/Dashboard';
import FlipToFront from '@mui/icons-material/FlipToFront';
import Email from '@mui/icons-material/Email';
import ChatBubble from '@mui/icons-material/ChatBubble';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import ViewKanban from '@mui/icons-material/ViewKanban';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Receipt from '@mui/icons-material/Receipt';
import LocalShipping from '@mui/icons-material/LocalShipping';
import PersonAddAlt from '@mui/icons-material/PersonAddAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

const SideNavbar = ({ isMenuOpen: parentIsMenuOpen, handleMenuClose }) => {
  const [localIsMenuOpen, setLocalIsMenuOpen] = useState(false);

  useEffect(() => {
    setLocalIsMenuOpen(parentIsMenuOpen);
  }, [parentIsMenuOpen]);

  const handleLocalMenuClose = () => {
    setLocalIsMenuOpen(false);
    handleMenuClose(); // Propagate the state change to the parent component
  };

  return (
    <Box
      sx={{
        ml: ['5px', '0px'],
        mr: ['5px', '10px'],
        height: ['100%', '750px'],
        borderRadius: '5px',
        mt: '15px',
      }}
    >
      <Box sx={{ display: 'flex', m: '10px', justifyContent: 'flex-end' }}>
        <CloseIcon onClick={handleLocalMenuClose}/>
      </Box>
      <hr />

     
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: '30px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: '20px' }}>
          <Home sx={{ height: '30px', width: '30px' }} />
          <Typography variant='h7' sx={{ ml: '20px', mt: '5px' }}>Home</Typography>
          <ArrowForwardIosIcon fontSize='10px' />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: '30px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: '20px' }}>
          <Dashboard sx={{ height: '30px', width: '30px' }} />
          <Typography variant='h7' sx={{ ml: '20px', mt: '5px' }}>Dashboard</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'column', mt: '30px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: '20px' }}>
          <FlipToFront sx={{ height: '30px', width: '30px' }} />
          <Typography variant='h7' sx={{ ml: '20px', mt: '5px' }}>Layout</Typography>
        </Box>
      </Box>
      <hr style={{ marginTop: '15px' }} />
      <Typography ml={'10px'}>APPS & PAGES</Typography>
      <hr />

      {[
        { icon: <Email />, text: 'Email' },
        { icon: <ChatBubble />, text: 'Chat' },
        { icon: <CalendarMonth />, text: 'Calendar' },
        { icon: <ViewKanban />, text: 'Kanban' },
        { icon: <ShoppingCart />, text: 'e-Commerce' },
        { icon: <Receipt />, text: 'Invoice' },
        { icon: <LocalShipping />, text: 'Logistics' },
        { icon: <PersonAddAlt />, text: 'Users' },
      ].map((item, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'column', mt: '30px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: '20px' }}>
            {item.icon}
            <Typography variant='h7' sx={{ ml: '20px', mt: '5px' }}>{item.text}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SideNavbar;
