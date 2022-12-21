import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useHistory from 'use-history'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, icon } from '@fortawesome/fontawesome-svg-core'



const SaveData = ()=> {
  const navigate = useNavigate();
  const tempData = useLocation();
  console.log("temp data saved data ", tempData)
  const handleDelete =()=>{


  }  

  const handledata =()=>{

      navigate('/myresource')
  }  

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
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tempData.state.map((item) => {
                return (
              <tr>
                <td>{item.tempResourceRequirementId}</td>
                <td>{item.hiringType.hiringType}</td>
                <td>{item.resourceType.resourceType}</td>
                <td>{item.resourceType.resourceType}</td>
                <td>{item.city.cityName}</td>
                <td>{item.salesOrderNo}</td>
                <td>{item.noOfJRs}</td>
                <td>{item.createdOn}</td>
                <td><span><FontAwesomeIcon className="faicons ml-4 cursor-pointer" icon='fa-solid fa-pen-to-square' onClick={handledata} /></span></td>
                <td><span><FontAwesomeIcon icon="fa-solid fa-pen-to-square" onclick={handleDelete}/></span></td>
              </tr>
                );  
            })} 
            </tbody>
          </table>
        </div>
      </div> 
    </div>
    )
}
export default SaveData;