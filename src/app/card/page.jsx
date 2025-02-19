import Image from 'next/image'
import React from 'react'

const CardUser = () => {
  return (
    <div>
      <div className='flex items-center justify-between h-[48px] bg-[#FFFFFF] border-[#DEE6E2] border-[1px] px-5'>
        <div className='flex items-center gap-4'>
          <Image src="/pics/ca.png" alt='Card Icon' height={16} width={16} />
          <span>Card Scheme</span>
        </div>
        <div className='flex items-center gap-4'>
          <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
          <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
        </div>
      </div>
      <div className='p-5 '>
        <h1 className='text-[18px] text-[#101828] font-bold'>Card Request</h1>
        <span className='text-[#475467] text-[14px] font-normal'>View and attend to card requests here.</span>
        <hr className='w-full h-[0.5px] bg-[#98A2B3] my-2' />
        <div className='flex items-center gap-2 w-[320px] h-[40px] bg-[#FFFFFF] px-3 border-[#DEE6E2] border-[1px]'>
          <Image src="/pics/search.png" alt='Card Icon' height={20} width={20} />
          <input className='w-full text-[12px] text-[#808080]'  type="text" name="" id="" placeholder='Search by branch' />
        </div>
        <hr className='w-full h-[0.5px] bg-[#98A2B3] my-2' />
      </div>
    </div>
  )
}

export default CardUser