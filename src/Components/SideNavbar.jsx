import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
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




const DropdownButton = ({ icon, text, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);

  };

  return (
    <>
      <button style={{border:'0px',backgroundColor:'#DAE1DD'}}
     onClick={handleOpenMenu}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          ml="20px"
          padding="10px"
          // transition="background-color 0.3s ease"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            <Typography variant="h7" sx={{ ml: '20px', mt: '5px' }}>
              {text}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'end', ml: '100px' }}>
            <ArrowForwardIosIcon
              sx={{ fontSize: '12px', mt: '10px', display: 'flex', mr: '15px' }}
            />
          </Box>
        </Box>
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {options && Array.isArray(options) && options.map((option, index) => (
          <MenuItem key={index} onClick={handleCloseMenu}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};




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


      {[
  { icon: <Home />, text: 'Email' },
  { icon: <Dashboard />, text: 'Chat' },
  { icon: <FlipToFront />, text: 'LayOut' },
].map((item, index) => (
  <DropdownButton
    key={index}
    icon={item.icon}
    text={item.text}
    mtStyle={'30px'}  // Adjust this value based on your needs
    boxStyle={{ display: 'flex', flexDirection: 'row', justifyContent: '' }}
    iconStyle={{ display: 'flex', alignItems: 'center', ml: '20px' }}
    textStyle={{ ml: '20px', mt: '5px' }}
    arrowStyle={{ display: 'flex', justifyContent: 'end', ml: '100px' }}
  />
))}

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
        <Box key={index} mt={'30px'} >
          <Box display={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             <Box sx={{ display: 'flex', alignItems: 'center', ml: '20px' }}>
                  {item.icon}
                  <Typography variant='h7' sx={{ ml: '20px', mt: '5px' }}>{item.text}</Typography>
            </Box>
            <Box sx={{display:'flex',justifyContent:'end',ml:'100px'}}>
                  <ArrowForwardIosIcon sx={{fontSize:'12px',mt:'10px',display:'flex',mr:'15px'}} />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SideNavbar;
