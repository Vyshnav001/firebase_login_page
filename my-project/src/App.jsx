import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Userpage from './components/Userpage'
import { auth } from './config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

export default function Login_page() {
  const [email,setEmail] = useState(null) 
  const [password,setPassword] = useState(null)
  const [error,setError] = useState ("")
  const [login,setLogin] = useState()
  const [userState,setUserState] =useState("")
  console.log(email)

const signIn = async()=>{
  try {
    await createUserWithEmailAndPassword(auth,email,password)
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

const valueChange = (e)=>{
  e.target.value = ''

}

  return (
    <>
    
    
    
    <div className='flex justify-center flex-col items-center '>
    Email:<br/>
   <input className='border-red-600 border-2 w-1/4' type='email' placeholder='Email' onFocus={valueChange} onChange={e => setEmail(e.target.value)}/>

   Password:<br/>
   <input className='border-red-600 border-2  w-1/4' type='password' placeholder='Password' onFocus={valueChange} onChange={e => setPassword(e.target.value)}/>


   <button onClick={signIn} className='w-20 border mt-10 text-xl p-2 hover:bg-black hover:text-white'>Login</button>

   <div>
   <h1 className='font-bold'>{userState}</h1>
   </div>
   </div>

   
   
   

 
    </>
  )
}