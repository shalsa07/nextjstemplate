'use client'
import { auth, googleProvider } from '@/utiles/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
    const [showRegister,setShowRegister]=useState(false)
    const {data,status}=useSession()
    const router=useRouter()

    const handleRegister=()=>{
        router.push('/register')
    }
    // const handleSignIn=(e)=>{
    //     // signIn('google')
    //     signInWithPopup(auth, googleProvider)
    //     .then((result) => {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         const token = credential.accessToken;
    //         // The signed-in user info.
    //         const user = result.user;
    //         // IdP data available using getAdditionalUserInfo(result)
    //         // ...
    //     }).catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const email = error.customData.email;
    //         // The AuthCredential type that was used.
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //         // ...
    //     });
    // }
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     // console.log(e[0].target.value);
    //     // signIn('google')
    // }
    // console.log(data,status)
  return (
    <div className='flex fixed top-0 left-0 justify-center items-center w-screen h-screen bg-[rgba(0,0,0,0.91)] z-[500]'>
        <div className='flex flex-col absolute mx-auto w-[80%]  md:w-[60%] h-[60%] bg-slate-100 rounded-2xl justify-center items-center gap-4 '>

            <button 
                onClick={handleSignIn}
                className='flex items-center justify-center w-[200px] h-[36px] mx-auto rounded-lg text-white capitalize bg-rose-600 text-sm underline '
            >use google email</button>

            {/* <p className='flex items-center justify-center text-sm'> or enter credentials below</p>

            <form className='flex flex-col w-[60%] relative text-xs gap-4' onSubmit={handleSubmit}>
                <input 
                    onChange={(e)=>e.target.value}
                    className='flex items-center justify-start px-4 bg-transparent outline-none border-b-2 border-slate-300' type="email" placeholder='email'
                />
                <input 
                    onChange={(e)=>e.target.value}
                    className='flex items-center justify-start px-4 bg-transparent outline-none border-b-2 border-slate-300' type="password" placeholder='password'
                />
                <button className='flex items-center justify-center text-sm w-[200px] h-[36px] mx-auto rounded-lg text-white capitalize bg-slate-300 underline'
                >submit</button>
            </form> */}

            {/* <p 
                onClick={handleRegister}
                className='flex items-center justify-center text-sm underline'
            > click here to regiaster</p> */}

        </div>
    </div>
  )
}

export default Login