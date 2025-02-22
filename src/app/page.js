import Image from 'next/image'
import React from 'react'
import MonthlyIssuance from './components/MonthlyIssuance'
import MonthlyIncome from './components/CardStatus'
import CardRequest from './components/CardRequest'
import CardStatus from './components/CardStatus'
import WeeklyIncome from './components/WeeklyIncome'

export default function () {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between h-[48px] bg-[#FFFFFF] border-[#DEE6E2] border-[1px] px-5 top-0 sticky z-50'>
        <div className='flex items-center gap-4'>
          <Image src="/pics/home.png" alt='Card Icon' height={16} width={16} />
          <span className='text-[#001735] text-[12px] font-medium'>Dashboard</span>
        </div>
        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-2 border-[1px] border-[#D0D5DD] py-1 px-3 rounded-[40px] h-[32px] sm:hidden'>
            <Image src="/pics/search.png" alt='Card Icon' height={16} width={16} />
            <input className='text-[12px] w-full text-[#344054] font-normal' type='text' placeholder='Search' />
          </div>
          <div className='flex items-center gap-4'>
            <Image src="/pics/bell.png" alt='Card Icon' height={20} width={20} />
            <Image src="/pics/drop.png" alt='Card Icon' height={32} width={32} />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between mx-5 sm:flex sm:flex-col sm:gap-2 sm:items-start sm:mx-2'>
        <p className='text-[18px] text-[#121212] font-bold sm:text-[14px]'>Hi Nazeer, what would you like to do today?</p>
        <div className='flex items-center px-3 justify-between gap-2 h-[30px] border-[1px] border-[#D0D5DD] rounded-[4px]'>
          <div className='flex items-center gap-2'>
            <Image src="/pics/calendar.png" alt='Card Icon' height={14} width={14} />
            <span className='text-[11px] text-[#121212] font-medium'>Tuesday</span>
          </div>
          <span className='text-[#D0D5DD]'>|</span>
          <p className='text-[11px] text-[#121212] font-normal'>11 Nov 2024</p>
        </div>
      </div>
      <p className='mx-5 text-[12px] text-[#121212] font-medium sm:mx-2'>Last login: 26/11/2024  14:39:58</p>
      <div className='bg-[#FFFFFF] py-5 px-3 mx-5 flex flex-col gap-2 rounded-[10px] sm:mx-2'>
        <h1 className='text-[16px] text-[#121212] font-medium'>Your Quick Access</h1>
        <div className='flex items-center gap-5 sm:flex sm:flex-col sm:w-full'>
          <div className='flex flex-1 h-[45px] rounded-[4px] items-center bg-[#F1F7FF] py-4 px-3 gap-2 sm:w-full'>
            <Image src="/pics/frame.png" alt='Card Icon' height={28} width={28} />
            <span className='text-[14px] text-[#121212] font-medium'>Manage a card</span>
            <Image src="/pics/right.png" alt='Card Icon' height={16} width={16} />
          </div>
          <div className='flex flex-1 h-[45px] rounded-[4px] items-center bg-[#F1F7FF] py-4 px-3 gap-2 sm:w-full'>
            <Image src="/pics/frame.png" alt='Card Icon' height={28} width={28} />
            <span className='text-[14px] text-[#121212] font-medium'>Issue Instant Card</span>
            <Image src="/pics/right.png" alt='Card Icon' height={16} width={16} />
          </div>
          <div className='flex h-[45px] items-center rounded-[4px] flex-1 bg-[#F1F7FF] py-4 px-3 gap-2 sm:w-full'>
            <Image src="/pics/fr.png" alt='Card Icon' height={28} width={28} />
            <span className='text-[14px] text-[#121212] font-medium'>Issue Personalized Card</span>
            <Image src="/pics/right.png" alt='Card Icon' height={16} width={16} />
          </div>
          <div className='flex h-[45px] flex-1 rounded-[4px] items-center bg-[#F1F7FF] py-4 px-3 gap-2 sm:w-full'>
            <Image src="/pics/frr.png" alt='Card Icon' height={28} width={28} />
            <span className='text-[14px] text-[#121212] font-medium'>Review Card Requests</span>
            <Image src="/pics/right.png" alt='Card Icon' height={16} width={16} />
          </div>
        </div>
      </div>
      <div className='mx-5 flex flex-col gap-3 sm:mx-2'>
        <h1 className='text-[#000000] text-[18px] font-bold'>Analytics</h1>
        <div className='flex items-center gap-3 sm:flex sm:flex-col sm:w-full'>
          <div className='bg-[#FFFFFF] py-2 px-3 rounded-[10px] flex-1  sm:w-full'>
            <Image src="/pics/check.png" alt='Card Icon' height={16} width={16} />
            <p className='text-[14px] text-[#000000] font-medium'>Total Active Cards</p>
            <div className='flex items-center justify-between'>
              <h1 className='text-[24px] text-[#121212] font-bold'>26,478</h1>
              <div className='flex items-center gap-2'>
                <button className='flex items-center gap-2 rounded-[4px] py-[2px] px-1 bg-[#EFFAF6] text-[12px] font-medium text-[#29A174]'>
                  <Image src="/pics/arr.png" alt='Card Icon' height={12} width={12} />
                  +9%
                </button>
                <span className='text-[#0000008F] font-normal text-[12px]'>this month</span>
              </div>
            </div>
          </div>
          <div className='bg-[#FFFFFF] py-2 px-3 rounded-[10px] flex-1  sm:w-full'>
            <Image src="/pics/pen.png" alt='Card Icon' height={16} width={16} />
            <p className='text-[14px] text-[#000000] font-medium'>Total Personalized Cards</p>
            <div className='flex items-center justify-between'>
              <h1 className='text-[24px] text-[#121212] font-bold'>15,703</h1>
              <div className='flex items-center gap-2'>
               <button className='flex items-center rounded-[4px] py-[2px] px-1 gap-2 bg-[#EFFAF6] text-[12px] font-medium text-[#29A174]'>
                  <Image src="/pics/arr.png" alt='Card Icon' height={12} width={12} />
                  8.5%
                </button>
                <span className='text-[#0000008F] font-normal text-[12px]'>this month</span>
              </div>
            </div>
          </div>
          <div className='bg-[#FFFFFF] py-2 px-3 rounded-[10px] flex-1  sm:w-full'>
            <Image src="/pics/bank.png" alt='Card Icon' height={16} width={16} />
            <p className='text-[14px] text-[#000000] font-medium'>Today’s Revenue</p>
            <div className='flex items-center justify-between'>
              <h1 className='text-[24px] text-[#121212] font-bold'>₦9.3M</h1>
              <div className='flex items-center gap-2'>
                <button className='flex items-center rounded-[4px] py-[2px] px-1 gap-2 bg-[#EFFAF6] text-[12px] font-medium text-[#29A174]'>
                  <Image src="/pics/arr.png" alt='Card Icon' height={12} width={12} />
                  +6%
                </button>
                <span className='text-[#0000008F] font-normal text-[12px]'>vs yesterday</span>
              </div>
            </div>
          </div>
          <div className='bg-[#FFFFFF] py-2 px-3 rounded-[10px] flex-1 sm:w-full'>
            <Image src="/pics/glass.png" alt='Card Icon' height={16} width={16} />
            <p className='text-[14px] text-[#000000] font-medium'>Pending Requests</p>
            <div className='flex items-center justify-between'>
              <h1 className='text-[24px] text-[#121212] font-bold'>38</h1>
              <div className='flex items-center gap-2'>
                <button className='flex items-center gap-[1px] rounded-[4px] text-[12px] font-normal text-[#E78020]'>
                  <Image src="/pics/cir.png" alt='Card Icon' height={12} width={12} />
                  Requires attention
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-2 h-[] sm:flex sm:flex-col sm:w-full'>
          <MonthlyIssuance />
          <CardRequest />
          <WeeklyIncome />
          <CardStatus />
        </div>
      </div>
    </div>
  )
}