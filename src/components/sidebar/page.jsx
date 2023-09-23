import React from 'react'
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher'
import {BiSolidUserCircle} from 'react-icons/bi'

const Sidebar = () => {
  return (
    // <divb className='flex absolute sm:w-full md:left-0 top-0 sm:h-[80px]  md:w-[80px] md:h-screen bg-slate-800 md:rounded-r-3xl z-50'>
    <div className='flex relative z-50 h-[80px] w-screen bg-slate-800  '>
        <div className='flex items-center justify-start flex-[4]'>
          <div className='flex flex-col items-center justify-center w-[80px] h-full bg-[#7b5cfa] rounded-r-[20px] bg text-[#a6afdb] tracking-wider font-semibold text-xl'>
            <h1 className='flex w-full pl-1 items-center justify-start font-bold'>luyari</h1>
            <p className='flex w-full pl-1 items-center justify-start text-[10px]'>invoice app</p>
          </div>
        </div>
        <div className='flex items-center justify-center flex-[1]'>
            <ThemeSwitcher/>
        </div>
        <div className='flex items-center justify-center flex-[1] border-l-[1px] border-slate-600'>
          <div className='flex p-1 rounded-full cursor-pointer'><BiSolidUserCircle className='text-[40px] text-[#a6afdb]' /></div>
        </div>
    </div>
  )
}

export default Sidebar