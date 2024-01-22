import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import DashBoardScreen from './DashBoardScreen';
const TopNavbar = ({ onMenuIconClick }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left section with MenuIcon */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuIconClick}>
          <MenuIcon />
        </IconButton>

        {/* Middle section with SearchIcon */}
        <div style={{ flexGrow: 1, textAlign: 'center' }}>
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>

        {/* Right section with ProfileIcon */}
        <IconButton color="inherit" aria-label="account">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
