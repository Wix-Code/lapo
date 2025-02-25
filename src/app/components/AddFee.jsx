"use client"
import React from 'react'

const AddFee = ({setAddFee}) => {
  return (
    <div className='bg-[#FFFFFF] w-[500px] h-[] flex flex-col gap-1 pt-2 pb-2 rounded-[12px]'>
      <div className='mx-4 flex justify-between'>
        <div className='flex gap-2'>
          <img src="/pics/feature.png" alt="" />
          <div>
            <p className='text-[#101828] font-bold text-[18px]'>Add Fee</p>
            <p className='text-[14px] font-normal text-[#475467]'>Fill in fee details.</p>
          </div>
        </div>
        <button onClick={() => setAddFee(false)}>
          <img src="/pics/close.png" width={20} height={20} alt="" />
        </button>
      </div>
      <hr className="w-[100%] h-[1px] bg-[#98A2B3]" />
      <div className='mx-4 flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <label className='text-[#344054] text-[15px] font-medium' htmlFor="">Fee Name*</label>
          <input className='w-[100%] border-[#D0D5DD] border-[1px] rounded-[8px] h-[44px] px-3 text-[16px] text-[#667085] font-normal' type="text" placeholder='Maintenance' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-[#344054] text-[15px] font-medium' htmlFor="">Value*</label>
          <input className='w-[100%] border-[#D0D5DD] border-[1px] rounded-[8px] h-[44px] px-3 text-[16px] text-[#667085] font-normal' type="number" placeholder='0' />
        </div>
      </div>
      <div className='mx-4 flex flex-col gap-2'>
        <label className='text-[#344054] text-[15px] font-medium' htmlFor="">Value*</label>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            <input className='w-[24px] h-[24px]' type="radio" name="" id="" />
            <label className='text-[#121212] text-[16px] font-normal' htmlFor="ngn">NGN</label>
          </div>
          <div className='flex items-center gap-2'>
            <input className='w-[24px] h-[24px]' type="radio" name="" id="" />
            <label className='text-[#121212] text-[16px] font-normal' htmlFor="usd">USD</label>
          </div>
        </div>
      </div>
      <div className='mx-4 flex flex-col gap-2'>
        <label className='text-[#344054] text-[15px] font-medium' htmlFor="">Value*</label>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            <input className='w-[24px] h-[24px]' type="radio" name="" id="" />
            <label className='text-[#121212] text-[16px] font-normal' htmlFor="ngn">One Off</label>
          </div>
          <div className='flex items-center gap-2'>
            <input className='w-[24px] h-[24px]' type="radio" name="" id="" />
            <label className='text-[#121212] text-[16px] font-normal' htmlFor="usd">Monthy</label>
          </div>
        </div>
      </div>
      <div className='mx-4 flex flex-col gap-2'>
        <label className='text-[#344054] text-[15px] font-medium' htmlFor="">Value*</label>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            <input className='w-[24px] h-[24px]' type="radio" name="" id="" />
            <label className='text-[#121212] text-[16px] font-normal' htmlFor="ngn">Issuance</label>
          </div>
          <div className='flex items-center gap-2'>
            <input className='w-[24px] h-[24px]' type="radio" name="" id="" />
            <label className='text-[#121212] text-[16px] font-normal' htmlFor="usd">Pin Reissue</label>
          </div>
        </div>
      </div>
      <div className='mx-4 flex flex-col gap-2'>
        <label className='text-[#344054] text-[15px] font-medium' htmlFor="">Value*</label>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            <input className='w-[24px] h-[24px]' type="radio" name="" id="" />
            <label className='text-[#121212] text-[16px] font-normal' htmlFor="ngn">None</label>
          </div>
          <div className='flex items-center gap-2'>
            <input className='w-[24px] h-[24px]' type="radio" name="" id="" />
            <label className='text-[#121212] text-[16px] font-normal' htmlFor="usd">Branch Code Prefix</label>
          </div>
          <div className='flex items-center gap-2'>
            <input className='w-[24px] h-[24px]' type="radio" name="" id="" />
            <label className='text-[#121212] text-[16px] font-normal' htmlFor="usd">Branch Code Suffix</label>
          </div>
        </div>
      </div>
      <div className='mx-4 flex flex-col gap-2'>
        <label className='text-[#344054] text-[15px] font-medium' htmlFor="">Value*</label>
        <input className='w-[100%] border-[#D0D5DD] border-[1px] rounded-[8px] h-[44px] px-3 text-[16px] text-[#667085] font-normal' type="number" placeholder='Maintenance' />
      </div>
      <hr className="w-[100%] h-[1px] bg-[#98A2B3]" />
      <div className='mx-4'>
        <button className='bg-[#014DAF] w-[100%] h-[44px] rounded-[4px] text-[#FFFFFF] text-[16px] font-bold'>Add Fee</button>
      </div>
    </div>
  )
}

export default AddFee