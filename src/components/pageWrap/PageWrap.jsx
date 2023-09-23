import React from 'react'
import InvoiceSections from '../invoiceSections/InvoiceSections'

const PageWrap = () => {
  return (
    <div className='flex flex-col gap-10 p-5 justify-start'>
        <InvoiceSections/>
        <InvoiceSections/>
        <InvoiceSections/>
        <InvoiceSections/>
        <InvoiceSections/>
        <InvoiceSections/>
        <InvoiceSections/>
        <InvoiceSections/>
        <InvoiceSections/>
    </div>
  )
}

export default PageWrap