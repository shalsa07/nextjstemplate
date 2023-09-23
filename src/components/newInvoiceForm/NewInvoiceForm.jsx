'use client'
import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'

const ItemInputSection=()=>{
    return <div className='flex w-full h-[60px] gap-3 text-[#a6afdb] mb-10'>
        <div className='flex flex-col w-full h-[80px] gap-2 text-[#a6afdb]'>
            <p className='flex items-center capitalize text-sm'>item name</p>
            <InputArea/>
        </div>
        <div className='flex w-full h-fit flex-col gpa-4'>
            <p className='flex items-center capitalize text-sm'>qty.</p>
            <InputArea/>
        </div>
        <div className='flex w-full h-fit flex-col gpa-4'>
            <p className='flex items-center capitalize text-sm'>price</p>
            <InputArea/>
        </div>
        <div className='flex w-full h-fit flex-col gpa-4'>
            <p className='flex items-center capitalize text-sm'>total</p>
            <InputArea/>
        </div>
    </div>
}

const InputArea=()=>{
    return <input className='outline-none bg-transparent w-full h-[60px] border-[1px] rounded-lg p-2' type="text" />
}

const ItemList=()=>{
    return<div className='flex flex-col gap-3'>
        <p className='flex items-center font-bold capitalize text-[22px] py-4 mt-10'>item list</p>

        {false && <ItemInputSection/>}

        <button className='flex items-center justify-center w-full px-4 h-[40px] gap-1 cursor-pointer mb-10 bg-slate-50 rounded-lg shadow-md hover:shadow-inner text-lg font-bold text-[#a6afdb]'>
            <IoMdAdd/>
            add new item
        </button>
    </div>
}
const BillFrom=()=>{
    return<div className='flex flex-col gap-3'>
        <p className='flex items-center font-bold capitalize text-sm py-4'>bill to</p>
        <div className='flex flex-col w-full h-[80px] gap-2 text-[#a6afdb]'>
            <p className='flex items-center capitalize text-sm'>street address</p>
            <InputArea/>
        </div>
        <div className='flex w-full h-[60px] gap-3 text-[#a6afdb]'>
            <div className='flex w-full h-fit flex-col gpa-4'>
                <p className='flex items-center capitalize text-sm'>city</p>
                <InputArea/>
            </div>
            <div className='flex w-full h-fit flex-col gpa-4'>
                <p className='flex items-center capitalize text-sm'>province</p>
                <InputArea/>
            </div>
        </div>
        <div className='flex flex-col w-full h-[80px] gap-2 text-[#a6afdb]'>
            <p className='flex items-center capitalize text-sm'>country</p>
            <InputArea/>
        </div>
    </div>
}

const BillTo=()=>{
    return<div className='flex flex-col gap-3'>
        <p className='flex items-center font-bold capitalize text-sm py-4'>bill from</p>
        <div className='flex flex-col w-full h-[80px] gap-2 text-[#a6afdb]'>
            <p className='flex items-center capitalize text-sm'>street address</p>
            <InputArea/>
        </div>
        <div className='flex w-full h-[60px] gap-3 text-[#a6afdb]'>
            <div className='flex w-full h-fit flex-col gpa-4'>
                <p className='flex items-center capitalize text-sm'>city</p>
                <InputArea/>
            </div>
            <div className='flex w-full h-fit flex-col gpa-4'>
                <p className='flex items-center capitalize text-sm'>province</p>
                <InputArea/>
            </div>
        </div>
        <div className='flex flex-col w-full h-[80px] gap-2 text-[#a6afdb]'>
            <p className='flex items-center capitalize text-sm'>country</p>
            <InputArea/>
        </div>
        <div className='flex flex-col w-full h-[80px] gap-2 text-[#a6afdb]'>
            <p className='flex items-center capitalize text-sm'>issue date</p>
            <InputArea/>
        </div>
        <div className='flex flex-col w-full h-[80px] gap-2 text-[#a6afdb]'>
            <p className='flex items-center capitalize text-sm'>payment terms</p>
            <InputArea/>
        </div>
        <div className='flex flex-col w-full h-[80px] gap-2 text-[#a6afdb]'>
            <p className='flex items-center capitalize text-sm'>project description</p>
            <InputArea/>
        </div>
    </div>
}

const NewInvoiceForm = () => {
  return (
    <div className="flex relative flex-col top-0 left-0 bg-inherit w-screen p-5 z-50">
        <div className='flex items-center w-fit px-4 h-[40px] gap-1 cursor-pointer mb-10 bg-slate-50 rounded-lg shadow-md hover:shadow-inner  '>
            <BiArrowBack className='text-[18px]'/>
            <p className='flex text-[16px] capitalize font-bold'>back</p>
        </div>
        
        <p className='flex text-[30px] capitalize font-bold'>new invoices</p>

        <BillTo/>

        <BillFrom/>

        <ItemList/>
    </div>
  )
}

export default NewInvoiceForm