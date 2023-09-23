'use client'
import { createContext, useState } from "react";

export const ContextTheme=createContext()

export const ContextThemeProvider=({children})=>{

    const [theme,setTheme]=useState(false)
    const handleTheme=()=>{
        // console.log('theme')
        setTheme(!theme)
    }

    return <div className={`theme ${theme ? 'dark' : 'light'}`}>
            <ContextTheme.Provider value={{theme,handleTheme}}>
                {children}
            </ContextTheme.Provider>
        </div>
}