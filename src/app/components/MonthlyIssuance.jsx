"use client"
import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  Legend,
  Title,
  Tooltip,
} from "chart.js"
ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Title, Tooltip);

import { dataIncome, monthIncome } from '../utils/dummyData'

const options = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      type: "linear", // Ensure "linear" scale is registered
      beginAtZero: true,
      ticks: {
        stepSize: 20, // Adjust step size (e.g., 5, 10, or custom)
        callback: (value) => `${value}`, // Customize tick labels if needed
      },
      stacked: true
    },
    x: {
      stacked: true,
      grid: {
        display: false, // Remove x-axis grid lines
        drawBorder: false,
      },
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 8, // Reduce legend box width
        boxHeight: 8, // Ensures it stays circular
        pointStyle: "circle", // ✅ Makes legend indicators circular
        usePointStyle: true, // ✅ Enables custom point style
        padding: 20, // Adjust spacing around labels
        font: {
          size: 13, // ✅ Adjust text size inside legend
          borderRadius: "50%",
        },
      },
    },
    },
  }
const MonthlyIssuance = () => {
  
  return (
    <div className='bg-[#FFFFFF] p-4'>
      <h1>Monthly Issuance</h1>
      <div className='flex items-center justify-center sm:h-[300px]'  style={{ width: '100%', height: '300px' }}>
        <Bar options={options} data={ monthIncome } />
      </div>
    </div>
  )
}

export default MonthlyIssuance