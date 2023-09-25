'use client'
import { ContextTheme } from '@/context/contextTheme/ContextTheme'
import { ContextUi } from '@/context/contextUi/ContextUi'
import { ACTIONS_UI_STATE } from '@/context/contextUi/reducerContextUi'
import React, { useContext, useEffect, useState } from 'react'
import {BiArrowBack} from 'react-icons/bi'

const item={
  invoiceNumber:1,
  invoiceDate:'03/10/2023',
  dueDate:'03/10/2023',
  invoiceDesc:'build one',
  street:'owowonwnwnwnb bwwnw',
  city:'gaborone',
  country:'botswana',
  addressee:'bill burr',
  email:'bill@gmail.com',
  addresseeStreet:'owowonwnwnwnb bwwnw',
  addresseeCity:'gaborone',
  addresseeCountry:'botswana',
  invoiceAmount:'P22,000',
  itemTitle:'hi',
  quantity:1,
  unitPrice:20,
  invoiceTotal:20,
  status:'due'
}

const InvoiceBody = () => {
  const {theme}=useContext(ContextTheme)
  const {state,count,dispatch}=useContext(ContextUi)

  // count<3 ? setCount(count + 1) : setCount(0)
  const [color,setColor]=useState('')
  const [text,setText]=useState('all')
  const [bgColor,setBgColor]=useState('')

  const handleFilter=()=>{
    let switchCount=count+1
    // console.log(count,'switch');
    switch (switchCount) {
      case 0:
          console.log(count);
            setBgColor('#8484843a')
            setColor('#0f0f0f')
        break;
        case 1:
            // console.log(color,bgColor);
            setBgColor('#33d7a03a')
            setColor('#33d7a0')
        break;
      case 2:
          // console.log(color,bgColor);
              setBgColor('#ff91003a')
              setColor('#ff9100')
          break;
      case 3:
          // console.log(color,bgColor);
              setBgColor('#8484843a')
              setColor('#848484')
          break;
      default:
          return 'all'
          break;
    }
   }

  //  handleFilter()

  useEffect(()=>{
    handleFilter(count)
  },[count])
  
  return (
    <div className={` flex-col ${state.showInvoice ? 'flex' : 'hidden'} absolute top-[80px]  left-0 w-full h-auto overflow-hidden gap-5 p-5 z-50 ${theme ? 'bg-slate-800' : 'bg-slate-100'}`}>
      <div className='flex flex-col min-h-[calc(100vh-80px)] gap-10 p-5 justify-start md:w-[640px] md:-mx-auto lg:w-[1024px] mx-auto'>
    {/* <div className={` flex-col ${state.showInvoice ? 'flex' : 'hidden'} absolute top-[80px] left-0 w-full h-auto overflow-hidden gap-5 p-5 z-50 ${theme ? 'bg-slate-800' : 'bg-slate-100'}`}> */}
      
        <div 
            onClick={()=>dispatch({type:ACTIONS_UI_STATE.HIDE_INVOICE})}
            className='flex items-center gap-1 w-fit h-[60px] cursor-pointer'
        >
            <BiArrowBack className='text-[18px]'/>
            <p className='flex text-[16px] capitalize font-bold'>back</p>
        </div>

        <div className={`flex w-full items-center justify-between rounded-2xl shadow-md p-4 ${theme ? 'bg-slate-800' : 'bg-slate-100'}`}>
          <p className='flex w-fit items-center justify-center text-xs  font-extrabold capitalize'>status</p>
          <div className='flex justify-center items-center w-fit'>
            {item.status === 'due' && <div className='flex items-center justify-center w-fit h-fit gap-1 rounded px-2 py-1 bg-[#ff91003a]'>
              <div className='w-2 h-2 rounded-full bg-[#ff9100]'></div>
              <p className='flex items-center justify-center text-sm font-extrabold capitalize text-[#ff9100]'>{item.status}</p>
            </div>}
            {item.status === 'paid' && <div className='flex items-center justify-center w-fit h-fit gap-1 rounded px-2 py-1 bg-[#33d7a03a]'>
              <div className='w-2 h-2 rounded-full bg-[#33d7a0]'></div>
              <p className='flex items-center justify-center text-sm font-extrabold capitalize text-[#33d7a0]'>{item.status}</p>
            </div>}
            {item.status === 'draft' && <div className='flex items-center justify-center w-fit h-fit gap-1 rounded px-2 py-1 bg-[#8484843a]'>
              <div className='w-2 h-2 rounded-full bg-[#848484]'></div>
              <p className='flex items-center justify-center text-sm font-extrabold capitalize text-[#848484]'>{item.status}</p>
            </div>}
          </div>
        </div>

        <div className={`flex flex-col w-full gap-5 items-center justify-between shadow-md rounded-2xl p-4 ${theme ? 'bg-slate-800' : 'bg-slate-100'}`}>
          <div className='flex flex-col w-full justify-start'>
            <p className='flex w-fit items-center justify-center font-bold capitalize'>{item.invoiceNumber}</p>
            <p className='flex w-fit items-center justify-center text-xs capitalize'>{item.invoiceDesc}</p>
          </div>
          <div className='flex flex-col w-full justify-start'>
            <p className='flex w-fit items-center text-xs justify-center capitalize'>{item.street}</p>
            <p className='flex w-fit items-center text-xs justify-center capitalize'>{item.city}</p>
            <p className='flex w-fit items-center text-xs justify-center capitalize'>{item.country}</p>
          </div>

          <div className='flex w-full'>
            <div className='flex flex-col flex-[1] items-start justify-between'>
              <div className='flex flex-col w-full justify-start'>
                <p className='flex w-fit items-center justify-center text-xs capitalize'>invoice date</p>
                <p className='flex w-fit items-center font-bold justify-center capitalize'>{item.invoiceDate}</p>
              </div>

              <div className='flex flex-col w-full justify-end'>
                <p className='flex w-fit items-center justify-center text-xs capitalize'>payment date</p>
                <p className='flex w-fit items-center font-bold justify-center capitalize'>{item.invoiceDate}</p>
              </div>
            </div>

            <div className='flex flex-col items-end flex-[1] '>
              <p className='flex w-fit items-center text-end font-bold capitalize'>{item.addressee}</p>
              <p className='flex w-fit items-center text-end text-xs justify-end capitalize'>{item.addresseeStreet}</p>
              <p className='flex w-fit items-center text-end text-xs capitalize'>{item.addresseeCity}</p>
              <p className='flex w-fit items-center text-end text-xs capitalize'>{item.addresseeCountry}</p>
            </div>
          </div>

          <div className='flex w-full flex-col items-start md:items-end  justify-start '>
            <p className='flex w-fit items-center justify-start md:justify-end text-start text-xs capitalize'>sent to</p>
            <p className='flex w-fit items-center font-bold justify-start md:justify-end text-start lowercase'>{item.email}</p>
          </div>

          <div className={`flex w-full flex-col items-start justify-start p-4 rounded-lg ${theme ? 'bg-slate-700' : 'bg-slate-200'}`}>
            <p className='flex w-full items-center justify-start text-start font-bold text-xs capitalize underline'>items</p>
            <div className='flex items-center justify-between w-full gap-4'>
              <div className='flex items-center justify-between flex-[1.5]'>
                <p className='flex w-fit items-center justify-start text-start capitalize'>{item.quantity}</p>
                x
                <p className='flex w-fit items-center  justify-start text-start capitalize'>P{item.unitPrice}</p>
              </div>
              <p className='flex flex-[1] w-fit items-center font-bold justify-end text-start capitalize'>P{item.invoiceTotal}</p>
            </div>
          </div>
          <div className={`flex w-full items-center justify-between p-4 rounded-lg bg-slate-900`}>
            <p className='flex w-fit items-center justify-start text-start text-xs text-[white] capitalize'>amount due</p>
            <p className='flex w-fit items-center font-bold justify-start text-start text-[white] text-lg capitalize '>P{item.invoiceTotal}</p>
          </div>
        </div>
        <div className={`flex mt-10 w-full items-center justify-center p-4 rounded-2xl shadow-md ${theme ? 'bg-slate-900' : 'bg-slate-100'}`}>
          <button className='flex w-fit items-start justify-between p-4 text-white capitalize font-bold bg-red-500 rounded-full'>delete</button>
        </div>
      </div>
    </div>
  )
}

export default InvoiceBody