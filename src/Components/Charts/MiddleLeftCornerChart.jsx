
import React from 'react';
import Chart from 'react-apexcharts';

const HorizontalBarChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      colors: ['#F783AC', '#98DC8A', '#3F51B5', '#F4D03F', '#607D8B'], // Colors for the bars
    },
    plotOptions: {
      bar: {
        horizontal: true, // Set to true for a horizontal bar chart
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Category: 1', 'Category: 2', 'Category: 3', 'Category: 4', 'Category: 5'],
    },
  };

  const series = [
    {
      name: 'Series 1',
      data: [44, 55, 41, 64, 22],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={'200'} />;
};

export default HorizontalBarChart;