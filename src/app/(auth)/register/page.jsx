'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Register = () => {
    const router=useRouter()
    const handleSubmit=(e)=>{
        e.preventDefault()

    }
    const handleLogin=()=>{
        router.push('/login')
    }
  return (
    <div className='flex fixed top-0 left-0 justify-center items-center w-screen h-screen bg-[rgba(0,0,0,0.91)] z-50'>
        <div className='flex flex-col absolute mx-auto w-[80%]  md:w-[60%] h-[60%] bg-slate-100 rounded-2xl justify-center items-center gap-4 '>

            <form className='flex flex-col w-[60%] relative m-auto text-xs gap-4' onSubmit={handleSubmit}>
                <p className='flex items-center justify-center text-sm'>register below</p>
                <input className='flex items-center justify-start px-4 bg-transparent outline-none border-b-2 border-slate-300' type="string" placeholder='username'/>
                <input className='flex items-center justify-start px-4 bg-transparent outline-none border-b-2 border-slate-300' type="email" placeholder='email'/>
                <input className='flex items-center justify-start px-4 bg-transparent outline-none border-b-2 border-slate-300' type="password" placeholder='password'/>
                <input className='flex items-center justify-start px-4 bg-transparent outline-none border-b-2 border-slate-300' type="password" placeholder='re-enter password'/>
                <button className='flex items-center justify-center text-sm font-bold w-[200px] h-[36px] mx-auto rounded-lg text-white capitalize bg-slate-300'>submit</button>
                <p 
                onClick={handleLogin}
                className='flex items-center justify-center text-sm underline'
            > click here to regiaster</p>
            </form>
        </div>
    </div>
  )
}

export default Register