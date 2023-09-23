'use client'
import { ContextTheme } from '@/context/contextTheme/ContextTheme'
import React, { useContext } from 'react'

const ThemeSwitcher = () => {
    const {theme,handleTheme}=useContext(ContextTheme)
  return (
    <div 
        onClick={handleTheme}
        className='flex items-center justify-center w-full h-full cursor-pointer'
    >theme</div>
  )
}

export default ThemeSwitcher