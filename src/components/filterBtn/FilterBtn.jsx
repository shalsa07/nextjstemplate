'use client'
import { ContextUi } from '@/context/contextUi/ContextUi'
import React, { useContext, useEffect, useState } from 'react'
import {BsFillCaretRightFill} from 'react-icons/bs'

// export const FilterBtn = () => {
//   return (
//     ()
//   )
// }


const FilterBtn = () => {
    const {count,setCount}=useContext(ContextUi)
    // const [count,setCount]=useState(0)
    const [color,setColor]=useState('')
    const [text,setText]=useState('all')
    const [bgColor,setBgColor]=useState('')

   const handleFilter=()=>{
    count<3 ? setCount(count + 1) : setCount(0)

    let switchCount=count+1
    // console.log(count,'switch');
    switch (switchCount) {
        case 0:
                setBgColor('#8484843a')
                setColor('#0f0f0f')
                setText('all')
            break;
            case 1:
                // console.log(color,bgColor);
                setBgColor('#33d7a03a')
                setColor('#33d7a0')
                setText('paid')
            break;
        case 2:
            // console.log(color,bgColor);
                setBgColor('#ff91003a')
                setColor('#ff9100')
                setText('due')
            break;
        case 3:
            // console.log(color,bgColor);
                setBgColor('#8484843a')
                setColor('#848484')
                setText('draft')
            break;
        default:
            return 'all'
            break;
    }
   }

//    useEffect(()=>{

//    },[count])
//    console.log(count,'filter');
  return (
    <div className='flex items-center w-fit '>
        <p onClick={handleFilter} className='flex text-sm font-semibold capitalize cursor-pointer'>filter</p>
        <div><BsFillCaretRightFill className='text-[18px]'/></div>
        <div>
             <div className={`flex items-center justify-center w-fit h-fit gap-1 rounded px-2 py-1 bg-[${bgColor}]`}>
              <div className={`w-2 h-2 rounded-full bg-[${color}]`}></div>
              <p className={`flex items-center justify-center text-sm font-extrabold capitalize text-[${color}]`}>{text}</p>
             {/* <div className={`flex items-center justify-center w-fit h-fit gap-1 rounded px-2 py-1 ${'paid'=== 'paid' ? 'bg-[#33d7a03a]' : 'bg-[#ff91003a]'}`}>
              <div className={`w-2 h-2 rounded-full ${'paid'=== 'paid' ? 'bg-[#33d7a0]' : 'bg-[#ff9100]'}`}></div>
              <p className={`flex items-center justify-center text-sm font-extrabold capitalize ${'paid'=== 'paid' ? 'text-[hsl(0,0%,6%)]' : 'text-[#ff9100]'}`}>paid</p> */}
            </div>
        </div>
    </div>
  )
}

export default FilterBtn