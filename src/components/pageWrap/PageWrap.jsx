'use client'
import React, { useContext, useEffect, useState } from 'react'
import InvoiceSections from '../invoiceSections/InvoiceSections'
import NewInvoiceForm from '../newInvoiceForm/NewInvoiceForm'
import Sidebar from '../sidebar/page'
import Header from '../header/page'
import Login from '@/app/(auth)/login/page'
import { ContextUi } from '@/context/contextUi/ContextUi'
import InvoiceBody from '../invoice/InvoiceBody'

const invoiceList=[
  {
    invoiceNumber:1,
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'due'
  },
  {
    invoiceNumber:2,
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'paid'
  },
  {
    invoiceNumber:3,
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'due'
  },
  {
    invoiceNumber:4,
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'paid'
  },
  {
    invoiceNumber:5,
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'due'
  },
  {
    invoiceNumber:6,
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'draft'
  },
  {
    invoiceNumber:0,
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'due'
  },
]

const handleSearch=(count)=>{
  switch (count) {
    case 0:
      return ''
    break;
    case 1:
        // console.log(color,bgColor);
        return 'paid'
    break;
    case 2:
      // console.log(color,bgColor);
        return 'due'
      break;
    case 3:
      // console.log(color,bgColor);
          return 'draft'
      break;
    default:
      return ''
      break;
  }
}

const PageWrap = () => {
  // const [text,setText]=useState()
  const {count,state,setCount}=useContext(ContextUi)
  
  // useEffect(()=>{

  // },[count])
  
  // console.log(count,'page')
  return (
    <> 
      {state.showInvoiceList && <div className='flex flex-col min-h-[calc(100vh-80px)] gap-10 p-5 justify-start md:w-[640px] md:-mx-auto lg:w-[1024px] mx-auto bg-inherit '>
        {/* {invoiceList.map((item)=><InvoiceSections key={item.invoiceNumber} item={item}/>)} */}
        {invoiceList.filter(list=>list.status.includes(handleSearch(count))).map((item)=><InvoiceSections key={item.invoiceNumber} item={item}/>)}
      </div>}
      <NewInvoiceForm/>
      <InvoiceBody item={invoiceList[0]}/>
    </>
  )
}

export default PageWrap