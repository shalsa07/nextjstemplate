import React from 'react'
import InvoiceSections from '../invoiceSections/InvoiceSections'
import NewInvoiceForm from '../newInvoiceForm/NewInvoiceForm'
import Sidebar from '../sidebar/page'
import Header from '../header/page'

const invoiceList=[
  {
    invoiceNumber:Math.random(),
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'due'
  },
  {
    invoiceNumber:Math.random(),
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'paid'
  },
  {
    invoiceNumber:Math.random(),
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'due'
  },
  {
    invoiceNumber:Math.random(),
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'paid'
  },
  {
    invoiceNumber:Math.random(),
    date:'03/10/2023',
    invoiceAmount:'P22,000',
    clientName:'thato seade',
    status:'due'
  },
]

const PageWrap = () => {

  return (
    <> 
        <div className='flex flex-col min-h-[calc(100vh-80px)] gap-10 p-5 justify-start md:w-[640px] md:-mx-auto lg:w-[1024px] mx-auto bg-inherit '>
          {invoiceList.map((item)=><InvoiceSections key={item.invoiceNumber} item={item}/>)}
        </div>
        <NewInvoiceForm/>
    </>
  )
}

export default PageWrap