"use client"
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,  // ✅ Correct for Doughnut Chart
  Legend,
  Title,
  Tooltip,
} from "chart.js"
import { doughnutData } from '../utils/dummyData';

// ✅ Correct registration for Doughnut Chart
ChartJS.register(CategoryScale, LinearScale, ArcElement, Legend, Title, Tooltip);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Card Status Distribution",
    },
  },
  cutout: "20%"
};

const CardStatus = () => {
  return (
    <div className='bg-[#FFFFFF] p-4'>
      <h1>Card Status Distribution</h1>
      <Doughnut options={options} data={doughnutData}  />
    </div>
  );
}

export default CardStatus;
