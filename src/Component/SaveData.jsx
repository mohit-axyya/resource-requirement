import React from "react";

import { Link } from "react-router-dom";


const SaveData = ()=> {

  // const [resource, setResource] = useState([])

  // useEffect(() =>{

  //   getAllResource();
  // }, [])

  // const getAllResource =()=> {
  //         Resourceservice.getAllResource().then((response) => {
  //               setResource(response.data)
  //               console.log(response.data);
  //             }).catch(error =>{
  //               console.log(error);
  //           })
  //             }
          
  

    return(
        <div className="rounded shadow m-6" >
          <h1 className="text-3xl text-center mt-6 font-mono font-bold h-10">Resource Requisits</h1>
        <div className="font-bold h-14 bg-gradient-to-r from-orange-400 to-orange-400" > 
            {/* <div className="text-3xl text-center mt-6 font-mono ">Saved Data
            </div>  */}
        </div> 
        <div>
        <div className="">
          <table className="table table-bordered border-collapse table-striped">
            <thead>
              <tr>
                <th>RR ID</th>
                <th>Hiring Type</th>
                <th>Resource Type</th>
                <th>Technology specialization</th>
                <th>Work City</th>
                <th>Sales Order Number</th>
                <th>JR Number</th>
                <th>Saved Date</th>
                <th>Edit</th> 
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><Link to = "/myresource" className = "text-orange-600 mb-2" > Edit details </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> 
    </div>
    )
}
export default SaveData;