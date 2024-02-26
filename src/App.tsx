import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

interface Skill {
  label: string;
  proficiency: number;
  backgroundColor: string;
  borderColor: string;
}

const skills: Skill[] = [
  {
    label: 'Bootstrap, Typescript, CSS, HTML',
    proficiency: 40,
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgba(255, 99, 132, 1)',
  },
  {
    label: 'Django + RestAPI',
    proficiency: 70,
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)',
  },
  {
    label: 'MERN stack',
    proficiency: 30,
    backgroundColor: 'rgba(255, 206, 86, 0.5)',
    borderColor: 'rgba(255, 206, 86, 1)',
  },
  {
    label: 'Expo React Native',
    proficiency: 40,
    backgroundColor: 'rgba(75, 192, 192, 0.5)',
    borderColor: 'rgba(75, 192, 192, 1)',
  },
  {
    label: 'Data Science',
    proficiency: 90,
    backgroundColor: 'rgba(153, 102, 255, 0.5)',
    borderColor: 'rgba(153, 102, 255, 1)',
  },
  {
    label: 'Statistics',
    proficiency: 80,
    backgroundColor: 'rgba(255, 159, 64, 0.5)',
    borderColor: 'rgba(255, 159, 64, 1)',
  },
];

const App: React.FC = () => {
  const options: any = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const labels = skills.map(skill => skill.label);
  const proficiencyValues = skills.map(skill => skill.proficiency);
  const backgroundColors = skills.map(skill => skill.backgroundColor);
  const borderColors = skills.map(skill => skill.borderColor);

  const datasets = [
    {
      label: 'Skills Proficiency',
      data: proficiencyValues,
      backgroundColor: backgroundColors,
      borderColor: borderColors,
      borderWidth: 1, // Add this line to avoid another TypeScript error
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Bar data={{ labels, datasets }} options={options} />
      </header>
    </div>
  );
};

export default App;
