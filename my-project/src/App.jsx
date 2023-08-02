import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Userpage from './components/Userpage'
import { auth } from './config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'


export default function Login_page() {
  const [email,setEmail] = useState(null) 
  const [password,setPassword] = useState(null)
  const [userDetails, setUserDetails] = useState ("")
  const [login,setLogin] = useState()
  const [userState,setUserState] =useState("")
  const [passwordState,setPasswordState] = useState("password")
  const [eye,setEye] = useState(false)
  console.log(email)

  const refresh = ()=>{
    setUserDetails(null)
    setUserState(null)
    window.location.reload()

 }

  // const getuser = async()=>{
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUserDetails(user)
  //       console.log(userDetails)
  //       setUserState(`User is signed in with ${user.email}`)
  //     } else {
  //       setUserState("User is signed out")
  //     }
  //   });
  // }


const signIn = async()=>{
  
  if (email != null && password != null){
  try {
    await createUserWithEmailAndPassword(auth,email,password)
    console.log(auth)
    setLogin(true)
    if(setLogin){
      setUserState("Account created successfully ")
    }
  }
  catch(err) {
    setLogin(false)
    setUserState(err.message)
  }
}
else {
  setUserState("Please enter email and password")
}
  


}

const showPassword = ()=>{
  if(passwordState === "password"){
    setEye(true)
    setPasswordState("text")
  }
  else{
    setEye(false)
    setPasswordState("password")
  }
  

}

// const valueChange = (e)=>{
//   e.target.value = ''

// }

  return (
    <>
    
    
    
    <div className='flex justify-center flex-col items-center '>
    Email:<br/>
   <input className='border-red-600 border-2 w-72 h-10 placeholder:text-center' type='email' required = "required" placeholder='Email'   onChange={e => setEmail(e.target.value)}/>

   Password:<br/>
   <input  className='border-red-600 border-2  w-72 h-10 placeholder:text-center' type={passwordState} required = "required" placeholder='Password'  onChange={e => setPassword(e.target.value)}/> 
   {eye? <AiOutlineEye className='absolute top-[100px] left-[760px]' onClick={showPassword} /> : <AiOutlineEyeInvisible className='absolute top-[100px] left-[760px]' onClick={showPassword}/>}
   

   <button onClick={signIn} className='w-20 border mt-10 text-xl p-2 hover:bg-black hover:text-white'>Login</button>

   {/* <button onClick={getuser} className='w-20 border mt-10 text-xl p-2 hover:bg-black hover:text-white'>Get user details</button> */}
   <button onClick={refresh} className='w-20 border mt-10 text-xl p-2 hover:bg-black hover:text-white'>Refresh</button>
  
   

   <div>
   <h1 className='font-bold'>{userState}</h1>

   </div>
   </div>
  
   
   
   

 
    </>
  )
}