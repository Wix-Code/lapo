import Image from 'next/image'
import React from 'react'

const CardUser = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center justify-between h-[48px] bg-[#FFFFFF] border-[#DEE6E2] border-[1px] px-5 top-0 sticky z-50'>
        <div className='flex items-center gap-4'>
          <Image src="/pics/card.png" alt='Card Icon' height={16} width={16} />
          <span className='text-[#344054] text-[14px]'>Card Scheme</span>
        </div>
        <div className='flex items-center gap-4'>
          <Image src="/pics/bell.png" alt='Card Icon' height={16} width={16} />
          <Image src="/pics/drop.png" alt='Card Icon' height={32} width={32} />
        </div>
      </div>
      <div className='px-5 sm:flex sm:flex-col sm:gap-3'>
        <h1 className='text-[18px] text-[#101828] font-bold'>Card Request</h1>
        <span className='text-[#475467] text-[14px] font-normal'>View and attend to card requests here.</span>
      </div>
      <div className='mx-5'>
        <hr className="w-[100%] h-[1px] bg-[#98A2B3]" />
      </div>
      <div className='flex items-center justify-between px-5'>
        <div className='h-[44px] w-[320px] items-center flex bg-[#FFFFFF] rounded-[8px] border-[1px] gap-2 border-[#D0D5DD] p-2'>
          <img src="/pics/search.png" width={16} height={16} alt="" />
          <input type="text" className='text-[12px] text-[#808080] font-normal w-[100%]' placeholder='Search by card name'  />
        </div>
        <div>
          <button className='bg-[#014DAF] rounded-[4px] h-[44px] px-5 text-[#FFFFFF] flex items-center gap-2 text-[14px]'>
            <Image src="/pics/plus.png" width={20} height={20} alt="" />
            Add Card
          </button>
        </div>
      </div>
      <div className='mx-5'>
        <hr className="w-[100%] h-[1px] bg-[#98A2B3]" />
      </div>
      <div className='mx-5 '>
        <table border="1" width="100%" className='bg-[#EAECF0] sm:overflow-y-scroll'>
          <thead className='bg-[#EAECF0]'>
            <tr className='flex items-center bg-[#F9FAFB]'>
              <th className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px]'>Card Name</th>
              <th className='flex-1 text-[#475467] text-[12px] py-3  border-[#E2E2E2] border-[1px]'>Currency</th>
              <th className='flex-1 text-[#475467] text-[12px] py-3  border-[#E2E2E2] border-[1px]'>Expiration</th>
              <th className='flex-1 text-[#475467] text-[12px] py-3  border-[#E2E2E2] border-[1px]'>Bin Prefix</th>
              <th className='flex-1 text-[#475467] text-[12px]  border-[#E2E2E2] border-[1px] py-3'>Date Created</th>
              <th className='flex-1 text-[#475467] text-[12px]  border-[#E2E2E2] border-[1px] py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='flex items-center bg-[#FFFFFF]'>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>Verve-1</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>NGN</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>40 months</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>50611234</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>11/10/2024  23:21:03</td>
              <td className='flex-1 text-center gap-2 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px]'>
                <button className=''>
                  <Image src="/pics/trash.png" width={20} height={20} alt="" />
                </button>
                <button className=''>
                  <Image src="/pics/edit.png" width={20} height={20} alt="" />
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className='flex items-center bg-[#FFFFFF]'>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>Verve-1</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>NGN</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>40 months</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>50611234</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>11/10/2024  23:21:03</td>
              <td className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>
                <button className=''>
                  <Image src="/pics/trash.png" width={20} height={20} alt="" />
                </button>
                <button className=''>
                  <Image src="/pics/edit.png" width={20} height={20} alt="" />
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className='flex items-center bg-[#FFFFFF]'>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>Verve-1</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>NGN</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>40 months</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>50611234</td>
              <td  className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>11/10/2024  23:21:03</td>
              <td className='flex-1 text-[#475467] text-[12px] py-3 border-[#E2E2E2] border-[1px] h-[42px] text-center'>
                <button className=''>
                  <Image src="/pics/trash.png" width={20} height={20} alt="" />
                </button>
                <button className=''>
                  <Image src="/pics/edit.png" width={20} height={20} alt="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CardUser