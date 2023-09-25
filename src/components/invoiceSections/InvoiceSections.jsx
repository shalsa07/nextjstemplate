'use client'
import { ContextTheme } from '@/context/contextTheme/ContextTheme'
import { ContextUi } from '@/context/contextUi/ContextUi'
import { ACTIONS_UI_STATE } from '@/context/contextUi/reducerContextUi'
import React, { useContext, useEffect, useState } from 'react'

const InvoiceSections = ({item}) => {
  const {theme}=useContext(ContextTheme)
  const {count,dispatch}=useContext(ContextUi)

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
    <div 
      onClick={()=>dispatch({type:ACTIONS_UI_STATE.SHOW_INVOICE})}
      className={`flex relative cursor-pointer justify-between items-center h-20 w-full p-5 mx-[auto] shadow-md rounded-2xl ${theme ? 'bg-slate-800' : 'bg-slate-100'}`}
    >
        <div className='flex flex-col gap-1 lg:flex-row lg:gap-5 h-fit'>
            <p className='flex items-center justify-center capitalize h-[20px] '>{item.invoiceNumber}</p>
            <p className='flex items-center justify-center capitalize font-medium text-[#a6afdb]'>{item.date}</p>
            <p className='flex items-center justify-center font-extrabold capitalize'>{item.invoiceAmount}</p>
        </div>

        <div className='flex flex-col gap-1 lg:flex-row lg:gap-5 items-center'>
            <p className='flex items-center justify-center capitalize text-[#a6afdb]'>{item.clientName}</p>
     
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
          
            {/* <div className={`flex items-center justify-center w-fit h-fit gap-1 rounded px-2 py-1 ${'paid'=== item.status ? 'bg-[#33d7a03a]' : 'bg-[#ff91003a]'}`}>
              <div className={`w-2 h-2 rounded-full ${'paid'=== item.status ? 'bg-[#33d7a0]' : 'bg-[#ff9100]'}`}></div>
              <p className={`flex items-center justify-center text-sm font-extrabold capitalize ${'paid'=== item.status ? 'text-[#33d7a0]' : 'text-[#ff9100]'}`}>{item.status}</p>
            </div> */}
        </div>
    </div>
  )
}

export default InvoiceSections