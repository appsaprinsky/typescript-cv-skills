import React from 'react';
import { Bar } from 'react-chartjs-2';

interface ChartProps {
  labels: string[];
  data: number[];
}

const Chart: React.FC<ChartProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Skills Distribution',
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return <Bar data={chartData} />;
  // return <div>HELLO</div>;
};

export default Chart;
// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// interface BarChartProps {
//   labels: string[];
//   data: number[];
// }

// const BarChart: React.FC<BarChartProps> = ({ labels, data }) => {
//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: 'My First dataset',
//         backgroundColor: 'rgba(255,99,132,0.2)',
//         borderColor: 'rgba(255,99,132,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//         hoverBorderColor: 'rgba(255,99,132,1)',
//         data
//       }
//     ]
//   };

//   return <Bar data={chartData} />;
// };

// export default BarChart;