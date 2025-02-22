import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between h-[48px] bg-[#FFFFFF] border-[#DEE6E2] border-[1px] px-5 top-0 sticky z-50'>
        <div className='flex items-center gap-4'>
          <Image src="/pics/ca.png" alt='Card Icon' height={16} width={16} />
          <span>Card Scheme</span>
        </div>
        <div className='flex items-center gap-4'>
          <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
          <Image src="/pics/e.png" alt='Card Icon' height={16} width={16} />
        </div>
      </div>
      <div className='p-5 sm:w-[100%]'>
        <h1 className='text-[18px] text-[#101828] font-bold'>Card Request</h1>
        <span className='text-[#475467] text-[14px] font-normal'>View and attend to card requests here.</span>
        <div className='flex flex-col gap-4 w-full bg-[#FFFFFF] p-5 border-[#DEE6E2] border-[1px]'>
          <h1 className='text-[18px] text-[#101828] font-bold'>Card Request</h1>
          <div className='flex flex-col gap-4 sm:w-[100%]'>
            <div className='flex items-center gap-7  sm:flex sm:flex-col sm:gap-3 '>
              <div className='flex flex-col gap-2 w-[448px]'>
                <label className='text-[#344054] text-[14px]' htmlFor="">Branch Name</label>
                <input type="text" placeholder='Corperate' className=' bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]' />
              </div>
              <div className='flex flex-col gap-2 w-[448px]'>
                <label  className='text-[#344054] text-[14px]' htmlFor="">Initiator</label>
                <input type="text" placeholder='RootUser' className='text-[#101828] text-[16px] bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]'/>
              </div>
            </div>
            <div className='flex items-center gap-7  sm:flex sm:flex-col sm:gap-3'>
              <div className='flex flex-col gap-2 w-[448px]'>
                <label className='text-[#344054] text-[14px]' htmlFor="">Card Type</label>
                <input type="text" placeholder='Classic Debit' className=' bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]' />
              </div>
              <div className='flex flex-col gap-2 w-[448px]'>
                <label  className='text-[#344054] text-[14px]' htmlFor="">Card Charges</label>
                <input type="text" placeholder='₦1,500' className='text-[#101828] text-[16px] bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]'/>
              </div>
            </div>
            <div className='flex items-center gap-7 sm:flex sm:flex-col sm:gap-3'>
              <div className='flex flex-col gap-2 w-[448px]'>
                <label className='text-[#344054] text-[14px]' htmlFor="">Quantity</label>
                <input type="text" placeholder='10' className=' bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]' />
              </div>
              <div className='flex flex-col gap-2 w-[448px]'>
                <label  className='text-[#344054] text-[14px]' htmlFor="">Batch</label>
                <input type="text" placeholder='847264905' className='text-[#101828] text-[16px] bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]'/>
              </div>
            </div>
            <div className='flex items-center gap-7 sm:flex sm:flex-col sm:gap-3'>
              <div className='flex flex-col gap-2 w-[448px]'>
                <label className='text-[#344054] text-[14px]' htmlFor="">Date Requested</label>
                <input type="text" placeholder='Corperate' className=' bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]' />
              </div>
              <div className='flex flex-col gap-2 w-[448px]'>
                <label  className='text-[#344054] text-[14px]' htmlFor="">Status</label>
                <input type="text" placeholder='RootUser' className='text-[#101828] text-[16px] bg-[#FFFFFF] p-2 border-[#DEE6E2] border-[1px]'/>
              </div>
            </div>
            <div>
              <p>Actions</p>
              <div className='flex items-center gap-6 my-2 sm:flex sm:flex-col sm:gap-3'>
                <div className='flex items-center gap-2 p-3 bg-[#344054] cursor-pointer sm:w-[100%]'>
                  <Image src="/pics/e.png" alt='Card Icon' height={16} width={14} />
                  <p className='text-[12px] text-[#FFFFFF]'>Download for Production</p>
                </div>
                <div className='flex items-center gap-2 p-3 bg-[#344054] cursor-pointer sm:w-[100%]'>
                  <Image src="/pics/e.png" alt='Card Icon' height={16} width={14} />
                  <p className='text-[12px] text-[#FFFFFF]'>Mark as In Progress</p>
                </div>
                <div className='flex items-center gap-2 p-3 bg-[#344054] cursor-pointer sm:w-[100%]'>
                  <Image src="/pics/e.png" alt='Card Icon' height={16} width={14} />
                  <p className='text-[12px] text-[#FFFFFF]'>Mark as Ready</p>
                </div>
                <div className='flex items-center gap-2 p-3 bg-[#344054] cursor-pointer sm:w-[100%]'>
                  <Image src="/pics/e.png" alt='Card Icon' height={16} width={14} />
                  <p className='text-[12px] text-[#FFFFFF]'>Send to Dispatch</p>
                </div>
                <div className='flex items-center gap-2 p-3 bg-[#344054] cursor-pointer sm:w-[100%]'>
                  <Image src="/pics/e.png" alt='Card Icon' height={16} width={14} />
                  <p className='text-[12px] text-[#FFFFFF]'>Mark as Acknowledged</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile