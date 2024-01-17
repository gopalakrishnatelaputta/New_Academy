
import React from 'react';
import Chart from 'react-apexcharts';

const RadialBarChart = () => {
  const options = {
    chart: {
      height: 280,
      type: "radialBar"
      
    },
    series: [42],
    plotOptions: {
      radialBar: {
       
        hollow: {
          margin: 15,
          size: "50%"
        },
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -4,
            show: true,
            color: "#888",
            fontSize: "10px"
          },
          value: {
            color:'#d9dee3',
            // color: "#111",
            fontSize: "14px",
            show: true,
            offsetY:-4
          }
        }
      }
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"]
  };

  return (
    <Chart options={options} series={options.series} type="radialBar" height={120}  />
  );
};

export default RadialBarChart;

