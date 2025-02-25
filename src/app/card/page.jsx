import Image from 'next/image'
import React from 'react'

const CardUser = () => {
  return (
    <div>
      <div className='flex items-center justify-between h-[48px] bg-[#FFFFFF] border-[#DEE6E2] border-[1px] px-5 top-0 sticky z-50'>
        <div className='flex items-center gap-4'>
          <Image src="/pics/ca.png" alt='Card Icon' height={16} width={16} />
          <span className='text-[#344054] text-[14px]'>Card Scheme</span>
        </div>
        <div className='flex items-center gap-4'>
          <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
          <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
        </div>
      </div>
      <div className='p-5 sm:flex sm:flex-col sm:gap-3'>
        <h1 className='text-[18px] text-[#101828] font-bold'>Card Request</h1>
        <span className='text-[#475467] text-[14px] font-normal'>View and attend to card requests here.</span>
      </div>
      <hr className="w-[100%] h-[1px] bg-[#98A2B3]" />
      <hr className="w-[100%] h-[1px] bg-[#98A2B3]" />
    </div>
  )
}

export default CardUser