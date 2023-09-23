import React from 'react'

const InvoiceSections = () => {
  return (
    <div className='flex relative justify-between items-center h-20 w-full p-5 mx-[auto] shadow-md rounded-2xl'>
        <div>
            <p className='flex items-center justify-center '>#556665</p>
            <p className='flex items-center justify-center capitalize font-medium text-[#e0e4fb]'>date</p>
            <p className='flex items-center justify-center font-extrabold capitalize'>P2,200</p>
        </div>

        <div className='flex flex-col items-center gap-1'>
            <p className='flex items-center justify-center capitalize text-[#e0e4fb]'>name</p>
            <div className={`flex items-center justify-center w-fit h-fit gap-1 rounded px-2 py-1 ${true ? 'bg-[#33d7a03a]' : 'bg-[#ff91003a]'}`}>
              <div className={`w-2 h-2 rounded-full ${true ? 'bg-[#33d7a0]' : 'bgtext-[#ff9100]'}`}></div>
              <p className={`flex items-center justify-center text-sm font-extrabold capitalize ${true ? 'text-[#33d7a0]' : 'text-[#ff9100]'}`}>paid</p>
            </div>
        </div>
    </div>
  )
}

export default InvoiceSections