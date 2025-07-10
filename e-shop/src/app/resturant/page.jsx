"use client"
import { useState } from "react"
import Login from "../_components/Login"
import Signup from "../_components/Signup"


const Resturant = () => {
  
  const [login , setlogin] = useState (true)

  return (
    <>
    
      <h1 className="text-4xl font-bold  text-capitalize text-center pt-20 bg-gray-100 pb-10">Resturant Nexus </h1>

     {
  
      login ?  <Login />  :  <Signup />

     }

  
       <p className="mt-4 text-center text-sm bg-gray-100" onClick={ () => setlogin (!login)} > {login ? (
    <>
      Don't have an account? <span className="text-green-600 font-medium">Sign up</span>
    </>
  ) : (
    <>
      Already have an account? <span className="text-green-600 font-medium">Login</span>
    </>
  )}

        </p>
    </>
  )
}

export default Resturant