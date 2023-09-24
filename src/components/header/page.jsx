import React from 'react'
import { BiSolidChevronDown } from 'react-icons/bi';
import InvoiceBtn from '../invoiceBtn/InvoiceBtn';

const Header = () => {
  return (
    // <div className='flex absolute sm:t-[80px] md:top-0 left-[80px] w-[calc(100vw-80px)] h-48 bg-slate-900 z-50'>
    <div className='flex relative justify-between items-center t-[80px] h-[80px] w-full p-5 md:w-[640px] mx-auto lg:w-[1024px] '>
        <div className='flex flex-col'>
            <p className='flex text-[30px] capitalize font-bold'>invoices</p>
            <p className='flex text-sm'>7 total invoices</p>
        </div>
        <div className='flex justify-between items-center w-fit gap-3 '>
            <div className='flex items-center w-fit '>
                <p className='flex text-sm font-semibold capitalize cursor-pointer'>filter</p>
                <div><BiSolidChevronDown className='text-[18px]'/></div>
            </div>
            <div className='flex-col hidden '>
                <select name="draft" id="draft"></select>
                <select name="pending" id="pending"></select>
                <select name="paid" id="paid"></select>
            </div>
            {/* <div className='flex justify-between items-center rounded-full w-[64px] h-8 bg-[#7b5cfa] cursor-pointer'>
                <div className='flex justify-center items-center bg-white ml-1 w-6 h-6 rounded-full'>+</div>
                <p className='flex relative justify-end items-center mr-2 text-white text-xs font-medium capitalize text-center '>new</p>
            </div> */}
            <InvoiceBtn/>
        </div>
    </div>
  )
}

export default Header