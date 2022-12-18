import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Navigate, useNavigate } from "react-router-dom"
import ResourceForm from "./ResourceForm"


const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("");
    const [employee, setEmployeeData] = useState({});
    const navigate = useNavigate();
    const isError = false;
    const [showModal, setShowModal] = useState(false);



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

    
    
   const handleContinue = ()=> {
        console.log(employee, "employee and employeedata", employee.data)
        navigate('/myresource', { state : employee.data });
   }

   const handleContinueToSavedata = ()=> {
        const empid = employee.data.employeeId;
        const tempData = axios.get(`http://localhost:8080/api/getsaveddatabyemployeeid/${empid}`);
        console.log("temp data",tempData);
   }
   

    const getlogindata= async (e)=>{
        e.preventDefault();
       const logindata= await axios.post(`http://localhost:8080/api/login/${email}&${password}`);
       setEmployeeData(logindata);
       if(logindata.data.msg === 'Invalid Login Credential'){
            navigate('/')
            console.log("getting error msg")
            setErrorMsg(logindata.data.msg);
            console.log("something " ,errorMsg);
       } else {
            console.log(logindata)
            setShowModal(true)
            // navigate('/myresource',{ state : logindata.data})
                // navigate('/myresource')
            
               
       }
    }
    return (
        <>
        <div className= " bg-fixed bg-no-repeat bg-cover h-[940px]   bg-[url('/public/Images/i4.png')]">
            <div>
                <div>
                    <div className=" bg-gray-100 opacity-40 drop-shadow-2xl"> 
            
                        <div className="h-16 px-8 flex items-center">
                
                         <p className="text-black font-bold text-2xl ">Resource Requirement</p>
                         <Link to = "/home" className = " pl-4 pt-3 text-orange-600 mb-2 font-semibold" > Home </Link>
                         {/* <Link to = "/aboutus" className = " pl-4 pt-3 text-orange-600 mb-2 font-semibold" > Dashboard </Link> */}
                            <div className="flex justify-end pl-80 ml-80 text-4xl">
                            <h1 className=" flex justify-end font-semibold text-black ">Birla<span className="text-red-500 font-semibold">Soft</span></h1>
                    
                            </div>
                               <h1 className="text-black pl-2 pt-3 font-semibold">CK BIRLA GROUP</h1>
                        </div>
                     </div>
                                {/* <h1 className="font-semibold">Birla<span className="text-red-500 font-semibold">Soft</span></h1> */}
                     <div className=" drop-shadow-2xl brightness-90 mx-auto max-w-2xl max-h-90 h-80 mt-28 w-5/12 shadow rounded bg-orange-100 opacity-90">
                    <div className="px-6 py-6">
                    <div className="flex justify-center  text-2xl ">
                            <h1 className="block self-auto text-gray-600 px-1 my-1 font-bold">Login</h1>
                    </div>
                    <hr></hr>
                    <div className="grid justify-items-center">
                        <div>
                            <h1 className="font-bold text-red-600 bg-red-100 tracking-wider">{errorMsg}</h1>  
                        </div>
                        <div className="grid justify-items-center px-1 py-3">
                            <div className="w-full">
                                <label className="block self-auto text-gray-600 px-1 my-1 font-bold" >Email</label>
                                <input type="email" onChange={handleEmail} className="  rounded h-8 border mt-2 px-7 py-2"/>
                    
                                {/* <div className="h-14 w-full"> */}
                                <label className="block text-gray-600 px-1 my-2 font-bold" >Password </label>
                                <input type="password" onChange={handlePassword} className="rounded h-8 border mt-2 px-7 py-2"/>

                                <div className="items-center justify-center h-11 w-full my-4">
                                    <div>
                                        <button className=" shadow-green-700 opacity-100 rounded bg-green-800 text-white rounded font-semibold hover:bg-green-500 py-2 px-2 mx-4 w-20"   type="button" onClick={getlogindata}> Login </button>
                                        <button className=" shadow-red-700 opacity-100 rounded bg-red-800 text-white rounded font-semibold hover:bg-red-500 py-2 px-2 mx- w-20">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div> 
        </div>
            </div>
            </div>

            {showModal ? (
        <>
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px]">
        <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
        <div className=" w-max  h-40 shadow rounded  grid justify-items-center block bg-white block p-4 rounded font-bold text-xl "> Do you want to continue with existing one or create new form
            <div className="space-x-6">
                <button onClick={handleContinueToSavedata} className="mt-4 text-white bg-green-600 h-10 w-40 rounded font-semibold">Continue</button>
                <button onClick={handleContinue} className="mt-2 text-white bg-red-700 h-10 w-40 rounded font-semibold">New Form</button>
            </div>
        </div>
    </div>
</div>
</>
 ) : null}
        </>
    );
}
export default LoginForm;