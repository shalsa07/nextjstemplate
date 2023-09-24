'use client'
import { ContextUi } from '@/context/contextUi/ContextUi'
import React, { useContext } from 'react'
import {ACTIONS_UI_STATE} from  '@/context/contextUi/reducerContextUi'

const InvoiceBtn = () => {
    const {state,dispatch}=useContext(ContextUi)
  return (
    <div 
        onClick={()=>dispatch({type:ACTIONS_UI_STATE.SHOW_INVOCE_FORM})}
        className='flex justify-between items-center rounded-full w-[64px] h-8 bg-[#7b5cfa] cursor-pointer'
    >
        <div className='flex justify-center items-center bg-white ml-1 w-6 h-6 rounded-full'>+</div>
        <p className='flex relative justify-end items-center mr-2 text-white text-xs font-medium capitalize text-center '>new</p>
    </div>
  )
}

export default InvoiceBtn