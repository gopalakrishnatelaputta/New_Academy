// MiddileLeftCorner.jsx
import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import InterestBox from './CommonBoxMiddleCenter/InterestBox';

export default function MiddileLeftCorner() {
  const categories = ['Java', 'SQL', 'JScript', 'Python', 'ReactJs', 'C Lang'];
  const categoryColors = ['#0D6904', '#D0EF0A', '#1FA305', '#0759EA', '#F609F9', '#DF0808'];
  
  // Dynamically create the colors array based on the length of categories
  const colors = categories.map((category, index) => categoryColors[index % categoryColors.length]);
  
  const chartOptions = {
    series: [{
      data: [400, 470, 540, 320, 1200, 1380]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        dataLabels: {
          enabled: false, // Disable data labels
        },
      }
    },
    colors: colors,
    xaxis: {
      categories: categories,
    }
  };
  
  
  return (
    <Card elevation={2} sx={{ ml: '5px', mr: '5px',height:'250', borderRadius: '5px', mt: '10px',  color: 'var' }}>
     
        <Box >
        <Grid container>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
            <Box sx={{ height: '20px', alignItems: 'center', mt: '10px' }}>
              <Typography sx={{fontSize:'17.5px', ml:'10px', mt:'5px'}}>
                Topics you are interested in
              </Typography>
            </Box>

            <Box sx={{mt:'10px'}}>
              <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={200} />
            </Box>
            </Box>
          </Grid>
           
          
          <Grid item xs={12} md={6} >
            <Box sx={{ display: 'flex'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', m: '35px' }}>
              <InterestBox name="Java" percentage={26.67} />
              <InterestBox name="SQL" percentage={31.33} />
              <InterestBox name="JScript" percentage={36.00} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', m: '35px' }}>
              <InterestBox name="Python" percentage={21.33} />
              <InterestBox name="ReactJs" percentage={80.00} />
              <InterestBox name="C Lang" percentage={92.00} />
            </Box>
            </Box>
          </Grid>  
          </Grid>
        </Box>
      
    </Card>
  );
}
