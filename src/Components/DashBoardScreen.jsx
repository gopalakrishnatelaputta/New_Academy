
import React from 'react'
import TopLeftCorner from './TopLeftCorner'
import TopRightCorner from './TopRightCorner'
import { Box, Grid } from '@mui/material'
import MiddleLeftCorner from './MiddileLeftCorner'
import MiddileCenterCard from './MiddileCenterCard'
import MiddleRightCard from './MiddleRightCard'
import BottomLeftCard from './BottomLeftCard'
import BottomMiddleCard from './BottomMiddleCard'
import BottomRightCard from './BottomRightCard'
import FinalCard from './FinalCard'
import SideNavBar from './SideNavbar'

function DashBoardScreen() {
  return (
  
    <Box sx={{bgcolor:'#DAE1DD',overflow:"hidden"}}>
      <Grid container >
        {/* SideNavBar */}
        <Grid item xs={2.5} >
          <Box sx={{overflow:"auto",height:'100vh'}} >
                  <SideNavBar></SideNavBar>
          </Box>
        </Grid >
        
        {/* RightSideGrid */}
        <Grid item xs={12} md={9.5} sx={{overflow:'hidden'}} >
          <Box  sx={{overflow:"auto",height:'100vh'}}>
            <Box sx={{m :'5px'}}>
              <Grid container >
                {/* {LeftSideGrid}   */}
                <Grid item xs={12} md={8}>
                    <Box sx={{height:"250px"}}>
                    <TopLeftCorner ></TopLeftCorner>
                    </Box>
                 
                </Grid>
                {/* {RightSideGrid} */}
                <Grid item  xs={12} md={4} >
                <TopRightCorner/>
                </Grid> 
              </Grid>           
            </Box>
            {/* {Middle Box} */}
            <Box >
              <Grid container >
                <Grid item xs={12}  md={4} >
                   <MiddleLeftCorner/>
                </Grid>
                <Grid item xs={12} md={4} >
                    <MiddileCenterCard></MiddileCenterCard>
                </Grid>
                <Grid item xs={12} md={4} >
                  <MiddleRightCard></MiddleRightCard>
                </Grid>
              </Grid>

            </Box>
              {/* {Bottom Box} */}
            <Box >
              <Grid container>
                  <Grid item xs={12} md={4} >
                      <BottomLeftCard></BottomLeftCard>
                  </Grid>
                  <Grid item xs={12} md={4}>
                      <BottomMiddleCard></BottomMiddleCard>
                  </Grid>
                  <Grid item xs={12} md={4} >
                      <BottomRightCard></BottomRightCard>
                  </Grid>
                
              </Grid>
            </Box>
            {/* Final Box */}
            <Box>
                <FinalCard></FinalCard>
            </Box>
            
            </Box>
         </Grid>
         


       
      </Grid>
    </Box>
  )
}

export default DashBoardScreen
