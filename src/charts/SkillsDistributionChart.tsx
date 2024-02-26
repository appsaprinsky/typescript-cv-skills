import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface SkillsDistributionChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

const SkillsDistributionChart: React.FC<SkillsDistributionChartProps> = ({ data }) => {
  return <Doughnut data={data} />;
};

export default SkillsDistributionChart;