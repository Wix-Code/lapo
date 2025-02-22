import React from 'react'
import { cardRequst } from '../utils/dummyData'

const CardRequest = () => {
  return (
    <div className='bg-[#FFFFFF]  p-4'>
      <h1 className='text-[#121212] text-[18px] font-medium'>Recent Card Requests</h1>
      <div className='my-3'>
        <div className='flex bg-[#F1F7FF] justify-between items-center border-[1px] border-[#E2E2E2]'>
          <p className='flex-1 text-center  text-[#0000008F] text-[12px] font-medium py-2'>Branch</p>
          <p className='flex-1 text-center  text-[#0000008F] text-[12px] font-medium py-2'>Card Type</p>
          <p className='flex-1 text-center  text-[#0000008F] text-[12px] font-medium py-2'>Quantity</p>
          <p className='flex-1 text-center text-[#0000008F] text-[12px] font-medium py-2'>Status</p>
          <p className='flex-1 text-center  text-[#0000008F] text-[12px] font-medium py-2'>Action</p>
        </div>
        <div className='grid grid-rows-4 grid-cols-1 justify-between items-center'>
          {
            cardRequst.map((item) => {
              return (
                <div key={item.id} className='flex gap-4 items-center justify-between'>
                  <p className='flex-1 text-center  text-[#0000008F] text-[10px] font-medium py-2'>{item.name}</p>
                  <p className='flex-1 text-center  text-[#0000008F] text-[10px] font-medium py-2'>{item.type}</p>
                  <p className='flex-1 text-center  text-[#0000008F] text-[10px] font-medium py-2'>{item.qty}</p>
                  <p className='flex-1text-center  text-[#0000008F] text-[12px] font-medium py-2'>{item.status}</p>
                  <p className='flex-1 text-center  text-[#0000008F] text-[12px] font-medium py-2'><button className='text-[#0070F3] text-[12px] font-medium'>View</button></p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CardRequest