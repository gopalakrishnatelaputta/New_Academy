import React from 'react';
import Chart from 'react-apexcharts';

const RadialBarChart = () => {
  const options = {
    chart: {
      height:140,
      type: "radialBar"
    },
    series: [67],
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
            color: "#111",
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
    <Chart  options={options} series={options.series} type="radialBar" height={110}  />
  );
};

export default RadialBarChart;

