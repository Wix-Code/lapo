import Image from 'next/image'
import React from 'react'
import MonthlyIssuance from './components/MonthlyIssuance'
import MonthlyIncome from './components/CardStatus'

export default function () {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between h-[48px] bg-[#FFFFFF] border-[#DEE6E2] border-[1px] px-5 top-0 sticky z-50'>
        <div className='flex items-center gap-4'>
          <Image src="/pics/ca.png" alt='Card Icon' height={16} width={16} />
          <span className='text-[#001735] text-[12px] font-medium'>Dashboard</span>
        </div>
        <div className='flex items-center gap-4'>
          <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
          <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
        </div>
      </div>
      <div>
        <h1>Hi Nazeer, what would you like to do today?</h1>
        <div>
          <div>
            <span>Tuesday</span>
          </div>
          <span>|</span>
          <p>11 Nov 2024</p>
        </div>
      </div>
      <p>Last login: 26/11/2024  14:39:58</p>
      <div className='bg-[#FFFFFF] py-5 px-3 mx-5'>
        <h1>Your Quick Access</h1>
        <div className='flex items-center gap-5'>
          <div className='flex flex-1 bg-[#F1F7FF] py-4 px-3 gap-2'>
            <Image src="/pics/e.png" alt='Card Icon' height={28} width={28} />
            <span>Manage a card</span>
            <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
          </div>
          <div className='flex flex-1 bg-[#F1F7FF] py-4 px-3 gap-2'>
            <Image src="/pics/e.png" alt='Card Icon' height={28} width={28} />
            <span>Manage a card</span>
            <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
          </div>
          <div className='flex flex-1 bg-[#F1F7FF] py-4 px-3 gap-2'>
            <Image src="/pics/e.png" alt='Card Icon' height={28} width={28} />
            <span className='text-[14px] text-[#121212] font-medium'>Manage a card</span>
            <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
          </div>
          <div className='flex flex-1 bg-[#F1F7FF] py-4 px-3 gap-2'>
            <Image src="/pics/e.png" alt='Card Icon' height={28} width={28} />
            <span>Manage a card</span>
            <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
          </div>
        </div>
      </div>
      <div className='mx-5'>
        <h1>Analytics</h1>
        <div>
          <div></div>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-2'>
          <MonthlyIssuance />
          <MonthlyIncome />
          <MonthlyIncome />
          <MonthlyIncome />
        </div>
      </div>
    </div>
  )
}