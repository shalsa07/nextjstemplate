import React from 'react'
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher'

const Sidebar = () => {
  return (
    // <divb className='flex absolute sm:w-full md:left-0 top-0 sm:h-[80px]  md:w-[80px] md:h-screen bg-slate-800 md:rounded-r-3xl z-50'>
    <div className='flex relative z-50 h-[80px] w-screen bg-slate-800  '>
        <div className='flex items-center justify-center flex-[4]'>logo</div>
        <div className='flex items-center justify-center flex-[1]'>
            <ThemeSwitcher/>
        </div>
        <div className='flex items-center justify-center flex-[1] border-l-[1px] border-slate-600'>user</div>
    </div>
  )
}

export default Sidebar