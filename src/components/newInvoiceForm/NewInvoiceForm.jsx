'use client'
import { ContextUi } from '@/context/contextUi/ContextUi'
import { ACTIONS_UI_STATE } from '@/context/contextUi/reducerContextUi'
import React, { useContext, useEffect, useRef, useState } from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'

let list=[
    {
        
    }
]

const InputArea=()=>{
    // const [input,setInput]=useState('')
    return <input 
        className='outline-none bg-transparent w-full h-[60px] border-[1px] rounded-lg p-2' type="text" />
}

const BillFrom=()=>{
    
    return<form className='flex flex-col gap-3'>
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
    </form>
}

const BillTo=()=>{
    return<form className='flex flex-col gap-3'>
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
    </form>
}

const ItemList=()=>{
    const {state,dispatch}=useContext(ContextUi)
    return<div className='flex flex-col gap-3'>
        <p className='flex items-center font-bold capitalize text-[22px] py-4 mt-10'>item list</p>


        <button onClick={()=>dispatch({type:ACTIONS_UI_STATE.SHOW_ITEM_ADD_FORM})} className='flex items-center justify-center w-full px-4 h-[40px] gap-1 cursor-pointer mb-10 bg-slate-50 rounded-lg shadow-md hover:shadow-inner text-lg font-bold text-[#a6afdb]'>
            <IoMdAdd/>
            add new item
        </button>
        
        {<ItemInputSection/>}
    </div>
}

const ItemInputSection=()=>{
    const {state,dispatch}=useContext(ContextUi)
    return <form className={`${state.showItemAdd ?  'flex' : 'hidden'} w-full h-[60px] gap-3 text-[#a6afdb] mb-16`}>
        <div className='flex flex-col flex-[2] h-[80px] gap-2 text-[#a6afdb]'>
            <p className='flex items-center capitalize text-sm'>item name</p>
            <InputArea/>
        </div>
        <div className='flex flex-[1] h-fit flex-col gpa-4'>
            <p className='flex items-center capitalize text-sm'>qty.</p>
            <InputArea/>
        </div>
        <div className='flex flex-[1] h-fit flex-col gpa-4'>
            <p className='flex items-center capitalize text-sm'>price</p>
            <InputArea/>
        </div>
        <div className='flex flex-[1] h-fit flex-col gpa-4'>
            <p className='flex items-center capitalize text-sm'>total</p>
            <InputArea/>
        </div>
    </form>
}

const DiscardInvoiceInput=()=>{
    const {state,dispatch}=useContext(ContextUi)
    return <div className='flex relative justify-between w-full h-[60px] left-0 bottom-0 gap-2 md:gap-4'>
        <button 
            onClick={()=>dispatch({type:ACTIONS_UI_STATE.HIDE_ITEM_ADD_FORM})} 
            className='flex flex-1 justify-center items-center w-fit h-[60px] px-4 rounded-full text-xs  bg-slate-100 shadow-md hover:shadow-inner'
        >discard</button>
        <button 
            onClick={()=>dispatch({type:ACTIONS_UI_STATE.SAVE_DRAFT})}
            className='flex flex-1 justify-center items-center w-fit h-full px-4 rounded-full text-[#a6afdb] text-xs bg-slate-700 shadow-md hover:shadow-inner'
        >save as draft</button>
        <button 
            onClick={()=>dispatch({type:ACTIONS_UI_STATE.SAVE_AND_EMAIL})}
            className='flex flex-1 justify-center items-center  w-fit h-full px-4 rounded-full text-white text-xs bg-[#7b5cfa] shadow-md hover:shadow-inner'
        >save & draft</button>
    </div>
}

const NewInvoiceForm = () => {
    const refForm=useRef()
    const {state,dispatch}=useContext(ContextUi)
    useEffect(()=>{

    },[])
    // console.log(state.showInvoiceForm);
  return (
     <div ref={refForm} className={`${state.showInvoiceForm ? 'flex' : 'hidden'} fixed left-0 top-[80px] lg:top-0 bg-[#000000bd] w-full z-20 h-[calc(100vh-80px)] lg:h-screen lg:left-20 transition-all duration-[.35s]`}>
        <div className='flex flex-col md:w-[600px] md:rounded-r-[30px] p-5 relative  bg-white overflow-y-auto '>
            <div 
                onClick={()=>dispatch({type:ACTIONS_UI_STATE.HIDE_INVOCE_FORM})}
                className='flex items-center gap-1 w-fit h-[60px] cursor-pointer'
            >
                <BiArrowBack className='text-[18px]'/>
                <p className='flex text-[16px] capitalize font-bold'>back</p>
            </div>
            
            <p className='flex text-[30px] capitalize font-bold'>new invoices</p>

            <BillTo/>

            <BillFrom/>

            <ItemList/>

            <DiscardInvoiceInput/>
        </div>
    </div>
  )
}

export default NewInvoiceForm