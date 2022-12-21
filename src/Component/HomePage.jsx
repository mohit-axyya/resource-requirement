import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

const HomePage =()=>{

    const navigate = useNavigate();
    const handleLogin = ()=> {
 
     navigate('/login')
 
    }

    return(
        
        <div className= " bg-fixed bg-no-repeat bg-cover h-[640px]   bg-[url('/public/Images/i6.png')] " >
       <div>
       
        <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-300 opacity-75 ">
        
            <div className="flex justify-end ">
            <div className="mt-2 text-4xl">
                            <h1 className=" flex justify-end font-semibold text-black ">Birla<span className="text-red-500 font-semibold">Soft</span></h1>
                    
                            </div>
                               <h1 className="text-black pl-2 pt-3 font-semibold mt-2">CK BIRLA GROUP</h1>
                <button onClick={handleLogin} className="  mt-2 shadow-green-700 opacity-100 rounded bg-red-500 text-white rounded font-semibold hover:bg-red-800 py-2 px-2 mx-4 w-20" > Login </button>
                
            </div>
         </div>
       </div>
       </div>
        
    )
}
export default HomePage;