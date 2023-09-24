'use client'
import { ContextTheme } from '@/context/contextTheme/ContextTheme'
import React, { useContext } from 'react'

const InvoiceSections = ({item}) => {
  const {theme}=useContext(ContextTheme)
  return (
    <div className={`flex relative justify-between items-center h-20 w-full p-5 mx-[auto] shadow-md rounded-2xl ${theme ? 'bg-slate-800' : 'bg-slate-100'}`}>
        <div className='flex flex-col gap-1 lg:flex-row lg:gap-5 h-fit'>
            <p className='flex items-center justify-center capitalize h-[20px] '>{item.invoiceNumber}</p>
            <p className='flex items-center justify-center capitalize font-medium text-[#a6afdb]'>{item.date}</p>
            <p className='flex items-center justify-center font-extrabold capitalize'>{item.invoiceAmount}</p>
        </div>

        <div className='flex flex-col gap-1 lg:flex-row lg:gap-5 items-center'>
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