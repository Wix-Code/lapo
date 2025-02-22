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
  maintainAspectRatio: false, 
  plugins: {
    legend: {
      position: "bottom",
      boxWidth: 20,
      labels: {
        boxWidth: 8, // Reduce legend box width
        boxHeight: 8, // Ensures it stays circular
        pointStyle: "circle", // ✅ Makes legend indicators circular
        usePointStyle: true, // ✅ Enables custom point style
        padding: 10, // Adjust spacing around labels
        font: {
          size: 13, // ✅ Adjust text size inside legend
          borderRadius: "50%",
        },
      },
    },
  },
  maintainAspectRatio: false,
  cutout: "85%",
  borderRadius: "50%",
};

/*const textCenterPlugin = {
  id: "textCenter",
  beforeDraw: (chart) => {
    const { width } = chart;
    const { height } = chart;
    const ctx = chart.ctx;
tooltip: {
      enabled: true,
    },
    ctx.restore();
    const fontSize = "30px"//(height / 100).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = "middle";

    const text = "Total Sales"; // ✅ Change this to your text

    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillStyle = "#333"; // ✅ Text Color
    ctx.fillText(text, textX, textY);
    ctx.save();
  },
  plugins={[textCenterPlugin]}
};*/

const CardStatus = () => {
  return (
    <div className='bg-[#FFFFFF] p-4'>
      <h1>Card Status Distribution</h1>
      <div className='flex items-center justify-center' style={{ width: '100%', height: '300px' }}>
        <Doughnut options={options} data={doughnutData}  />
      </div>
    </div>
  );
}

export default CardStatus;
