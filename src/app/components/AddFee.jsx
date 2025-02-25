"use client"
import React from 'react'

const AddFee = ({setAddFee}) => {
  return (
    <div className='bg-[#FFFFFF] w-[500px] flex flex-col gap-3'>
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
      <div className='mx-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="">Fee Name*</label>
          <input type="text" placeholder='Maintenance' />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default AddFee