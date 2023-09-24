'use client'
import { createContext, useReducer } from "react";
import { INITIAL_UI_STATE, reducerUi } from "./reducerContextUi";

export const ContextUi=createContext()

export const ContextUiProvider=({children})=>{
    const [state,dispatch]=useReducer(reducerUi,INITIAL_UI_STATE)
    return <ContextUi.Provider value={{state,dispatch}}>
        {children}
    </ContextUi.Provider>
}