import React from 'react'
import InvoiceSections from '../invoiceSections/InvoiceSections'
import NewInvoiceForm from '../newInvoiceForm/NewInvoiceForm'
import Sidebar from '../sidebar/page'
import Header from '../header/page'

const invoiceList=[
  {
    invocieNumber:'#556665',
    date:'#556665',
    invocieAmount:'P22,000',
    className:'#556665',
    status:'paid'
  },
  {
    invocieNumber:'#556665',
    date:'#556665',
    invocieAmount:'P22,000',
    className:'#556665',
    status:'paid'
  },
  {
    invocieNumber:'#556665',
    date:'#556665',
    invocieAmount:'P2,000',
    className:'#556665',
    status:'due'
  },
  {
    invocieNumber:'#556665',
    date:'#556665',
    invocieAmount:'P22,000',
    className:'#556665',
    status:'paid'
  },
  {
    invocieNumber:'#556665',
    date:'#556665',
    invocieAmount:'P22,000',
    className:'#556665',
    status:'paid'
  },
  {
    invocieNumber:'#556665',
    date:'#556665',
    invocieAmount:'P22,000',
    className:'#556665',
    status:'due'
  },
]

const PageWrap = () => {
  return (
    <>
      {true 
        ? <div className='flex flex-col gap-10 p-5 justify-start'>
            <Header/>
            {invoiceList.map((item)=><InvoiceSections key={item.invocieNumber} item={item}/>)}
          </div>
        : <NewInvoiceForm/>}
    </>
  )
}

export default PageWrap