import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Userpage from './components/Userpage'
import { auth } from './config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

export default function Login_page() {
  const [email,setEmail] = useState(null) 
  const [password,setPassword] = useState(null)
  const [confirmPassword,setConfirmPassword] = useState(null)
  const [login,setLogin] = useState(false)
  console.log(email)

const signIn = async()=>{
  try {
    await createUserWithEmailAndPassword(auth,email,password)
  }
  catch(err) {
    console.log(err)
  }



}

  return (
    <>
    
    
    
    <div className='flex justify-center flex-col items-center'>
    Email:<br/>
   <input className='border-red-600 border-2 w-1/4' type='email' placeholder='Email' onChange={e => setEmail(e.target.value)}/>

   Password:<br/>
   <input className='border-red-600 border-2  w-1/4' type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
   

   <button onClick={signIn} className='w-20 border mt-10 text-xl p-2 hover:bg-black hover:text-white'>Login</button>
   </div>
   
   

 
    </>
  )
}