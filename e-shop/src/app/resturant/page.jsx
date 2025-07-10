"use client"
import { useState } from "react"
import Login from "../_components/Login"
import Signup from "../_components/Signup"


const Resturant = () => {
  
  const [login , setlogin] = useState (true)

  return (
    <>
      <h1 className="text-4xl font-bold  text-capitalize text-center pt-40 bg-gray-100 pb-10">Resturant Nexus </h1>

     {
  
      login ?  <Login />  :  <Signup />

     }
    
     <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 transition duration-300" onClick={ () => setlogin (!login)} >{login ? "Don't have an account? Sign up"   :  "Already have Account ? login"}</button>
    </>
  )
}

export default Resturant