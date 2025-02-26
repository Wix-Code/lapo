"use client"
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js"
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Legend, Title, Tooltip);

import { dataIncome } from '../utils/dummyData'

const options = {
  responsive: true,
  scales: {
    y: {
      type: "linear", // Ensure "linear" scale is registered
      beginAtZero: true,
      ticks: {
        stepSize: 20, // Adjust step size (e.g., 5, 10, or custom)
        callback: (value) => `${value}`, // Customize tick labels if needed
      },
    },
    x: {
      borderWidth: false
    },
  },
}

const WeeklyIncome = () => {
  
  return (
    <div className='bg-[#FFFFFF] p-4'>
      <h1>This Week’s Income</h1>
      <div className='flex items-center justify-center' style={{ width: '100%', height: '300px' }}>
        <Line options={options} data={ dataIncome } />
      </div>
    </div>
  )
}

export default WeeklyIncome