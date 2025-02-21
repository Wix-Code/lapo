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
  scales: {
    y: {
      type: "linear", // Ensure "linear" scale is registered
      beginAtZero: true,
      ticks: {
        stepSize: 20, // Adjust step size (e.g., 5, 10, or custom)
        callback: (value) => `${value}`, // Customize tick labels if needed
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  }
}

const MonthlyIssuance = () => {
  
  return (
    <div className='bg-[#FFFFFF] p-4'>
      <h1>Monthly Issuance</h1>
      <Bar options={options} data={ monthIncome } />
    </div>
  )
}

export default MonthlyIssuance