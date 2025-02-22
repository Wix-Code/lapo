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
      <div className='flex mx-5 flex-col gap-4 bg-[#FFFFFF] p-5 border-[#DEE6E2] border-[1px]'>
        <h1 className='text-[18px] text-[#101828] font-bold'>Card Request</h1>
        <div className='flex flex-col gap-4 sm:w-[100%]'>
          <div className='flex items-center gap-7 sm:flex sm:flex-col sm:gap-3'>
            <div className='flex flex-col gap-2 w-[448px] sm:w-[100%]'>
              <label className='text-[#344054] text-[14px]' htmlFor="">Branch Name</label>
              <input type="text" placeholder='Corperate' className=' bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]' />
            </div>
            <div className='flex flex-col gap-2 w-[448px] sm:w-[100%]'>
              <label  className='text-[#344054] text-[14px]' htmlFor="">Initiator</label>
              <input type="text" placeholder='RootUser' className='text-[#101828] text-[16px] bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]'/>
            </div>
          </div>
          <div className='flex items-center gap-7 sm:flex sm:flex-col sm:gap-3'>
            <div className='flex flex-col gap-2 w-[448px] sm:w-[100%]'>
              <label className='text-[#344054] text-[14px]' htmlFor="">Card Type</label>
              <input type="text" placeholder='Classic Debit' className=' bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]' />
            </div>
            <div className='flex flex-col gap-2 w-[448px] sm:w-[100%]'>
              <label  className='text-[#344054] text-[14px]' htmlFor="">Card Charges</label>
              <input type="text" placeholder='₦1,500' className='text-[#101828] text-[16px] bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]'/>
            </div>
          </div>
          <div className='flex items-center gap-7 sm:flex sm:flex-col sm:gap-3'>
            <div className='flex flex-col gap-2 w-[448px] sm:w-[100%]'>
              <label className='text-[#344054] text-[14px]' htmlFor="">Quantity</label>
              <input type="text" placeholder='10' className=' bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]' />
            </div>
            <div className='flex flex-col gap-2 w-[448px] sm:w-[100%]'>
              <label  className='text-[#344054] text-[14px]' htmlFor="">Batch</label>
              <input type="text" placeholder='847264905' className='text-[#101828] text-[16px] bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]'/>
            </div>
          </div>
          <div className='flex items-center gap-7'>
            <div className='flex flex-col gap-2 w-[448px] sm:w-[100%]'>
              <label className='text-[#344054] text-[14px]' htmlFor="">Date Requested</label>
              <input type="text" placeholder='Corperate' className=' bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex rounded-[10px] flex-col gap-3 m-[20px] bg-[#FFFFFF] p-5 border-[#DEE6E2] border-[1px]'>
        <h1 className='text-[18px] text-[#101828] font-bold'>Fee</h1>
        <div >
          <button  className='bg-[#014DAF] rounded-[4px] text-[12px] flex items-center justify-center gap-2 w-[101px] h-[36px] text-[#FFFFFF] font-medium'>
            <Image src="/pics/search.png" alt='Card Icon' height={20} width={20} />
            Add fee
          </button>
          <table border="1" width="100%" className='bg-[#EAECF0] my-6 sm:overflow-x-scroll'>
            <thead className='bg-[#EAECF0]'>
              <tr className='flex items-center bg-[#F9FAFB]'>
                <th className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px]'>Name</th>
                <th className='flex-1 text-[#475467] text-[12px] py-3  border-[#E2E2E2] border-[1px]'>Value</th>
                <th className='flex-1 text-[#475467] text-[12px] py-3  border-[#E2E2E2] border-[1px]'>Frequency</th>
                <th className='flex-1 text-[#475467] text-[12px] py-3  border-[#E2E2E2] border-[1px]'>Currency</th>
                <th className='flex-1 text-[#475467] text-[12px]  border-[#E2E2E2] border-[1px] py-3'>Time</th>
                <th className='flex-1 text-[#475467] text-[12px]  border-[#E2E2E2] border-[1px] py-3'>Amount Paid</th>
                <th className='flex-1  border-[#E2E2E2] border-[1px] text-[#475467] text-[12px] py-3'>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className='flex items-center bg-[#FFFFFF]'>
                <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px]'></td>
                <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px]'></td>
                <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px]'></td>
                <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px]'></td>
                <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] '></td>
                <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px]'></td>
                <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px]'></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='sm:mx-5 sm:w-[full]'>
        <button  className='m-[20px] w-[293px] h-[44px] bg-[#014DAF] text-[16px] text-[#FFFFFF] font-bold sm:w-[100%]'>
          Create Profile
        </button>
      </div>
    </div>
  )
}

export default CardUser