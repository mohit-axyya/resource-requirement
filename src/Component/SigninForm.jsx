import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react"

const Signin =()=>{

    const navigate = useNavigate();
   
    const handleLogin = ()=> {

    navigate('/login')

   }
    
   const [showModal, setShowModal] = useState(false);

      return (
        <>
        <section class="flex flex-col md:flex-row h-screen items-center">
         
    <div className =" hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <div  className="w-full h-full bg-cover  bg-[url('/public/Images/i5.jpg')]"></div>
    </div>
  
    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
  
      <div className="w-full h-100">
  
      <h1 className="flex justify-end text-5xl mt-3 font-semibold text-black ">Birla<span className="text-red-500 font-semibold">Soft</span></h1>
      
         <h1 className="flex justify-end  text-black mt-1 mr-2 font-semibold">CK BIRLA GROUP</h1>
                        
        <h1 class="text-2xl md:text-2xl font-bold leading-tight mt-6 ">SIGN UP</h1>

        <hr class="my-2 border-gray-500 w-full"/>
  
        {/* <form class="mt-6" action="#" method="POST"> */}
        <div className="mt-3">
            <label className="text-gray-700 font-semibold">Full Name</label>
            <input type="text" placeholder="Enter Your Full Name" className=" w-full px-4 py-3 rounded bg-gray-100 mt-2 border-2 border-orange-100 focus:border-orange-300 focus:bg-white focus:outline-none"/>
          </div>

          <div className="mt-2">
            <label className="text-gray-700 font-semibold">Email Address</label>
            <input type="email"  placeholder="Enter Email Address" className=" w-full px-4 py-3 rounded bg-gray-100 mt-2 border-2 border-orange-100 focus:border-orange-300 focus:bg-white focus:outline-none" />
          </div>
  
          <div class="mt-2">
            <label className="text-gray-700 font-semibold">Password</label>
            <input type="password"  placeholder="Enter Password" minlength="6" className=" w-full px-4 py-3 rounded bg-gray-100 mt-2 border-2 border-orange-100 focus:border-orange-300
                  focus:bg-white focus:outline-none" required/>
          </div>

          <div class="mt-2">
            <label className="text-gray-700 font-semibold">Confirm Password<span className="text-red-500  ml-1">*</span></label>
            <input type="password"  placeholder="Re-Enter Password" minlength="6" className=" w-full px-4 py-3 rounded bg-gray-100 mt-2 border-2 border-orange-100 focus:border-orange-300
                  focus:bg-white focus:outline-none" required/>
          </div>
  
          {/* <div class="text-right mt-2">
            <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div> */}
  
          <button  className="  bg-orange-500 hover:bg-green-800 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-12 py-2 mt-6 ml-6"onClick={()=>{setShowModal(true)}}>Sign Up</button>
        {/* </form> */}
  
        

        <button  className="  bg-orange-500 hover:bg-green-800 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-12 py-2 mt-6 ml-4" onClick={handleLogin}>Log In</button>
  
  <hr className="my-6 border-gray-600 w-full"/>
        
      </div>

    </div>
  
  </section>

{showModal ? (
    <>
<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
    <div className="w-[450px]">
    <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => setShowModal(false)}
              >
                <span className="text-black mr-2  bg-orange-400  text-2xl ">
                  x
                </span>
              </button>
    <div className=" w-full shadow rounded   bg-orange-400 px-3 py-3 rounded font-bold text-xl "> 
        Sign In Sucessfull Please Log In Again
    </div>
    <button  className="  bg-orange-500 hover:bg-green-800 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-12 py-2 mt-6 ml-4" onClick={handleLogin}>Log In</button>
</div>
</div>
</>
) : null}
       </>
      )
}
export default Signin;
