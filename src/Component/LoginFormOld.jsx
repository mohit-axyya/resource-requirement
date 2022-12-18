import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import ResourceForm from "./ResourceForm"

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const isError = false;



    const handleEmail = (e) =>{
        let dang = 0;
        if(e.target.value === "") 
            setErrorMsg(""); 
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePassword = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const getlogindata=async(e)=>{
        e.preventDefault();
       const logindata=await axios.post(`http://localhost:8080/api/login/${email}&${password}`);
       
       if(logindata.data.msg === 'Invalid Login Credential'){
            navigate('/')
            console.log("getting error msg")
            setErrorMsg(logindata.data.msg);
            console.log("something " ,errorMsg);
       } else {
            console.log(logindata)
            navigate('/myresource',{ state : logindata.data});
       }
    }
    return (
        <>
            <div >
                <div>
                    <div className="bg-pink-800">
                        <div className="h-16 px-8 flex items-center">
                            <p className="text-white font-bold">Resource Requirement <span className='text-black'>Login</span></p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-2xl max-h-80 h-80 shadow rounded mt-40">
                        <div className="px-8 py-8 bg-slate-200">
                            <div className="flex justify-end text-2xl tracking-wider">
                                    <h1>Birla<span className="text-red-500">Soft</span></h1>
                            </div>
                            <hr className="ring-blue-200"></hr>
                            <div className="grid justify-items-center">
                                <div>
                                    <h1 className="font-bold text-red-600 bg-red-100 tracking-wider">{errorMsg}</h1>  
                                </div>
                                <div className="grid justify-items-center px-1 py-2">
                                    <div className="w-full">
                                        <label className="block self-auto text-gray-600 px-2 font-bold" >Email</label>
                                        <input type="email" onChange={handleEmail} className=" rounded h-7 border mt-2 px-2 py-2"/>
                            
                                        {/* <div className="h-14 w-full"> */}
                                        <label className="block text-gray-600 px-2 my-2 font-bold" >password </label>
                                        <input type="password" onChange={handlePassword} className="rounded h-7 border mt-2 px-2 py-2"/>

                                        <div className="items-center justify-center h-11 w-full my-4">
                                            <div>
                                                <button className="rounded bg-green-600 text-white rounded font-semibold hover:bg-green-500 py-2 px-2 mx-2 w-20" onClick={getlogindata}> Login </button>
                                                <button className="rounded bg-red-600 text-white rounded font-semibold hover:bg-red-500 py-2 px-2 mx-2 w-20">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div> 
                </div>
            </div>
        </>
    );
}
export default LoginForm;