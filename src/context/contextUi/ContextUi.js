'use client'
import { createContext, useReducer, useState } from "react";
import { INITIAL_UI_STATE, reducerUi } from "./reducerContextUi";

export const ContextUi=createContext()

export const ContextUiProvider=({children})=>{
    const [count,setCount]=useState(0)
    const [state,dispatch]=useReducer(reducerUi,INITIAL_UI_STATE)
    return <ContextUi.Provider value={{state,dispatch,count,setCount}}>
        {children}
    </ContextUi.Provider>
}