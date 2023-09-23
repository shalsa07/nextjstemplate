import React from 'react'

const InvoiceSections = ({item}) => {
  return (
    <div className='flex relative justify-between items-center h-20 w-full p-5 mx-[auto] shadow-md rounded-2xl'>
        <div>
            <p className='flex items-center justify-center '>{item.invoiceNumber}</p>
            <p className='flex items-center justify-center capitalize font-medium text-[#a6afdb]'>{item.date}</p>
            <p className='flex items-center justify-center font-extrabold capitalize'>{item.invocieAmount}</p>
        </div>

        <div className='flex flex-col items-center gap-1'>
            <p className='flex items-center justify-center capitalize text-[#a6afdb]'>{item.clientName}</p>
            <div className={`flex items-center justify-center w-fit h-fit gap-1 rounded px-2 py-1 ${'paid'=== item.status ? 'bg-[#33d7a03a]' : 'bg-[#ff91003a]'}`}>
              <div className={`w-2 h-2 rounded-full ${'paid'=== item.status ? 'bg-[#33d7a0]' : 'bg-[#ff9100]'}`}></div>
              <p className={`flex items-center justify-center text-sm font-extrabold capitalize ${'paid'=== item.status ? 'text-[#33d7a0]' : 'text-[#ff9100]'}`}>{item.status}</p>
            </div>
        </div>
    </div>
  )
}

export default InvoiceSections