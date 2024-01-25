import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const RadialBarChart = ({ progress }) => {
  const chartData = {
    labels: ['Progress'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['#4caf50', '#e0e0e0'], // Adjust colors as needed
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      center: {
        text: `${progress}%`,
        color: '#000000', // Center text color
        fontStyle: 'Arial', // Font style for center text
        sidePadding: 20, // Adjust padding as needed
      },
    },
  };

  return (
    <div>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default RadialBarChart;
