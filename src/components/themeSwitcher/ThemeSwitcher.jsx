'use client'
import { ContextTheme } from '@/context/contextTheme/ContextTheme'
import { BiSolidSun } from 'react-icons/bi';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import React, { useContext } from 'react'

const ThemeSwitcher = () => {
    const {theme,handleTheme}=useContext(ContextTheme)
  return (
    <div 
        onClick={handleTheme}
        className='flex items-center justify-center w-full h-full cursor-pointer'
    >{theme ? <BsFillMoonStarsFill className='text-[14px] text-[#a6afdb]'/> : <BiSolidSun className='text-[18px] text-[#a6afdb]'/>}</div>
  )
}

export default ThemeSwitcher