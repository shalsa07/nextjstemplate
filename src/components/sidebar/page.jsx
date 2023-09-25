import React from 'react'
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher'
import {BiSolidUserCircle} from 'react-icons/bi'

const Sidebar = () => {
  return (
    // <divb className='flex absolute sm:w-full md:left-0 top-0 sm:h-[80px]  md:w-[80px] md:h-screen bg-slate-800 md:rounded-r-3xl z-50'>
    <div className='flex sticky top-0 left-0 lg:rounded-r-[30px] z-[500] h-[80px] w-screen bg-slate-800 lg:h-screen lg:w-[80px] lg:flex-col lg:left-0 lg:fixed  '>
        <div className='flex items-center justify-start flex-[4]'>
          <div className='flex absolute top-0 left-0 w-20 h-20 flex-col items-center justify-center bg-[#7b5cfa] rounded-r-[30px] bg text-[#a6afdb] tracking-wider font-semibold text-xl'>
            <h1 className='flex pl-1 items-center justify-start font-bold'>luyari</h1>
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