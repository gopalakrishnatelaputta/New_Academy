import React, { useState } from 'react';
import TopLeftCorner from './TopLeftCorner';
import TopRightCorner from './TopRightCorner';
import { Box, Container, Grid } from '@mui/material';
import MiddleLeftCorner from './MiddileLeftCorner';
import MiddleRightCard from './MiddleRightCard';
import BottomLeftCard from './BottomLeftCard';
import BottomMiddleCard from './BottomMiddleCard';
import BottomRightCard from './BottomRightCard';
import FinalCard from './FinalCard';
import TopNavBar from './TopNavBar';
import SideNavBar from './SideNavbar'
import { StyleForScrollBar } from './GlobalStyle/StyleForScrollBar';


function DashBoardScreen() {


  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSideBarOpen = () => {
    setSidebarOpen(!isSidebarOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box sx={{ bgcolor: '#DAE1DD' ,width:'100%'}}>
      <Grid container>
        {/* TopNavBar */}
        <Grid item xs={12}>
          <TopNavBar onMenuIconClick={handleSideBarOpen}/>
        </Grid>

        {isSidebarOpen && (
          <Grid item xs={2.5}>
            <Box sx={{overflow:'auto',height:'100vh'}}>
               <SideNavBar isMenuOpen={isMenuOpen} handleMenuClose={() => setIsMenuOpen(false)}  />
            </Box>

          </Grid>
        )}

        {/* RightSideGrid */}
        <Grid item xs={isSidebarOpen ? 9.5 : 12} md={isSidebarOpen ? 9.5 : 12} sx={{overflowY:'auto', mt: '8px',width:'100%' }}>
        <Container maxWidth="lg" sx={StyleForScrollBar.FirstCardStyle}></Container>
          <Box
          sx={StyleForScrollBar.FirstCardStyle}
          //  sx={{ overflow: 'auto', height: 'calc(100vh - 30px)' }}
           >
            <Box sx={{ m: '5px' }}>
              <Grid container>
                {/* {LeftSideGrid}   */}
                <Grid item xs={12} md={8}>
                  <Box sx={{ height: '250px' }}>
                    <TopLeftCorner />
                  </Box>
                </Grid>
                {/* {RightSideGrid} */}
                <Grid item xs={12} md={4}>
                <Box sx={{ height: '250px' }}>
                    <TopRightCorner />
                  </Box>
                </Grid>
              </Grid>
            </Box>  
            {/* {Middle Box} */}
            <Box sx={{m:'5px'}}> 
              <Grid container>
                <Grid item xs={12} md={8}>
                  <MiddleLeftCorner />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MiddleRightCard />
                </Grid>
              </Grid>
            </Box>
            {/* {Bottom Box} */}
            <Box sx={{m:'5px'}}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <BottomLeftCard />
                </Grid>
                <Grid item xs={12} md={4}>
                  <BottomMiddleCard />
                </Grid>
                <Grid item xs={12} md={4}>
                  <BottomRightCard />
                </Grid>
              </Grid>
            </Box>
            {/* Final Box */}
            <Box>
              <FinalCard />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashBoardScreen;
