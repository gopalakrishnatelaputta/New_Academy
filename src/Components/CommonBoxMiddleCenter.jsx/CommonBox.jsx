import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';

export default function CommonBox() {
  return (
    <Box>
        <Grid sx={{display:'flex',justifyContent:'center'}}>
            <CircleIcon sx={{color:'#544f5a'}}></CircleIcon>
            <Typography sx={{color:'black',ml:'10px'}}>ReactJs
            <Typography sx={{color:'darkgreen',bgcolor:'#e8fadf !important',fontSize:'14px',justifyContent:'center',alignItems:'center',alignContent:'center',ml:'15px'}}>47%</Typography>
            </Typography>
            

        </Grid>
    </Box>
  )
}
